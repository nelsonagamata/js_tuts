let Phrase = require("nelsonagamata-palindrome");

function palidromeTester(event) {
	event.preventDefault();
	
	let phrase = new Phrase(event.target.phrase.value);
	let palindromeResult = document.querySelector("#palindromeResult");

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"${phrase.content}" is NOT a palindrome!`;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let button = document.querySelector("#palindromeTester");
	button.addEventListener("submit", function(){
		palidromeTester(event);
	});
});
