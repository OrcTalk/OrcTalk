var CMUDict = require('cmudict').CMUDict;
var cmudict = new CMUDict();
var phoneme_str;


// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
	console.log('Usage: node ' + process.argv[1] + ' FILENAME');
	process.exit(1);
}

// Read the file and print its contents.
var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;

	var messageArray = data.split(" ");

	for(var i = 0; i < messageArray.length; i++) {
		phoneme_str = cmudict.get(messageArray[i]);
		console.log(messageArray[i] + ": " + phoneme_str)
	}
});