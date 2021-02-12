import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Food from "./Food";

function Home(props) {
  const items = props.homeimage.map((homeimage) => {
    return (
      <div key={homeimage.id} className={homeimage.colsize}>
        <div className="m-1">
          <div className="card text-white hover">
            <img src={homeimage.image} className="card-img" alt="missing photo"  />
            <div className="card-img-overlay">
              <h5 className="card-title "></h5>

              <p className="card-text"></p>

              <nav className="nav">
                <a
                  className="nav-link text-white text-uppercase text-center"
                  href={homeimage.navlinkpath}
                >
                  {homeimage.title}
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div>
          {/* <Switch>
            <Route path="/home" component={Home} />
            <Route path="/food" component={Food} />
          </Switch> */}
        </div>
      </div>
    );
  });

  return (
    <div className=" hero__item">
      <div className="row">{items}</div>
    </div>
  );
}

export default Home;
