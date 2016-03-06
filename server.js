var express = require('express');
var app = express();
var stt = require('./modules/watsonStt.js');
var textToPhoneme = require('./modules/textToPhenome.js');
var bodyParser = require('body-parser');
var multer  = require('multer')

var upload = multer({ dest: './uploads/' })
app.use(express.static('public'));

app.post('/',upload.single('theFile'), function( req, res ){
    
    var words = [];    
    console.log(req.file.filename);
    
    stt('./uploads/' + req.file.filename, function(err, result){
    
    wordsData = JSON.parse(result).results[0].alternatives[0].timestamps;
    console.log(wordsData);
    for(var i = 0; i < wordsData.length; i++){

    var faceAnimation = textToPhoneme(wordsData[i][0])
                                .faceIndex
                                .trim()
                                .split(" ")
                                .map(function(num){ return parseInt(num)});

     word = {
       word: wordsData[i][0],
       startTime: wordsData[i][1],
       endTime: wordsData[i][2],
       faceAnimation: faceAnimation 
     };
     words.push(word);
   }
   
   console.log(words);
   res.json(words);
 });
})


app.listen(3000);
console.log('live on 3000');