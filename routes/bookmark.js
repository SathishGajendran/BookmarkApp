

var bookmarkData=require('../data/bookmark');

var express=require('express');
var app=express();

app.get('/bookmarks',function(req,res){
    bookmarkData.getAllBookmarks(req.query,function(err,data){
       res.send(data);
    });
});

app.put('/bookmark/:id',function(req,res){
    if(req.params.id==0){
        bookmarkData.saveBookmark(req.body,function(err,data){
            res.send(data);
        });
    }else{
        bookmarkData.editBookmark(req.body,function(err,data){
            res.send(data);
        });
    }
});

app.delete('/bookmark/:id',function(req,res){
    bookmarkData.removeBookmark(req.params.id,function(err,data){
        res.send(data);
    });
})

module.exports=app;