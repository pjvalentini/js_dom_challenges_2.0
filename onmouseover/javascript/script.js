// Create an HTML page with a large element on the page that says
// "Don't hover over me" inside of it. When you hover over the element,
// send an alert to the user that says, "Hey, I told you not to hover over me!"

// Creating a mouseover feature by isolating the ID "yellatyou" and event binding.

document.getElementById("yellatyou").addEventListener("mouseover", onClick);
function onClick(event) {
	alert("Hey, I told you not to hover over me!");
}
