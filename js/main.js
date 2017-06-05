$(document).ready(function(){
    $("body").append("<p>" + Math.round(Math.random() * 10 * Math.random() * 100) + "</p>");
    $("button").click(function(){
        $("p").html(Math.round(Math.random() * 10 * Math.random() * 100));
    });
});

function doSomething() {
    //language=JQuery-CSS
    $("#h").html(prompt('Enter your text: '));
}
