import React from "react";
import { useSelector } from "react-redux";
import "./CurrentQuestion.css";

export const CurrentQuestion = () => {
  const quizState = useSelector((state) => state.quiz);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="currentQuestion">
      <div className="questionIndex">
        <h1>
          Question {quizState.currentQuestionIndex}/{quizState.questions.length}
        </h1>
      </div>

      <div className="questionImage">
        <img src={question.image} />
      </div>
      <div className="questionText">
        <h2>{question.questionText}</h2>
      </div>
    </div>
  );
};

export default CurrentQuestion;
