import { useSelector } from 'react-redux';
import '../../src/index.css';
import { useState } from 'react';

export function QuizSummary() {
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0)
  const quiz = useSelector((state) => state.quiz);
  const answer = quiz.answers[currentAnswerIndex];

  return (
    <section className='quiz-body'>
      <div className="score-summary">
        <h2 className= 'TotalScore'>Total Score: {quiz.score}</h2> 
        <h3 className='resultScore'>{quiz.score < 20 ? "You Lose 🙁" : "You win 🥳"} </h3> 
      </div>
      <h3>Quiz Summary</h3>
        <div className='summary-answers' key={answer.questionId}>
          <b className='question'>Question: {answer.question.questionText}</b>
          <p className='your-answer'>Your Answer: {answer.answer}</p>
          <p className='correct'>Correct Answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
          <p className='explanation'>Explanation: {answer.question.explanation}</p>
          <p style={{ color: answer.isCorrect ? "green" : "red" }}>{answer.isCorrect ? "Correct" : "Incorrect"}</p>
        </div>
        {/* buttons next and previous */}
        <div className='summary-btns'>
          <button 
            className={currentAnswerIndex <= 0 ? 'hidden-btn' : 'btn-previous'}
            disabled={currentAnswerIndex <= 0} 
            onClick={() => currentAnswerIndex > 0 && setCurrentAnswerIndex(currentAnswerIndex-1)}>Previous</button>
          <button 
            className={currentAnswerIndex >= (quiz.answers.length - 1) ? 'hidden-btn' : 'btn-next'}
            disabled={currentAnswerIndex >= (quiz.answers.length - 1)} 
            onClick={() => currentAnswerIndex < (quiz.answers.length - 1) && setCurrentAnswerIndex(currentAnswerIndex+1)}>Next</button>
        </div>
    </section>
  );
}
