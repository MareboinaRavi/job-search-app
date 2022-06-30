import React from "react";

const Career = (props) => {
  return (
    <div className="career_inner_div">
      <div className="career_common_div">
        <div className={props.className}>
          <img src={props.imgsrc} className="img career_img " />
        </div>
        <div>
          <h4 className="card-head career_head">{props.heading}</h4>
          <div className="career-description">{props.description}</div>
          <button className="btn btn-lg btn-primary  career_button">
            Starting at <span className="career_price">Rs.{props.price}</span>
          </button>
          <a className="text-primary text-right career_link">Benefits</a>
        </div>
      </div>
    </div>
  );
};

export default Career;
