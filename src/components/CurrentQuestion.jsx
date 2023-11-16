import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Options } from "./Options";
import { restart, goToNextQuestion, submitAnswer } from "../reducers/quiz";

export const CurrentQuestion = () => {
  const [index, setIndex] = useState();

  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const nextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  const restartQuiz = () => {
    dispatch(restart());
  };

  const clickButton = () => {
    setIndex(index);
    submit();
  };

  const submit = () => {
    dispatch(submitAnswer({ questionId: question.id, answerIndex: 1 }));
    console.log("submit", question.id, question.answerIndex);
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <p>question ID:{question.id}</p>
      <div>
        <button onClick={clickButton}>{question.options[0]}</button>
        <button onClick={clickButton}>{question.options[1]}</button>
        <button onClick={clickButton}>{question.options[2]}</button>
      </div>
      <button onClick={nextQuestion}>Next question please!</button>
      <button onClick={restartQuiz}>Restart the quiz</button>
    </div>
  );
};

// <Options />
// <button onClick={nextQuestion}>Next question please!</button>
// <div>
//   <input type="radio" name="btch" id="mbrooks" />
//   <label htmlFor="mbrooks">Meredith Brooks</label>
// </div>
// <div>
//   <input type="radio" name="btch" id="amoris" />
//   <label htmlFor="amoris">Alanis Morisette</label>
// </div>
// <div>
//   <input type="radio" name="btch" id="clove" />
//   <label htmlFor="clove">Courtney Love</label>
// </div>
// <div></div>
// <div></div>

//       <div>
//         {question.options.map((option) => (
//           <div key={option}>{option}</div>
//         ))}
//       </div>;
// //
