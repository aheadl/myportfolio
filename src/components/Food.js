import React from "react";
import { FOODINFO } from "../shared/food_content";


const Food = () => {
  return (
    <div>
      {FOODINFO.map(p => (
      <div key={p.id}>
        {/* <Link to={`/food/${p.id}`}> */}
        <div className="row ml-3 ">
          <div className="col-md-6 col-6 py-3 ">
            <div className="media">
              <img
                src={p.image}
                className="d-flex mr-3 img-thumbnail"
                alt=""
                height="250"
                width="275"
              />

              <div className=" ">
                <div className="">
                  <h3>
                    <span>{p.name}</span>
                  </h3>
                  <p className="para">{p.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-3">
            <div className="mt-0">
              <h2>
                <span>{p.prep}</span>
              </h2>

              <h6>
                <span>
                  <b>{p.preptype1}</b>
                </span>
              </h6>

              <div className="image_links">
                <img
                  src={p.prep_img1}
                  className="d-flex mr-3 img-thumbnail"
                  alt=""
                  height="350"
                  width="275"
                />
                <p class="preppara">{p.recipe1}</p>
                <p> </p>
                <h6>
                  <span>
                    <b>{p.preptype2}</b>
                  </span>
                </h6>
                <img
                  src={p.prep_img2}
                  className="d-flex mr-3 img-thumbnail"
                  alt=""
                  height="250"
                  width="275"
                />
                <div>
                  <a
                    href={p.recipe_link2}
                    target="_blank"
                  >
                    <p>Click for recipe</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <hr />
          </div>
        </div>

        {/* {p.name} - {p.description}</Link> */}
        {/* </Link> */}
      </div>
      ))}
    </div>
  );};
export default Food;