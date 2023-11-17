import { useDispatch } from "react-redux";
import { restart, goToNextQuestion } from "../reducers/quiz";
import { MdOutlineRestartAlt } from "react-icons/md";
import { GrChapterNext } from "react-icons/gr";

export const ButtonsMenu = () => {

const dispatch = useDispatch();

const handleRestart = () => {
    dispatch(restart());
  }

  const handleNext = () => {
    dispatch(goToNextQuestion());
  }
  return (
    <div className="quiz-buttons-container">
        <button className="btn" onClick={handleRestart}>Restart <MdOutlineRestartAlt /></button>
        <button className="btn" onClick={handleNext}>Next <GrChapterNext /></button>
    </div>
  )
}
