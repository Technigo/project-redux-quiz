import { useSelector, useDispatch } from "react-redux";
import { selectPoints, restart } from "../reducers/quiz";

export const Summary = () => {
  const points = useSelector(selectPoints);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(restart());
  };

  return (
    <div className="restart">
      <p className="party">🎉</p>
      <h2>You got {points} points</h2>
      <button onClick={handleRestart}> Do the quiz again!</button>
    </div>
  );
};
