import * as ActionTypes from "./ActionTypes";
//action creators return an action / object
//receives payload
//use to execute asynchronous code

//ConfigureStore.dispatch

export const addFeedback = (firstName, lastName, phone, email, agree, contactType, feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email:email,
        agree: agree,
        contactType: contactType,
        feedback: feedback
    }
});