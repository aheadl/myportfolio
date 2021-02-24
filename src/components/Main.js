import React, { Component } from "react";
import Home from "./Home";
import Food from './Food';
import Vegan from './Vegan';
import Wellness from './Wellness';
import Contact from './Contact';
import { HOMEIMAGES } from "../shared/home_images";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { addFeedback} from "../redux/ActionCreators";
//import { connect } from "react-redux"; //used to connect the component to the redux store

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeimages: HOMEIMAGES
        };
    }
    render() {
      console.log("PROPS ", this.props)
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
//map state to props - used to determine how the state managed by redux should be mapped you can use in this container/component
//it stores a func which expects a state stored in redux as the input parameter and returns a JS object which is a map of 
//prop names and slices of the state
//stored in redux

// const mapStateToProps = state => {
//   return {
//     feedbacks: state.feedback
//   };
// };

// const mapDispatchToProps = {
//   addFeedback: (
//     firstName,
//     lastName,
//     phone,
//     email,
//     agree,
//     contactType,
//     feedback
//   ) =>
//     addFeedback.ADD_FEEDBACK(
//       firstName,
//       lastName,
//       phone,
//       email,
//       agree,
//       contactType,
//       feedback
//     ),
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatch
//     //addFeedback: () => dispatch({ type: "ADD_FEEDBACK" })
//     addFeedback: () => dispatch({type: 'ADD_FEEDBACK'})
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addFeedback: (
//     firstName,
//     lastName,
//     phone,
//     email,
//     agree,
//     contactType,
//     feedback) => {
//       dispatch({type: 'ADD_FEEDBACK',   
//     firstName,  
//     lastName,
//     phone,
//     email,
//     agree,
//     contactType,
//     feedback});
//     }
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Main);
export default Main;