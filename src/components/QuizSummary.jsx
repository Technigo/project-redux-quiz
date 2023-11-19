import { useSelector } from 'react-redux';

export function QuizSummary() {
  const quiz = useSelector((state) => state.quiz);
  console.log("quizSummary", quiz)
  return (
    <div>
      <h1>Quiz Summary</h1>
      {quiz.answers.map((answer) => (
        <div key={answer.questionId}>
          <h3>Question: {answer.question.questionText}</h3>
          <p>Your Answer: {answer.answer}</p>
          <p>Correct Answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
          <p>Explanation: {answer.question.explanation}</p>
          <p style={{ color: answer.isCorrect ? "green" : "red" }}>{answer.isCorrect ? "Correct" : "Incorrect"}</p>
        </div>
      ))}
    </div>
  );
}
