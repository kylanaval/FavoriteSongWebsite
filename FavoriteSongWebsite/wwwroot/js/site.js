// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function moveCircle()
{
    let circle = document.getElementById("circle");
    let position = 0;
    let animation = setInterval(function ()
    {
        if (position >= 300) {
            clearInterval(animation);
        } else
            { position++; circle.style.left = position + "px"; }
    }, 5);
}