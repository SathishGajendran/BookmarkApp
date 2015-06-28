
var mongoose=require('mongoose');

var bookmark=new mongoose.Schema({
    title:String,
    url:String,
    localPath:String,
    created_date:Date
});

module.exports=bookmark;