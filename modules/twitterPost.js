var Twit = require('twit');

var twitter = new Twit({
  consumer_key: 'mwfgKtkRxVxnXmDXZjbpLsB7c',
  consumer_secret: 'vfsXtMLJe6Ol7v9e7jpWcTCwGK5Dzmv0wXTY4NWXZ20epqh96A',
  access_token: '83670442-iatdP2c7tJNtBEKNMiGlgz3XPpClZGrv6RnrjDQk4',
  access_token_secret: 'hDsKs4SRCp9aQqOHaju43cLHGkVEYSZRfftS8ynjN5Dju'
});

var filePath = ''

twitter.postMediaChunked({ file_path: filePath }, function (err, data, response) {
  
  console.log(data);

  var params = {
    status: 'Post from node.js script.',
    media_ids: [data.media_id_string]
  }

  twitter.post('statuses/update', params, function (err, data, response) {
    console.log(data)
  });
});