import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const AnswerOptions = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const dispatch = useDispatch();

  // state to save selected answer
  const [ selectedAnswer, setSelectedAnswer ] = useState(null);
  // state for showing correct answer
  const [ showAnswer, setShowAnswer ] = useState(false);

  // separate answer options into array of separate strings
  const options = question.options.slice(0, 4);

  const handleChange = (e) => {
    setSelectedAnswer(parseInt(e.target.value));
    setShowAnswer(false);
  };

  const handleClick = () => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: selectedAnswer }));
    setShowAnswer(true);
  };

  let isCorrect;
  if (selectedAnswer === question.correctAnswerIndex) {
    isCorrect = "Correct!";
  } else {
    isCorrect = "Incorrect";
  };

  return (
    <div>
        {options.map((option, index) => (
          <div key={index} >
            <input type="radio" name="option" id={index} value={index} onChange={handleChange}/>
            <label htmlFor={index}>{option}</label>
          </div>
        ))}
        <button onClick={handleClick}>Check Answer</button>

        {showAnswer && (
          <p>
            {isCorrect}
          </p>
        )}
    </div>
  );
};