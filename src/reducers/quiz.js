import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: ' Which city is associate with tulips?', options: [ 'Dubai','Amsterdam','Paris','Caracas'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'What is the national emblem of Sweden?', options: ['Two-headed eagle','Three lions Cross', 'Three Crowns', 'Iron Cross'], correctAnswerIndex: 2 },
  { id: 3, questionText: 'What country has the largest Muslim population?', options: ['Libya', 'Indonesia','Iraq','Nigeria'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'What European country is divided into departments?', options: ['Switzerland', 'France', 'Germany', 'Sweden'], correctAnswerIndex: 1 },
  { id: 5, questionText: 'What is the name of the long, narrow country on South America’s Pacific coast?', options: ['Chile', 'Brazil', 'Colombia', 'Argentina'], correctAnswerIndex: 0 }
]

const initialState = {
  questions, //questions:questions
  answers: [], // this one is going to store our answers
  currentQuestionIndex: 0, // which question we currently in
  quizOver: false // Going to transform to true when the quiz ends
}

export const quiz = createSlice({ 
  name: 'quiz',
  initialState,
  reducers: { 
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    goToNextQuestion: (state) => { 
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true 
      } else {
        state.currentQuestionIndex += 1 
      }
    },

    restart: () => {
      return initialState
    }
  }
})
