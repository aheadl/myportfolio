import React from 'react';
import { HEALTHWELLNESS } from "../shared/health_wellness";

const Wellness = () => (
  <div>
    <div>
      <p> IN WELLNESS</p>
      <div className="container ml-4">
        <div className="row ml-3">
          <div className="col-lg-8 col-md-8 py-3">
            <img
              src="/assets/img/Yoga.jpg"
              className="d-flex mr-3 img-thumbnail"
              alt=""
              height="350"
              width="450"
            />
          </div>
          <div className="col-lg-2 col-md-2 py-3">
            <div className="mt-5 text-center">
              <blockquote>
                <p className="myQuote">"</p>
                <p className="quoteText">
                  It's quite easy to revert to unhealthy habits, especially
                  during trying times as we are currently in.
                </p>
                <p className="myQuote">"</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-lg-8 col-md-8 py-3">
          <p>
            {" "}
            It can be easy to forget about our bodies and the vital role they
            play in our lives. We can find ourselves reverting to unhealthy
            habits, especially in the winter, not realizing the great potential
            this season has for rejuvenation and healing. Below are some
            supportive words from fitness gurus and sites to help keep your body
            and mind healthy.
          </p>
          <br></br>
        </div>
        <div>
          <a name="exercise"></a>
        </div>
      </div>
      {HEALTHWELLNESS.map((wellness) => (
        <div key={wellness.id}>
          <div>
            <ol>
              <li>
                <em>
                  <b>{wellness.header}</b>
                </em>
              </li>
              <p>{wellness.description}</p>
              <div>
                {wellness.image1 || wellness.image2 ? (
                  <div>
                    <div>
                      <div id="gallery-1" className="gallery">
                        <dl class="gallery-item">
                          <dt class="gallery-icon landscape">
                            <img
                              src={wellness.image1}
                              class="d-flex mr-3 img-thumbnail"
                              alt=""
                              height="375"
                              width="200"
                            />
                          </dt>
                        </dl>
                        <dl class="gallery-item">
                          <dt class="gallery-icon landscape">
                            <img
                              src={wellness.image2}
                              class="d-flex mr-3 img-thumbnail"
                              alt=""
                              height="350"
                              width="260"
                            />
                          </dt>
                        </dl>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              {wellness.sub_header ? (
                <div>
                  <ul>
                    <li>
                      <em>{wellness.sub_header}</em>
                    </li>
                    <p>{wellness.sub_description}</p>
                    <b>
                      <em>
                        <a
                          target="_blank"
                          href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                        >
                          Here is information on covid from the CDC
                        </a>
                      </em>
                    </b>
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
            </ol>
          </div>
        </div>
      ))}{" "}
    </div>
  </div>
);

export default Wellness;