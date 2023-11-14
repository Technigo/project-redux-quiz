import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { quiz } from "./reducers/quiz";
import { CurrentQuestion } from "./components/CurrentQuestion";
import ResultScreen from "./components/ResultScreen";

const store = configureStore({
  reducer: {
    quiz: quiz.reducer,
  },
});

const QuizApp = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);

  return <div>{!quizOver ? <CurrentQuestion /> : <ResultScreen />}</div>;
};

export const App = () => {
  return (
    <Provider store={store}>
      <QuizApp />
    </Provider>
  );
};
