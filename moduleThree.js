var moduleOne = require('./randomNumber');
 
var moduleTwo = require('./convertToDollars');




function exportRandomCurrency(min, max) {
    return moduleTwo(moduleOne(min, max));

}
// console.log(exportRandomCurrency(100, 1000000));

module.exports = exportRandomCurrency;