import { useState } from "react";
import Modal from "react-modal";
import { useSelector,useDispatch } from "react-redux";
import { ButtonsMenu } from "./ButtonsMenu";
import { CurrentQuestion } from "./CurrentQuestion";
import { Header } from "./Header";
import ProgressBar from "./ProgressBar";
import { QuizSummary } from "./QuizSummary";
import {Timer} from "./Timer";

export const Controller = () => {
  const quiz = useSelector((state) => state.quiz);
  const [isFinishModalOpen, setFinishModalOpen] = useState(false);
  const [quizDuration, setQuizDuration] = useState(0);
  const [resetTiming, setResetTiming] = useState();

  const handleShowFinishModal = () => {
    setFinishModalOpen(true);
  };

  const handleCloseFinishModal = (duration) => {
    setFinishModalOpen(false);
    setQuizDuration(duration);
  };

  const handleRestartTimer = () => {
    setQuizDuration(0);
    setResetTiming((prev) => !prev);
  };

  return (
    <div className="controller-container">
      <Header />
      <Timer onTimerStop={setQuizDuration} resetTiming={resetTiming} />
      <CurrentQuestion />
      <ProgressBar />
      <ButtonsMenu onShowFinishModal={handleShowFinishModal} onRestartTimer={handleRestartTimer} />

      <Modal
        isOpen={isFinishModalOpen}
        onRequestClose={() => handleCloseFinishModal(quizDuration)}
        contentLabel="Quiz Finish"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="close-sticky">
          <button onClick={() => handleCloseFinishModal(quizDuration)} className="close-button">
            Close
          </button>
        </div>

        <QuizSummary quizDuration={quizDuration} />
      </Modal>
    </div>
  );
};
