var http = require('http');
var express = require('express');
var path = require('path');

var app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get("/", function(req, res, next){
  return res.render('index', {title:'hello World'});
});

app.get("/hoge", function(req, res, next){
  return res.send('HOGEHOGE');
});

var server = http.createServer(app);

server.listen('3000');
