$(document).ready( function()
{

alert("loaded");

// document.getElementById('text').innerHTML = "This is my text"; this is what I write in JS
$('#text').html("This is not my text");

// document.getElementsByClassName('my-input').value = ""
$('.my-input').val("New Input Value");

//clicking button on Jquery
$('#go-button').on("click",function()
{
    alert("Nice Clicking");
});


});