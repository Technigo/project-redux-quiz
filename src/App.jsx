import React from "react";
import { useSelector } from "react-redux";
import './App.css'

import CurrentQuestion from "./components/CurrentQuestion";
import AnswerOptions from "./components/AnswerOptions";
import Summary from "./components/Summary";
import Intro from "./components/Intro";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Countdown from "./components/Countdown/Countdown";

const App = () => {
  const quiz = useSelector((state) => state.quiz);

  return (
    <div className="quizApp">
      {quiz.quizOver ? (
        <Summary />
      ) : (
        <>
          {quiz.quizStarted ? (
            <>
              <CurrentQuestion />
              <Countdown />
              <AnswerOptions />
              <ProgressBar />
            </>
          ) : (
            <Intro />
          )}
        </>
      )}


    </div>
  );
};

export default App;
