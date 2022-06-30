import React, { useState, useRef } from "react";
import axios from "axios";
import ChipInput from "material-ui-chip-input";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "../../../JsonData/locations.json";

const RegisterForm = () => {
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
        } else if (isNaN(value)) {
          return "*Only enter Numbers";
        } else if (!value.match(/^[6-9]/)) {
          return "*Mobile Number Must be start With 6 or 7 or 8 or 9 ";
        } else if (value.length < 10) {
          return "*MobileNumber must be 10 numbers";
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
  const [location, setlocation] = useState([]);
  const [skills, setskills] = useState([]);
  const [message, setmessage] = useState("");
  const [isSubmited,isSetSubmit] = useState(false);
  console.log(location);
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

    showResult(true);
    const data = {
      Name: name,
      PhoneNumber: phone,
      Email: email,
      Graduation: graduation,
      Passedout: passedout,
      Location: location,
      Skills: skills,
      Message: message,
    };
    console.log(data)
    axios
      .post(
        "https://sheet.best/api/sheets/d33e221c-71b4-43fb-9f7a-d93a64d21e01",
        data
      )
      .then((res) => {
        if(res){
          
              isSetSubmit(true)
        }
        setFullName("");
        setphone("");
        setmail("");
        setgraduation("");
        setpassedout("");
        setlocation("");
        setskills("");
        setmessage("");
        console.log(res);
        document
          .getElementById("exampleModalCenter")
          .classList.remove("show", "d-block");
        document
          .querySelectorAll(".modal-backdrop")
          .forEach((el) => el.classList.remove("modal-backdrop"));
      })
      .catch((err) => {
        console.log(err);
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
  const handlelocationChange = (e, value) => {
      setlocation(value.location);
  };

 
  return (<>
      {
          isSubmited ?
          <div>
            <div className='container' >
              <div className='row'>
                <div className='col-sm-12 Exam_after_submit'>
                  <h1>Submited Successfully...</h1>
                  <h1>We will contact you through email or Phone...</h1>
                </div>
              </div>
            </div>
        </div>
      :<div className="registerform">
      <div className="container-fluid home_content">
        <div className="container main_content">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper_services">
                <div className="content_hire">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left text-uppercase cp" >
                      Hire And Train
                    </h5>
                  </div>
                  <form  onSubmit={sendEmail}>
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
                              type="text"
                              name="phone"
                              maxLength={10}
                              value={phone}
                              onChange={(e) => {
                                setphone(e.target.value);
                                formHandling(e);
                              }}
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
                            onChange={(e) => setgraduation(e.target.value)}
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
                              type="number"
                              name="passedout"
                              onChange={(e) => setpassedout(e.target.value)}
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
                          <Autocomplete
                            single
                            id="tags-outlined"
                            options={data}
                            getOptionLabel={(option) => option.location}
                            onChange={handlelocationChange}
                            filterSelectedOptions
                            renderInput={(params) => (
                              <TextField
                                value={location}
                                {...params}
                                label="Enter preferred Locations"
                                type="text"
                                name="location"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className=" col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Skills:</label>
                          <ChipInput
                            label="Skills"
                            variant="outlined"
                            value={skills}
                            onChange={setskills}
                            alwaysShowPlaceholder={true}
                            helperText="Press enter to add skillssss"
                            onAdd={(newVal) => {
                              const newArr = [...skills, newVal];
                              setskills(newArr);
                            }}
                            onDelete={(deletedVal) => {
                              const newArr = skills.filter(
                                (state) => state !== deletedVal
                              );
                              setskills(newArr);
                            }}
                            fullWidth
                          />
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
                              onChange={(e) => setmessage(e.target.value)}
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
                    <button className="update" >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
  </>);
};

export default RegisterForm;
