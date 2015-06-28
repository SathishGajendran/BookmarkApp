define([
    'backbone',
    'underscore',
    'jQuery',
    'javascripts/templates/bookmark',
    'javascripts/models/bookmark',
    'javascripts/collections/bookmark'
],function(Backbone,_,$,BookmarkTemplate,BookmarkModel,BookmarkCollection){

    var BookmarkView=Backbone.View.extend({
        el:$('#content'),
        initialize:function(options){
            this.render();
            this.bindData();
            $('#btnBack').hide();
        },
        render:function(){
            var template= _.template(BookmarkTemplate);
            this.$el.html(template);
        },
        events:{
            "click #btnOpenDir":"openDir",
            "click #btnSaveBookmark":"saveBookmark",
            "click #btnRemoveBookmark":"removeBookmark"
        },
        openDir:function(){
            alert('openb');
        },
        bindData:function(){
            var localPath='Bookmarks/'+ $.trim($('#bookmarkPath').text());
            this.collection=new BookmarkCollection();
            this.collection.fetch({
                data:{
                    localPath: localPath
                },
                success:function(res){
                    $('ul#bookmarkList').empty();
                    var folders=[];
                    res.models.forEach(function(data){
                        var template='<li class="list-group-item" >' +
                            '<input type="hidden" name="bookmarkId" value="'+data.attributes._id+'"/>' +
                            '<div class="row" style="vertical-align:middle;line-height:36px;">' +
                                '<div class="col-md-2">'+data.attributes.title+'</div>' +
                                '<div class="col-md-4 "><a href="http://'+data.attributes.url+'" target="_blank">'+data.attributes.url+'</a></div>' +
                                '<div class="col-md-6" style="text-align: right;">' +
                                '<button id="btnRemoveBookmark" class="btn btn-danger">Delete</button>' +
                                '</div>' +
                            '</div>' +
                            '</li>';
                        $('ul#bookmarkList').append(template);
                    });
                }
            });
        },
        saveBookmark:function(){
            var self=this;
            var title= $.trim($('#txtBMTitle').val());
            var url=$.trim($('#txtBMUrl').val());
            var localPath='Bookmarks/'+ $.trim($('#bookmarkPath').text());
            self.model=new BookmarkModel();
            self.model.set({
                id:0,
                title:title,
                url:url,
                localPath:localPath
            });
            self.model.save({},{
                success:function(data){
                    alert('Saved successfully');
                    self.bindData();
                    $('#txtBMTitle').val("");
                    $('#txtBMUrl').val("");
                }
            });
            $('#closeModal').click();
        },
        removeBookmark:function(e){
            var self=this;
            var id= e.target.closest('li').querySelector('input[type="hidden"]').value;
            console.log(id);
            self.model=new BookmarkModel();
            self.model.set({
                id:id
            });
            self.model.destroy({
                success:function(data){
                    alert('Deleted successfully');
                    self.bindData();
                }
            });
        },
        btnBack:function(){

        }

    });

    return BookmarkView;

});