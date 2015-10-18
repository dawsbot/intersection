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

console.log(classifier.categorize(body));
// console.log('CONTENT SCRIPT END');
