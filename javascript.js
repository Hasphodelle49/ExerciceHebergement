var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "grey"];
var body = document.querySelector("body");
body.style.transition = "background-color 0.5s";

setInterval(function(){
    var random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];
}, 300);