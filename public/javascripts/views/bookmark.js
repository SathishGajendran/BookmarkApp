define([
    'backbone',
    'underscore',
    'jQuery',
    'text!javascripts/templates/bookmark.html',
    'javascripts/models/bookmark',
    'javascripts/collections/bookmark'
],function(Backbone,_,$,BookmarkTemplate,BookmarkModel,BookmarkCollection){

    var BookmarkView=Backbone.View.extend({
        el:$('#content'),
        initialize:function(options){
            this.render();
        },
        render:function(){
            var template= _.template(BookmarkTemplate);
            this.$el.html(template);
        },
        events:{
            "click #btnOpen":"openDir"
        },
        openDir:function(){
            alert('openb');
        },
        addBookmark:function(){
            alert('add Bookmark');
        },
        deleteBookmark:function(){
            alert('delete Bookmark');
        }

    });

    return BookmarkView;

});