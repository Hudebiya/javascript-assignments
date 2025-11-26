//  QUIZ APP
var quiz = [
  {
    question: "1: What does HTML stand for?",
    option1: "Home Tool Markup Language",
    option2: "Hyper Text Markup Language",
    option3: "Hyperlinks and Text Markup Language",
    option4: "Hyper Text Makeup Language",
    answer: "Hyper Text Markup Language",
  },
  {
    question: "2: Which tag is used for the largest heading?",
    option1: "&lt h6 &gt",
    option2: "&lt heading &gt",
    option3: "&lt h1 &gt",
    option4: "&lt head &gt",
    answer: "&lt h1 &gt",
  },
  {
    question: "3: Which symbol is used for single-line comments in JavaScript?",
    option1: "#",
    option2: "//",
    option3: "&lt !-- --&gt",
    option4: "**",
    answer: "//",
  },
  {
    question: "4: Which keyword declares a variable?",
    option1: "var",
    option2: "make",
    option3: "set",
    option4: "create",
    answer: "var",
  },
  {
    question: "5: Which HTML tag is used to insert an image?",
    option1: "&lt image &gt",
    option2: "&lt img &gt",
    option3: "&lt pic &gt",
    option4: "&lt src &gt",
    answer: "&lt img &gt",
  },
  {
    question: "6: What does CSS stand for?",
    option1: "Computer Styling Sheet",
    option2: "Creative Style System",
    option3: "Cascading Style Sheets",
    option4: "Colorful Style Sheet",
    answer: "Cascading Style Sheets",
  },
  {
    question: "7: Which method prints output in the browser console?",
    option1: "print()",
    option2: "console.write()",
    option3: "console.log()",
    option4: "log.console()",
    answer: "console.log()",
  },
  {
    question: "8: JavaScript arrays are written with?",
    option1: "{}",
    option2: "[]",
    option3: "()",
    option4: "&lt &gt",
    answer: "[]",
  },
  {
    question: "9: Which operator is used for assignment?",
    option1: "=",
    option2: "==",
    option3: "===",
    option4: ":=",
    answer: "=",
  },
  {
    question: "10: Which function is used to convert a string to an integer?",
    option1: "parseInt()",
    option2: "int()",
    option3: "number()",
    option4: "stringToInt()",
    answer: "parseInt()",
  }
];

var questionBox = document.getElementById("questions");
var index = 0;
var score = 0;
var totalQuestions = quiz.length;

var timer = 10 * 60; 
var timerElement = document.getElementById("timer");
var timerInterval;

function startTimer() {
  timerInterval = setInterval(function () {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    timerElement.innerHTML = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

    if (timer <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

    timer--;
  }, 1000);
}

function renderQuiz() {
  if (index >= totalQuestions) {
    endQuiz();
    return;
  }

  let q = quiz[index];

  questionBox.innerHTML = `
    <h3>${q.question}</h3>

    <ul class="list-group">

      <li class="list-group-item">
        <input type="radio" name="answer" value="${q.option1}">
        ${q.option1}
      </li>

      <li class="list-group-item">
        <input type="radio" name="answer" value="${q.option2}">
        ${q.option2}
      </li>

      <li class="list-group-item">
        <input type="radio" name="answer" value="${q.option3}">
        ${q.option3}
      </li>

      <li class="list-group-item">
        <input type="radio" name="answer" value="${q.option4}">
        ${q.option4}
      </li>

    </ul>

    <button id="nextBtn" disabled onclick="nextQuestion()">Next</button>
  `;

  document.querySelectorAll("input[name='answer']").forEach(radio => {
    radio.addEventListener("change", function () {
      document.getElementById("nextBtn").disabled = false;
    });
  });
}

function nextQuestion() {
  let selected = document.querySelector("input[name='answer']:checked");

  if (!selected) return; 

  if (selected.value === quiz[index].answer) {
    score++;
  }

  index++;
  renderQuiz();
}

function endQuiz() {
  clearInterval(timerInterval); 

  questionBox.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p><b>Correct Answers: ${score} / ${totalQuestions}</b></p>
    <p><b>Percentage: ${Math.round((score / totalQuestions) * 100)}%</b></p>
  `;
}

renderQuiz();
startTimer();
