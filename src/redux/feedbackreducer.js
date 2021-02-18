import * as ActionTypes from './ActionTypes';

import { Feedback } from '../shared/feedback';
import {ActionCreators} from './ActionCreators';
import {InitialFeedback} from './Initialfields';


const myFeedback = [
  {
    id: 0,
    firstName: "Ann1",
    lastName: "Headley",
    phone: "9085555555",
    email: "aheadley@yahoo.com",
    agree: false,
    contactType: "Phone",
    feedback: "Sample feedback",
  },
  {
    id: 1,
    firstName: "Amy",
    lastName: "Kuent",
    phone: "9085555556",
    email: "amy@yahoo.com",
    agree: false,
    contactType: "Email",
    feedback: "Sample feedback",
  },
];

const testFeedback = {
  firstName: "Mickey",
  lastName: "Kent",
  phone: "9085555556",
  email: "mickey@yahoo.com",
  agree: false,
  contactType: "By phone",
  feedback: "Mickey feedback",
};

  export const feedbacks = (state = Feedback, action) => {
    //action.type = ActionTypes.ADD_FEEDBACK;

    //let newFeedback = [];
    switch (action.type) {
      case ActionTypes.ADD_FEEDBACK:
     
        const feedback = action.payload;
        console.log("feedback is ", feedback);
        feedback.id = state.length;
        feedback.date = new Date().toISOString();
        const rtnfeedback = state.concat(feedback);
        console.log(rtnfeedback);
        //newFeedback.push(rtnfeedback);

        return rtnfeedback;

      default:
        console.log("in default action");
        console.log("action type is: ", action.type);
        const feedback1 = testFeedback;
        console.log("feedback is ", feedback1);
        feedback1.id = state.length;
        feedback1.date = new Date().toISOString();
        return state.concat(feedback1);
        //return state;
    }
  };


