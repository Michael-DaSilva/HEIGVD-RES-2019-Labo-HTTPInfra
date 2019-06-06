var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send( generateHashtags() );
});

app.get('/test', function(req,res){
    res.send("Test");
});

app.listen(3000, function(){
    console.log('Accepting HTTP requests on port 3000');
});

function generateHashtags(){
  var numberOfHashtags = chance.integer({
    min: 0,
    max: 10
  });
  console.log(numberOfHashtags);
  var hashtags = [];
  for (var i = 0; i < numberOfHashtags; i++) {
    var expr = chance.hashtag();
    var user = chance.twitter();
    hashtags.push({
      hashtag: expr,
	  from: user
    });
  };
  console.log(hashtags);
  return hashtags;
}
