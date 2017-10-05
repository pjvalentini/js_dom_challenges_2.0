// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value
// of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".


// Function keyPress(event) listens for the keypress based on the specfic key pressed
// and displays the key in the document in the h1 element.
function keyPress(event) {
	document.getElementById("displayLetter").innerHTML += String.fromCharCode(event.charCode);
// console.log(event) allows for the key that you are pressing to be viewed in the console
// as well as the h1 element will match the key pressed in the console.
		console.log(event);
}
// This piece of code listens for the keypress.
document.body.onkeypress = keyPress;
