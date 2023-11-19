import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Summary } from "./Summary";
import { QuestionOne } from "./QuestionOne";
import { restart, goToNextQuestion, submitAnswer } from "../reducers/quiz";

export const CurrentQuestion = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answersArray = useSelector((state) => state.quiz.answers);
  const isCorrect = answersArray.map((obj) => console.log(obj.isCorrect));

  answersArray.map((obj) => (isCorrect = obj.isCorrect));
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const nextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  const restartQuiz = () => {
    dispatch(restart());
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="quiz-container">
      <div className="header">
        <h1>The Music Quiz</h1>
      </div>
      <div className="question-options">
        {/* if quizOver is false &&*/ <QuestionOne />}
      </div>
      <div className="footer">
        <button onClick={nextQuestion} className="next">
          Next question please!
        </button>
        <button onClick={restartQuiz} className="restart">
          Restart the quiz
        </button>
      </div>
      <div>
        {1 === 1 /*if quizOver is true */ && <Summary />}
        <p>question ID:{question.id}</p>
        <p>answerIndex:{question.answerIndex}</p>
        <p>answer:{question.answer}</p>
        <p>qiuz over:{quizOver}</p>
      </div>
    </div>
  );
};
