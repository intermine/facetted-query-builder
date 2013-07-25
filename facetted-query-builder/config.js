var config;

module.exports = config = {
  "author": "Alex <alex@intermine.org>",
  "title": "Facetted Query Builder",
  "description": "Build a Query, using facets!",
  "version": "0.1.0",
  "appRoot": "src/queryBuilder",
  "dependencies": {
    "css": {
      "imtables-css": {
        "path": "http://cdn.intermine.org/js/intermine/im-tables/1.3.0/imtables.css"
      }
    },
    "js": {
      "JSON": {
        "path": "http://cdn.intermine.org/js/json3/3.2.2/json3.min.js"
      },
      "jQuery": {
        "path": "http://cdn.intermine.org/js/jquery/1.9.1/jquery-1.9.1.min.js"
      },
      "_": {
        "path": "http://cdn.intermine.org/js/underscore.js/1.3.3/underscore-min.js"
      },
      "Backbone": {
        "path": "http://cdn.intermine.org/js/backbone.js/1.0.0/backbone.js",
        "depends": ["jQuery", "_"]
      },
      "imjs": {
        "path": "http://cdn.intermine.org/js/intermine/imjs/2.6.2/im.js",
        "depends": ["Backbone"]
      },
      "imtables": {
        "path": "http://cdn.intermine.org/js/intermine/im-tables/1.3.0/imtables-mini-bundle.js",
        "depends": ["imjs"]
      }
    }
  },
  "config": {}
};
