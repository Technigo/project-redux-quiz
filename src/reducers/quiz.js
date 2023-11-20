import { createSlice } from "@reduxjs/toolkit";

const questions = [
  {
    id: 1,
    questionText: "What is the Latin name for the muscle group commonly known as the 'six-pack'?",
    options: ["A) Gluteus maximus", "B) Pectoralis major", "C) Rectus abdominis", "D) Deltoid"],
    correctAnswerIndex: 2
  },
  {
    id: 2,
    questionText: "Which muscle group is primarily engaged during a push-up?",
    options: ["A) Biceps", "B) Quadriceps", "C) Hamstrings", "D) Triceps"],
    correctAnswerIndex: 3
  },
  {
    id: 3,
    questionText: "Which leg muscle is responsible for bringing the leg inward toward the body?",
    options: ["A)Adductors", "B)Abductor", "C)Hamstrings", "D)Gluteus maximus"],
    correctAnswerIndex: 0
  }, {
    id: 4,
    questionText: "Which muscle is responsible for allowing movement at the elbow joint?",
    options: ["A) Biceps brachii", "B) Triceps brachii", "C) Deltoid", "D) Quadriceps"],
    correctAnswerIndex: 1
  }, {
    id: 5,
    questionText: "In human anatomy, what is the main function of the deltoid muscle?",
    options: ["A) Flexion of the knee", "B) Abduction of the arm", "C) Extension of the elbow", , "D) Plantarflexion of the foot"],
    correctAnswerIndex: 1
  }

];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  points: 0,
  isAnswerCorrect: null,
  showResult: false,
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {


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

      const isCorrect = question.correctAnswerIndex === answerIndex;

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect
      });

      if (isCorrect) {
        state.points += 1;
      }
    },

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },


    restart: () => {
      return initialState;
    }
  }
});

export const { goToNextQuestion, restart, submitAnswer } = quiz.actions;

export const selectPoints = (state) => state.quiz.points;