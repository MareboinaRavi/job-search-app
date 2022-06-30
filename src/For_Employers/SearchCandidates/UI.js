import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import location from "../../JsonData/locations.json";
import DateRangeComponent from "./DateRangeComponent.js";
// import Category from "../../JsonData/Category.json";
import EducationSelection from "./EducationSelection.js";
import Skillsdata from "../../JsonData/Skill.json";
import Designationdata from "../../JsonData/Designation.json";
import States from "../../common/States";
import Educ from "../../config/Education";
const UI = ({
  // handleApply,
  edu,
  setEdu,
  handleOnChangeWorkShift,
  mainDataObj,
  setMainDataObj,
  handleChangeSelectExperience,
  handleChangeSelectSalary,
  handleChangeSelectAge,
  workShifts,
  showJobs,
  jobTypes,
  handleOnChangeJobType,
  handleOnChangeShow,
  newState,
  setNewState,
}) => {
  const [status, setStatus] = React.useState(0); // 0: no show, 1: show yes, 2: show no.
  // const [newState, setNewState] = React.useState([]);
  const [dummy, setDummy] = useState(false);
  // const workShifts = [
  //   {
  //     id: 1,
  //     name: "Morning Shift",
  //     isSelected: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Evening Shift",
  //     isSelected: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Night Shift",
  //     isSelected: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Any",
  //     isSelected: false,
  //   },
  // ];
  // const jobTypes = [
  //   {
  //     id: 1,
  //     name: "Full Time",
  //     isSelected: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Part Time",
  //     isSelected: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Internships",
  //     isSelected: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Work Abroad",
  //     isSelected: false,
  //   },
  //   {
  //     id: 5,
  //     name: "Work from Home",
  //     isSelected: false,
  //   },
  //   // {
  //   //   id: 6,
  //   //   name: "Work from Home",
  //   // },
  // ];
  // const showJobs = [
  //   {
  //     id: 1,
  //     name: "With mobile verfied only",
  //     isSelected: false,
  //   },
  //   {
  //     id: 2,
  //     name: "With resume only",
  //     isSelected: false,
  //   },
  //   {
  //     id: 3,
  //     name: "With email verfied only",
  //     isSelected: false,
  //   },
  // ];

  const [profile, setProfile] = useState({
    skills: [],
  });
  const radioHandler = (status) => {
    setStatus(status);
  };

  const onValueChange = (e) => {
    setMainDataObj({ ...mainDataObj, searchOptions: e.target.value });
  };
  const onGenderChange = (e) => {
    setMainDataObj({
      ...mainDataObj,
      gender: e?.target?.value,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4" style={{ marginTop: "-90px" }}>
          <div className="sticky-top sticky_candidates">
            <div>
              <button
                className="sidebar_button search_sidebar"
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                onclick="ezy()"
              >
                Sidebar Menu <i className="fa fa-bars text-white"></i>
              </button>
            </div>
            <div id="collapseExample">
              <div className="sidebar searchcandidate_sidebar">
                <h4 style={{ padding: "10px" }}>Advance Filter</h4>
                <a href="#searchoption"> Search Option</a>
                <a href="#Role"> Designation</a>
                <a href="#skills">Skills</a>
                <a href="#states">State</a>
                <a href="#Locality"> Locations</a>
                <a href="#Experience">Total Experience</a>
                <a href="#Education"> Education</a>
                {/* <a href="#ITskills"> IT Skills</a> */}
                <a href="#Salary"> Salary</a>
                <a href="#WorkShift">WorkShift</a>
                <a href="#Gender"> Gender</a>
                <a href="#Age"> Age</a>
                <a href="#EmploymentType"> Employment Type</a>
                <a href="#Profile Freshness">Profile Freshness</a>

                <a href="#ShowandHide">Show & Hide</a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-8 search_cand_right_filter"
          style={{ marginTop: "-75px" }}
        >
          <div className="wrapper">
            <div id="searchoption">
              <div id="Role">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">
                      Search Option
                    </h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          searchOptions: "intialvalue",
                        })
                      }
                    >
                      clear
                    </span>
                  </div>
                  <div className="comfort">
                    <div className="row search_content1_subnames">
                      <div className="col-md-6">
                        <input
                          type="radio"
                          id="Profiles"
                          name=""
                          value=""
                          checked={mainDataObj.searchOptions === ""}
                          onChange={onValueChange}
                        />
                        <label className="search_label_size" for="Profiles">
                          Profile without Resume
                        </label>
                        <br />
                      </div>

                      <div className="col-md-6">
                        <input
                          type="radio"
                          id="Profiles"
                          name="resume"
                          value="resume"
                          checked={mainDataObj.searchOptions === "resume"}
                          onChange={onValueChange}
                        />
                        <label className="search_label_size" for="Profiles">
                          Profile with Resume
                        </label>
                        <br />
                        {/* <span style={{ color: "green" }}>Now search in candidate's resume to get
                                                        more results</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Locality">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">
                      Designation
                    </h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          designation: [],
                        })
                      }
                    >
                      clear
                    </span>
                  </div>

                  <div className=" search_content1_subnames">
                    <div className="row Roll_Scroll"></div>
                    <Autocomplete
                      id="combo-box-demo"
                      single
                      value={mainDataObj?.designation}
                      options={Designationdata.map((res) => {
                        return res.Designation;
                      })}
                      getOptionLabel={(option) => option}
                      onChange={(e, value) => {
                        setMainDataObj({
                          ...mainDataObj,
                          designation: value,
                        });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="single"
                          label="Select Designation"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Skills */}

              <div id="skills">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">Skills</h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          skills: [],
                        })
                      }
                    >
                      clear
                    </span>
                  </div>

                  <div className="search_content1_subnames">
                    <div className="row">
                      <Autocomplete
                        id="combo-box-demo"
                        multiple
                        value={mainDataObj.skills}
                        options={Skillsdata.map((res) => {
                          return res.Skill;
                        })}
                        getOptionLabel={(option) => option}
                        onChange={(e, value) => {
                          setMainDataObj({
                            ...mainDataObj,
                            skills: value,
                          });
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="multiple"
                            label="Select Skills"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* States */}

              <div id="states">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">State</h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          state: [],
                        })
                      }
                    >
                      clear
                    </span>
                  </div>
                  {/* {alert(mainDataObj.state)} */}
                  <div className="search_content1_subnames">
                    <div className="row">
                      <Autocomplete
                        id="combo-box-demo"
                        single
                        value={[mainDataObj?.state]}
                        options={States.map((res) => {
                          return res.name;
                        })}
                        // getOptionLabel={(option) =>
                        //   typeof option === "string" || option instanceof String
                        //     ? option
                        //     : ""
                        // }
                        getOptionLabel={(option) => option}
                        onChange={(e, value) => {
                          const filteredDate = States.filter(
                            (state, i) => state.name === value
                          );
                          setNewState(filteredDate[0].childs);
                          setMainDataObj({
                            ...mainDataObj,
                            state: value,
                            currentlocation: "",
                          });
                          // handleApply(
                          //   e,
                          //   page,
                          //   mainDataObj.designation,
                          //   mainDataObj.skills,
                          //   mainDataObj.experience,
                          //   value
                          // );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="single"
                            label="select state"
                            variant="outlined"
                            fullWidth

                            // inputRef={register}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* States */}

              {/* LOCALITY */}

              <div id="Experience">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">Locations</h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          currentlocation: [],
                        })
                      }
                    >
                      clear
                    </span>
                  </div>
                  <div className="search_content1_subnames">
                    <div className="row">
                      <Autocomplete
                        id="combo-box-demo"
                        multiple={true}
                        value={[...mainDataObj?.currentlocation]}
                        options={newState.map((res) => {
                          return res.name;
                        })}
                        getOptionLabel={(option) => option}
                        // getOptionLabel={(option) =>
                        //   typeof option === "string" || option instanceof String
                        //     ? option
                        //     : ""
                        // }
                        onChange={(e, value) => {
                          setMainDataObj({
                            ...mainDataObj,
                            currentlocation: value,
                          });
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="single"
                            label="Select Location"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}

              <div id="Education">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">
                      Total Experience
                    </h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          experience: "",
                        })
                      }
                    >
                      clear
                    </span>
                  </div>
                </div>

                <div className="search_content1_subnames">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          className="form_control"
                          name="min"
                          id="minexperience"
                          value={mainDataObj.experience}
                          onChange={handleChangeSelectExperience}
                        >
                          <option hidden>Years</option>
                          <option value="0-2 Years">0-2 Years</option>
                          <option value="2-5 Years">2-5 Years</option>
                          <option value="5-7 Years">5-7 Years</option>
                          <option value="7-10 Years">7-10 Years</option>
                          <option value="10+ Years">10+ Years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div id="Salary">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">Education</h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() => {
                        // setEdu((prev) => [...Education]);
                        const data = JSON.parse(JSON.stringify(Educ));
                        setEdu(data.length > 0 ? data : []);
                        setDummy(!dummy);
                      }}
                    >
                      clear
                    </span>
                  </div>

                  <div className="search_content1_subnames">
                    <EducationSelection edu={edu} setEdu={setEdu} />
                  </div>
                </div>
              </div>

              {/* Salary */}

              <div id="WorkShift">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">Salary</h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          expectedCTC: "",
                        })
                      }
                    >
                      clear
                    </span>
                  </div>

                  <div className="search_content1_subnames">
                    <div className="row">
                      <div className=" col-lg-12 col-md-12">
                        <div className="form-group">
                          <select
                            className="form_control"
                            value={mainDataObj.expectedCTC}
                            name="Desired_Expected_SalaryinLakhs"
                            onChange={(e) => {
                              setMainDataObj({
                                ...mainDataObj,
                                expectedCTC: e.target.value,
                              });
                            }}
                          >
                            <option hidden>Expected CTC</option>
                            <option value="0-3 LPA">0-3 LPA</option>
                            <option value="3-5 LPA">3-5 LPA</option>
                            <option value="5-7 LPA">5-7 LPA</option>
                            <option value="7-10 LPA">7-10 LPA</option>
                            <option value="10-15 LPA">10-15 LPA</option>
                            <option value="15-20 LPA">15-20 LPA</option>
                            <option value="10-15 LPA">20+ LPA</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Shifts */}

              <div id="Gender">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">
                      Work Shifts
                    </h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          workShift: JSON.parse(JSON.stringify(workShifts)),
                        })
                      }
                    >
                      clear
                    </span>
                  </div>
                  <div className="search_content1_subnames">
                    <div className="row">
                      {mainDataObj?.workShift &&
                        mainDataObj?.workShift?.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="form-group">
                              <input
                                type="checkbox"
                                id={item.id}
                                name={item.name}
                                value={item.isSelected}
                                checked={item.isSelected}
                                onChange={() =>
                                  handleOnChangeWorkShift(index, item)
                                }
                              />
                              <label
                                className="search_label_size"
                                for={item.name}
                              >
                                {item.name}
                              </label>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gender */}

              <div id="Age">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">Gender</h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          gender: "",
                        })
                      }
                    >
                      clear
                    </span>
                  </div>
                  <div className="search_content1_subnames">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="radio"
                          id="male"
                          name="male"
                          value="Male"
                          checked={mainDataObj.gender === "Male"}
                          //   value={mainDataObj.gender}
                          onChange={onGenderChange}
                        />
                        <label className="search_label_size" for="male">
                          Male
                        </label>
                        <br />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="radio"
                          id="Female"
                          name="female"
                          checked={mainDataObj.gender === "Female"}
                          value="Female"
                          onChange={onGenderChange}
                        />
                        <label className="search_label_size" for="female">
                          Female
                        </label>
                        <br />
                      </div>
                      <div className="col-md-6">
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AGE */}
              <div id="#EmploymentType">
                <div>
                  <div className="search_content1">
                    <div className="search_content1_sub">
                      <h5 className=" pull-left text-capitalize cp">Age</h5>
                      <span
                        className="clear_filter_sub"
                        onClick={() =>
                          setMainDataObj({
                            ...mainDataObj,
                            age: {
                              min: "",
                              max: "",
                            },
                          })
                        }
                      >
                        clear
                      </span>
                    </div>

                    <div className="search_content1_subnames">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="search_label_size" for="minage">
                              Min
                            </label>
                            <select
                              className="form_control"
                              name="min"
                              id="minage"
                              value={mainDataObj.age.min}
                              onChange={handleChangeSelectAge}
                            >
                              {/* <option hidden>select</option> */}
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                              <option value="32">32</option>
                              <option value="33">33</option>
                              <option value="34">34</option>
                              <option value="35">35</option>
                              <option value="36">36</option>
                              <option value="37">37</option>
                              <option value="38">38</option>
                              <option value="39">39</option>
                              <option value="40">40</option>
                              <option value="41">41</option>
                              <option value="42">42</option>
                              <option value="43">43</option>
                              <option value="44">44</option>
                              <option value="45">45</option>
                              <option value="46">46</option>
                              <option value="47">47</option>
                              <option value="48">48</option>
                              <option value="49">49</option>
                              <option value="50">50</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="search_label_size" for="maxage">
                              Max
                            </label>
                            <select
                              className="form_control"
                              name="max"
                              id="maxage"
                              value={mainDataObj.age.max}
                              onChange={handleChangeSelectAge}
                            >
                              {/* <option hidden>select</option> */}
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                              <option value="32">32</option>
                              <option value="33">33</option>
                              <option value="34">34</option>
                              <option value="35">35</option>
                              <option value="36">36</option>
                              <option value="37">37</option>
                              <option value="38">38</option>
                              <option value="39">39</option>
                              <option value="40">40</option>
                              <option value="41">41</option>
                              <option value="42">42</option>
                              <option value="43">43</option>
                              <option value="44">44</option>
                              <option value="45">45</option>
                              <option value="46">46</option>
                              <option value="47">47</option>
                              <option value="48">48</option>
                              <option value="49">49</option>
                              <option value="50">50</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* JOB TYPE */}
              <div id="Profile Freshness">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">
                      Employment Type
                    </h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          jobTypes: JSON.parse(JSON.stringify(jobTypes)),
                        })
                      }
                    >
                      clear
                    </span>
                  </div>

                  <div className="search_content1_subnames">
                    <div className="row">
                      {mainDataObj?.jobTypes &&
                        mainDataObj?.jobTypes?.map((jobType, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="form-group">
                              <input
                                type="checkbox"
                                id={jobType.name}
                                name={jobType.name}
                                value={jobType.isSelected}
                                checked={jobType.isSelected}
                                onChange={() =>
                                  handleOnChangeJobType(index, jobType)
                                }
                              />
                              <label
                                className="search_label_size"
                                for={jobType.name}
                              >
                                {jobType.name}
                              </label>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Freshness */}

              <div id="ShowandHide">
                <div className="search_content1">
                  <div className="search_content1_sub">
                    <h5 className=" pull-left text-capitalize cp">
                      Profile Freshness
                    </h5>
                    <span
                      className="clear_filter_sub"
                      onClick={() =>
                        setMainDataObj({
                          ...mainDataObj,
                          timestamp: "",
                        })
                      }
                    >
                      clear
                    </span>
                  </div>

                  <div className="search_content1_subnames">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            className="form_control"
                            name="min"
                            id="minexperience"
                            value={
                              mainDataObj.timestamp ? mainDataObj.timestamp : ""
                            }
                            onChange={(e) => {
                              setMainDataObj({
                                ...mainDataObj,
                                timestamp: e.target.value,
                              });
                            }}
                          >
                            <option hidden>Years</option>
                            <option value="1">Last Day</option>
                            <option value="3">Last Three Days</option>
                            <option value="7">Last One Week</option>
                            <option value="30">Last One Month</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Show */}

              <div className="search_content1">
                <div className="search_content1_sub">
                  <h5 className=" pull-left text-capitalize cp">Show</h5>
                  <span
                    className="clear_filter_sub"
                    onClick={() =>
                      setMainDataObj({
                        ...mainDataObj,
                        show: JSON.parse(JSON.stringify(showJobs)),
                      })
                    }
                  >
                    clear
                  </span>
                </div>

                <div className="search_content1_subnames">
                  {/* <label className="search_label_size"> Show</label> Ravi */}
                  {/* <br /> */}
                  <div className="row">
                    {mainDataObj?.show &&
                      mainDataObj?.show?.map((showjob, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="form-group">
                            <input
                              type="checkbox"
                              id={showjob.name}
                              name={showjob.name}
                              value={showjob.isSelected}
                              checked={showjob.isSelected}
                              onChange={() =>
                                handleOnChangeShow(index, showjob)
                              }
                            />
                            <label
                              className="search_label_size"
                              for={showjob.name}
                            >
                              {showjob.name}
                            </label>
                          </div>
                        </div>
                      ))}
                    {/* {

                    } */}
                    {/* <div className="col-md-6">
                      <input
                        type="checkbox"
                        id="With mobile verified only"
                        name="With mobile verified only"
                        value="With mobile verified only"
                      />
                      <label
                        className="search_label_size"
                        for="With mobile verified only"
                      >
                        {" "}
                        With mobile verified only
                      </label>
                      <br />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="checkbox"
                        id="With Email verified only"
                        name="With Email verified only"
                        value="With Email verified only"
                      />
                      <label
                        className="search_label_size"
                        for="With Email verified only"
                      >
                        With Email verified only
                      </label>
                      <br />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="checkbox"
                        id="With resume only"
                        name="With resume only"
                        value="With resume only"
                      />
                      <label
                        className="search_label_size"
                        for="With resume only"
                      >
                        With resume only
                      </label>
                      <br />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
