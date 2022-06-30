import React from "react";

const JobGuarantee = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="guarantee_head">
          <h1>Job Guarantee</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-1 col-md-1">

          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 guarantee_text ">
            <p>
              PabJob's Train and Hire Program offers the best training
              facilities and multiple placement opportunities for leading IT
              Company's. Candidates are given a job assurance on qualifying the
              screening test and interview. Once they get through the screening
              test and interview, candidates receive their Letter of Intent
              <b> (LOI) </b> from the Company as a confirmation offer.
            </p>
            {/* <p>
              The most distinctive feature is that candidates are eligible to
              get their money back at the end of the process if they haven't
              received their offer letter from the MNC. So, you either complete
              the training and take home your offer letter worth 3.25 Lakhs per
              annum or, you are a skilled technical expert with a refund of the
              fees.
            </p> */}
          </div>
          <div className="col-lg-5  col-md-6  text-center">
            <img src="images/JOB G-01.png" className="guranatee_image img-fluid"/>
          </div>
          <div className="col-lg-1 col-md-1">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobGuarantee;
