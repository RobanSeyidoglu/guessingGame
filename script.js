let randomNumber = Math.floor(Math.random() * 19) + 1;
console.log(randomNumber);
let input = document.getElementsByClassName("guess")[0];
let gussing = document.getElementsByClassName("message")[0];
let check = document.getElementsByClassName("btn check")[0];
let body = document.body;
let questionMark = document.getElementsByClassName("number")[0];
let score = document.getElementsByClassName("score")[0];
let highscore = document.getElementsByClassName("highscore")[0];
let again = document.getElementsByClassName("btn again")[0];
check.onclick = function () {
  if (!parseInt(input.value)) {
    gussing.textContent = "No Number!";
  } else if (parseInt(input.value) === randomNumber) {
    gussing.textContent = "Correct Number!";
    body.style.backgroundColor = "green";
    questionMark.textContent = randomNumber;
    if (parseInt(score.innerHTML) > parseInt(highscore.innerHTML)) {
      highscore.innerHTML = score.innerHTML;
    }
  } else if (parseInt(input.value) < randomNumber) {
    gussing.textContent = "Too Low!";
    score.innerHTML = parseInt(score.textContent - 1);
  } else {
    gussing.textContent = "Too High!";
    score.innerHTML = parseInt(score.textContent - 1);
  }
  if (parseInt(score.textContent === 0)) {
    score.textContent = "You Lost The Game";
  }
};
again.onclick = function () {
  body.style.backgroundColor = "#201F20";
  score.innerHTML = 20;
  randomNumber = Math.floor(Math.random() * 19) + 1;
  console.log(randomNumber);
  questionMark.textContent = "?";
  input.value = "";
  gussing.textContent = "Start Gussing";
};
