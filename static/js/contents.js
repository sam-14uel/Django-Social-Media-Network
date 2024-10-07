const csrftoken = "H9UOi0VVqjZ1m1OGwpl6XSnrdzHGmsV1ayjzXNQBxGuEbgUSWn5oAhQYqwsRJ2RR"
$('.not_loved').on('click', function() {
    const postId = $(this).data('post-id');

    $.ajax({
        type: 'POST',
        url: `/post/${postId}/like`,
        headers: {
            'X-CSRFToken': csrftoken,
        },
        success: function(data) {
            if (data.like_status === 'loved') {
                $(this).addClass('loved').removeClass('not_loved');
            } else {
                $(this).addClass('not_loved').removeClass('loved');
            }
        }
    });
});


$('.loved').on('click', function() {
    const postId = $(this).data('post-id');

    $.ajax({
        type: 'POST',
        url: `/post/${postId}/unlike`,
        headers: {
            'X-CSRFToken': "vpqJyoe5LhD5UxwXQKiBaOKBBYGFDI7AYOPudb9LSE8IJMC9gI2TNdd8OVrQ0i3q",
        },
        success: function(data) {
            if (data.like_status === 'unloved') {
                $(this).addClass('not_loved').removeClass('loved');
            } else {
                $(this).addClass('loved').removeClass('not_loved');
            }
        }
    });
});
