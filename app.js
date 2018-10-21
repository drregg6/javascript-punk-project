const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.use('/styles', express.static(__dirname));
app.use('/images', express.static(__dirname));
app.use('/scripts', express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.listen(8080, function() {
    console.log('listening on 8080..');
});