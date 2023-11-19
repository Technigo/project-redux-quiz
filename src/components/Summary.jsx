import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Summary = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answersArray = useSelector((state) => state.quiz.answers);
  let correct;
  answersArray.map((obj) => (correct = obj.isCorrect));

  return (
    <div className="summary-container">
      <h2>Here is a summary of your answers:</h2>
      <div>
        {answersArray.map((obj) => (
          <div key={obj.questionId} className="summary-answers">
            <span className="question-no">Question: {obj.questionId}</span>
            <span className="is-correct">
              {(obj.isCorrect === true && " ✅") ||
                (obj.isCorrect === false && " ❌")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
