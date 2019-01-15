
$(document).ready(function () {

  var server = "https://api.tumblr.com/v2/tagged?tag="
  var api_klic = "&api_key=rINPEI7pnSo05XfzS2S3oVNTu4JT9RD8qRH1zhdCh9ShEz33uJ"


  $('.odeslat').click(function(e) {
    e.preventDefault();
    tag = $(".tag").val();
    $(".tumblr").empty();

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
      for (var i = 0; i < 3; i++) {     //problem, pokud neni min. pocet prispevku --> moznost pouzit odpoved.response.length

        if(null == odpoved.response[i].photos) {    //pokud json obsahuje key photos
          post_picture = (odpoved.response[i].photos[0].original_size.url);   
          console.log("foo");
          $(".tumblr").append('<img src="' + post_picture + '">');    //prida obrazek
        } else if (odpoved.response == 0) {
          console.log("mrdka");
        }

      blog_name = (odpoved.response[i].blog_name);
      caption = (odpoved.response[i].summary);
      link = (odpoved.response[i].blog.url);
      
      $(".tumblr").append("<span>" + blog_name + " says:<br>" + caption + "</span><br>");
      $(".tumblr").append('<a href="' + link + '">Odkaz</a><br>');
      
      }
    });
  });
});
