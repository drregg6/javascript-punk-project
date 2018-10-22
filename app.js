const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

app.use(express.static(path.join(__dirname)));
app.use('/styles', express.static(__dirname));
app.use('/images', express.static(__dirname));
app.use('/scripts', express.static(__dirname));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if (typeof req.query['search'] !== 'undefined') {
        let test = req.query['search'];
    }
    
    res.render('index', { test : test });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(8080, function() {
    console.log('listening on 8080..');
});