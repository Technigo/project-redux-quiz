// ButtonsMenu.js
import { GrChapterNext } from 'react-icons/gr';
import { MdOutlineRestartAlt } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { goToNextQuestion, restart } from '../reducers/quiz';

export const ButtonsMenu = ({ onShowFinishModal, onRestartTimer }) => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  const handleRestart = () => {
    dispatch(restart());
    onRestartTimer(); 
  };

  const handleNext = () => {
    dispatch(goToNextQuestion());
  };

  const handleFinish = () => {
    onShowFinishModal();
  };
  
  return (
    <section className="quiz-buttons-container">
      <button className="btn" onClick={handleRestart}>
        Restart <MdOutlineRestartAlt />
      </button>
      <button className="btn" onClick={quiz.currentQuestionIndex === quiz.questions.length - 1 ? handleFinish : handleNext}>
        {quiz.currentQuestionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next'} <GrChapterNext />
      </button>
    </section>
  );
};
