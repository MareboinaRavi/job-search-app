import React from "react";

const Eligibility = () => {
  return (
    <div id="eligibility">
      <div className="container-fluid eligibilty">
        <div className="elibility_head">
          <h1>Eligibility </h1>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 eligibility_one">
            <ul>
              <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  2020/2021 & 2022 batches of BE/B.Tech CS/CE/IT/E&C/E&TC/Telecom/Communications/Electronics or MCA
                  and other circuit branches of relevance to corporations and
                  industry qualifying degrees.
                </p>
              </li>
              <br />
              <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Candidate must have graduated the qualifying course in 2018
                  without any backlog.
                </p>
              </li>
              <br />
              <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Candidates graduated in 2019, meeting the criteria, also stand
                  eligible.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 eligibilty_image" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="20"
                    data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src="images/hire.svg" className="img-fluid" alt="image" />
          </div>
          <div className="col-lg-4 col-md-6 eligibility_one">
            <ul>
              <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Candidate should have scored a minimum of 60% in SSC/10th, HSC/12th/Diploma, and UG/PG as applicable.
                </p>
              </li>
              <br />
              <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Not more than a gap year since SSC, meaning no loss of the
                  academic year after joining a course
                </p>
              </li>
              <br />
              <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Flexible to relocate anywhere in India, and willing to work on
                  any skill/domain/work timings.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
