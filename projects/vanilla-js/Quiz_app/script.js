const tabs = document.querySelectorAll(".tab-btn");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
const saveScoreBtn = document.getElementById("save-score-btn");
const usernameInput = document.getElementById("username");
const highScoresEl = document.getElementById("high-scores");
const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("time");

let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let selectedCategory = "Linux";

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    selectedCategory = tab.getAttribute("data-category");
  });
});

startBtn.addEventListener("click", () => {
  startBtn.parentElement.classList.add("hide");
  fetchQuestions(selectedCategory);
});

restartBtn.addEventListener("click", () => {
  resultContainer.classList.add("hide");
  currentQuestion = 0;
  score = 0;
  startBtn.parentElement.classList.remove("hide");
});

async function fetchQuestions(category) {
  try {
    const response = await fetch(`https://quizapi.io/api/v1/questions?limit=10&category=${category}`, {
      headers: {
        "X-Api-Key": "bcAKCckpEi50DaQwFCr4rOAqWQQUBs0KPwCuvxJF"
      }
    });
    const data = await response.json();
    if (Array.isArray(data)) {
      questions = data.map(q => {
        const filteredKeys = Object.keys(q.answers).filter(key => q.answers[key] !== null);
        const options = filteredKeys.map(key => q.answers[key]);
        const correctIndex = filteredKeys.indexOf(q.correct_answer);
        return {
          question: q.question,
          options: options,
          answer: correctIndex
        };
      });
      showQuestion();
      quizContainer.classList.remove("hide");
    } else {
      questionEl.innerText = "Failed to fetch questions. Please try again!";
    }
  } catch (err) {
    questionEl.innerText = "Failed to fetch questions. Please try again!";
    console.error(err);
  }
}

function showQuestion() {
  resetState();
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => selectAnswer(index);
    optionsEl.appendChild(button);
  });
  startTimer();
  updateProgress();
}

function resetState() {
  optionsEl.innerHTML = "";
  nextBtn.classList.add("hide");
  clearInterval(timer);
  timeLeft = 15;
  timerEl.innerText = timeLeft;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      markAnswer(-1);
    }
  }, 1000);
}

function selectAnswer(selectedIndex) {
  clearInterval(timer);
  markAnswer(selectedIndex);
}

function markAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((button, index) => {
    if (index === q.answer) button.classList.add("correct");
    if (index === selectedIndex && index !== q.answer) button.classList.add("wrong");
    button.disabled = true;
  });
  if (selectedIndex === q.answer) score++;
  nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function updateProgress() {
  progressBar.style.width = ((currentQuestion) / questions.length) * 100 + "%";
}

function showResult() {
  quizContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreEl.innerText = score;
  displayHighScores();
}

saveScoreBtn.addEventListener("click", () => {
  const username = usernameInput.value || "Anonymous";
  highScores.push({ name: username, score });
  highScores.sort((a,b) => b.score - a.score);
  localStorage.setItem("highScores", JSON.stringify(highScores.slice(0,5)));
  displayHighScores();
});

function displayHighScores() {
  highScoresEl.innerHTML = highScores.map(item => `<li>${item.name} - ${item.score}</li>`).join("");
}
