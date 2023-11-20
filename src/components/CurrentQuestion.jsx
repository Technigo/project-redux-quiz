import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToNextQuestion, submitAnswer } from "../reducers/quiz";
import { Summary } from "./Summary";

export const CurrentQuestion = () => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];

  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  const handleAnswer = (answerIndex) => {
    if (question.correctAnswerIndex === answerIndex) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }

    setTimeout(async () => {
      setSelectedAnswerIndex(null);
      dispatch(submitAnswer({ questionId: question.id, answerIndex }));
      dispatch(goToNextQuestion());
    }, 1500);
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (isQuizOver) {
    return <Summary />;
  }
  return (
    <div className="wrapper">
      <h1 className="question">{question.questionText}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} className="answers">
            <button
              className={
                index === selectedAnswerIndex
                  ? isCorrectAnswer
                    ? "buttonCorrect"
                    : "buttonWrong"
                  : "buttonChoise"
              }
              onClick={() => {
                setSelectedAnswerIndex(index);
                handleAnswer(index);
              }}
              disabled={isQuizOver}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <p className="questionLeft">
        Question number: {currentQuestionIndex + 1} out of {questions.length}
      </p>
    </div>
  );
};
