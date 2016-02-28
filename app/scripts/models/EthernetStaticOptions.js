/*global OpkBakery, Backbone*/

OpkBakery.Models = OpkBakery.Models || {};

(function () {
  'use strict';

  OpkBakery.Models.EthernetStaticOptions = Backbone.Model.extend({

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
      'ipAddress': 'Text',
      'netmask': 'Text',
      'gateway': 'Text',
      'dns': 'Text'
    }

  });

})();
