$('.larger_img').click(function() {
    if($(this).hasClass('active')){
        $(this).css('transform', 'scale(1)');
        $(this).removeClass('active')
    } else {
        $(this).css('transform', 'scale(1.6)');
        $(this).addClass('active')
    }
})