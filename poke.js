// script.js 
const questions = [ 
    { 
        question: "What type is Pikachu?", 
        choices: ["Fire", "Water", "Electric", "Grass"], 
        answer: 2 
    }, 
    { 
        question: "Which Pokémon evolves from Charmander?", 
        choices: ["Bulbasaur", "Charmeleon", "Squirtle", "Pidgey"], 
        answer: 1 
    }, 
    { 
        question: "What is the name of the Pokémon League in Kanto?", 
        choices: ["Indigo Plateau", "Silver Conference", "Orange League", "Johto League"], 
        answer: 0 
    } 
]; 
 
let currentQuestionIndex = 0; 
 
function startGame() { 
    currentQuestionIndex = 0; 
    document.getElementById('result').classList.add('hidden'); 
    showQuestion(questions[currentQuestionIndex]); 
} 
 
function showQuestion(question) { 
    document.getElementById('question').innerText = question.question; 
    const choicesContainer = document.getElementById('choices'); 
    choicesContainer.innerHTML = ''; 
 
    question.choices.forEach((choice, index) => { 
        const button = document.createElement('div'); 
        button.innerText = choice; 
        button.classList.add('choice'); 
        button.addEventListener('click', () => selectAnswer(index)); 
        choicesContainer.appendChild(button); 
    }); 
} 
 
function selectAnswer(index) { 
    const question = questions[currentQuestionIndex]; 
    const result = document.getElementById('result'); 
    if (index === question.answer) { 
        result.innerText = "Correct!"; 
    } else { 
        result.innerText = "Wrong! The correct answer was: " + question.choices[question.answer]; 
    } 
    result.classList.remove('hidden'); 
} 
 
document.getElementById('next-btn').addEventListener('click', () => { 
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) { 
        showQuestion(questions[currentQuestionIndex]); 
    } else { 
        document.getElementById('quiz-container').classList.add('hidden'); 
        document.getElementById('result').innerText = "Quiz Finished!"; 
        document.getElementById('result').classList.remove('hidden'); 
    } 
}); 
 
startGame();
