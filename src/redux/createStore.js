import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import {feedbacks} from './feedbackreducer';

export const ConfigureStore = () => {
  const store = createStore(
    feedbacks,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); 
    return store;
};




