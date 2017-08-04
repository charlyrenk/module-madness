
function currencyConverter(value) {
    var num = '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return num;
}

console.log(currencyConverter(319945));

module.export = currencyConverter;