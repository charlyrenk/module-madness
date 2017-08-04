// var moduleOne = require('./randomNumber');
 
// var moduleTwo = require('./convertToDollars');

function exportRandomCurrency(min, max) {
    currencyConverter(randomNumber(min, max))
}
console.log(exportRandomCurrency(100, 1000000));

module.export = exportRandomCurrency;