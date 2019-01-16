
$(document).ready(function () {

    $('.odeslat').click(function (e) {
        e.preventDefault();
        var tag = $(".tag").val();
        $('#instagram, #tag_picture').empty();

        $.get('https://www.instagram.com/explore/tags/' + tag + '/?__a=1', function (data, status) {
            
            
            for (var i = 0; i < 6; i++) {

                var $that = data.graphql.hashtag.edge_hashtag_to_media.edges[i].node;

                $('#instagram').append('<div id="post_' + i + '"></div>');

                var post = $("#post_" + i);

                post.append('<img src="' + $that.thumbnail_resources[2].src + '">');
                post.append('<span class="description">Popis:<br><p>' + $that.edge_media_to_caption.edges[0].node.text + '</p></span> <span class="likes">' + $that.edge_liked_by.count + '</span>');
            }

            $(".description, #instagram img").click(function () {
                $(this).children().toggle("slow", function () {
                });
            });

            $('#tag_picture').append('<img src="' + data.graphql.hashtag.profile_pic_url + '">');
        });
    });
});