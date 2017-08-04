$(document).ready(function() {

    $.ajax({
        method: 'GET',
        url: '/moduleMadness',
        success: function(response) {
             $('#balance').append(response);
             
        }
    })
})