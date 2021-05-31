import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 1, questionText: 'What is the most common colour of toilet paper in France?', options: ['White', 'Yellow', 'Pink', 'Blue'], correctAnswerIndex: 2 },
  { id: 2, questionText: 'If you dug a hole through the centre of the earth starting from Wellington in New Zealand, which European country would you end up in?', options: ['France', 'Spain', 'Italy', 'Switzerland'], correctAnswerIndex: 1 },
  { id: 3, questionText: 'Native to the Caribbean, what sort of animal is the mountain chicken?', options: ['A frog', 'A butterfly', 'A bird', 'A beatle'], correctAnswerIndex: 0 },
  { id: 4, questionText: 'What is Scooby Doo’s full name?', options: ['Scooby Dooby', 'Scooby Doobert', 'Scooter Doo', 'Scoobert Doo'], correctAnswerIndex: 3 },
  { id: 5, questionText: 'Where was the fortune cookie invented?', options: ['Beijing', 'Hong Kong', 'San Fransisco', 'London'], correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    submitAnswer: (store, action) => {
      const { questionId, answerIndex } = action.payload
      const question = store.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      store.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    goToNextQuestion: (store) => {
      if (store.currentQuestionIndex + 1 === store.questions.length) {
        store.quizOver = true
      } else {
        store.currentQuestionIndex += 1
      }
    },

    restart: () => {
      return initialState
    }

  }
})
