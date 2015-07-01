/*global OpenpipekitOrg, $*/


window.OpenpipekitOrg = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');

        setTimeout(function() {
          $('.carousel').carousel('next')
        }, 1000)
        setTimeout(function() {
          $('.curtain').fadeIn()
        },1000)
    }
};

$(document).ready(function () {
    'use strict';
    OpenpipekitOrg.init();
});
