
define([
    'backbone',
    'underscore',
    'jQuery'
],function(Backbone,_,$){
    var bookmark=Backbone.Model.extend({
        urlRoot:'bookmarks',
        idAttribute:'_id',
        defaults:{
            title:'',
            url:'',
            created_date:''
        }
    });
    return bookmark;

});