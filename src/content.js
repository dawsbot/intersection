



//this will be browserified
var jsonObject = JSON.stringify(require('./bayes.json'));
var bayes = require('bayes');

if (/^[\],:{}\s]*$/.test(jsonObject.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
  console.log('the json string is GOOD');
}else{
  console.log('the json string is BAD');
}

var classifier = bayes.fromJson(jsonObject);

var body = document.all[0].textContent;
// console.log('body: ' + body);

var classification = classifier.categorize(body);

//if (node !== null && node !== undefined) {
if (classification) {
	var para = document.createElement("p");
	para.id = 'genreID'
	var node = document. createTextNode ("Genre: " + classification);
	para.appendChild(node);
	
	var element = document.body;
	element.appendChild(para);
} else {
	console.log('woops, we could not identify a genre for your document.');
}
// console.log('CONTENT SCRIPT END');
