import React from "react";
import { a } from "react-router-dom";
// import img1 from '../../images/car.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
const Footer = () => {
  const result = useSelector(state => state.data)
  return (
    <div>
      <footer id="sec7">
        <div className="foot">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 foot_add">
                <img
                  className="img-fluid logo_img_footer"
                  src="/images/Untitled-10-01.png"
                  alt=""
                />

                <p className="text-justify footer_data">
                  We provide a direct access to the walk-in opportunities
                  available on the site. Results can be filtered on work
                  experience, venue, from location, employer type, and date
                  range.
                  {/* We provide a direct access to the walk-in opportunities
                  available on the site. Results can be filtered on work
                  experience, venue, from location, employer type, and date
                  range. */}
                </p>
                <div className="mt-5" style={{ fontSize: '15px' }}>Toll Free Number: <p style={{ fontSize: '20px' }}><b><i className="fas fa-phone pr-2"></i> 1800 833 9448 </b></p></div>
              </div>
              {
                result ? (
                  result.type === "applicant" ? (
                    <div className="col-lg-3 offset-lg-1 col-md-6 foot_icon">
                      <h4>For Candidates</h4>
                      <ul>
                        <li>
                          <i className="fas fa-chevron-right"></i>
                          <Link to="/myprofile">Candidate Profile</Link>
                        </li>
                        <li>
                          <i className="fas fa-chevron-right"></i>
                          <Link to="/myresume">My Resume</Link>
                        </li>
                        <li>
                          <i className="fas fa-chevron-right"></i>
                          <Link to="/appliedjobs">Applied Jobs</Link>
                        </li>
                        <li>
                          <i className="fas fa-chevron-right"></i>
                          <Link to="/jobalerts">Job Alert</Link>
                        </li>
                        <li>
                          <i className="fas fa-chevron-right"></i>
                          <Link to="/changepassword">Change Password</Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="col-lg-2 offset-lg-1 col-md-6 foot_icon">
                      <h4>For Employers</h4>
                      <ul>
                        <li>
                          <i className="fas fa-chevron-right"></i>{" "}
                          <Link to="/company_profile">Company Profile</Link>
                        </li>

                        <li>
                          <i className="fas fa-chevron-right"></i>{" "}
                          <Link to="/post_jobs">Post a Job</Link>
                        </li>
                        <li>
                          <i className="fas fa-chevron-right"></i>{" "}
                          <Link to="/Manage_jobs">My Jobs</Link>
                        </li>
                      </ul>
                    </div>
                  )
                ) : (
                  <div className="col-lg-3 offset-lg-1 col-md-6 foot_icon">
                    <h4>Home</h4>
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <Link to="/companies">LogIn</Link>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <Link to="/browsefilterlist">Browse Filter List</Link>
                      </li>
                    </ul>
                  </div>)
              }


              <div className="col-lg-3  col-md-6 foot_icon">
                <h4>Jobs</h4>
                <ul>
                  <li>
                    <i className="fas fa-chevron-right"></i>
                    <Link to="/alljobs">All Jobs</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>
                    <Link to="/companyjobs">Company Jobs</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>
                    <Link to="/categoryjobs">Category Jobs</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>
                    <Link to="/locationaljobs">Locational Jobs</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>
                    <Link to="/designationjobs">Designation Jobs</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>
                    <Link to="/skilljobs">Skill Jobs</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 foot_icon">
                <h4>Browse Jobs</h4>
                <ul>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <Link to="/companyjobs">Companies</Link>
                  </li>

                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <Link to="/browsefilterlist">Browse Jobs</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <Link to="/alljobs">Jobs</Link>
                  </li>
                </ul>

                <h4>Information</h4>

                <ul>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <Link to='/termsandconditions'> Terms & conditions</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <Link to='/Privacypolicy'> Privacy Policy</Link>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <Link to='/fakejobalert'> Fraud Alert</Link>
                  </li>
                </ul>

              </div>

            </div>



            <div className="row crt"></div>
            <div className="copyright-option">
              <div className="row">
                <div className="co-text col-md-4">
                  <p> All rights reserved © 2022 PABJobs</p>
                </div>
                <div className="co-widget col-md-4">
                  <p className="d-line">
                    <li className="credits">
                      <h4
                        style={{
                          display: "inline-block",
                          color: "#fff",
                          textAlign: "left",
                        }}
                      >
                        Designed by{" "}
                      </h4>
                      <a
                        href="https://www.perfextechnologies.com/"
                        target="_blank"
                      >
                        {" "}
                        @ PerfexTechnologies
                      </a>
                    </li>
                  </p>
                </div>
                <div className="foot_web col-md-4">
                  <a href="https://www.linkedin.com/in/pab-jobs-5a776b232/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/pab.jobs/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100078190742811" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/Pabjobs" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
