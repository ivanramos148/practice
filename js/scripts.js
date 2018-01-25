//Business Logic
  function beep(number) {
    var newArray= [];
    for(var i=0; i <= number; i++) {
      if (i.toString().includes("1"))
        newArray.push("boop.")
      else if (i.toString().includes("0"))
        newArray.push("beep");
      else if (i % 3 === 0)
        newArray.push("I'm sorry, Dave. I'm afraid I can't do that");
      else
        newArray.push(i)
  }
  return newArray;
}

//User Interface
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userInput1 = $("#userInput1").val()
    var answers = beep(userInput1);
    $("#answers").text(answers);
  });
});
