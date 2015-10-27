#! /usr/bin/env node
var fs = require('fs');
//var bayes = require('bayes');

//var bayesObj = JSON.stringify(require("./src/bayes.json"));

//var classifier = bayes.fromJson(bayesObj);
var htmlToText = require("html-to-text");
var request = require('request');

var url = process.argv[2];
var genre = process.argv[3];
process.setMaxListeners(0);

if (!url){
	console.log("Must include a url");
	return;
}

if (!genre){
	console.log("Include a genre to learn");
	return;
}

var raw = "";

request(url,function(error,response,body){
	raw = body;
	
	var text = htmlToText.fromString(raw,{wordwrap:false,ignoreHref:true,ignoreImage:true});
	text = text.replace(/(\r\n|\n|\r)/gm," ");
	//classifier.learn(text,genre);
	fs.appendFileSync('corpora/'+genre+".txt", text);

	console.log("Learned data for "+genre);
});
