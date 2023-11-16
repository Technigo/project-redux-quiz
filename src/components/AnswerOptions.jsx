import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const AnswerOptions = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const dispatch = useDispatch();

  // state to save selected answer
  const [ selectedAnswer, setSelectedAnswer ] = useState("");

  // separate answer options into array of separate strings
  const options = question.options.slice(0, 4);

  const handleChange = (e) => {
    setSelectedAnswer(parseInt(e.target.value));
  };

  const handleClick = () => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: selectedAnswer }));
  };

  return (
    <div>
        {options.map((option, index) => (
          <div key={index} >
            <input type="radio" name="option" id={index} value={index} onChange={handleChange}/>
            <label htmlFor={index}>{option}</label>
          </div>
        ))}
        <button onClick={handleClick}>Next</button>
    </div>
  );
};