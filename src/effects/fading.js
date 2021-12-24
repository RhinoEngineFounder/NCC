var opacity = 0;
var intervalID = 0;

function fadeout() {
    intervalID = setInterval(hide, 20);
}

function fadein() {
    intervalID = setInterval(show, 50);
}

function hide() {
    var element = document.getElementById("fader");
    opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"));

    if (opacity > 0.2) {
        opacity = opacity - 0.1;
        element.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}

function show() {
    var element = document.getElementById("fader");
    opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"));
    if (opacity < 1)
    {
        opacity=opacity+1;
        element.style.opacity = opacity;
    }
    else 
    {
        clearInterval(intervalID);
    }
}

/*$(document).ready(function(){
    $("h1").animate({ 
        'font-size' : '40px',
        'opacity': '1'
    },1000);
});*/