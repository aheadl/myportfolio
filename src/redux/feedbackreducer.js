import * as ActionTypes from './ActionTypes';
import { Feedback } from '../shared/feedback';


  export const feedbacks = (state = Feedback, action) => {
    switch (action.type) {
      case ActionTypes.ADD_FEEDBACK:
        const feedback = action.payload;
        feedback.id = state.length;
        feedback.date = new Date().toISOString();
        const rtnfeedback = state.concat(feedback);
        console.log(rtnfeedback);
        return rtnfeedback;
      default:
        return state;
    }
  };


