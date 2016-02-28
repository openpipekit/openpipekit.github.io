/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
  'use strict';

  OpkBakery.Views.PackageRowSimple = OpkBakery.Views.PackageRow.extend({

    template: JST['app/scripts/templates/PackageRowSimple.ejs'],

  });

})();
