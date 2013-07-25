var config;

module.export = config = {
  "author": "Alex <alex@intermine.org>",
  "title": "Facetted Query Builder",
  "description": "Build a Query, using facets!",
  "version": "0.1.0",
  "appRoot": "queryBuilder",
  "dependencies": {
    "JSON": {
      "path": "http://cdn.intermine.org/js/json3/3.2.2/json3.min.js"
    },
    "jQuery": {
      "path": "http://cdn.intermine.org/js/jquery/1.9.1/jquery-1.9.1.min.js",
    },
    "_": {
      "path": "http://cdn.intermine.org/js/underscore/1.3.3/underscore-min.js"
    },
    "Backbone": {
      "path": "http://cdn.intermine.org/js/backbone.js/0.9.2/backbone-min.js",
      "depends": ["jQuery", "_"]
    }
  },
  "config": {}
};
