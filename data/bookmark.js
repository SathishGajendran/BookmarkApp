
var DB=require('./dbhelper');
var schema=require('./mongodb/schema/bookmark');

var Bookmark=DB.model('Bookmark',schema);

module.exports={
    getAllBookmarks:function(args,callback){
//        Bookmark.aggregate([
//            {$group:{_id:'$localPath'}},
//            {$project:{localPath:'$_id',_id:0}}
//        ]).exec(function(err,res){
//               console.log(res);
//            });
        Bookmark.find({localPath:args.localPath},function(err,res){
            callback(err,res);
        });
    },
    saveBookmark:function(args,callback){
        var newBookmark=new Bookmark({
            title:args.title,
            url:args.url,
            localPath:args.localPath,
            created_date:new Date()
        });
        newBookmark.save(function(err,res){
            callback(err,res);
        });
    },
    editBookmark:function(args,callback){
        Bookmark.findOneAndUpdate({_id:args.id},{title:args.title,url:args.url},function(err,res){
            callback(err,res);
        });
    },
    removeBookmark:function(id,callback){
        Bookmark.remove({_id:id},function(err,res){
           callback(err,{res:res});
        });
    }
};
