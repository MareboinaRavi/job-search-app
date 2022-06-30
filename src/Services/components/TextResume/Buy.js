import React from "react";

const Buy = () => {
  return (
    <div>
      <div className="container">
        <div className="row mr-3">
          <div classname="col-lg-1 col-md-2 col-sm-12"></div>
          <div className="col-lg-10  col-md-8 col-sm-12 benfit ">
            <p>Benefits of buying Text Resume service from <b>PAB JOBS</b></p>
            <table className="table table-bordered  mr-3 textresume_table">
              <thead>
                <tr className="textresume_row">
                  <th scope="col">Benfits on PabJobs</th>
                  <th scope="col">FREE RESUME</th>
                  <th scope="col">PAB JOBS TEXT RESUME</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">CV visible to all Recruiters</th>
                  <td classname="">YES</td>
                  <td>YES</td>
                </tr>
                <tr className="textresume_row">
                  <th scope="row">
                    Impress Recruiters with professionally written resume
                  </th>
                  <td>X</td>
                  <td>YES</td>
                </tr>
                <tr >
                  <th scope="row">
                    Stand out as the right candidate for the job
                  </th>
                  <td>X</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <th scope="row">
                    Highlight skills valued by Recruiters in your domain
                  </th>
                  <td>X</td>
                  <td>YES</td>
                </tr>
                <tr className="textresume_row">
                  <th scope="row" >
                    Attractive & Recruiter-friendly resume format
                  </th>
                  <td>X</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <th scope="row">
                    Error-free resume through 65+ quality checks*
                  </th>
                  <td>X</td>
                  <td>YES</td>
                </tr>
                <tr className="textresume_row">
                  <th scope="row">Get active customer support</th>
                  <td>X</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <th scope="row">Guaranteed Interview call from Recruiters</th>
                  <td>X</td>
                  <td>YES</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-12"></div>
        </div>

        

        <div className=" row summary">
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-6 col-md-6 col-sm-12 textresume_lists">
          <ul>
            <li>In-house team of experts with over 10 years of experience</li>
            <li>Attractive and Recruiter friendly resume format</li>
            <li>Over 95% satisfaction rate</li>
            <li>
              Introduce yourself to prospective recruiters with an impactful and
              crisp Cover Letter*
            </li>
            

            {/* <button className="btn btn-light view-btn" href="#">
              View Entry Level Resume Samples
            </button> */}
            <li className="textresume_resume">
              *Please note that the Cover Letter is delivered two days after you
              approve your resume
            </li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12"></div>
        </div>
        <div>
          <ul className="work">How It Works</ul>
          <div className="row">
            
            <div className="col-lg-3 col-md-3 col-sm-4 step">
              Step-<b>1</b>
              <div>
          
                <a className="step_img">
                  <img src="images/step_1.png"/>
                </a>
           
              </div>
              <div className="step_data mt-4 mb-5">
                Resume writer gets assigned and calls you to discuss your
                expectations & asks for relevant details
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-4 step">
              Step-<b>2</b>
              <div>
              <div className="textresume_image step_img">
                <a className="step">
                  <img src="images/step_2.png" />
                </a>
                </div>
              </div>
              <div className="step_data mt-4 mb-5">
                You Receive the First Draft and give feedback to resume writer
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 step">
              Step-<b>3</b>
              <div>
                <a className="step step_img">
                  <img src="images/step_3.png" />
                </a>
              </div>
              <div className="step_data mt-4 mb-5">Resume writer sends you resume draft</div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 step">
              Step-<b>4</b>
              <div>
                <a className="step step_img">
                  <img src="images/step_4.png" />
                </a>
              </div>
              <div className="step_data mt-4 mb-5">
                You approve resume draft and your resume is sent for activation
                of other paid services if any
              </div>
            </div>
            
          </div>
        </div>




        <div className="container time mt-3" >
          <div className="row">
            <div className="col-md-6">
            <h3>Resume Delivery Time</h3>
              <p>
                <b>First Version:</b>Time to delivery first cut
              </p>
              <p>
                <b>Expected Final Delivery:</b>Calculated based on 2 Iterations
              </p>

              <div className="working">
                <ul>
                  <b>* Working Days:</b> Resume Writing team works from Mon -
                  Fri
                </ul>
                <ul>
                  ** We do not restrict Iterations for any customer. On an
                  average people take 2 Iterations to finalize resume
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-5" style={{overflowX:"auto"}}>
            <table className="table table-bordered textresume_table" >
                <thead>
                  <tr className="textresume_row">
                    <th scope="col">Resume Variant</th>
                    <th scope="col">First Version</th>
                    <th scope="col">Final Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Regular</th>
                    <td>8 Working Days</td>
                    <td>14 Working Days</td>
                  </tr>
                  <tr className="textresume_row">
                    <th scope="row">Express</th>
                    <td>4 working Days</td>
                    <td>10 Working Days</td>
                  </tr>
                  <tr>
                    <th scope="row">Super Express</th>
                    <td>2 Working Days</td>
                    <td>6 Working Days</td>
                  </tr>
                </tbody>
              </table>
            </div>




          </div>
        </div>
        {/* <div className="time mt-3">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-8"></div>

            <div className="col-lg-6 col-md-6 col-sm-8">
              <h3>Resume Delivery Time</h3>
              <p>
                <b>First Version:</b>Time to delivery first cut
              </p>
              <p>
                <b>Expected Final Delivery:</b>Calculated based on 2 Iterations
              </p>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-8"></div>
          </div>
        </div> */}

        {/* <div className="container">
          <div className="row days">
            <div className="col-lg-3 col-md-3 col-sm-12 "></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <table className="table table-bordered textresume_table">
                <thead>
                  <tr>
                    <th scope="col">Resume Variant</th>
                    <th scope="col">First Version</th>
                    <th scope="col">Final Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Regular</th>
                    <td>8 Working Days</td>
                    <td>14 Working Days</td>
                  </tr>
                  <tr>
                    <th scope="row">Express</th>
                    <td>4 working Days</td>
                    <td>10 Working Days</td>
                  </tr>
                  <tr>
                    <th scope="row">Super Express</th>
                    <td>2 Working Days</td>
                    <td>6 Working Days</td>
                  </tr>
                </tbody>
              </table>
              <div className="working">
                <ul>
                  <b>* Working Days:</b> Resume Writing team works from Mon -
                  Fri
                </ul>
                <ul>
                  ** We do not restrict Iterations for any customer. On an
                  average people take 2 Iterations to finalize resume
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Buy;
