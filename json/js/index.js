// A $( document ).ready() block.
$(function() {
    $("#loader").click(function(){
        $.getJSON('js/data.json', function(jd){
            $('#datastage').html('<p> Zipcode: ' + jd.zipcode + '</p>');
        });
    });
});