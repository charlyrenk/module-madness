var moduleOne = require('./randomNumber');
 
var moduleTwo = require('./convertToDollars');




function exportRandomCurrency(min, max) {
    var rightNumber = moduleTwo(moduleOne(min, max));
    return rightNumber;
}

// exportRandomCurrency(rightNumber);
function balance() {
    var accountBalance = "Account Balance: \n";
    return accountBalance;
}
// console.log(exportRandomCurrency(100, 1000000));
module.exports = {
    method1: exportRandomCurrency,
    method2: balance
}
