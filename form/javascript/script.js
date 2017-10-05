// 4.Create an HTML page with a form. The form should include inputs for a username,
// email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct,
// have Javascript change the text in the H1.



// Password and Username validation features in JS.
// This form can accept a username with letters upper, lower and numbers.
// This form can accept a password of only 12345678 in accordance with assigment


var form = document.getElementById("form");
// Using an event listener to submit the input for validation.
form.addEventListener("submit", function(event) {
	event.preventDefault();
	var input = document.getElementById("name");
	var username = document.getElementById("name").value;
	var password = document.getElementById("password").value;
// Using a regular expression to allow for letters and numbers to be used Username.
	var numbers = /[a-zA-Z\s]+[0-9]/;
// Setting the password as 12345678.
	if(password === "12345678" && username.match(numbers)) {
// created var msg to be used to change innerHTML when Pass and Username are validated correctly.
	var msg = "Information Accepted!";
// Set the Alert to display the same msg as the H1 (only if info is corrrect);
		alert(msg);
		document.getElementById("heading").innerHTML = msg;
} else  {
		alert("Invalid Password or Username or Both");
}
});
