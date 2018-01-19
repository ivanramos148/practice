$(document).ready(function() {
  $("#beep").submit(function(event) {
    var beep = ["robo"];
    {
     var userInput = $("input#" + beep).val();
     $("." + beep).text(userInput);
   }

   $("#result").show();

   event.preventDefault();
 });
});
