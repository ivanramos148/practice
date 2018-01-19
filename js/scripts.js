function piglatin(userInput) {

  //Any characters from A-Z cannot communicate with the robot
  if (userInput.match(/[1-9]/i)) {

    //if user inputs thge 1 the out come will be boop
  }if (userInput === "1") {
      userInput = "boop";
      return userInput;

    //if the first letter constant piglatinify it
  }  else if (userInput === "0") {
    userInput = "beep"
    return userInput;
  }

    //Robot doesnt like that action
     else if (userInput % 3 === 0) {
       userInput = "I'm sorry, Dave. I'm afraid I can't do that"
       return userInput

      }
   }
$(document).ready(function() {
  var newArray = [];
  $("#userInput").submit(function(event) {
    var userInput1 = $("#userInput1").val().toLowerCase().split(/\b/);
    for (i=0; i<userInput1.length; i++) {
      newArray.push(piglatin(userInput1[i]));
    }

    //the beep boops will pop-up

    $("#answers").text(newArray.join(""));
      event.preventDefault();

    });
});
