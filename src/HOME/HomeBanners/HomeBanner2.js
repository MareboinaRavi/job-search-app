import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner2 = () => {
  return (

    <div className='container position-relative'>
      <div className='row B_color1' style={{ paddingRight: "0px" }}>


        <div className=" col-md-3 text-center">
          <img
            className="align-self-center mr-3 B_img1 img-fluid"
            src="images/3-01.png"
            alt="Generic placeholder image"
            style={{ height: '150px', width: 'auto' }}
          />
        </div>
        <div className="B_media-body col-md-8 ">
          <h5 className="B_maintext">
            Get your profile to rank on top of recruiter searches
          </h5>
          <p className="B_text">Unleash your profile's true capability to 10X your chance</p>

        </div>
      </div>

      <Link to="/careers" style={{ position: "absolute", bottom: "0", right: "0" }} className="text-right"> <button
        className="bg-primary text-white btn-lg"
        style={{ borderTopLeftRadius: "50px", borderBottomRightRadius: '0px', borderTopRightRadius: '0px',borderBottomLeftRadius: '0px', border: 'none', cursor: "pointer" }}
      >
        Click Here
      </button></Link>
    </div>


  )
}

export default HomeBanner2
