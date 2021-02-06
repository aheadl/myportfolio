import React from "react";
import { Jumbotron } from "reactstrap";
import Life_logo from "../img/Life_logo.png";
import BLM from "../img/BLM.jpg";

// const JumbotronComp = () => {
//   console.log("In JumbotronComp");
//   return (
//     <div>JUMBO TRON</div>
//   )
// };
const JumbotronComp = () => (
  <div>
    <Jumbotron expand="lg" className="jumbotron1 mt-0 mb-n5 p-3">
      <div className="container" id="tron">
        <div className="row">
          <div className="col-4 col-sm-3 col-md-2">
            <img src={Life_logo} alt="" />
          </div>

          <div className="col-4 col-sm-3 mb-4">
            <h1>Healthy balance: A Better Way Of Life</h1>
          </div>
          <div className="col-4  col-sm-3 mb-4">
            <img src={BLM} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Jumbotron>
  </div>
);


export default JumbotronComp;