const quizQuestions = [
    {
        question: "Which HTML5 element is most appropriate for wrapping an independent, self-contained article or blog post?",
        options: ["<section>", "<div>", "<article>", "<aside>"],
        correct: 2
    },
    {
        question: "What is the primary operational change when setting box-sizing: border-box on an element?",
        options: [
            "Padding and borders are included inside the defined width/height.",
            "It completely removes external margins.",
            "It forces elements to stretch across 100% width.",
            "It automatically hides overflowing content."
        ],
        correct: 0
    },
    {
        question: "Which CSS Flexbox property aligns items along the cross-axis (perpendicular to the main axis)?",
        options: ["justify-content", "align-items", "flex-direction", "order"],
        correct: 1
    },
    {
        question: "What is the primary difference in scoping between variables declared with let versus var?",
        options: [
            "var is block-scoped, while let is global.",
            "let allows redeclaration, while var throws an error.",
            "let is block-scoped, while var is function-scoped.",
            "var cannot be hoisted at all."
        ],
        correct: 2
    },
    {
        question: "Which Array prototype method creates a new array populated with the results of calling a function on every element?",
        options: ["forEach()", "filter()", "reduce()", "map()"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// DOM Elements
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionProgress = document.getElementById("questionProgress");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");

const finalScore = document.getElementById("finalScore");
const feedbackText = document.getElementById("feedbackText");

function showScreen(screenToShow) {
    [startScreen, quizScreen, resultScreen].forEach(screen => {
        screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showScreen(quizScreen);
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    nextBtn.disabled = true;
    optionsContainer.innerHTML = "";

    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update Header Progress Indicators
    questionProgress.innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Set Text Content
    questionText.innerText = currentQuestion.question;

    // Render Option Buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.innerText = option;
        button.addEventListener("click", () => handleOptionClick(index, button));
        optionsContainer.appendChild(button);
    });
}

function handleOptionClick(selectedIndex, selectedButton) {
    if (hasAnswered) return;
    hasAnswered = true;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const optionButtons = optionsContainer.querySelectorAll(".option-btn");

    // Freeze all option choices
    optionButtons.forEach((btn) => btn.classList.add("checked"));

    if (selectedIndex === currentQuestion.correct) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
        // Highlight the correct answer for visual learning clarity
        optionButtons[currentQuestion.correct].classList.add("correct");
    }

    nextBtn.disabled = false;
}

function handleNextButton() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    progressBar.style.width = "100%";
    finalScore.innerText = `${score}/${quizQuestions.length}`;
    
    // Tailor feedback commentary based on performance thresholds
    if (score === quizQuestions.length) {
        feedbackText.innerText = "Flawless score! Perfect structural execution.";
    } else if (score >= quizQuestions.length * 0.6) {
        feedbackText.innerText = "Solid job! You have a firm grasp of the basics.";
    } else {
        feedbackText.innerText = "Keep reviewing! Consistent trial leads to master alignment.";
    }

    showScreen(resultScreen);
}

// Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNextButton);
restartBtn.addEventListener("click", startQuiz);
