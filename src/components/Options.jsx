import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../reducers/quiz";

export const Options = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();
  let singleOption = "";
  const submit = (option) => {
    dispatch(submitAnswer({ quistionId: option.id, answerIndex: option }));
    singleOption = option;
    console.log("in submit");
    // console.log("single option", singleOption);
  };

  return (
    <div>
      <b> In Options component</b>
      {question.options.map((option) => (
        <div key={option}>
          <button onClick={submit(option)}>{option}</button>
        </div>
      ))}
    </div>
  );
};

//when choosing - write to global state from here
