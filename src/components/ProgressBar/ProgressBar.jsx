import { useSelector } from "react-redux";
import "./ProgressBar.css";

const ProgressBar = () => {
  const quiz = useSelector((state) => state.quiz);

  let progress = 0;
  if (quiz.quizOver) {
    progress = 100;
  } else {
    progress = (quiz.currentQuestionIndex * 100) / quiz.questions.length;
  }

  return (
    <div className="ProgressBar">
      <div
        className="CurrentProgress"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
