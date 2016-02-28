/*global OpkBakery, Backbone*/

OpkBakery.Models = OpkBakery.Models || {};

(function () {
    'use strict';

    OpkBakery.Models.Cli = Backbone.Model.extend({

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

        generateCommand: function() {
            var cmd = './' + this.get('package') + '/' + this.get('command') + ' '
            _.each(this.toJSON(), function(value, key) {
                if(key !== 'package' && key !== 'command') {
                  if (typeof value == 'boolean') {
                    if  (value == true) {
                      cmd += ' --' + key
                    }
                  }
                  else {
                    cmd += ' --' + key + ' ' + value
                  }
                }
            })
            return cmd
        }

    });

})();
