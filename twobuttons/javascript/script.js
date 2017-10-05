// Create an HTML page with two buttons that argue with each other.
// When one button is clicked, the text "I'm right" should be placed next to it.
// When the other button is clicked, the text is replaced with, "No, I'm right!"

// Created a function for each button so that when either buttoer is pressed,
// text will appear next to the buttons.
function myFunction1(name) {
	document.getElementById("noagree").innerHTML = name + ".";
}

function myFunction2(name) {
	document.getElementById("noagree").innerHTML = name + ".";
}
