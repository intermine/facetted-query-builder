class FacettedQueryBuilder extends Backbone.View
  
  $ = jQuery

  initialize: (@config, @templates) ->
    @facets = []
    @facetMediator = _.extend({}, Backbone.Events)
    @facetMediator.on 'facet:toggled', (facet) =>
      nowOpen = facet.state.get('open')
      return unless nowOpen
      f.close() for f in @facets when f isnt facet

  onError: (err) ->
    @trigger 'error', err
    if err?.responseText
      console.error(JSON.parse(err.responseText).error)
    else
      console.error err

  render: (target) ->
    @unLoad()
    @setElement(target)
    @$el.html(@templates['templates/main.eco'] {})
    $rt = @$('.resultstable')
    @widget = $rt.imWidget(@getArgs())
    @startListeningTo @widget.states
    @trigger 'rendered', @
    @

  unLoad: ->
    @removeFacets()
    @widget?.remove()

  getArgs: -> _.extend {error: @onError, type: "table"}, @config

  startListeningTo: (states) -> @listenTo states, "add remove", @updateFacets.bind(@)

  facetPaths: (type) -> @config.facetPaths or @facetPathsFor(type)

  facetPathsFor: (type) ->
    {flatten, map} = _
    {facetPathsFor} = @config
    @widget.service.fetchModel().then (model) ->
      types = [type].concat model.getAncestorsOf type
      flatten map types, (t) -> (facetPathsFor || {})[t] || []

  removeFacets: ->
    while facet = @facets.pop()
      facet.remove()

  addFacets: (query) ->
    $facets = @$ '.facets'
    $.when(@facetPaths(query.root)).then (paths) =>
      for p in paths then do (p) =>
        facet = new intermine.results.ColumnSummary(query, p)
        facet.state.on 'change:open', => @facetMediator.trigger 'facet:toggled', facet
        @facets.push(facet)
        $facets.append facet.el
        facet.render()

  updateFacets: ->
    query = @widget.states.currentQuery
    @removeFacets()
    @addFacets query
    topFacet = @facets[0]
    topFacet?.on 'ready', => topFacet.toggle()

exports.App = FacettedQueryBuilder
