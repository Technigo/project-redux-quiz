import { useSelector } from 'react-redux';

export function QuizSummary() {
  const quiz = useSelector((state) => state.quiz);
  console.log("quizSummary", quiz)
  return (
    <div className='quiz-body'>
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
    </div>
  );
}
