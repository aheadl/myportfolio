import React from 'react';

import { VEGANINFO } from "../shared/vegan_content";
import "../styles.css";

const Vegan = (props) => {
  console.log("Getprops isss", props);
  return (
    <div>
      
      <div class="row">
        <div class="col-md-12 col-10">
          <p>{props.name}</p>

          <p>
            {" "}
            A plant based diet offers a variety of benefits that are not just
            healthy and nutritious foods, but also contributes to a cleaner
            environment and reduced carbon footprints. Below are some options
            that provide a well balanced diet.
          </p>
        </div>
      </div>
      {VEGANINFO.map((vegan) => (
        <div key={vegan.id}>
          <div className="row ml-3 ">
            <div className="col-md-6 col-6 py-3 ">
              <div className="media">
                <img
                  src={vegan.image}
                  className="d-flex mr-3 img-thumbnail"
                  alt=""
                  height="250"
                  width="275"
                />

                <div className="media-body align-self-center">
                  <div class="mt-0">
                    <h3>
                      <span>{vegan.name}</span>
                    </h3>
                    <p className="para">{vegan.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className="mt-0">
                <h2>
                  <span>{vegan.prep}</span>
                </h2>

                <h6>
                  <span>
                    <b>{vegan.preptype1}</b>
                  </span>
                </h6>

                <div className="image_links">
                  <img
                    src={vegan.prep_img1}
                    className="d-flex mr-3 img-thumbnail"
                    alt=""
                    height="350"
                    width="275"
                  />
                  <p class="preppara">{vegan.recipe1}</p>
                  <p> </p>
                  <h6>
                    <span>
                      <b>{vegan.preptype2}</b>
                    </span>
                  </h6>
                  <img
                    src={vegan.prep_img2}
                    className="d-flex mr-3 img-thumbnail"
                    alt=""
                    height="250"
                    width="275"
                  />
                  <div>
                    <a
                      className="image_links"
                      href={vegan.recipe_link2}
                      target="_blank"
                    >
                      <p>Click for recipe</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="block">
              <hr />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};  

export default Vegan;