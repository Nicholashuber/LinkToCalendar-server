// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var fs = require('fs');
var generateUrl = require('generate-google-calendar-url')
var replaceall = require("replaceall");
var bodyParser = require('body-parser');
const url = require('url'); // built-in utility


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// routes will go here

// start the server
app.listen(port);
// routes will go here


app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});
console.log('Server started! At http://localhost:' + port);

// http://localhost:8080/api/1
app.get('/api/:version', function(req, res) {
    res.send(req.params.version);
  });



// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});
