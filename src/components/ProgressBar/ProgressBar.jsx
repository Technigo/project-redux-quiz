import { useSelector } from "react-redux";
import "./ProgressBar.css";

const ProgressBar = () => {
  const quiz = useSelector((state) => state.quiz);

  return (
    <div className="ProgressBar">
      <div
        className="CurrentProgress"
        style={{
          width: `${
            (quiz.currentQuestionIndex * 100) / quiz.questions.length
          }%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
