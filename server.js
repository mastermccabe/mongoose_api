var express = require('express');
// Create an Express App
var app = express();
var path = require('path');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./server/config/api_setup.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
});
