import { useSelector } from "react-redux";
import "./ProgressBar.css";

const ProgressBar = () => {
  const quizState = useSelector((state) => state.quiz);

  let progress = 0;
  if (quizState.quizOver) {
    progress = 100;
  } else {
    progress =
      (quizState.currentQuestionIndex * 100) / quizState.questions.length;
  }

  return (
    <div className="progressBar">
      <div
        className="currentProgress"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
