var express = require('express');
var path = require('path');

//create our app
var app = express();

app.get('/', function(req, resp) {
   resp.sendFile('index.html', {root: path.join(__dirname, '')});
})
app.listen(3030, function (){
 console.log('Express server is up on port 3030');
});
