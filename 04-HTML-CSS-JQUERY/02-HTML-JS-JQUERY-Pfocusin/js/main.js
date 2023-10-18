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

    $('textarea').focusin(function()
    {
        console.log("Focusing on text area")
    });

    $('textarea').focusout(function()
    {
        console.log("Focusing out from text area")
    });

    $('p:contains("Lorem")').html("This is has lorem in it");

    if($(':contains("lorem")').is("p"))
    {
        console.log("Its a para");
    }

    $('p').each(function()
    {
        console.log($(this).text());
    })

    window.passed = 0;
    window.hasAt = 0;
    window.hasDot = 0;

    // $('input[name=email]').on('keyup',function()
    // {
    //     if($(this).val().indexOf('@') > -1)
    //     {
    //         window.hasAt++;
    //     }
    //     if($(this).val().indexOf('.') > -1)
    //     {
    //         window.hasDot++;
    //     }

    //     if( window.hasDot > 1 &&  window.hasAt > 1)
    //     {
    //         $('.status').html("VALID");
    //     }
    //     else
    //     {
    //         $('.status').html("INVALID");
    //     }
        
    // })


    $('input').focusout(function()
    {
        if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1)
        {
            $('.status').html("Valid Email");
        }
        else
        {
            $('.status').html("InValid Email");
        }
    });
});
