import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../reducers/quiz";

export const QuestionOne = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const submit = (index) => {
    dispatch(submitAnswer({ questionId: question.id, answerIndex: index }));

    console.log("in submit ID", question.id);
    console.log("index", index);
  };

  return (
    <div>
      <b> In Q1 component</b>
      <div>
        <div className="option-button">
          <button onClick={() => submit(0)}>{question.options[0]}</button>
        </div>
        <div className="option-button">
          <button onClick={() => submit(1)}>{question.options[1]}</button>
        </div>
        <div className="option-button">
          <button onClick={() => submit(2)}>{question.options[2]}</button>
        </div>
      </div>
    </div>
  );
};

// {question.options.map((option) => (
//   <div key={option}>
//     <button onClick={() => submit(option)}>{option}</button>
//   </div>
// ))}
