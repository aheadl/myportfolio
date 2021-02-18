import feedbacks from "./feedbackreducer";
import * as ActionTypes from "./ActionTypes";
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe("feeback reducer", () => {
  it("should return the initial state", () => {
    const wrapper = shallow(feedbacks)
    expect(feedbacks(undefined, {})).toEqual(
      {
        id: 0,
        firstName: "Ann1",
        lastName: "Headley",
        phoneNum: "9085555555",
        email: "aheadley@yahoo.com",
        agree: false,
        contactType: "Phone",
        feedback: "Sample feedback",
      },
      {
        id: 1,
        firstName: "Amy",
        lastName: "Kuent",
        phoneNum: "9085555556",
        email: "amy@yahoo.com",
        agree: false,
        contactType: "Email",
        feedback: "Sample feedback",
      }
    );
  });
});
