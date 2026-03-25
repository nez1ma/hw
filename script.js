$(document).ready(function() {
    $('#addHtmlt').html('<h1> New Element </h1>');
    $('.to-hide').hide();
    $('section').remove();
    $('#target-div').addClass('addClass').text('Lumos Maxima');

    const $box = $('#box');
    let isExpanded = false;

    $('#rect-move').click(function() {
        $box.stop().animate({left: '+=200'}, 500)
            .animate({top: '+=100'}, 500)
            .animate({left: '-=200'}, 500)
            .animate({top: '-=100'}, 500);
    });

    $('#tri-move').click(function() {
        $box.stop().animate({left: '+=100', top: '-=173'}, 500)
            .animate({left: '+=100', top: '+=173'}, 500)
            .animate({left: '-=200'}, 500);
    });

    $('#fade-size').click(function() {
        if (!isExpanded) {
            $box.stop().animate({
                width: '400px',
                height: '400px',
                opacity: 1
            }, 1000);
        } else {
            $box.stop().animate({
                width: '50px',
                height: '50px',
                opacity: 1
            }, 1000);
        }
        isExpanded = !isExpanded;
    });
});