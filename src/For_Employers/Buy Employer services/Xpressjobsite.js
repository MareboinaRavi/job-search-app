import React from "react";

const Xpressjobsite = () => {
  return (
    <div className="xpress_top">
      <div className="container xpress">
        <div className="row">
          <div className="col-md-12">
            <div className="row xpress_bg">
              <div className="col-md-2 mt-2 xpress_pab_img">
                <img src="images/pabjobs.png" className="xpress_img" />
              </div>
              <div className="col-md-10 mt-4 mb-5">
                <p>
                  pabjobs JobSite is the easiest and most cost-effective way to
                  have a dynamic career site. We will create and host this site
                  for you which will be seamlessly integrated with your company
                  website. This gives you flexibility to manage jobs and
                  applications at one place.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <h3 className="xpress_tag1">Benefits of Xpress JobSite</h3>
          </div>
          <div className="col-md-6 mt-3 ">
            <h3 className="xpress_tag2">Rs.4200/Month only</h3>
          </div>

          <div className="x_box">
            {/* <div className="col-md-12 p-3 x_bg"> */}
              <div className="row p-3 x_bg x_c1">
                <div className="col-md-2 ">
                  <img src="images/xicon-1.png" className="xicon" />
                </div>
                <div className="col-md-10">
                  <h3>One-click job posting</h3>
                  <p>
                    Post jobs on your career site in one-click from TimesJobs.
                  </p>
                </div>
              {/* </div> */}
            </div>
            {/* <div className="col-md-12 p-3 mt-2"> */}
              <div className="row p-3 mt-2">
                <div className="col-md-2">
                  <img src="images/xicon-2.png" className="xicon" />
                </div>
                <div className="col-md-10">
                  <h3>Easy application management</h3>
                  <p>
                    No need to manage application responses of your career site
                    separately. Now manage all your applications on a single
                    platform.
                  </p>
                </div>
              </div>
            {/* </div> */}
            {/* <div className="col-md-12 p-3 mt-2 x_bg"> */}
              <div className="row p-3 mt-2 x_bg">
                <div className="col-md-2">
                  <img src="images/xicon-3.png" className="xicon" />
                </div>
                <div className="col-md-10">
                  <h3>Zero Infrastructure & Maintenance cost</h3>
                  <p>
                    No need to spend anything on your career site maintenance.
                    We will take care of everything.
                  </p>
                </div>
              </div>
            {/* </div> */}
            {/* <div className="col-md-12 p-3 mt-2 "> */}
              <div className="row p-3 mt-2">
                <div className="col-md-2">
                  <img src="images/xicon-4.png" className="xicon" />
                </div>
                <div className="col-md-10">
                  <h3>Build your own private database</h3>
                  <p>
                    Build your own private database from the applications
                    received via your career site.
                  </p>
                </div>
              </div>
            {/* </div> */}
            {/* <div className="col-md-12 p-3 mt-2 x_bg"> */}
              <div className="row  p-3 mt-2 x_bg">
                <div className="col-md-2">
                  <img src="images/xicon-5.png" className="xicon" />
                </div>
                <div className="col-md-10">
                  <h3>Easy TimesJobs Quick-Apply</h3>
                  <p>
                    Job applicants get the flexibility to apply jobs on your
                    career site using their TimesJobs credentials. You get a
                    detailed TimesJobs profile of job applicants.
                  </p>
                </div>
              </div>
            {/* </div> */}
            {/* <div className="col-md-12 p-3 mt-2 "> */}
              <div className="row p-3 mt-2 ">
                <div className="col-md-2">
                  <img src="images/xicon-2.png" className="xicon" />
                </div>
                <div className="col-md-10">
                  <h3>Cost-Effective</h3>
                  <p>
                    XpressJobSite is available only at Rs.4200/Month. It is way
                    less than the cost of having your own team or
                    infrastructure. You will be focusing on the closure of your
                    vacancies, we will take care of everything else..
                  </p>
                </div>
              </div>
            {/* </div> */}
          </div>

          {/* <div className="xpress_btn">
              <button className="xpress_enquire">Enquire Now</button>
          </div> */}

          <div className="xpress_btn">
            {" "}
            {/* <!-- Button trigger modal --> */}
            <button
              className="xpress_enquire"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Enquire Now
            </button>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header  xpress_mhead">
                  <h5 className="modal-title xpress_mtitle" id="exampleModalLongTitle">
                    WANT TO KNOW MORE
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body ">
                  <p className="mt-3 mb-4">
                    <b>
                      Please mention your query and our representative will call
                      you back with all the details you need
                    </b>
                  </p>
                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group ">
                      <label>Your Name :</label>
                      <label className="input mt-1 mb-2">
                        <input
                          className="input__field form_control "
                          type="text"
                          name="name"
                          placeholder=" "
                        />
                        <span className="input__label">Enter Your Name</span>
                      </label>
                    </div>
                  </div>

                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group ">
                      <label>Email :</label>
                      <label className="input mt-1 mb-2">
                        <input
                          className="input__field form_control "
                          type="text"
                          name="name"
                          placeholder=" "
                        />
                        <span className="input__label">Enter Your Email</span>
                      </label>
                    </div>
                  </div>

                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group ">
                      <label>MobileNumber :</label>
                      <label className="input mt-1 mb-2">
                        <input
                          className="input__field form_control "
                          type="text"
                          name="name"
                          placeholder=" "
                        />
                        <span className="input__label">Enter Your MobileNumber</span>
                      </label>
                    </div>
                  </div>

                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Company:</label>
                      <label className="input mt-1 mb-2">
                        <input
                          className="input__field form_control "
                          type="text"
                          name="name"
                          placeholder=" "
                        />
                        <span className="input__label">Enter Your Company</span>
                        
                      </label>
                      
                    </div>
                  </div>

                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group ">
                      <label>Product :</label>
                      <label className="input mt-1 mb-2">
                        <input
                          className="input__field form_control "
                          type="text"
                          name="name"
                          placeholder=" "
                        />
                        <span className="input__label">Enter Your Product</span>
                      </label>
                    </div>
                  </div>

                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Comment:</label>
                      <label className="input mt-1 mb-2">
                        <input
                          className="input__field form_control"
                          type="text"
                          name="name"
                          placeholder=" "
                        />
                        <span className="input__label">Enter comment</span>
                      </label>
                    </div>
                  </div>


                </div>
                <div className="modal-footer">
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button> */}
                  <button type="button" className="btn mt-3 mb-3 xmodal_btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xpressjobsite;
