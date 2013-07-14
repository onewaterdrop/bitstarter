var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(256);



fs.readFileSync('index.html',function(error,data){
if(err) throw err;
console.log(data);
buffer.write(data,'utf-8');
});


app.get('/', function(request, response) {
  response.send(butter.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
