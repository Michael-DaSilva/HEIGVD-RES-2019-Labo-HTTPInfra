$(function() {
   console.log("Loading hashtags");


   function loadHashtags() {
      $.getJSON("/api/hashtags/", function(hashtags) {
         console.log(hashtags);
         var message = "No hashtags :(";
         if (hashtags.length > 0) {
            message = hashtags[0].hashtag + " by " + hashtags[0].from;
         }
         $(".navbar-brand").text(message);
      });
   };

   loadHashtags();
   setInterval(loadHashtags, 2000);
});
