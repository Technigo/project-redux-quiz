import { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { ButtonsMenu } from './ButtonsMenu';
import { CurrentQuestion } from './CurrentQuestion';
import { Header } from './Header';
import ProgressBar from './ProgressBar';
import { QuizSummary } from './QuizSummary';

export const Controller = () => {
  const quiz = useSelector((state) => state.quiz);
  const [isFinishModalOpen, setFinishModalOpen] = useState(false);

  const isQuizOver = quiz.quizOver;

  const handleShowFinishModal = () => {
    setFinishModalOpen(true);
  };

  const handleCloseFinishModal = () => {
    setFinishModalOpen(false);
  };

  return (
    <div className="controller-container">
      <Header />
      <CurrentQuestion />
      <ProgressBar />
      <ButtonsMenu onShowFinishModal={handleShowFinishModal} />
      <Modal
        isOpen={isFinishModalOpen}
        onRequestClose={handleCloseFinishModal}
        contentLabel="Quiz Finish"
        className="modal"
        overlayClassName="overlay"
      >
        <QuizSummary />
        <button onClick={handleCloseFinishModal}>Close</button>
      </Modal>
    </div>
  );
};
