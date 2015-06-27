
define([
    'backbone',
    'underscore',
    'jQuery',
    'javascripts/models/bookmark'
],function(Backbone,_,$,BookmarkModel){

    var bookmark=Backbone.Collection.extend({
        model:BookmarkModel,
        urlRoot:'bookmarks',
        url:'bookmarks'
    });

    return bookmark;
});