/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
  'use strict';

  OpkBakery.Views.SensorsSimple = Backbone.View.extend({

    itemView: 'SensorSimple',

    template: JST['app/scripts/templates/SensorsSimple.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},


    initialize: function () {
        this.$el.spin(OpkBakery.spinOpts)
        this.listenTo(this.collection, 'change', this.render);
        this.listenTo(this.collection, 'sync', this.render);
    },

    render: function () {
        this.$el.spin(false)
        this.collection.models.forEach(function(model) {
            var itemView = new OpkBakery.Views[this.itemView]({ model: model})
            this.$el.append(itemView.el)
            itemView.render()
        }, this)
    }

  });

})();
