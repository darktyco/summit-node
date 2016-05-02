'use strict';

let express = require('express');
let app = express();

app.get('/other', function (req, res) {
    res.send('Other!');
}).get('/', function (req, res) {
    res.send('Word up AS Summit?');
});

app.listen(8080, function() {
    console.log('Server up and running...');
});
