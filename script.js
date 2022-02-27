'use strict';

/*
-- user first load screen show first question .
-- user can select  one answer from 4 answers list.
-- user can click the button submit to submit his selection and move for next question
-- if the user's selection  is correct adding  1 point  added to total score' and move for next question
-- if user didnt  select an answer  the submit button  will not  move hium to next question
-- user get's t othe last question and after submit his answer . total result show on the screen.

*/

const quiz = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.quiz-question');
const a_text = document.querySelector('.quiz-answers__a');
const b_text = document.querySelector('.quiz-answers__b');
const c_text = document.querySelector('.quiz-answers__c');
const d_text = document.querySelector('.quiz-answers__d');
const answersUlEls = document.querySelector('.quiz-answers');
const answersEls = document.querySelectorAll('.answer');
const quizButton = document.querySelector('.quiz-button');

const quizArray = [
  {
    question: 'What is the loudest animal on Earth?',
    a: 'crocodil',
    b: 'Sperm Whale',
    c: 'elephent',
    d: 'lion',
    correct: 'b',
  },
  {
    question: 'What is the most popular programming language in 2020?',
    a: 'Python',
    b: 'JavaScript',
    c: 'PHP',
    d: 'Java',
    correct: 'd',
  },
  {
    question: 'Who is the prime minister of Israel?',
    a: 'Benet',
    b: 'Bibi',
    c: 'Gantz',
    d: 'Amsalem',
    correct: 'a',
  },
  {
    question: 'How many hearts does an octopus have?',
    a: '3',
    b: '4',
    c: '7',
    d: '2',
    correct: 'a',
  },
  {
    question: 'How many legs does a spider have?',
    a: '10',
    b: '4',
    c: '6',
    d: '8',
    correct: 'd',
  },
];

//  keep track current question
let currentQuestionIndex = 0;
let score = 0;
renderQuestion();

function renderQuestion() {
  const currentQuestionData = quizArray[currentQuestionIndex];
  questionEl.innerText = currentQuestionData.question;
  a_text.innerText = currentQuestionData.a;
  b_text.innerText = currentQuestionData.b;
  c_text.innerText = currentQuestionData.c;
  d_text.innerText = currentQuestionData.d;
  deselectAnswers();
}

function getSelectedAnswer() {
  let userAnswer;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      userAnswer = answerEl.id;
    }
  });
  return userAnswer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

quizButton.addEventListener('click', () => {
  const userAnswer = getSelectedAnswer();
  if (userAnswer) {
    if (userAnswer === quizArray[currentQuestionIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === quizArray.length) {
      quiz.innerHTML = `<h2 class='quiz-score' >You answered corectly  ${score}/${quizArray.length} questions </h2> <button class="quiz-button" onclick="location.reload()" >Reload</button>`;
      currentQuestionIndex = quizArray.length - 1;
    }
    console.log(score);
    renderQuestion();
  } else {
  }
});
