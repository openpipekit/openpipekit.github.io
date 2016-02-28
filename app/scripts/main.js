/*global OpkBakery, $*/


window.OpkBakery = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        $.material.init()
        if (window.location.host === 'localhost:9000') {
            //OpkBakery.host = 'http://local.opkp.org'
            OpkBakery.host = 'http://live-open-pipe-kit-packages.pantheon.io/'
        }
        else {
            OpkBakery.host = 'http://live-open-pipe-kit-packages.pantheon.io/'
        }
        this.darkify()
        var recipeBakery = new OpkBakery.Routers.RecipeBakery()
        Backbone.history.start()
    },
    setIframe: function(url) {
      $('.main').html('<iframe src="' + url + '"></iframe>')
      $('iframe').css('height', $(window).height()-50)
    },
    spinOpts: {
          lines: 13 // The number of lines to draw
        , length: 28 // The length of each line
        , width: 14 // The line thickness
        , radius: 42 // The radius of the inner circle
        , scale: 1 // Scales overall size of the spinner
        , corners: 1 // Corner roundness (0..1)
        , color: '#000' // #rgb or #rrggbb or array of colors
        , opacity: 0.25 // Opacity of the lines
        , rotate: 0 // The rotation offset
        , direction: 1 // 1: clockwise, -1: counterclockwise
        , speed: 1 // Rounds per second
        , trail: 60 // Afterglow percentage
        , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        , zIndex: 2e9 // The z-index (defaults to 2000000000)
        , className: 'spinner' // The CSS class to assign to the spinner
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , shadow: false // Whether to render a shadow
        , hwaccel: false // Whether to use hardware acceleration
        , position: 'absolute' // Element positioning
      },
      darkify: function() {
        var dark = false
        window.addEventListener("devicelight", function(e){
          if (e.value < 40 && dark === false) {
            dark = true
            $('body').addClass('dark')
            $('head').append('<link id="dark-theme" rel="stylesheet" href="styles/bootstrap-cyborg.min.css">')
          }
          else if (e.value > 40 && dark === true) {
            dark = false
            $('body').removeClass('dark')
            $('#dark-theme').remove()
          }
          console.log(e.value)
        })
      }

};

$(document).ready(function () {
    'use strict';
    OpkBakery.init();
});
