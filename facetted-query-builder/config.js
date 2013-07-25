var config, CDN = "http://cdn.intermine.org";

module.exports = config = {
  "author": "Alex <alex@intermine.org>",
  "title": "Facetted Query Builder",
  "description": "Build a Query, using facets!",
  "version": "0.1.0",
  "appRoot": "src/queryBuilder",
  "dependencies": {
    "css": {
      "imtables-css": {
        "path": CDN + "/js/intermine/im-tables/1.3.0/imtables.css"
      }
    },
    "js": {
      "JSON": {
        "path": CDN + "/js/json3/3.2.2/json3.min.js"
      },
      "jQuery": {
        "path": CDN + "/js/jquery/1.9.1/jquery-1.9.1.min.js"
      },
      "_": {
        "path": CDN + "/js/underscore.js/1.3.3/underscore-min.js"
      },
      "Backbone": {
        "path": CDN + "/js/backbone.js/1.0.0/backbone.js",
        "depends": ["jQuery", "_"]
      },
      "imjs": {
        "path": CDN + "/js/intermine/imjs/2.6.2/im.js",
        "depends": ["Backbone"]
      },
      "imtables": {
        "path": CDN + "/js/intermine/im-tables/1.3.0/imtables-mini-bundle.js",
        "depends": ["imjs"]
      }
    }
  },
  "config": {}
};
