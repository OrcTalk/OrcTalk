var CMUDict = require('cmudict').CMUDict;
var cmudict = new CMUDict();
var phoneme_str = cmudict.get('prosaic');

// var res = phoneme_str.split(" ");

// for(var i = 0; i < res.length; i++) {
// 	if (res[i].length > 1) {
// 		var temp = res[i].split("");
// 		console.log(temp);
// 	};
// }

