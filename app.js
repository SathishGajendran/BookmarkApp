

var express=require('express');
var http=require('http');
var bodyParser=require('body-parser');
var path=require('path');


var app=express();

var port=process.env.PORT || 8080;
app.set('port',port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    res.render('home');
});

var bookmark=require('./routes/bookmark');
app.use(bookmark);

http.createServer(app).listen(port,function(){
   console.log('server is listening at '+ port);
});
