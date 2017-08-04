$(document).ready(function() {

    $.ajax({
        method: 'GET',
        url: '/random',
        success: function(response) {
             $('#balance').append(exportRandomCurrency(100, 1000000));
        }
    })
})