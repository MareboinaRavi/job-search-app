import React from "react";

const Train = () => {
  return (
    <div>
      <div className="container-fluid train_main">
      <h1>What is TRAIN and HIRE</h1>
        <div className="row">
        
          <div className="col-lg-6 col-md-12 col-sm-12 train_one">
            <p>
              Engineering education, in the past few decades, has revolutionized
              and changed India's skill topography. In the past, I.T
              recruitments were limited only to a few institutions, due to the
              shortage of skills from smaller institutions. However, this has
              changed now. The potential candidates are spread across
              institutions, from small towns to big cities. To give a fair
              chance to potential candidates, IT companies are now leveraging
              their reach through identified partners who recruit the right
              candidates through Train and Hire.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 train_image "  data-aos="fade-right" data-aos-offset="200" data-aos-delay="20"
                    data-aos-duration="1500" data-aos-easing="ease-in-out">
              <img src="images/hire.png" className="img-fluid " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Train;
