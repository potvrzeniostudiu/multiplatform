
$( document ).ready(function() {

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 42; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
      
      console.log(makeid());

  /*
    var server = "https://api.openweathermap.org/data/2.5/forecast?q="
    var api_klic = "&APPID=afb6e76426a0802ed7f8dcdb42900eab&units=metric"


    $.ajax({
        url: "https://api.twitter.com/1.1/tweets/search/30day/production.json",
        beforeSend: function(xhr) { 
          xhr.setRequestHeader("Authorization", "Basic " + btoa("username:password")); 
        },
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        data: '{"query":"from:TwitterDev lang:en",
                "maxResults": "100",
                "fromDate":"<YYYYMMDDHHmm>", 
                "toDate":"<YYYYMMDDHHmm>"
            }',
        success: function (data) {
          alert(JSON.stringify(data));
        },
        error: function(){
          alert("Cannot get data");
        }
    });
*/
});
