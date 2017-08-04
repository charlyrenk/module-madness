var express = require('express');
var app = express();
var port = 3000;
var randomNumber = require('./randomNumber');
 
var convertToDollars = require('./convertToDollars');

var moduleThree = require('./moduleThree');

// console.log(randomNumber(100, 1000000));

// console.log(currencyConverter(3100));

console.log(moduleThree(100, 1000000));

app.use(express.static('public'));

app.get('/random', function(req, res) {

})

app.listen(port, function (req, res) {
    console.log('Listening on port', port); 
})