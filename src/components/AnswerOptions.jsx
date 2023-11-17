import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import "./AnswerOptions.css";

export const AnswerOptions = () => {
  // get global state
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const [answer, setAnswer] = useState({
    selected: null,
    show: false
  });

  // state to disable multiple choice buttons
  const [ isDisabled, setIsDisabled ] = useState(false);

  // separate answer options into array of separate strings
  const options = question.options.slice(0, 4);

  // array of letters for multiple choice
  const letters = ["A. ", "B. ", "C. ", "D. "];

  // function to save selected answer and hide color for correct/incorrect 
  const handleClick = (e) => {
    setAnswer({
      selected: parseInt(e.target.value),
      show: false
    });
  };

  // function to show if answer is correct
  const handleCheck = () => {
    setAnswer({
      ...answer,
      show: true
    });
    setIsDisabled(true);
  };

  // function to submit answer, go to next question on clicking next btn
  const handleNext = () => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: answer.selected,
      })
    );
    dispatch(quiz.actions.goToNextQuestion());
    setAnswer({
      selected: null,
      show: false
    });
    setIsDisabled(false);
  };

  return (
    <div className="multiChoiceContainer">
      {options.map((option, index) => (
        <div key={index}>
          <button
            type="button"
            className={answer.show && question.correctAnswerIndex === index ? "correct multiChoice" : "multiChoice"}
            name={option}
            value={index}
            style={{ backgroundColor: answer.selected === index ? "pink" : null }}
            onClick={handleClick}
            disabled={isDisabled ? true : false}
          >
            {letters[index]}{option}
          </button>
        </div>
      ))}
      <button type="button" className="checkBtn" onClick={handleCheck} disabled={answer.selected != null ? false : true }>Check Answer</button>
      <button type="button" className="nextBtn" onClick={handleNext} disabled={answer.selected != null ? false : true }>Next</button>
    </div>
  );
};
