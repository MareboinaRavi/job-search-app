import React from 'react'

const Benefits = () => {
  return (
    <div> 
    <div className='container-fluid'>
        <div className='benefits_head'>
            <h1> Hire and Train Benefits</h1>
        </div>
        <div className='row align-items-center'>
            <div className=' col-lg-6 col-md-6 col-sm-12 benefits_image text-center'  data-aos="fade-right" data-aos-offset="200" data-aos-delay="20"
                    data-aos-duration="1500" data-aos-easing="ease-in-out">
              <img src='images/H&T Benefits-01 (1).png' className='img-fluid' style={{height:"500px"}} />
            </div>
            <div className=' col-lg-6 col-md-6 col-sm-12 benefits_text'>
            <p className='benefits_text_p'>Get multi-skilled and fast-track your career growth</p>
            <ul>
                <li>

                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                
                <p>
                  {" "}
                  Best-in-class trainers and mentors
                </p>
                </li><br />
                <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Global courseware designed by experts
                </p>
                </li><br />
                <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Enhance technical competencies and business proficiencies
                </p>
                </li><br />
                <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Enhances problem-solving skills
                </p>
                </li><br />
                <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  A Certification endorsed by the industry
                </p>
                </li><br />
                <li>
                <p>
                  {" "}
                  <img className="img-fluid" src="images/tick.jpg" />
                </p>
                <p>
                  {" "}
                  Deployment with top tech companies
                </p>
                </li>
               
            </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Benefits