#! /usr/bin/env node
var fs = require('fs');
var bayes = require('bayes');

var bayesObj = JSON.stringify(require("./src/bayes.json"));

if (/^[\],:{}\s]*$/.test(bayesObj.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
	  console.log('the json string is GOOD');
}else{
	  console.log('the json string is BAD');
}

var classifier = bayes.fromJson(bayesObj);
var htmlToText = require("html-to-text");
var request = require('request');

var url = process.argv[2];
var genre = process.argv[3];

if (!url){
	console.log("Must include a url");
}

if (!genre){
	console.log("Include a genre to learn");
}

var raw = "";

request(url,function(error,response,body){
	raw = body;
	
	var text = htmlToText.fromString(raw,{wordwrap:false,ignoreHref:true,ignoreImage:true});
	text = text.replace(/(\r\n|\n|\r)/gm," ");
	classifier.learn(text,genre);
	fs.writeFileSync('src/bayes.json', classifier.toJson().toString());

});
