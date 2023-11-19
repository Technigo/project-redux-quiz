import React from "react";
import { useSelector } from "react-redux";

import CurrentQuestion from "./components/CurrentQuestion";
import AnswerOptions from "./components/AnswerOptions";
import Summary from "./components/Summary";
import Intro from "./components/Intro";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Countdown from "./components/Countdown/Countdown";

const App = () => {
  const quiz = useSelector((state) => state.quiz);

  return (
    <>
      <ProgressBar />
      {quiz.quizOver ? (
        <Summary />
      ) : (
        <>
          {quiz.quizStarted ? (
            <>
              <Countdown />
              <CurrentQuestion />
              <AnswerOptions />
            </>
          ) : (
            <Intro />
          )}
        </>
      )}
    </>
  );
};

export default App;
