
$(document).ready(function () {

  /*
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 42; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
      
      console.log(makeid());*/


  var server = "https://api.tumblr.com/v2/tagged?tag="
  var api_klic = "&api_key=rINPEI7pnSo05XfzS2S3oVNTu4JT9RD8qRH1zhdCh9ShEz33uJ"


  $('.odeslat').submit(function(e) {
    e.stopImmediatePropagation()
    tag = $(".tag").val();

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": server + tag + api_klic,
      "method": "GET",
      error: function (e) {
        console.log("failure");
      }
    }


    $.ajax(settings).done(function(response) {

      blog_1 = (response.posts[0].blog_name);
      teplota = (response.posts[1].blog_name);
      $(".vysledky").append(blog_1);
      console.log(teplota);
    });
  });
});
