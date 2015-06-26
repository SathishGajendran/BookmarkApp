
require.config({
    paths:{
        jQuery:'lib/components/jquery/dist/jquery.min',
        underscore:'lib/components/underscore/underscore-min',
        backbone:'lib/components/backbone/backbone-min',
        bootstrap:'lib/components/bootstrap/dist/js/bootstrap.min'
    },
    shim:{
        jQuery:{
            exports:'jQuery'
        },
        underscore:{
            exports:'underscore'
        },
        backbone:{
            deps:['jQuery','underscore'],
            exports:'backbone'
        },
        bootstrap:{
            deps:['jQuery'],
            exports:'bootstrap'
        }
    }
});

define([
    'jQuery',
    'backbone'
],function(jQuery,bacbone,bootstrap){
    $('#content').html('backbone');

});