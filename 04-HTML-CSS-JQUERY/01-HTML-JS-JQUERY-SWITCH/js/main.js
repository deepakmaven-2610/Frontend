$(document).ready(function() {

    // var s = new gquery("my-selector");
    // gQuery("my-selector").addClass("MYNEWCLASS");
    console.log($('#main-header').find('p').addClass('HAH'));

    console.log($('.profile-submenu').first('a').text());
    $(document).on('contextMenu',function()
    {
        return false;

    })


   $(document).on('mousedown',function(event)
   {
    event.preventDefault();
    // switch(event.which)
    // {
    //     case 1:
    //         console.log("left mouse button clciked");
    //         break;
    //     case 2:
    //         console.log("Middle mouse button clciked");
    //         break;
    //     case 3:
    //         console.log("Right mouse button clciked");
    //         break;
    // }
    if(event.which == 3)
    {

        $('.hidden').removeClass('shown');
        if($(event.target).is('img'))
        {
            $('.saveimage, .newtab').addClass('shown');
        }
        else if($(event.target).is('a'))
        {
            $('.newtab').addClass('shown');
        }
    
        console.log(event.pageY,event.pageX);

        $('#context').css({
            top:event.pageY,
            left:event.pageX
        });
        $('#context').fadeIn();

       return false;
    }
    $('#context').fadeOut();

   });




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

    $('textarea').focusin(function() {
        console.log("Focusing on the textarea.");
    });
    
    $('textarea').focusout(function() {
        console.log("Focusing out of the textarea.");
    });
    
});
