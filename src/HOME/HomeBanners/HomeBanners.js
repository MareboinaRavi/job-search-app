import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanners = () => {
  return (



    <div className='container position-relative'>
      <div className='row B_color1 ' style={{ paddingRight: "0px" }}>


        <div className=" col-md-3 text-center">
          <img
            className="align-self-center mr-3 B_img1 img-fluid"
            src="images/1-01 (1).png"
            alt="Generic placeholder image"
            style={{ height: '150px', width: 'auto' }}
          />
        </div>
        <div className="B_media-body col-md-8 ">
          <h5 className="B_maintext">
            What it feels like to have 48% more interview calls?
          </h5>
          <p className="B_text">To get 5x more recruiter views on your profile</p>

        </div>

      </div>
      <Link to="/careers" style={{ position: "absolute", bottom: "0", right: "0" }} className="text-right"> <button
        className="bg-primary text-white btn-lg"
        style={{ borderTopLeftRadius: "50px", borderBottomRightRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', border: 'none', cursor: "pointer" }}
      >
        Click Here
      </button></Link>

    </div>


  )
}

export default HomeBanners
