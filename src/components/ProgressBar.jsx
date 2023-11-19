

import React from "react";
import { useSelector } from "react-redux";


const ProgressBar = () => {
  const totalPages = useSelector((state) => state.quiz.questions.length);
  const currentPage = useSelector((state) => state.quiz.currentQuestionIndex);

  // Calculate the percentage of completion
  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  return (
    <div className="progress-bar-container">
      <p>{currentPage + 1} of {totalPages} questions</p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
