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
  let isCorrect = answersArray.map((obj) =>
    console.log("currQ isCorrect:", obj.isCorrect)
  );

  const isOver = useSelector((state) => state.quiz.quizOver);

  answersArray.map((obj) => (isCorrect = obj.isCorrect));

  const nextQuestion = () => {
    dispatch(goToNextQuestion());
    console.log("quizOver:", isOver);
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
        {isOver === false && <QuestionOne />}
        {isOver === true /*if quizOver is true */ && <Summary />}
      </div>
      <div className="footer">
        <button onClick={restartQuiz} className="restart">
          Restart the quiz
        </button>
        {isOver === false && (
          <button onClick={nextQuestion} className="next">
            Next question please!
          </button>
        )}
      </div>
    </div>
  );
};
