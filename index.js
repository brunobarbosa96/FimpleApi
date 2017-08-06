//var express = require('express'),
    // bodyParser = require('body-parser'),
    // load = require('express-load'),
    // methodOverride = require('method-override'),
    var config = require('./config/config.js')(),
     orm = require('./models/models.js')();

// app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(methodOverride());

// orm.initialize(config, function (err, models) {
//     if (err) throw err;

//     app.models = models.collections;
//     app.connections = models.connections;

//     load('Routes').into(app);

//     // Start Server
//     app.listen(process.env.PORT || 8000, () => {
//         console.log("Server up on port 8000");
//     });
// });



var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
