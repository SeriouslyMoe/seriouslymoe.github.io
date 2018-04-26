document.addEventListener('DOMContentLoaded', function() {
	var randomNumber = Math.floor((Math.random() * 3) + 1);
	var randomBackground = randomNumber + ".jpg";
	console.log(randomNumber);

	document.querySelector("div.background").style.backgroundImage = "url(images/bg/" + randomBackground + ")";
});
