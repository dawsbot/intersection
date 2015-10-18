#! /usr/bin/env node
var fs = require('fs');
var bayes = require('bayes');

var classifier = bayes();

var arts = fs.readFileSync('./corpora/arts.txt', 'utf-8');
var business = fs.readFileSync('./corpora/business.txt', 'utf-8');
var humor = fs.readFileSync('./corpora/humor.txt', 'utf-8');
var politics = fs.readFileSync('./corpora/politics.txt', 'utf-8');
var science = fs.readFileSync('./corpora/science.txt', 'utf-8');
var tech = fs.readFileSync('./corpora/tech.txt', 'utf-8');

classifier.learn(arts, 'arts');
classifier.learn(business, 'business');
classifier.learn(humor, 'humor');
classifier.learn(politics, 'politics');
classifier.learn(science, 'science');
classifier.learn(tech, 'tech');

// console.log(classifier.categorize('Today on wall street enron closed it\'s doors for the last time. There was a massive case of money laundering which forced the large electic company to lay off thousands of employees.'));

fs.writeFileSync('src/bayes.json', classifier.toJson().toString());
