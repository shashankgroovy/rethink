var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

// Uncomment the following to start serving api
//var api = require('./src/api.js');
//app.use('/api', api);

// route all requests to Angular
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/app/views/index.html');
})

http.listen(8000, function() {
  console.log('App live on http://localhost:8000');
});
