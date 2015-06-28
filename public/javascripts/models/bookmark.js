
define([
    'backbone',
    'underscore',
    'jQuery'
],function(Backbone,_,$){
    var bookmark=Backbone.Model.extend({
        urlRoot:'bookmarks',
        idAttribute:'id',
        defaults:{
            title:'',
            url:'',
            localPath:'',
            created_date:''
        }
    });
    return bookmark;

});