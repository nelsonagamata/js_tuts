module.exports = Phrase;

//Adds `reverse` to all strings
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

String.prototype.blank = function blank() {
	return (this.length === 0 || /^\s*$/.test(this));
}

// Defines a Phrase object
function Phrase(content) {
	this.content = content;

	this.processor = function(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.processor(this.letters());
	}

	// Returns the letters of the content.
	this.letters = function letters() {
		const lettersRegEx = /[a-z]/ig;
		return (this.content.match(lettersRegEx) || []).join("");
	}
	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		if (this.letters()) {
			return this.processedContent() === this.processedContent().reverse();
		} else {
			return false;
		}
	}
}