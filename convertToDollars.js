
function currencyConverter(value) {
    var dollarConvert = '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return dollarConvert;
}

// console.log(currencyConverter(319945));

module.exports = currencyConverter;