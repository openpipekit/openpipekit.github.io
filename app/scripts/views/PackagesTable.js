/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
    'use strict';

    OpkBakery.Views.PackagesTable = Backbone.View.extend({

        itemView: 'PackageRow',

        template: JST['app/scripts/templates/SensorsTable.ejs'],

        tagName: 'table',

        id: '',

        className: 'table configurator-container',

        events: {},

        initialize: function () {
            this.$el.spin(OpkBakery.spinOpts)
            this.listenTo(this.collection, 'change', this.render);
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function () {
            this.$el.fadeOut()
            var view = this
            setTimeout(function() {
              view.$el.spin(false)
              view.collection.models.forEach(function(model) {
                  var itemView = new OpkBakery.Views[this.itemView]({ model: model})
                  this.$el.append(itemView.el)
                  itemView.render()
              }, view)
              view.$el.fadeIn()
            }, 500)
        }

    });

})();
