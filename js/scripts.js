$(document).ready(function() {
    $('.nav-toggle').click(function() {
        $(this).toggleClass('is-open');
        $('.main-nav').toggleClass('is-open');
    });
});
