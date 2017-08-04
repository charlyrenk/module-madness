var express = require('express');
var app = express();
var port = 3000;
var randomNumber = require('./randomNumber');
 
var convertToDollars = require('./convertToDollars');

var moduleThree = require('./moduleThree');

// console.log(randomNumber(100, 1000000));

// console.log(currencyConverter(3100));


app.use(express.static('public'));

app.get('/moduleMadness', function(req, res) {
    var answer = moduleThree.method2() + moduleThree.method1(100, 1000000);
    res.send(answer);
})

app.listen(port, function (req, res) {
    console.log('Listening on port', port); 
})