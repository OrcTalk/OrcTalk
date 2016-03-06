CMUDict = require('cmudict').CMUDict;
var cmudict = new CMUDict();
var phoneme_str;
var stringarray = ["AA","AE","AH","AO","AW","AY","B","CH","D","DH","EH","ER","EY","F","G","HH","IH","IY","JH","K","L","M","N","NG","OW","OY","P","R","S","SH","T","TH","UH","UW","V","W","Y","Z","ZH"];
var phoneme2face = [1,3,4,5,2,1,4,5,6,7,3,6,4,3,6,2,7,4,1,7,5,7,7,4,2,6,3,4,7,5,7,2,6,4,1,5,3,2,1];

module.exports = function(word){
  phoneme_str = cmudict.get(word);

  var k = phoneme_str.split(" ");
  var phoneme_app = "";
  var face_app = "";
  for (j = 0; j < k.length; j++) {
    var phoneme = k[j];
    var withNoDigits = phoneme.replace(/[0-9]/g, '');
    phoneme_app = phoneme_app + " " + withNoDigits;
    face_app = face_app + " " + phoneme2face[stringarray.indexOf(withNoDigits)];
  }
  return { phenome: phoneme_app, faceIndex: face_app};
}
