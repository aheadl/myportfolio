import * as ActionTypes from "./ActionTypes";


//ConfigureStore.dispatch

export const addFeedback = (firstName, lastName, phoneNum, email, agree, contactType, feedback  ) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: {
        firstName: firstName,
        lastName: lastName,
        phoneNum: phoneNum,
        email:email,
        agree: agree,
        contactType: contactType,
        feedback: feedback
    }
});