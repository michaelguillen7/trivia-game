var trivia = {
    initialScreen: "",
    correctCounter: 0,
    inCorrectCounter: 0,
    unAnsweredCounter: 0,
    clickSound: new Audio("assets/sounds/button-click.mp3"),
    gameHTML: "",
    questionsArray: [
                    "In what year did the first IBJJF World Jiu-Jitsu Championships take place?", "What is the Abu Dhabi Combat Championship?", "In which country did Brazilian Jiu-Jitsu originate?", "Mata Leon refers to:", "In an IBJJF tournment, passing the guard gets you:"],
    answerArray: [
                  ["1991", "1993", "1996", "1998"], ["A MMA event", "An annual submission grappling event", "A biennial submission grappling event", "A BJJ event hosted only in Abu Dhabi"], ["Canada", "Switzerland", "Thailand", "Japan"], ["A foot tickle", "Rear Naked Choke", "There is a lion on the mat", "Wearing shoes on the mat"], ["2 Points", "3 Points", "An instant win", "Dinner after the fight"],],
    correctAnswers: [
                    "C. 1996", "C. A biennial submission grappling event", "D. Japan", "B. Rear Naked Choke", "B. 3 Points"],
    imageArray: [
                "<img class='center-block img-right' src='assets/images/ibjjf-1996.png'>", "<img class='center-block img-right' src='assets/images/adcc.png'>", "<img class='center-block img-right' src='assets/images/japan.jpg'>", "<img class='center-block img-right' src='assets/images/mata-leon.jpg'>", "<img class='center-block img-right' src='assets/images/passing-guard.jpeg'>"],
    clock: "",
    questionCounter: 0,
    timeCounter: 20,
  };

  function startScreen(){
    trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Luta!</a></p>";
    $(".main-area").html(trivia.initialScreen);
  };
  
  function timer(){
    trivia.clock = setInterval(twentySeconds, 1000);
    function twentySeconds(){
      if(trivia.timeCounter === 0){
        timeOutLoss();
        clearInterval(trivia.clock);
      }
      if(trivia.timeCounter > 0) {
        trivia.timeCounter --;
      }
      $(".timer").html(trivia.timeCounter);
    }
  };

  function wait(){
    if(trivia.questionCounter < 4) {
      trivia.questionCounter ++;
      generateHTML();
      trivia.timeCounter = 20;
      timer();
    }
    else {
      finalScreen();
    }
  };
  
  function win(){
    trivia.correctCounter ++;
    trivia.gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p>" + trivia.imageArray[trivia.questionCounter];
    $(".main-area").html(trivia.gameHTML);
    setTimeout(wait, 4000);
  };
  
  function loss(){
    trivia.inCorrectCounter ++;
    trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ trivia.correctAnswers[trivia.questionCounter] + "</p>" + trivia.imageArray[trivia.questionCounter];
      $(".main-area").html(trivia.gameHTML);
      setTimeout(wait, 4000);
  };