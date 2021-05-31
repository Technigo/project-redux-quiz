import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quiz } from '../reducers/quiz'

import Button from './Button'
import Options from './Options'
 
const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex)
  const answers = useSelector((store) => store.quiz.answers)
  
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const questionAnswered = () => {
    if (answers.length === question.id) {
      return true
    } else {
			return false
		} 
  }

  const handleOnClickNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  
  return (
    <div className="question-container">
      <h1 className="current-question">Question {question.id} / 5</h1>
      <h2 className="question-text">{question.questionText}</h2>
      <Options />
      <Button 
        className="button"
        onClick={() => handleOnClickNextQuestion()}
        style={{ background: '#c3bef0'}}
        type="button"
        disabled={!questionAnswered()}
        buttonText={currentQuestion === 4 ? 'Summary' : 'Next Question'}
      />
    </div>
  )
}

export default CurrentQuestion
