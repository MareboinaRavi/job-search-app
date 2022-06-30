import React from "react";

const Selection = () => {
  return (
    <div>
      <div className="container-fluid selection">
        <div className="selection_head">
          <h1>Selection Process</h1>
        </div>
        <div className="row selection_one">
          <div className="col-lg-4 col-md-4 col-sm-12  ">
            {/* <span className="span">01</span> */}
            <span>
              <img
                src="images/New Eligibility-02.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>Eligibility as per Company's specifications</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* <span className="span">02</span> */}
            <span>
              <img
                src="images/02 Aptitude-01.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>
              Evaluation of Aptitude, Cognitive Skills, Coding Aptitude, and
              Verbal Reasoning
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 selection_one">
            {/* <span className="span">03</span> */}
            <span>
              <img
                src="images/03 Training-01.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>Self-sponsored Training @ PabJobs</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-2">

          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 selection_one">
            {/* <span className="span">04</span> */}
            <span>
              <img
                src="images/04 Interview-01.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p>Final Interview by the Company</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">

          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 selection_one selection_five">
            {/* <span className="span">05</span> */}
            <span>
              <img
                src="images/05 Offer Letter-01.png"
                alt="image"
                className="img-fluid"
              ></img>
            </span>
            <p className="text-left">Offer letter and Onboarding</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
