/*global OpkBakery, Backbone*/

OpkBakery.Models = OpkBakery.Models || {};

(function () {
  'use strict';

  OpkBakery.Models.WifiOptions = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    },

    schema: {
      'wifiName': 'Text',
      'wifiPassword': 'Text'
    }
  });

})();
