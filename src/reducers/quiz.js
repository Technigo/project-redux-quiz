import { createSlice } from "@reduxjs/toolkit";


const questions = [
  {
    id: 1,
    questionText: "How many galaxies are there in the observable universe?",
    questionImages: "/milkWay.jpg",
    options: ["100 Million", "200 Billion", "1 Billion", "10 Billion"],
    correctAnswerIndex: 1,
    explanation: "There are approximately 200 billion galaxies in the observable universe. This estimate is based on observations made by telescopes and other astronomical instruments. The observable universe refers to the portion of the universe that we can see from Earth, and it is constantly expanding as light from distant objects reaches us. The vast number of galaxies in the observable universe shows the immense scale and diversity of the cosmos."
  },
  {
    id: 2,
    questionText:"What type of galaxy is our Milky Way?",
    questionImages: "/milkWay2.jpg",
    options: ["An elliptical galaxy", "An irregulary galaxy", "A spiral galaxy", "A round galaxy"],
    correctAnswerIndex: 2,
    explanation: "Our Milky Way is classified as a spiral galaxy. This classification is based on its shape, which resembles a flat disk with spiral arms extending from a central bulge. Spiral galaxies are characterized by their distinct spiral structure, containing young stars, gas, and dust in their arms. They also have a central bulge that contains older stars. The classification of the Milky Way as a spiral galaxy is supported by observations of its structure and the presence of spiral arms."
  },
  {
    id: 3,
    questionText:"Which of these planets is the largest?",
    questionImages: '/planets.jpg',
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    optionsImages: ['/earth.jpg', '/mars.jpg', '/venus.jpg', '/jupiter.jpg'],
    correctAnswerIndex: 3,
    explanation: "Jupiter is the largest planet in our solar system. It has a diameter of about 143,000 kilometers, which is more than 11 times the diameter of Earth."
  },
  {
    id: 4,
    questionText:"Does cold exist?",
    questionImages: '/planets2.jpg',
    options: ["Of course, what kind of question is this?", "No, cold is the absense of heat.", "Yes, we have two different temperatures.", "Maybe"],
    correctAnswerIndex: 1,
    explanation: "Temperature is a measure of how much energy the particles of a particular object has. An object with a higher temperature has particles with more energy than an object with a lower temperature. There is no such thing as cold because cold is really just an absence of heat or energy"
  },
  {
    id: 5,
    questionText:"The coldest planet in our solar system is?",
    questionImages: '/milkWay3.jpg',
    options: ["Uranus", "Neptune", "Venus", "Mercury"],
    correctAnswerIndex: 0,
    explanation: "Uranus is the correct answer because it is the coldest planet in our solar system. It has a minimum temperature of -224 degrees Celsius (-371 degrees Fahrenheit), making it colder than Neptune, Venus, and all other planets in our solar system. Uranus' extreme coldness is due to its distance from the Sun and its unique composition, which includes a thick atmosphere of hydrogen and helium."
  }
];


const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  score: 0, // Added a score property to the state
  scoreThreshold: -10 // Set a score threshold to end the quiz
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
          "Could not find the question! Check to make sure you are passing the question id correctly."
        );
      }
    
      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }
    
      const isCorrect = question.correctAnswerIndex === answerIndex;
      const scoreChange = isCorrect ? 10 : -5; // Adjust points as needed
    
      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect
      });
    
      state.score += scoreChange;
    
      // Check if the score is below the threshold to end the quiz
      if (state.score < state.scoreThreshold) {
        state.quizOver = true;
      }
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
    }
  }
});

export const {submitAnswer, restart, goToNextQuestion, countQuestionsLeft} = 
quiz.actions;

export default quiz.reducer;