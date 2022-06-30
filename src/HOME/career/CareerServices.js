import React from "react";
import Career from "./Career";

const CareerServices = () => {
  return (
    <div>

      <div className="container" style={{ marginTop: "150px", marginBottom: '50px' }}>
        <div className="row">
          <div className="col-lg-4 col-sm-6 career_main_div p-4">
            <Career
              imgsrc="images/pic1.png"
              heading="Featured Profile"
              description=" Better your chances of getting shortlisted"
              price="999"
              className="career_feature d-flex flex-row justify-content-center"
            />
          </div>

          <div className="col-lg-4 col-sm-6 career_main_div p-4">


            <Career
              imgsrc="images/pic2.png"
              heading="Resume Writing"
              description="Professionally written resume + cover letter"
              price="1499"
              className="career_Resume d-flex flex-row justify-content-center"
            />

            
          </div>
          <div className="col-lg-4 col-sm-6 career_main_div p-4">
            <Career
              imgsrc="images/pic3.png"
              heading="Career Booster"
              description="Get the power of two in one and speed up your job search"
              price="1999"
              className="career_Booster d-flex flex-row justify-content-center"
            />
          </div>
          <div className="col-lg-4 col-sm-6 career_main_div p-4">
            <Career
              imgsrc="images/pic4.png"
              heading="Profile Highlighter"
              description="Grabs The attention of employers"
              price="999"
              className="career_Profile d-flex flex-row justify-content-center"
            />
          </div>
          <div className="col-lg-4 col-sm-6 career_main_div p-4">
            <Career
              imgsrc="images/pic5.png"
              heading="LinkedIn Makeover"
              description="Transform your LinkedIn profile to elevate your professional
                    brand"
              price="2199"
              className="career_LinkedIn d-flex flex-row justify-content-center"
            />
          </div>
          <div className="col-lg-4 col-sm-6 career_main_div p-4">
            <Career
              imgsrc="images/pic6.png"
              heading="Mock Interview"
              description="Get confident and interview ready with mock interviews"
              price="2599"
              className="career_Interview d-flex flex-row justify-content-center"
            />
          </div>


        </div>
      </div>
    </div>
  );
};

export default CareerServices;
