facetted-query-builder
======================

A facetted query builder.

Configuration
------------------

This app supports the following configuration parameters - most of these are
as per the configuration options for [im-tables][].
 * *url*: The url of the mine to query against (eg. `http://www.flymine.org/query`)
 * *token*: The authentication token for the current user (optional)
 * *query*: The initial state of the query to be run (in PathQuery format - see
   [imjs][]).
 * *options*: InterMine configuration options (see [im-tables][] - optional).
 * *onReady*: A function called when the app is initialized (optional).
 * *channel*: A function to be used to receive messages from the widget (see *Messages*, below).
 * *onError*: A function used to receive error messages from the widget.
 * *facetPathsFor*: An object mapping from class name to a list of paths to be used as
   facets in this instance. See *Facets*, below.
 * *facetPaths*: A list of paths to be used as facets; this property can be used
   to override the otherwise default set of facets.

Messages
------------------------------

The app send messages through the channel provided in a a number of
circumstances. All messages take the following form:

```
{
    name: string,
    data: Object,
    service: {
        url: string,
        token: string
    }
}
```

The precise content and structure of the `data` property is dependent on the
nature of the message. 

The app may send messages with the following names:
 * `change:query`: Each time the query is changed (including when the query is
   first built) this message will be sent. The data property is the query
   itself.
 * `clicked:imo`: When a cell representing an InterMine-Object (imo) has been
   clicked, then this message is sent. The data property includes the `type` of
   the object, and its internal `id`.
 * `selected:imo`: During list selection, as each object is selected or
   de-selected, a message is sent on each selection event with the following
   data: `{type: string, id: int, isSelected: bool}`
 * `create:list`: When a list has been created, a message is sent with the
   following data: `{list: string}`.
 * `upate:list`: When a list has been updated (by having elements added to it,
   for example), then a message will be sent with the following data:
   `{list: string, delta: int}`, where the delta reflects the change in list
   size, such that `oldSize + delta == newSize`.

Facets
------------------------------

A facet is a path descending from the root of a query which can be used to
categorise or 'facet' the data in the table. This can either be specified in a
general way, such that any query can use the same set of facet configuration, or
in a specific, per instance way, determining the facets just for this occasion.

### General configuration

A list of headless paths should be provided for each class they are suitable of
describing. If the root class of a query includes in its ancestry more than one
configured set of facets, they will be combined. Eg. if the root class is
`Gene`, and this is the set of facets:

```
"facetPathsFor": {
    "BioEntity": ["organism.shortName"],
    "SequenceFeature": ["chromosome.primaryIdentifier"],
    "Gene": ["pathways.name", "goAnnotation.ontologyTerm.parents.name"],
    "Protein": ["gene.symbol"]
}
```

The the set of facets used for this query will be:
 * `Gene.organism.shortName`
 * `Gene.chromosome.primaryIdentifier`
 * `Gene.pathways.name`
 * `Gene.goAnnotation.ontologyTerm.parents.name`

### Specific Configuration

A list of paths (with or without heads) may be provided to be used directly. If
provided this configuration takes priority, an the sets of facet paths listed in
the general configuration will not be inspected. Eg.:

```
"facetPaths": ["pathways.name", "organism.name"]
```

<!-- Links -->
  [im-tables]: https://github.com/intermine/im-tables
  [imjs]: https://intermine.github.io/imjs
