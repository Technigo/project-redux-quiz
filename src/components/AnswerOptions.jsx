import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const AnswerOptions = () => {
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

  // function to save selected answer and clear correct/incorrect message
  const handleChange = (e) => {
    setSelectedAnswer(parseInt(e.target.value));
    setShowAnswer(false);
  };

  // function to show if answer is correct
  const handleCheck = () => {
    setShowAnswer(true);
  };

  let isCorrect;
  if (selectedAnswer === question.correctAnswerIndex) {
    isCorrect = "Correct!";
  } else {
    isCorrect = "Incorrect";
  }

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
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            id={index}
            value={index}
            onChange={handleChange}
          />
          <label htmlFor={index}>{option}</label>
        </div>
      ))}
      <button onClick={handleCheck}>Check Answer</button>
      <button onClick={handleNext}>Next</button>

      {showAnswer && <p>{isCorrect}</p>}
    </div>
  );
};
