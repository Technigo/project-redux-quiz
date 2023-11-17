import { useSelector } from "react-redux";
import "./CurrentQuestion.css";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="currentQuestion">
      <h1>Question: {question.questionText}</h1>
    </div>
  );
};
