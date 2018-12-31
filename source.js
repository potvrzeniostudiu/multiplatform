
$( document ).ready(function() {

  
    var server = "https://api.openweathermap.org/data/2.5/forecast?q="
    var api_klic = "&APPID=afb6e76426a0802ed7f8dcdb42900eab&units=metric"


    $('input').submit(function(e){
        e.preventDefault();
        input = $('#mesto').val(); //vice hashtagu

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": server + mesto + api_klic,
            "method": "GET",
            error: function(e) {
                console.log("selhani");
            }
          }


        $.ajax(settings).done(function (response) {

        });

    });
});
