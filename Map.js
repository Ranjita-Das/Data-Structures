console.log("testing");

//JS Objects can be used as Map itself by using the property value pairs of objects as key value pairs of maps.

//Program for counting the occurence of words in a  sentence

 var x ="Who let the dogs out? who? Who? Who?"

 var input = x.toLowerCase();
 var arrayOfWords = input.replace(/\.$/, "").split(/[!?,: .]+/);
 var mapOfWords = new Object();
 arrayOfWords.forEach(function (key) {
 if (mapOfWords.hasOwnProperty(key)) {
 mapOfWords[key]++;
 } else {
 mapOfWords[key] = 1;
 }
 });
 console.log(mapOfWords);
