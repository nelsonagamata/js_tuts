let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join("-");
}

//urls: Imperative version
function imperativeUrls(elements) {
	let urls = [];
	elements.forEach(function(element) {
		urls.push(urlify(element));
	});
	return urls;
}
console.log(imperativeUrls(states));

//Urls: Functional version
function functionalUrls(elements) {
	return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//Urls: Full version
function fullUrls(elements) {
	return elements.map(element => "https://example.com/" + urlify(element));
}
//console.log(fullUrls(states));

// Singles: Imperative version
function imperativeSingles(elements) {
	let singles = [];
	elements.forEach(function(element) {
		if (element.split(/\s+/).length === 1) {
			singles.push(element);
		}
	});
	return singles;
}
console.log(imperativeSingles(states));

// Singles: Functional version
function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Multiples: Functional version
function functionalMultiples(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalMultiples(states));

// Contains: Unique keyword
// keyword = "Dakota"
function containsKeyword(elements) {
	return elements.filter(element => element.includes("Dakota"));
}
console.log(containsKeyword(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum: Imperative solution
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(function(n) {
		total += n;
	});
	return total;
}
console.log(imperativeSum(numbers));

// Sum: Functional solution
function functionalSum(elements) {
	return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// Lengths: Imperative solution
function imperativeLengths(elements) {
	let lengths = {};
	elements.forEach(function(element) {
		lengths[element] = element.length;
	});
	return lengths;
}
console.log(imperativeLengths(states));

// Lengths: Functional solution
function functionalLengths(elements) { 
	return elements.reduce((lengths, element) => { 
		lengths[element] = element.length; 
		return lengths; }, {
	});
}
console.log(functionalLengths(states));

// Product: Imperative solution
function imperativeProduct(elements) {
	let total = 1;
	elements.forEach(function(n) {
		total *= n;
	});
	return total;
}
console.log(imperativeProduct(numbers));

// Product: Functional solution
function functionalProduct(elements) {
	return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));