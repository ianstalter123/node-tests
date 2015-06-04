
var fs = require("fs")

console.log("before first read")
// way of reading / accessing files
fs.readFile(process.argv[2],function(err,content) {

	// console.log(err);
	var result = content.toString().split("\n");
	// console.log(result.length);

	console.log(result.length)


})

console.log("before second read")

fs.readFile(process.argv[2],function(err,content) {

	// console.log(err);
	var result1 = content.toString().split("\n");
	console.log(result1.length)


})

 
