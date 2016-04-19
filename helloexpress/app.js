'use strict';

let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('heya');
});

app.listen(8080, function() {
    console.log('running....');
});