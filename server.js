var stt = require('./modules/watsonStt.js');
var textToPhoneme = require('./modules/textToPhenome.js');

var words = [];
//textToPhoneme('after', function(err, result){ console.log(err,result); });
stt('./testSample.wav', function(err, result){
  wordsData = JSON.parse(result).results[0].alternatives[0].timestamps;
  
  for(var i = 0; i < wordsData.length; i++){

  var faceAnimation = textToPhoneme(wordsData[i][0])
                               .faceIndex
                               .trim()
                               .split(" ")
                               .map(function(num){ return parseInt(num)});

    word = {
      word: wordsData[i][0],
      time: wordsData[i][1],
      timeEnd: wordsData[i][2],
      faceAnimation: faceAnimation 
    };
    words.push(word);
  }
  console.log(words);
});
