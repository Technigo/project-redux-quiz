import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswer } from '../reducers/quiz';
import { FaRegCheckCircle } from 'react-icons/fa';


export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const answer = useSelector(
    (state) =>
      state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const dispatch = useDispatch();

  const handleAnswerClick = (answerIndex, questionId) => {
    dispatch(
      submitAnswer({
        answerIndex,
        questionId,
      })
    );
  };

  const withImage = 'optionsImages' in question;

  return (
    <div className="quiz-container">
      <h1 className="quiz-question">Question: {question.questionText}</h1>
      <div>
        {(
          <img src={question.questionImages} alt={question.options} />
        )}
      </div>
      <div className={`answers-container ${withImage ? 'with-image' : ''}`}>
        {/* answer options*/}
        {question.options.map((option, index) => (
          <button
            className="answers"
            key={index}
            onClick={() => handleAnswerClick(index, question.id)}
          >
            <FaRegCheckCircle />
            {withImage && (
              <img className="fixed-image-size"  src={question.optionsImages[index]} alt={option} />
            )}
            {option}
          </button>
        ))}
      </div>
      <div className="flip-card-container">
        {withImage && (
          <img
            className="img hidden"
            src={question.optionsImages[0]}
            alt={question.options[0]}
          />
        )}
        <p className="explanation hidden">{question.explanation}</p>
      </div>
      {answer && (
        <div className="correct-answer">
          {answer.isCorrect ? 'Correct!' : 'Incorrect'}
        </div>
      )}
    </div>
  );
};
