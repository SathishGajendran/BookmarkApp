
define([
    'backbone',
    'underscore',
    'jQuery',
    'javascripts/views/bookmark'
],function(Backbone,_,$,BookmarkView){
    var Router=Backbone.Router.extend({
        routes:{
            '':'Home',
            'add':'addBookmark',
            'delete/:id':'deleteBookmark'
        },
        view:null,
        Home:function(){
            this.view=new BookmarkView();
        },
        addBookmark:function(){
            if(this.view){
                this.view.addBookmark();
            }
            else{
                this.view=new BookmarkView();
                this.view.addBookmark();
            }
        },
        deleteBookmark:function(){
            if(this.view){
                this.view.deleteBookmark();
            }
            else{
                this.view=new BookmarkView();
                this.view.deleteBookmark();
            }
        }

    });

    return Router;
});