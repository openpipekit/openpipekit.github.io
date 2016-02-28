/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
  'use strict';

  OpkBakery.Views.ChooseNetworkAdapter = Backbone.View.extend({

    template: JST['app/scripts/templates/ChooseNetworkAdapter.ejs'],

    tagName: 'div',

    id: '',

    className: 'configurator-container',

    events: {},

    initialize: function () {
    },

    render: function () {
      this.$el.html(this.template());
    }

  });

})();
