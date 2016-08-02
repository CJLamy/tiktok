var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var server = app.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/template/front.html');
});
