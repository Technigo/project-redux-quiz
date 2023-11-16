import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart, goToNextQuestion, submitAnswer } from "../reducers/quiz";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(restart());
  }

  const handleNext = () => {
    dispatch(goToNextQuestion());
  }

  const handleAnswerClick = (answerIndex, questionId) => {
    dispatch(submitAnswer({
      answerIndex,
      questionId,
    }))
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-question">Question: {question.questionText}</h1>
      <div className="answers-container">
        {question.options.map((option, index) => (
          <button className="answers" key={index} onClick={() => handleAnswerClick(index, question.id)}>
            {option}
          </button>
        ))}
      </div>
      <div className="flip-card-container">
        <img className="img hidden"></img>
        <p className="explanation hidden">{question.explanation}</p>
      </div>
      {/* transfer buttons to a different component later on? */}
      <div className="quiz-buttons-container">
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
