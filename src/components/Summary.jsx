import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Summary = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answersArray = useSelector((state) => state.quiz.answers);
  let correct;
  answersArray.map((obj) => (correct = obj.isCorrect));

  //   const
  return (
    <div>
      Summary
      <div>question: {question.id}</div>
      <div>
        ans:{" "}
        {answersArray.map((obj) =>
          console.log("Summ:", obj.isCorrect, correct)
        )}
      </div>
      <div>Corr: {correct}</div>
    </div>
  );
};
