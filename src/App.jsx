import { Provider} from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from './reducers/quiz';
import { Controller } from './components/Controller';


const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {

  return (
    //first wrap app in the Provider
    <Provider store={store}>
      <Controller/>
    </Provider>
  );
}
