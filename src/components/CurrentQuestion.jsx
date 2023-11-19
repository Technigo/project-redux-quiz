import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CurrentQuestion.css";

export const CurrentQuestion = () => {
  const [timer, setTimer] = useState(10); // Initial timer value in seconds
  const [answered, setAnswered] = useState(false); // Track if the question has been answered
  const quiz = useSelector((state) => state.quiz);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let countdown;
    if (timer > 0 && !answered) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    if (timer === 0 && !answered) {
      // If timer reaches 0 and the user hasn't answered, mark the question as answered incorrectly
      dispatch({ type: "ANSWER_QUESTION", payload: false }); // Update Redux state accordingly
      setAnswered(true); // Set answered to true to prevent further actions
    }

    return () => clearInterval(countdown);
  }, [timer, answered, dispatch]);

  const handleAnswer = (userAnswer) => {
    if (!answered) {
      // If the user answers within the time limit, handle the answer
      dispatch({ type: "ANSWER_QUESTION", payload: userAnswer }); // Update Redux state accordingly
      setAnswered(true); // Set answered to true to prevent further actions
      clearInterval(timer); // Clear the timer
    }
  };

  useEffect(() => {
    // Reset timer and answered state when the question changes
    setTimer(10); // Reset timer to initial value
    setAnswered(false); // Reset answered to false
  }, [question]);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>
        Question {quiz.currentQuestionIndex}/{quiz.questions.length}:{" "}
        {question.questionText}
      </h1>
      {timer > 0 && !answered && (
        <p>Time remaining: {timer} seconds</p>
      )}
      {!answered && (
        <button onClick={() => handleAnswer(true)}>Answer True</button>
      )}
      {!answered && (
        <button onClick={() => handleAnswer(false)}>Answer False</button>
      )}
      {answered && timer === 0 && (
        <p>Time's up! Your answer was not recorded in time.</p>
      )}
    </div>
  );
};
