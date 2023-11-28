import { useSelector } from 'react-redux';

export function QuizSummary() {
  const quiz = useSelector((state) => state.quiz);
  // console.log("quizSummary", quiz);

  return (
    <section className='quiz-body'>
      <div className="score-summary">
        <h2 className= 'TotalScore'>Total Score: {quiz.score}</h2> 
        <h3 className='resultScore'>{quiz.score < 20 ? "You Lose 🙁" : "You win 🥳"} </h3> 
      </div>
      <h3>Quiz Summary</h3>
      {quiz.answers.map((answer) => (
        <div key={answer.questionId}>
          <b>Question: {answer.question.questionText}</b>
          <p>Your Answer: {answer.answer}</p>
          <p className='correct'>Correct Answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
          <p>Explanation: {answer.question.explanation}</p>
          <p style={{ color: answer.isCorrect ? "green" : "red" }}>{answer.isCorrect ? "Correct" : "Incorrect"}</p>
        </div>
      ))}

      
    </section>
  );
}
