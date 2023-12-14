let scoreStr = localStorage.getItem("score");
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return `Score:Won:${score.win} Lost:${score.lost} Tie: ${score.tie}`;
  };

  showresult();
}

function computerchoice() {
  let randomNumber = Math.random() * 3;
  let c_choice = "";
  if (randomNumber <= 1) {
    c_choice = "Bat";
  } else if (randomNumber <= 2) {
    c_choice = "BALL";
  } else {
    c_choice = "Stump";
  }
  return c_choice;
}

function compteresult(uchoice, c_choice) {
  if (uchoice === "BAT") {
    if (c_choice === "BALL") {
      score.win += 1;
      return "User won";
    } else if (c_choice === "Stump") {
      score.lost += 1;
      return "computer won";
    } else {
      score.tie += 1;
      return "match tie";
    }
  } else if (uchoice === "BALL") {
    if (c_choice === "Stump") {
      score.win += 1;
      return "User won";
    } else if (c_choice === "Bat") {
      score.lost += 1;
      return "computer won";
    } else {
      score.tie += 1;
      return "match tie";
    }
  } else {
    if (c_choice === "Bat") {
      score.win += 1;
      return "User won";
    } else if (c_choice === "BALL") {
      score.lost += 1;
      return "computer won";
    } else {
      score.tie += 1;
      return "match tie";
    }
  }
}

function showresult(umsg, c_choice, resultmsg) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#u_Score").innerText = umsg ? `${umsg}` : " ";
  document.querySelector("#computer_Score").innerText = c_choice
    ? `Compter choosen ${c_choice}`
    : " ";
  document.querySelector("#Result").innerText = resultmsg || " ";
  document.querySelector("#score").innerText = score.displayScore();
  // alert(
  //   `${umsg} ,Compter choosen ${c_choice}\n${resultmsg}\n ${score.displayScore()}`
  // );
};

const Click_sound=new Audio();
Click_sound.src="Audios/click.mp3"

console.log(Click_sound);


