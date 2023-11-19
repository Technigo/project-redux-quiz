import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Options } from "./Options";
import { Summary } from "./Summary";
import { QuestionOne } from "./QuestionOne";
import { restart, goToNextQuestion, submitAnswer } from "../reducers/quiz";

export const CurrentQuestion = () => {
  // const [index, setIndex] = useState();

  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answersArray = useSelector((state) => state.quiz.answers);
  const isCorrect = answersArray.map((obj) => console.log(obj.isCorrect));
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const nextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  const restartQuiz = () => {
    dispatch(restart());
  };

  // const clickButton = () => {
  //   setIndex(index);
  //   submit();
  // };

  const submit = (index) => {
    dispatch(submitAnswer({ questionId: question.id, answerIndex: index }));
    console.log(
      "question ID:",
      question.id,
      ", answerIndex:",
      question.answerIndex,
      ", index:",
      index
    );
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="quiz-container">
      <div className="header">
        <h1>The Music Quiz</h1>
      </div>
      <div className="question">
        <h2>{question.questionText}</h2>
      </div>

      <div className="question-options">
        {/*question.id === quizOver is false && <QuestionOne />*/}
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
        {1 === 1 && <Summary />}
        <p>question ID:{question.id}</p>
        <p>answerIndex:{question.answerIndex}</p>
        <p>answer:{question.answer}</p>
        <p>qiuz over:{quizOver}</p>
      </div>
    </div>
  );
};

// <div>
//   <div className="option-button">
//     <button onClick={() => submit(0)}>{question.options[0]}</button>
//   </div>
//   <div className="option-button">
//     <button onClick={() => submit(1)}>{question.options[1]}</button>
//   </div>
//   <div className="option-button">
//     <button onClick={() => submit(2)}>{question.options[2]}</button>
//   </div>
// </div>

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
