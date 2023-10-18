$(document).ready(function() {

    $('[href="https://www.google.com/"]').on('click',function(event)
    {
        return false;
    })


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

    $('#prepend, #append, #replace').on('click',function(e)
    {
        e.preventDefault();
        var e1 = $(e.currentTarget);
        var action = e1.attr('id');
        var content = $('.text').val();

        if(action=="prepend")
        {
            console.log("Prepending......");
            // $('#main').prepend(content);
            $('#main').prepend('<a href="#">' + content + '</a>'); // to add a link
        }
        else if(action=="append")
        {
            console.log("Apending......");       
            $('#main').append(content);  
        }
        else if(action=="replace")
        {
            console.log("Replacing......");  
            $('#main').html(content);
        }

        $('.text').val('');

    });
});
