import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // useDispatch
import {quiz} from "../reducers/quiz"

const Summary = ({setSummary})=>{
  const dispatch = useDispatch();
    const answers = useSelector((state) => state.quiz.answers)
    const questions = useSelector((state) => state.quiz.questions)
    const correct = questions[0].options[questions[0].correctAnswerIndex]

  return(
  <div className="summarySection">
    <div className="container">
      <h1>Look your results 🗒️</h1>
      <div ClasName="text-content"> 
        {answers.map((answers) => (
          <>
          <p className="title">Question:</p><p>{answers.question.questionText}</p>
          <p className="title" >You chose:</p><p>{answers.answer} {answers.isCorrect ? "✅" : "❌"}   </p>
          <p>Correct Answer: {answers.question.options[answers.question.correctAnswerIndex]}</p>
          </>
        ))}
        <button onClick={()=> {
          dispatch(quiz.actions.restart())
          setSummary(false)
          } }>Restart🔄
        </button>
      </div>
    </div>
  </div>
  )
}

export default Summary


