var express = require('express'),
    bodyParser = require('body-parser'),
    load = require('express-load'),
    methodOverride = require('method-override'),
    config = require('./config/config.js')(),
    orm = require('./models/models.js')();

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

orm.initialize(config, function (err, models) {
    if (err) throw err;

    app.models = models.collections;
    app.connections = models.connections;

    load('Routes').into(app);

    // Start Server
    app.listen(process.env.PORT || 21066, () => {
        console.log("Server up on port 21066");
    });
});
