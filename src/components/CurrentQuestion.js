import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux' // useDispatch
import {quiz} from "../reducers/quiz"
import Summary from './Summary'

export const CurrentQuestion = () => {
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const currentanswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex] || null );
  const answers = useSelector((state) => state.quiz.answers)
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]) // samma som att skriva state.quiz.questions[0] då currentquestion startar med 0
  const dispatch = useDispatch(); // we use this to update our redux store, like currentquestion to next question
  const [summary, setSummary ]= useState(false)

  const answerButtonClass = (index) => {
    if (currentanswer) {
      if (currentanswer.answerIndex === index) {
        if (currentanswer.isCorrect) {
          return { backgroundColor: "green", color:"white" };
        }
        return { backgroundColor: "red" , color: "white" };
      }
      return {};
    }
    return {};
  };
  if (summary){
     return(
     < Summary setSummary={setSummary}/>
     )}
     else{

      if (!question) {
        return <h1>Oh no! I could not find the current question!</h1>
      }
      return (
        <div className="quiz">
          <div className="QuizContent">
            <div className="QuestionSection">
              <div className='textContainer'>
                <div className="questions">
                  <h1>{currentQuestionIndex +1}- {question.questionText}</h1>
                  <h3>Progress: {currentQuestionIndex +1}/5</h3>
                </div>
                <div className="mapContainer">
                {question.options.map((option, index)=>{
                  return(
                    <div className="content">
                      <button 
                        style={answerButtonClass(index)}
                        onClick={()=> dispatch(quiz.actions.submitAnswer({questionId:question.id, answerIndex:index})) } 
                        disabled={answers.length === currentQuestionIndex +1}>
                        {option}
                      </button>
                    </div>
                    )
                  })
                }
                </div>
                <div className="nextButton">
                  {currentQuestionIndex === 4? <button onClick={()=>setSummary(true)}>Submit</button> : <button onClick={()=> dispatch(quiz.actions.goToNextQuestion()) }>Next Question⏩</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
     }
}





























