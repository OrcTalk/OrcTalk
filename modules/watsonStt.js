var request = require('request');
var watson = require('watson-developer-cloud');
var fs = require('fs');

var speech_to_text = watson.speech_to_text({
  username: 'b987e155-edd0-4a66-b692-7aa7d395a240',
    password: 'iab6XcWleEE1',
    version: 'v1',
    url: 'https://stream.watsonplatform.net/speech-to-text/api'
});

module.exports = function(audioFile, callback) {
  var params = {
    // From file
    audio: fs.createReadStream(audioFile),
    content_type: 'audio/wav; rate=44100',
    timestamps: true
  };

  speech_to_text.recognize(params, function(err, res) {
    if (err)
    console.log(err);
    else{
      var result = JSON.stringify(res, null, 2)
      callback(err, result);
    }
  });
}
