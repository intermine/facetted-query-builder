class FacettedQueryBuilder

    (@config, @templates) ->

    on-error: ->

    render: (target) ->
        container = jQuery target
            ..empty!
            ..html @templates.main!

        args = @config with type: \table, error: @~on-error
        widget = jQuery(container.find '.resultstable').im-widget args

        @start-listening-to widget.states

    start-listening-to: (states) -> states.on "add remove", @~update-facets

    facet-paths: (type) -> @config.facet-paths or @facet-paths-for type

    facet-paths-for: (type) -> # TODO

    remove-facets: -> # TODO

    update-facets: (states) ->
        query = states.current-query
        @remove-facets!
        for path in facet-paths query.root
            @add-facet query, path

exports <<< App: FacettedQueryBuilder
