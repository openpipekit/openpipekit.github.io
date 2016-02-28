/*global OpkBakery, Backbone*/

OpkBakery.Models = OpkBakery.Models || {};

(function () {
    'use strict';

    OpkBakery.Models.Package = Backbone.Model.extend({

        idAttribute: 'nid',

        url: function() {
            return OpkBakery.host + '/api/package/' + this.id
        },

        defaults: {
        },

        initialize: function() {
            this.commands = []
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            var pkg = this
            pkg.commands = []
            var commands = JSON.parse(response.field_package_json)
            commands.forEach(function(commandObject) {
                var cli = new OpkBakery.Models.Cli()
                cli.set('package', response.field_package_name)
                cli.set('command', commandObject.command)
                cli.schema = commandObject.options
                pkg.commands.push(cli)
            })

            return response;
        },

        generateInstall: function() {
            var script = 'wget ' + ' -O ' + this.get('field_package_name') + '.tar.gz ' + this.get('field_package_download_url') +  '\n'
            script += 'mkdir ' + this.get('field_package_name') + '\n'
            script += 'tar xzf ' + this.get('field_package_name') + '.tar.gz --strip-components=1 -C ' + this.get('field_package_name') + '\n'
            script += 'cd ' + this.get('field_package_name') + ' \n'
            script += 'if [ -f ./install ]; then '
            script += './install;'
            script += 'fi' + '\n'
            script += 'cd .. \n'
            return script
        }

    });

})();
