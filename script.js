const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const exitButton = document.getElementById('exit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let correctAnswersTest = -9;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
exitButton.addEventListener('click', exitPoints)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        exitButton.innerText = 'Exit'
        exitButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        correctAnswersTest = correctAnswersTest + 1;
    } else {
        element.classList.add('wrong')
    }
}

function exitPoints(exitText) {
    questionContainerElement.classList.add('hide')
    clearStatusClass(document.body)
    exitButton.classList.add('hide')
    richtigeProzent = correctAnswersTest / 9
    alert("Richtige Antworten: " + correctAnswersTest + " Anzahl der Fragen: 9, " + richtigeProzent + "%Richtig")
    startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Wer ermordete den Österreichischen Thronfolger?',
        answers: [
            { text: 'Gavrilio Princip', correct: true},
            { text: 'Julius Caesar', correct: false},
            { text: 'Johann Veit', correct: false},
            { text: 'Francis Gaut', correct: false},

        ]
    },
    {
        question: 'Wann startete der erste Weltkrieg?',
        answers: [
            { text: '27. Juli 1914', correct: false},
            { text: '27. Juni 1914', correct: false},
            { text: '28. Juli 1915', correct: false},
            { text: '28. Juli 1914', correct: true},

        ]
    },
    {
        question: 'Wer war der deutsche Kaiser?',
        answers: [
            { text: 'Kaiser Franz der 6', correct: false},
            { text: 'Kaiser Augustus der 1', correct: false},
            { text: 'Kaiser Friedrich der 1', correct: false},
            { text: 'Kaiser Wilhelm der 2', correct: true},

        ]
    },
    {
        question: 'Wo war das Attentat auf den Österreichischen Thronfolger?',
        answers: [
            { text: 'Sarambaia', correct: false},
            { text: 'Sarajevo', correct: true},
            { text: 'Carbonara', correct: false},
            { text: 'Estalvia', correct: false},

        ]
    },
    {
        question: 'Wie hieß der Bund zwischen Frankreich, Russland und Großbritannien?',
        answers: [
            { text: 'Entente', correct: true},
            { text: 'Antante', correct: false},
            { text: 'Otonte', correct: false},
            { text: 'Utunte', correct: false},

        ]
    },
    {
        question: 'Wie hieß der Präsident der vereinigten Staaten in 1914',
        answers: [
            { text: 'William Howard Taft', correct: false},
            { text: 'George Washington', correct: false},
            { text: 'Woodrow Wilson', correct: true},
            { text: 'Thomas Jefferson', correct: false},

        ]
    },
    {
        question: 'Wie hießen die Ereignisse um den Anfang des ersten Weltkriegs?',
        answers: [
            { text: 'Julikrise', correct: true},
            { text: 'Junikrise', correct: false},
            { text: 'Januarkrise', correct: false},
            { text: 'Weltkrise', correct: false},

        ]
    },
    {
        question: 'Welches Land wechselte im 1. Weltkrieg die Seiten?',
        answers: [
            { text: 'Russland', correct: false},
            { text: 'Deutschland', correct: false},
            { text: 'Italien', correct: true},
            { text: 'Argentinien', correct: false},

        ]
    },
    {
        question: 'Wie hieß der Sultan des Osmanischen Reichs?',
        answers: [
            { text: 'Aurelius der 11', correct: false},
            { text: 'Mehmed der 5', correct: true},
            { text: 'Augustus der 9', correct: false},
            { text: 'Franz der 3', correct: false},

        ]
    }
]

