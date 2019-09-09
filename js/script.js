// Responsive Navigation 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
})

// Form Validation
function emFocus(idName) {
	document.getElementById(idName).value = '';
	document.getElementById(idName).focus();
}

function validate() {
	var nameValue = document.getElementById('name').value;
	if (nameValue.length == 0) {
		document.getElementById('spanName').innerHTML = "Name cannot be empty";
		emFocus('name');

	} else if (nameValue.length <= 5) {
		document.getElementById('spanName').innerHTML = "Name cannot be less than 5 characters";
		emFocus('name');
	}

	var ePattern = /^[A-Za-z0-9\.\+\-]+\@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,4}$/;

	var emailValue = document.getElementById("email").value;
	if (!emailValue.match(ePattern)) {
		document.getElementById('spanEmail').innerHTML = "Enter valid Email address";
		emFocus(email);
	}

}

// jQuery //to select input (element) and change its css properties
$(document).ready(function () {
	$("input").focus(function () {
		$(this).css("transform", "scale(1.1)");
	});
	$("input").blur(function () {
		$(this).css("transform", "scale(1)");
	});
});