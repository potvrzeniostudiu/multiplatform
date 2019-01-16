
$(document).ready(function () {

  var server = "https://api.tumblr.com/v2/tagged?tag="
  var api_klic = "&api_key=rINPEI7pnSo05XfzS2S3oVNTu4JT9RD8qRH1zhdCh9ShEz33uJ"

  data = localStorage.getItem('tag');
  $(".tag").val(data);


  $('.send').click(function(e) {
    e.preventDefault();
    
    tag = $(".tag").val().replace('#', '');
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
      for (var i = 0; i < 8; i++) {     //problem, pokud neni min. pocet prispevku --> moznost pouzit odpoved.response.length

        if(null != odpoved.response[i].photos) {  //pokud JSON obsahuje klic photo --> vyfiltrovani postu s obrazky
          post_picture = (odpoved.response[i].photos[0].original_size.url);   

          $(".tumblr").append('<img src="' + post_picture + '">');

          blog_name = (odpoved.response[i].blog_name);
          caption = (odpoved.response[i].caption);
          link = (odpoved.response[i].post_url);
          
          $(".tumblr").append("<span class='tumblr-desc'>" + blog_name + " píše:<br>" + caption + "</span><br>");
          $(".tumblr").append('<a href="' + link + '">Blog</a><br>');
        } 
      }
    });
    console.log(tag);
    localStorage.setItem('tag', tag);
  });
});
