//Adds `reverse` to all strings
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

String.prototype.blank = function blank() {
	return (this.length === 0 || /^\s*$/.test(this));
}

Array.prototype.last = function() {
	return this[this.length -1];
}
Array.prototype.lastSlice = function() {
	return this.slice(-1)[0];
}

// Defines a Phrase object
function Phrase(content) {
	this.content = content;

	this.processor = function(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}