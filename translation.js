// ** snippets ** //
// Makes the phrase LOUDER
	this.louder = function() {
		return this.content.toUpperCase();
	}
}

// Defines a Translated Phrase object
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns content processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();