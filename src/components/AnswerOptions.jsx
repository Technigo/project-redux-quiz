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

  // state to save selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // state for showing correct answer
  const [showAnswer, setShowAnswer] = useState(false);

  // separate answer options into array of separate strings
  const options = question.options.slice(0, 4);

  // array of letters for multiple choice
  const letters = ["A. ", "B. ", "C. ", "D. "];

  // function to save selected answer and clear correct/incorrect message
  const handleClick = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // function to show if answer is correct
  const handleCheck = () => {
    setShowAnswer(true);
  };

  // function to submit answer, go to next question on clicking next btn
  const handleNext = () => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: selectedAnswer,
      })
    );
    dispatch(quiz.actions.goToNextQuestion());
    setShowAnswer(false);
  };

  return (
    <div className="multiChoiceContainer">
      {options.map((option, index) => (
        <div key={index}>
          <button
            type="button"
            className={showAnswer && question.correctAnswerIndex === index ? "correct multiChoice" : "multiChoice"}
            name={option}
            value={option}
            style={{ backgroundColor: selectedAnswer === option ? "pink" : null }}
            onClick={handleClick}
          >
            {letters[index]}{option}
          </button>
        </div>
      ))}
      <button onClick={handleCheck}>Check Answer</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
