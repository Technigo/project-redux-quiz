import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const totalQuestions = useSelector((state) => state.quiz.questions.length);

  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>{`You got ${correctAnswers} out of ${totalQuestions} questions right.`}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default ResultScreen;
