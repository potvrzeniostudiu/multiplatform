
$(document).ready(function () {

    $('.odeslat').click(function (e) {
        e.preventDefault();

        var tag = $(".tag").val();

        $.get('https://www.instagram.com/explore/tags/' + tag + '/?__a=1', function (data, status) {
            $('#instagram, #tag_picture').empty();
            
            for (var i = 0; i < 6; i++) {

                var $that = data.graphql.hashtag.edge_hashtag_to_media.edges[i].node;

                $('#instagram').append('<div id="post_' + i + '"></div>');

                var post = $("#post_" + i);

                post.append('<img src="' + $that.thumbnail_resources[2].src + '">');
                post.append('<span class="description">POPIS: ' + $that.edge_media_to_caption.edges[0].node.text + '</span>');
            }

            $(".description").click(function () {
                $(this).toggle("slow", function () {
                });
            });

            $('#tag_picture').append('<img src="' + data.graphql.hashtag.profile_pic_url + '">');
        });
    });
});