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
    <div>
      <h2>Here is a summary of your answers:</h2>
      <div>question: {question.id}</div>
      <div>
        ans:
        {answersArray.map((obj) =>
          console.log("Summ:", obj.isCorrect, correct)
        )}
      </div>
      <div>Corr: {correct}</div>
    </div>
  );
};
