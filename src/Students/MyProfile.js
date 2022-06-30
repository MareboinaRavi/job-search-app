import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
// import { getData } from "../action/action";
// import { useDispatch, useSelector } from "react-redux";
import apiList from "../lib/apiList";
import axios from "axios";
import { toast } from "react-toastify";
import { Autocomplete } from "@mui/material";
import { TextField } from "@material-ui/core";
import data from "../JsonData/locations.json";
import states from "../../src/JsonData/State.json";
import States from "../common/States";
const MyProfile = (props) => {
  const [experience, setExperience] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    state: [],
    currentlocation: [],
    contactNumber: "",
    email: " ",
    experience: {
      year: "",
      month: "",
    },
    freshers: "",
  });
  console.log(profile.currentlocation);
  const [newState, setNewState] = React.useState([]);
  console.log(typeof profile.currentlocation);
  const formHandling = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const radiohandling = (e) => {
    console.log(e.target.value);
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    // experience: {
    //   ...previousState.experience,
    //   [e.target.name]: e.target.value,
    // }, state
  };

  const fresherHandling = (e) => {
    setProfile({ ...profile, experience: e.target.value });
  };

  const experienceButton = () => {
    setExperience(true);
    profile.experience = {};
  };

  const fresherButton = () => {
    setExperience(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
        if (response.data.experience.experience === "experienced") {
          setExperience(true);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const updateData = () => {
    axios
      .put(apiList.user, profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="container main_content my-5">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9 mt-4">
          <div className="wrapper">
            <div className="content">
              <div className="job-bx-title clearfix">
                <h5 className=" pull-left text-uppercase cp">
                  Basic Information
                </h5>
                <Link
                  to="/"
                  className="site-button right-arrow button-sm float-right"
                >
                  {" "}
                  Back{" "}
                </Link>
              </div>
              <form action="#">
                <div className="row">
                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Your Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        className="form_control"
                        placeholder="Enter Your Name"
                        onChange={(e) => formHandling(e)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label> Experience </label>
                    <div className="form-group">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          id="inlineRadio1"
                          value="fresher"
                          checked={profile?.experience === "fresher"}
                          onClick={() => fresherButton()}
                          onChange={(e) => fresherHandling(e)}
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Fresher
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          id="inlineRadio2"
                          value="experienced"
                          checked={profile?.experience === "experienced"}
                          onChange={(e) => radiohandling(e)}
                          onClick={() => experienceButton()}
                        />
                        <label
                          className="form-check-label"
                          for="inlineRadio2"
                          name="experienced"
                        >
                          Experienced
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    {experience ? (
                      <div className="row">
                        {/* <div className=" col-lg-6 col-md-6 d-inline">
                          <div className="form-group">
                            <div
                              className="types_student_profile"
                              id="types_student_profile"
                            >
                              <label> Years</label>
                              <input
                                type="text"
                                className="form_control"
                                name="year"
                                value={profile.experience.year}
                                placeholder="Years"
                                onChange={(e) => radiohandling(e)}
                              />
                            </div>
                          </div>
                        </div> */}
                        {/* <div className=" col-lg-6 col-md-6 d-inline">
                          <div className="form-group">
                            <div
                              className="types_student_profile"
                              id="types_student_profile_mnths"
                            >
                              <label> Months</label>
                              <select
                                className="form_control"
                                name="month"
                                value={profile.experience.month}
                                onChange={(e) => radiohandling(e)}
                              >
                                <option hidden>Select Month</option>
                                <option value="0 Months">00 Month</option>
                                <option value="1 Months">01 Month</option>
                                <option value="2 Months">02 Months</option>
                                <option value="3 Months">03 Months</option>
                                <option value="4 Months">04 Months</option>
                                <option value="5 Months">05 Months</option>
                                <option value="6 Months">06 Months</option>
                                <option value="7 Months">07 Months</option>
                                <option value="8 Months">08 Months</option>
                                <option value="9 Months">09 Months</option>
                                <option value="10 Months">10 Months</option>
                                <option value="11 Months">11 Months</option>
                              </select>
                            </div>
                          </div>
                        </div> */}

                        <div className=" col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Total Experience</label>
                            <select
                              className="form_control"
                              // value={employment.months}
                              // value={employment.years}
                              value={profile?.total_experience}
                              // name="months"
                              name="total_experience"
                              onChange={(e) => radiohandling(e)}
                            >
                              <option hidden>Years</option>
                              <option value="0-2 Years">0-2 Years</option>
                              <option value="2-5 Years">2-5 Years</option>
                              <option value="5-7 Years">5-7 Years</option>
                              <option value="7-10 Years">7-10 Years</option>
                              <option value="10+ Years">10+ Years</option>
                              {/* <option value="06 Months">06 Months</option>
                                    <option value="07 Months">07 Months</option>
                                    <option value="08 Months">08 Months</option>
                                    <option value="09 Months">09 Months</option>
                                    <option value="10 Months">10 Months</option>
                                    <option value="11 Months">11 Months</option> */}
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <label>State</label>
                    <Autocomplete
                      id="combo-box-demo"
                      single
                      value={profile.state}
                      options={States.map((res) => {
                        return res.name;
                      })}
                      getOptionLabel={(option) => option}
                      // style={{ width: 368 }}
                      onChange={(e, value) => {
                        const filteredDate = States.filter(
                          (state, i) => state.name === value
                        );
                        // console.log(filteredDate, "filteredDate");
                        setNewState(filteredDate[0].childs);

                        setProfile({
                          ...profile,
                          state: value,
                          currentlocation: "",
                        });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="single"
                          label="select your state"
                          variant="outlined"
                          fullWidth

                          // inputRef={register}
                        />
                      )}
                    />
                    {/* <div className="form-group">
                      <input
                        type="text"
                        name="currentlocation"
                        value={profile.currentlocation}
                        className="form_control mt-2"
                        placeholder="Enter Your City"
                        onChange={(e)=>formHandling(e)}
                      />
                    </div> */}
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <label> Current Location </label>
                    <Autocomplete
                      id="combo-box-demo"
                      single
                      value={profile?.currentlocation}
                      options={newState.map((res) => {
                        return res.name;
                      })}
                      getOptionLabel={(option) => option}
                      // style={{ width: 368 }}
                      onChange={(e, value) => {
                        setProfile({
                          ...profile,
                          currentlocation: value,
                        });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="single"
                          label="Enter your current location"
                          variant="outlined"
                          fullWidth

                          // inputRef={register}
                        />
                      )}
                    />
                    {/* <div className="form-group">
                      <input
                        type="text"
                        name="currentlocation"
                        value={profile.currentlocation}
                        className="form_control mt-2"
                        placeholder="Enter Your City"
                        onChange={(e)=>formHandling(e)}
                      />
                    </div> */}
                  </div>

                  {/* <div className=" col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        value={profile.contactNumber}
                        name="contactNumber"
                        className="form_control"
                        placeholder="9876543210"
                        onChange={(e) => formHandling(e)}
                      />
                    </div>
                  </div> */}

                  <div className=" col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        value={profile.contactNumber}
                        name="contactNumber"
                        className="form_control"
                        placeholder="9876543210"
                        onChange={(e) => formHandling(e)}
                      />
                    </div>
                  </div>

                  <div className=" col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        className="form_control"
                        placeholder="xyz@gmail.com"
                        onChange={(e) => formHandling(e)}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <button className="update" onClick={() => updateData()}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
