import * as ActionTypes from "./ActionTypes";



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