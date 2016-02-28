/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
  'use strict';

  OpkBakery.Views.PackageTableSimple = OpkBakery.Views.PackagesTable.extend({

    itemView: 'PackageRowSimple',

    template: JST['app/scripts/templates/PackageTableSimple.ejs'],

  });

})();
