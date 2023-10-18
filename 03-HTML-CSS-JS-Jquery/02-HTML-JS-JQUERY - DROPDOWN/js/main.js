$(document).ready(function() {
    $('[data-trigger="dropdown"]').on('mouseenter', function() {
        var submenu = $(this).parent().find('.profile-submenu');
        // submenu.css('display', 'block');
        // submenu.addClass('active');
        submenu.fadeIn(300);
    });

    $('[data-trigger="dropdown"]').on('mouseleave', function() {
        var submenu = $(this).parent().find('.profile-submenu');
        // submenu.css('display', 'none');
        submenu.fadeOut(300);
    });
});
