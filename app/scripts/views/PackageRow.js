/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
    'use strict';

    OpkBakery.Views.PackageRow = Backbone.View.extend({

        template: JST['app/scripts/templates/PackageRow.ejs'],

        tagName: 'tr',

        id: '',

        className: '',

        events: {
            'click button': 'select'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.attr('data-id', this.model.id)
            this.$el.html(this.template(this.model.toJSON()));
        },

        select: function() {
            this.$el.addClass('selected')
            this.$el.parent().trigger('select')
        }

    });

})();
