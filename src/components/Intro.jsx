import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

const Intro = () => {
  const quizState = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(quiz.actions.startQuiz());
  };

  return (
    <>
      <h1>Intro</h1>
      <p>Hello and welcome to our quiz!</p>
      <p>
        There will be {quizState.questions.length} questions and you will have
        10 seconds to answer each question. Once you answer the timer will stop
        and you can see if you answered correctly before continuing onto the
        next question.
      </p>
      <p>Once you are ready press the START button below to begin.</p>
      <button onClick={handleStart}>START</button>
    </>
  );
};

export default Intro;
