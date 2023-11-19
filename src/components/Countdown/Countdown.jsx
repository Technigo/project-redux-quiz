import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import "./Countdown.css";

const Countdown = () => {
  const quizState = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  // state to store time in seconds
  const [time, setTime] = useState(10);

  // state when run out of time
  const [timeUp, setTimeUp] = useState(false);

  // countdown starts as time changes, stops when time = 0
  useEffect(() => {
    if (quizState.answers[quizState.currentQuestionIndex] === undefined) {
      const countdown = time >= 0 && setTimeout(() => setTime(time - 1), 1000);

      if (time <= 0) {
        clearInterval(countdown);
        setTimeUp(true);
        let incorrectAnswer = 0;
        if (
          incorrectAnswer ===
          quizState.questions[quizState.currentQuestionIndex].correctAnswerIndex
        ) {
          incorrectAnswer += 1;
        }
        dispatch(
          quiz.actions.submitAnswer({
            questionId: quizState.questions[quizState.currentQuestionIndex].id,
            answerIndex: incorrectAnswer,
          })
        );
      }
    }
  }, [time]);

  // reset timer when question changes
  useEffect(() => {
    setTime(10);
    setTimeUp(false);
    dispatch(quiz.actions.addTime(10 - time));
  }, [quizState.currentQuestionIndex]);

  return (
    <div className="Countdown">
      {timeUp ? <p>Time is up!</p> : <p>{time.toString()} seconds left</p>}
    </div>
  );
};

export default Countdown;
