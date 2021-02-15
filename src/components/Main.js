import React, { Component } from "react";
import Home from "./Home";
import Food from './Food';
import Vegan from './Vegan';
import Wellness from './Wellness';
import Contact from './Contact';
import { HOMEIMAGES } from "../shared/home_images";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { addFeedback} from "../redux/ActionCreators";
import { connect } from "react-redux";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeimages: HOMEIMAGES
        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home homeimage={this.state.homeimages}/>
            );
        };
        return (
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/food" component={Food} />
              <Route path="/vegan" component={Vegan} />
              <Route path="/healthwellness" component={Wellness} />
              {/* <Route path="/contact" component={Contact} /> */}
              <Route
                path="/contact"
                render={() => <Contact addFeedback={this.props.addFeedback} />}
              />
              {/* <Route path='/healthwellness' component={Wellness} />
                    <Route path='/travel' component={Travel} />
                    <Route path='/fashion' component={Fashion} />
                    <Route path='/about' component={About} />
                    <Route path='/contact'     render={() => <Contact addFeedback={this.props.addFeedback} />}  />   */}
            </Switch>
          </div>
        );

};

}
//create constant after class to interact with redux
const mapStateToProps = state => {
  return {
    feedbacks: state.feedback
  };
};

const mapDispatchToProps = {
  addFeedback: (
    firstName,
    lastName,
    phoneNum,
    email,
    agree,
    contactType,
    feedback
  ) =>
    addFeedback(
      firstName,
      lastName,
      phoneNum,
      email,
      agree,
      contactType,
      feedback
    ),
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);