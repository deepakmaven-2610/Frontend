$(document).ready(function() {

   function printThis(el)
   {
    if($(this).text())
    {
        console.log($(this).text());
    }
    else
    {
        console.log($(this).val())
    }
   }
   var el = document.getElementById('text');

   $('input').focusin(printThis);

   $('input').css(
    {
        background : '#f00',
        padding : '10px',
        borderColor : '#000',
        backgroundSize : 'cover'

    });
   
 
    
});
