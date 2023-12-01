import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsMenu } from "./ButtonsMenu";
import { CurrentQuestion } from "./CurrentQuestion";
import { Header } from "./Header";
import ProgressBar from "./ProgressBar";
import { QuizSummary } from "./QuizSummary";
import { Timer } from "./Timer";

export const Controller = () => {
  const quiz = useSelector((state) => state.quiz);
  const [isFinishModalOpen, setFinishModalOpen] = useState(false);
  const [quizDuration, setQuizDuration] = useState(0);
  const [resetTiming, setResetTiming] = useState();
  const [timerRunning, setTimerRunning] = useState(true);
  const [currentQuizDuration, setCurrentQuizDuration] = useState(0);

  const handleShowFinishModal = () => {
    setFinishModalOpen(true);
    setTimerRunning(false);
  };
  
  const handleCloseFinishModal = (duration) => {
    setFinishModalOpen(false);
    setCurrentQuizDuration(duration);
  };

  const handleRestartTimer = () => {
    setQuizDuration(0);
    setResetTiming((prev) => !prev);
    setTimerRunning(true); 
  };

  const handleTimerStop = (timeInSeconds) => {
    setCurrentQuizDuration(timeInSeconds);
    if (!timerRunning) {
      console.log("Timer stopped. Additional logic here.");
    }
  };

  return (
    <div className="controller-container">
      <Header />
      <Timer onTimerStop={handleTimerStop} resetTiming={resetTiming} running={timerRunning} />
      <CurrentQuestion />
      <ProgressBar />
      <ButtonsMenu
        onShowFinishModal={handleShowFinishModal}
        onRestartTimer={handleRestartTimer}
      />

      <Modal
        isOpen={isFinishModalOpen}
        onRequestClose={() => handleCloseFinishModal(currentQuizDuration)}
        contentLabel="Quiz Finish"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="close-sticky">
          <button
            onClick={() => {
              handleCloseFinishModal(currentQuizDuration);
              setTimerRunning(true);
            }}
            className="close-button"
          >
            Close
          </button>
        </div>

        <QuizSummary quizDuration={currentQuizDuration} />
      </Modal>
    </div>
  );
};
