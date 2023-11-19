import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../reducers/quiz";

export const QuestionOne = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answersArray = useSelector((state) => state.quiz.answers);

  const dispatch = useDispatch();

  const isCorrect = answersArray.map((obj) => console.log(obj.isCorrect));

  const submit = (index) => {
    dispatch(submitAnswer({ questionId: question.id, answerIndex: index }));

    console.log("in submit ID", question.id);
    console.log("index", index);
    answersArray.map((obj) => console.log(obj.isCorrect));
  };

  return (
    <div>
      <div className="option-container">
        <div className="option-button one">
          <button onClick={() => submit(0)}>{question.options[0]}</button>
        </div>
        <div className="option-button two">
          <button onClick={() => submit(1)}>{question.options[1]}</button>
        </div>
        <div className="option-button three">
          <button onClick={() => submit(2)}>{question.options[2]}</button>
        </div>
        <div className="eval">
          {/*isCorrect === true && */} <div>that is correct</div>
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
