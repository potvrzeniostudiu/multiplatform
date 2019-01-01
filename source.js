
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


      /*!--<input type="submit" value="Odeslat" class="odeslat">--!*/
  var server = "https://api.tumblr.com/v2/tagged?tag="
  var api_klic = "&api_key=rINPEI7pnSo05XfzS2S3oVNTu4JT9RD8qRH1zhdCh9ShEz33uJ"


  $('.odeslat').click(function(e) {
    e.preventDefault();
    tag = $(".tag").val();
    console.log("zmacknuto");

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": server + tag + api_klic,
      "method": "GET",
      error: function (e) {
        console.log("failure");
      }
    }


    $.ajax(settings).done(function(odpoved) {
      console.log("foo");
      blog_1 = (odpoved.response[0].blog_name);
      $(".vysledky").append(blog_1);
    });
  });
});
