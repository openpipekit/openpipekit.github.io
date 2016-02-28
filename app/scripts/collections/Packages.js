/*global OpkBakery, Backbone*/

OpkBakery.Collections = OpkBakery.Collections || {};

(function () {
    'use strict';

    OpkBakery.Collections.Packages = Backbone.Collection.extend({

        initialize: function() {
          this.params = {
            'packageType': ''
          }
        },

        model: OpkBakery.Models.Package,

        url: function() {
            return OpkBakery.host + '/api/package/' + this.params.packageType
        },

    });

})();
