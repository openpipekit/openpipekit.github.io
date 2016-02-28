/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
  'use strict';

  OpkBakery.Views.ConfigureEthernetStatic = Backbone.View.extend({

    template: JST['app/scripts/templates/ConfigureEthernetStatic.ejs'],

    tagName: 'div',

    id: '',

    className: 'configurator-container',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      var view = this
      var form = new Backbone.Form({
        model: this.model,
        submitButton: 'submit'
      }).render();
      form.$el.append('<button style="float: right" class="btn btn-default">next</button>')
      this.$el.html(form.el);
      $(this.$el.find('button')[0]).on('click', function(e) {
        e.preventDefault()
        console.log('submitted')
        form.commit()
        view.trigger('configured')
      })
    }

  });

})();
