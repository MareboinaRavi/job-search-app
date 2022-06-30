import React, { useState } from "react";
import axios from "axios";
import Train from "./Train";

const Result = () => {
  return (
    <p style={{ color: "green" }}>
      <h5>
        <b>Form Submitted Successfully.....</b>
      </h5>
    </p>
  );
};

const JobDetails = () => {
  const [hireandtraindetails, setHireandtraindetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "*Name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "*Email is Required";
        } else if (!value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/)) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "phone":
        if (!value || value.trim() === "") {
          return "*Contact Number is Required";
        } else if (!value.match(/^[6-9]\d{9}$/)) {
          return "Enter Valid Phone Number";
        } else {
          return "";
        }

      default: {
        return " ";
      }
    }
  };

  const [result, showResult] = useState(false);
  const [name, setFullName] = useState("");
  const [email, setmail] = useState("");
  const [phone, setphone] = useState("");
  const [graduation, setgraduation] = useState("");
  const [passedout, setpassedout] = useState("");
  const [location, setlocation] = useState("");
  const [skills, setskills] = useState("");
  const [message, setmessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(hireandtraindetails).forEach((name) => {
      const error = validate(name, hireandtraindetails[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // emailjs
    //   .sendForm(
    //     "service_uylk7sp",
    //     "template_tawbs7h",
    //     e.target,
    //     "user_8z77GuPEKrnfHaLDyodeg"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // e.target.reset();

    // showResult(true);

    e.target.reset();

    showResult(true);

    const data = {
      Name: name,
      PhoneNumber: phone,
      Email: email,
      Graduation: graduation,
      passedout: passedout,
      Location: location,
      Skills: skills,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/b8f02c3d-f6bf-4d1a-be06-6a6e793dfd7f",
        data
      )
      .then((res) => {
        console.log(res);
        setFullName("");
        setphone("");
        setmail("");
        setgraduation("");
        setpassedout("");
        setlocation("");
        setskills("");
        setmessage("");
      });
  };

  const formHandling = (e) => {
    setHireandtraindetails({
      ...hireandtraindetails,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
  };

  return (
    <>
      <div>
        <div className="container-fluid job-details">
          <h1>-Job Details-</h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 job_one_image_one">
              <div className="job_one_image">
                <img className="img-fluid" src="images/candiatetwo.png"></img>
                <h2 className="p-3">Designation</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 job_one_image_one">
              <div className="job_one_image">
                <img className="img-fluid" src="images/rupeeone.png"></img>
                <h2 className="p-3">CTC</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 job_one_image_one">
              <div className="job_three_image">
                <img className="img-fluid" src="images/location.jpg"></img>
                <h2 className="p-3">Location</h2>
              </div>
            </div>
          </div>

          {/* <div className='details_button'>
        <button className='btn btn-primary'>Register Now</button>
        </div> */}

          <div className="home_button">
            {/* <button className="btn btn-primary">Register Now</button> */}

            <a href="#eligibility">
              <button className="btn btn-primary eligibility_button">
                Eligibility
              </button>
            </a>
            {/* <button className='btn btn-primary eligibility_button' >Eligibility</button> */}

            <button
              type="button"
              className="btn btn-primary "
              data-toggle="modal"
              data-target="#exampleModalCenter1"
            >
              Register Now
            </button>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModalCenter1"
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
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container main_content">
                    <div className="row">
                      {/* <div className="col-lg-2"></div> */}
                      <div className="col-lg-12">
                        <div className="wrapper_services">
                          <div className="content_hire">
                            <div className="job-bx-title clearfix">
                              <h5 className=" pull-left text-uppercase cp">
                                Hire And Train
                              </h5>
                            </div>
                            <form action="#" onSubmit={sendEmail}>
                              <div className="row">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group hire_group">
                                    <label>Your Name :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => {
                                          setFullName(e.target.value);
                                          formHandling(e);
                                        }}
                                        // onChange={(e) => formHandlings(e)}
                                        // onChange={()=>setFullName(e.target.value)}

                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter Your Name
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-danger error mb-4">
                                  {errors.name}
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group hire_group">
                                    <label>Email :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => {
                                          setmail(e.target.value);
                                          formHandling(e);
                                        }}
                                        // onChange={(e) => formHandlings(e)}
                                        // onChange={()=>setmail(e.target.name)}

                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter Your Email
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-danger error mb-4">
                                  {errors.email}
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group hire_group">
                                    <label>Mobile Number :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="number"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => {
                                          setphone(e.target.value);
                                          formHandling(e);
                                        }}
                                        // onChange={(e) => formHandlings(e)}
                                        // onChange={()=>setphone(e.target.name)}

                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter your mobile number
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-danger error mb-4 ">
                                  {errors.phone}
                                </div>

                                <div className="col-lg-12">
                                  <label>Qualification :</label>
                                  <label className="input mt-1 mb-2">
                                    <input
                                      className="input__field form_control form_hire"
                                      type="text"
                                      name="graduation"
                                      onChange={(e) =>
                                        setgraduation(e.target.value)
                                      }
                                      value={graduation}
                                      placeholder=" "
                                    />
                                    <span className="input__label">
                                      Enter your Qualification
                                    </span>
                                  </label>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Passed Out Year :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="text"
                                        name="passedout"
                                        onChange={(e) =>
                                          setpassedout(e.target.value)
                                        }
                                        value={passedout}
                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter your Passedout
                                      </span>
                                    </label>
                                  </div>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Location :</label>
                                    <label className="input mt-1 mb-2">
                                      <input
                                        className="input__field form_control form_hire"
                                        type="text"
                                        name="location"
                                        onChange={(e) =>
                                          setlocation(e.target.value)
                                        }
                                        value={location}
                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter your Location
                                      </span>
                                    </label>
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Skills:</label>
                                    <input
                                      value={skills}
                                      onChange={(e) =>
                                        setskills(e.target.value)
                                      }
                                      name="skills"
                                      placeHolder="Enter Your Skills"
                                      className="go309598777"
                                    />
                                    <em style={{ fontSize: "12px" }}>
                                      Press enter to add Skills
                                    </em>
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Message :</label>
                                    <label className="input mt-1 mb-2">
                                      <textarea
                                        rows="7"
                                        className="input__field form_control form_hire"
                                        type="text"
                                        name="message"
                                        onChange={(e) =>
                                          setmessage(e.target.value)
                                        }
                                        value={message}
                                        maxLength={500}
                                        placeholder=" "
                                      />
                                      <span className="input__label">
                                        Enter your Message
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <button className="update">Submit</button>
                              <div className="row">
                                {result ? <Result /> : null}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Train />

      <div id="eligibility">
        <div className="container-fluid eligibilty">
          <div className="elibility_head">
            <h1>Eligibility </h1>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 eligibility_one">
              <ul>
                <li>
                  <p>
                    {" "}
                    <img className="img-fluid" src="images/tick.jpg" />
                  </p>
                  <p>
                    {" "}
                    2020/2021 & 2022 batches of BE/B.Tech
                    CS/CE/IT/E&C/E&TC/Telecom/Communications/Electronics or MCA
                    and other circuit branches of relevance to corporations and
                    industry qualifying degrees.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    {" "}
                    <img className="img-fluid" src="images/tick.jpg" />
                  </p>
                  <p>
                    {" "}
                    Candidate must have graduated the qualifying course in 2018
                    without any backlog.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    {" "}
                    <img className="img-fluid" src="images/tick.jpg" />
                  </p>
                  <p>
                    {" "}
                    Candidates graduated in 2019, meeting the criteria, also
                    stand eligible.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-4 eligibilty_image"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="20"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <img src="images/hire.svg" className="img-fluid" alt="image" />
            </div>
            <div className="col-lg-4 col-md-6 eligibility_one">
              <ul>
                <li>
                  <p>
                    {" "}
                    <img className="img-fluid" src="images/tick.jpg" />
                  </p>
                  <p>
                    {" "}
                    Candidate should have scored a minimum of 60% in SSC/10th,
                    HSC/12th/Diploma, and UG/PG as applicable.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    {" "}
                    <img className="img-fluid" src="images/tick.jpg" />
                  </p>
                  <p>
                    {" "}
                    Not more than a gap year since SSC, meaning no loss of the
                    academic year after joining a course
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    {" "}
                    <img className="img-fluid" src="images/tick.jpg" />
                  </p>
                  <p>
                    {" "}
                    Flexible to relocate anywhere in India, and willing to work
                    on any skill/domain/work timings.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
