import { createSlice } from "@reduxjs/toolkit";

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: "What is the largest continent on Earth?",
    options: ["Africa", "Asia", "Europe", "North America"],
    correctAnswerIndex: 1, // Asia
  },
  {
    id: 2,
    questionText: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["India", "Australia", "Japan", "China"],
    correctAnswerIndex: 2, // Japan
  },
  {
    id: 3,
    questionText: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswerIndex: 0, // Nile
  },
  {
    id: 4,
    questionText: "Which of these cities is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correctAnswerIndex: 0, // Paris
  },
  {
    id: 5,
    questionText: "Mount Everest is located in which mountain range?",
    options: ["Rocky Mountains", "Alps", "Himalayas", "Andes"],
    correctAnswerIndex: 2, // Himalayas
  },
  {
    id: 6,
    questionText: "Which is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswerIndex: 3, // Pacific Ocean
  },
  {
    id: 7,
    questionText: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswerIndex: 2, // Canberra
  },
  {
    id: 8,
    questionText:
      "The Great Barrier Reef is located off the coast of which country?",
    options: ["South Africa", "Australia", "Mexico", "India"],
    correctAnswerIndex: 1, // Australia
  },
  {
    id: 9,
    questionText: "Which continent is known as the 'Frozen Continent'?",
    options: ["Antarctica", "Europe", "North America", "Asia"],
    correctAnswerIndex: 0, // Antarctica
  },
  {
    id: 10,
    questionText: "In which country would you find the city of Barcelona?",
    options: ["Portugal", "Spain", "Italy", "Greece"],
    correctAnswerIndex: 1, // Spain
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState;
    },
  },
});
