$(document).ready(function(){
    $("body").append("<p>" + Math.round(Math.random() * 10 * Math.random() * 100) + "</p>")
});

function doSomething() {
    //language=JQuery-CSS
    $("#h").html(prompt('Enter your text: '));
}
