import { chatQuestions } from "./chat-questions.js";
let chatQuestionsLength = chatQuestions.length;
console.log(chatQuestionsLength);
let selectAtRandom = chatQuestions[Math.floor(Math.random() * chatQuestions.length)];
console.log(selectAtRandom);
