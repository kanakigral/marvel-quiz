const questions = [
    { question: "Who is known as the 'Genius, Billionaire, Playboy, Philanthropist'?", answer: "iron", hint: "He wears a high-tech red and gold suit!" },
    { question: "Which Infinity Stone is inside Loki’s scepter?", answer: "mind", hint: "It allows the wielder to control minds." },
    { question: "What is Captain America's shield made of?", answer: "vibranium", hint: "It comes from Wakanda." },
    { question: "What is Spider-Man’s real name?", answer: "peter", hint: "His last name is Parker." },
    { question: "Who is Thor’s mischievous brother?", answer: "loki", hint: "He is the God of Mischief." },
    { question: "Which Marvel movie introduced the Quantum Realm?", answer: "ant", hint: "The hero is small but mighty." },
    { question: "What metal is Ultron made of?", answer: "adamantium", hint: "It’s the same metal used in Wolverine’s claws." },
    { question: "What is Black Panther's real name?", answer: "tchalla", hint: "He is the King of Wakanda." },
    { question: "Which Marvel character is known as the Sorcerer Supreme?", answer: "strange", hint: "He is a master of the mystic arts." },
    { question: "What is the name of Thor's hammer?", answer: "mjolnir", hint: "It can only be lifted by those who are worthy." },
    { question: "Who is the Winter Soldier?", answer: "bucky", hint: "He is Captain America's best friend." },
    { question: "Which Marvel movie features the character Groot?", answer: "guardians", hint: "He is part of a team of intergalactic misfits." },
    { question: "What is the name of the villain in Avengers: Infinity War?", answer: "thanos", hint: "He seeks to balance the universe." },
    { question: "Which Marvel character is known for saying 'I am Groot'?", answer: "groot", hint: "He is a tree-like creature." },
    { question: "What is the name of the organization led by Nick Fury?", answer: "shield", hint: "It deals with espionage and superheroes." },
    { question: "Who is the Scarlet Witch's twin brother?", answer: "pietro", hint: "He is also known as Quicksilver." }
];

let currentQuestion = 0;
let score = 0; // Initialize score

function loadQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    document.getElementById("hint").textContent = ""; // Clear hint
    document.getElementById("message").textContent = ""; // Clear message
    document.getElementById("answerInput").value = ""; // Clear input
}

function showHint() {
    document.getElementById("hint").textContent = "Hint: " + questions[currentQuestion].hint;
}

function checkAnswer() {
    let userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    let correctAnswer = questions[currentQuestion].answer.toLowerCase();
    let message = document.getElementById("message");

    if (userAnswer.includes(correctAnswer)) {
        message.textContent = "Correct! 🎉";
        message.style.color = "green";
        score++; // Increment score

        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(loadQuestion, 1000);
        } else {
            message.textContent = `Congrats! You completed the quiz! Your score is ${score}/${questions.length}.`;
            animateScoreMessage();
        }
    } else {
        message.textContent = "Wrong! Try again.";
        message.style.color = "red";
    }
}

function skipQuestion() {
    let message = document.getElementById("message");
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        message.textContent = `Congrats! You completed the quiz! Your score is ${score}/${questions.length}.`;
        animateScoreMessage();
    }
}

// Add this function to animate the score message at the end
function animateScoreMessage() {
    const message = document.getElementById("message");
    message.style.transition = "all 0.7s cubic-bezier(.68,-0.55,.27,1.55)";
    message.style.transform = "scale(1.3) rotate(-3deg)";
    message.style.background = "linear-gradient(90deg, gold, #ff0000, gold)";
    message.style.color = "#222";
    message.style.border = "3px solid gold";
    message.style.borderRadius = "12px";
    message.style.padding = "18px 24px";
    setTimeout(() => {
        message.style.transform = "scale(1) rotate(0deg)";
        message.style.background = "none";
        message.style.color = "gold";
        message.style.border = "none";
        message.style.borderRadius = "0";
        message.style.padding = "0";
    }, 2000);
}

// Detect Enter key press and submit the answer
document.getElementById("answerInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// Add event listener for the skip button
const skipButton = document.getElementById("skipButton");
skipButton.addEventListener("click", skipQuestion);

// Load the first question when the page loads
window.onload = loadQuestion;