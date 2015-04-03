$(function() {
	var lim = prompt("What number would you like me to ping-pong up to?")
	for (index = 1; index <=lim; index+=1) {
    if (index % 3 === 0 && index % 5 === 0) $("ul").append("<li>ping pong</li>");
    else if (index % 3 === 0) $("ul").append("<li>ping</li>");
    else if (index % 5 === 0) $("ul").append("<li>pong</li>");
    else $("ul").append("<li>"+index+"</li>");
    }
});