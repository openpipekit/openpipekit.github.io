/*global OpkBakery, Backbone, JST*/

OpkBakery.Views = OpkBakery.Views || {};

(function () {
    'use strict';

    OpkBakery.Views.Recipe = Backbone.View.extend({

        template: JST['app/scripts/templates/Recipe.ejs'],

        tagName: 'div',

        id: '',

        className: 'configurator-container center-contents',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var vars = this.model.toJSON()
            vars.script = this.generateScript()
            this.$el.html(this.template(vars));
            this.$el.append('<p>')
            this.$el.append(this.generateDownload(vars.script))
            this.$el.append('</p>')

        },

        generateScript: function() {
            var sensorCli = this.model.get('sensorCli')
            var sensorPackage = this.model.get('sensorPackage')
            var databaseCli = this.model.get('databaseCli')
            var databasePackage = this.model.get('databasePackage')
            var script = '#!/bin/bash \n'
            if (this.model.get('networkAdapter') == 'wifi') {
              script += 'pirateship wifi ' + this.model.get('wifiName') + ' ' + this.model.get('wifiPassword') + ' \n'
            }
            else if (this.model.get('networkAdapter') == 'ethernet') {
              // Dogi suggest none as opposed to defaults
              //script += 'pirateship defaults \n'
            }
            else if (this.model.get('networkAdapter') == 'ethernetStatic') {
              script += 'pirateship ethernet ' + this.model.get('ipAddress')
                + ' ' +  this.model.get('netmask') + ' ' + this.model.get('gateway')
                + ' ' + this.model.get('dns') + '\n'
            }
            script += 'while true; do ping -c1 www.google.com > /dev/null && break; done \n'
            script += sensorPackage.generateInstall() + ' \n'
            script += databasePackage.generateInstall() + ' \n'
            script += 'touch autorun.sh \n'
            script += 'echo \'#!/bin/bash\' >> autorun.sh \n'
            script += 'echo \'if [ -f ./' + databasePackage.get('field_package_name') + '/onboot ]; then ./' + databasePackage.get('field_package_name') + '/onboot;fi\' >> autorun.sh \n'
            script += 'echo \'if [ -f ./' + sensorPackage.get('field_package_name') + '/onboot ]; then ./' + sensorPackage.get('field_package_name') + '/onboot;fi\' >> autorun.sh \n'
            script += 'echo \'watch -n' + this.model.get('interval') + ' "'
            script += sensorCli.generateCommand()
            script += ' | tee -a log.txt | '
            script += databaseCli.generateCommand()
            script += ' | tee -a log.txt"\' >> autorun.sh'
            return script
        },

        generateDownload: function(code) {
          var filename = 'autorunonce.sh'
          var b = document.createElement('a')
          b.className = 'btn btn-success'
          b.download = filename
          b.textContent = 'download'
          b.href = 'data:application/json;base64,'+ window.btoa(unescape(encodeURIComponent(code)))
          return b
        }

    });

})();
