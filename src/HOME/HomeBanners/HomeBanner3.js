import React from 'react'
import {Link} from 'react-router-dom'

const HomeBanner3 = () => {
  return (


    <div className='container  position-relative'>
    <div className='row B_color1'  style={{paddingRight:"0px"}}>
    
     
    <div className=" col-md-3 text-center">
      <img
        className="align-self-center mr-3 B_img1 img-fluid"
        src="images/2-01.png"
        alt="Generic placeholder image"
        style={{height:'150px',width:'auto'}}
        />
</div>
      <div className="B_media-body col-md-8">
        <h5 className="B_maintext">
        How to stand out from the millions of other resumes?
        </h5>
        <p className="B_text">80% of the resumes are rejected in 11 seconds.Don't want to be the 80%?</p>

       
      </div>
    </div>
    <Link to="/careers" style={{ position:"absolute",bottom:"0",right:"0"}} className="text-right"> <button
          className="bg-primary text-white btn-lg"
          style={{  borderTopLeftRadius: "50px", borderBottomRightRadius:'0px',borderTopRightRadius:'0px',borderBottomLeftRadius: '0px', border: 'none',cursor:"pointer"  }}
        >
          Click Here
        </button></Link>
</div>
  )
}

export default HomeBanner3
