# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enough JavaScript to Be Dangerous*](https://learnenough.com/javascript-tutorial) by Michael Hartl.

This module can be used as follows:
```
$ npm install --global nelsonagamata-palindromw
$ vim test.js
let Phrase = require("nelsonagamata-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```