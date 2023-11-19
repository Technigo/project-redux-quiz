import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "./reducers/quiz";

import { CurrentQuestion } from "./components/CurrentQuestion";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentQuestion />
    </Provider>
  );
};

//NOTES
// My thought was to have one component that handles the questions,
// and display the options for the current question (incorrectly named "QuestionOne right now"). And then when "quizOver" is true,
// we show the "Summary" component.
// I had some troubles accessing the "answers" Array, but I managed to log it to
// the console at least .
// I did some basic styling, since that was mentioned in the requiremenst.
