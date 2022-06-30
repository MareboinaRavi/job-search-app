import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import UI from "../SearchCandidates/UI";
import axios from "axios";
import apiList from "../../lib/apiList";
import { toast } from "react-toastify";
import { Autocomplete, TextField } from "@mui/material";
import moment from "moment";
import Edu from "../../config/Education";
import "react-loading-skeleton/dist/skeleton.css";
import Designationdata from "../../JsonData/Designation.json";
import Skillsdata from "../../JsonData/Skill.json";
// import location from "../../JsonData/locations.json";
// import apiList from "../../lib/apiList";
import FileSaver from "file-saver";
import States from "../../common/States";
import ReactPaginate from "react-paginate";

const Searchcandidates = () => {
  const N = JSON.parse(JSON.stringify(Edu));
  const [limit, setLimit] = useState(10);
  const [edu, setEdu] = React.useState(N);
  const [page, setPage] = useState(1);
  const [studentdata, setStudentData] = useState([]);
  // const [employment, setEmployment] = useState({
  //   designation: [],
  // });

  // const [checkedState, setCheckedState] = useState(new Array(13).fill(false));
  const workShifts = [
    {
      id: 1,
      name: "Morning Shift",
      isSelected: false,
    },
    {
      id: 2,
      name: "Evening Shift",
      isSelected: false,
    },
    {
      id: 3,
      name: "Night Shift",
      isSelected: false,
    },
    {
      id: 4,
      name: "Any",
      isSelected: false,
    },
  ];
  const jobTypess = [
    {
      id: 1,
      name: "Full Time",
      isSelected: false,
    },
    {
      id: 2,
      name: "Part Time",
      isSelected: false,
    },
    {
      id: 3,
      name: "Internships",
      isSelected: false,
    },
    {
      id: 4,
      name: "Work Abroad",
      isSelected: false,
    },
    {
      id: 5,
      name: "Work from Home",
      isSelected: false,
    },
    // {
    //   id: 6,
    //   name: "Work from Home",
    // },
  ];
  const showJobs = [
    {
      id: 1,
      name: "With mobile verfied only",
      isSelected: false,
    },
    {
      id: 2,
      name: "With resume only",
      isSelected: false,
    },
    {
      id: 3,
      name: "With email verfied only",
      isSelected: false,
    },
  ];

  const [mainDataObj, setMainDataObj] = useState({
    searchOptions: "intialvalue",
    role: "",
    expectedCTC: "",
    locality: "",
    experience: "",
    education: "",
    salary: {
      min: 0,
      max: 0,
    },
    designation: [],
    location: [],
    skills: [],
    jobTypes: JSON.parse(JSON.stringify(jobTypess)),
    workShift: JSON.parse(JSON.stringify(workShifts)),
    gender: "",
    age: {
      min: 0,
      max: 0,
    },
    timestamp: "",
    currentlocation: [],
    show: JSON.parse(JSON.stringify(showJobs)),
  });

  const handleOnChangeJobType = (position, i) => {
    const newJobTypes = JSON.parse(JSON.stringify(mainDataObj.jobTypes));
    const oldobj = { ...i };
    oldobj.isSelected = !oldobj.isSelected;
    newJobTypes[position] = oldobj;
    setMainDataObj({ ...mainDataObj, jobTypes: newJobTypes });
  };

  const handleOnChangeShow = (position, i) => {
    const oldArray = JSON.parse(JSON.stringify(mainDataObj.show));
    const updatedObj = { ...i };
    updatedObj.isSelected = !i.isSelected;
    oldArray[position] = updatedObj;
    setMainDataObj({
      ...mainDataObj,
      show: oldArray,
    });
  };

  const handleOnChangeWorkShift = (position, i) => {
    const oldArray = JSON.parse(JSON.stringify(mainDataObj.workShift));
    const updatedObj = { ...i };
    updatedObj.isSelected = !i.isSelected;
    oldArray[position] = updatedObj;
    setMainDataObj({
      ...mainDataObj,
      workShift: oldArray,
    });
  };

  // const handleOnChange = (position) => {
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   );
  //   setCheckedState(updatedCheckedState);
  // };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    let pagee = selectedPage + 1;
    // alert(page);
    fetchData(pagee, limit);
    setPage(page);
    // fetchJobs(selectedPage);
  };

  const [newState, setNewState] = React.useState([]);

  const handleChangeSelectExperience = (e) => {
    setMainDataObj({
      ...mainDataObj,
      experience: e.target.value,
    });
  };

  const handleChangeSelectSalary = (e) => {
    setMainDataObj({
      ...mainDataObj,
      salary: {
        ...mainDataObj.salary,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleChangeSelectAge = (e) => {
    setMainDataObj({
      ...mainDataObj,
      age: {
        ...mainDataObj.age,
        [e.target.name]: e.target.value,
      },
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async (page = 1, limit = 10) => {
    let headers = {};
    let token = localStorage.getItem("token");
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    const dataSending = {
      applicationFilter: "",
      location: [],
      designation: [],
      educations: [],
      category: [],
      industryType: [],
      skills: [],
      profileSearch: [],
      gender: [],
      work_shit: [],
      emp_type: [],
      experience: "",
      state: [],
      educations_course: [],
      timestamp: "",
    };
    try {
      const res = await axios.post(
        apiList.searchApplicats + "?page=" + page + `&&limit=${limit}`,
        dataSending,
        {
          headers,
        }
      );
      let students = res?.data?.posts;
      let newStudents = students.splice(0, 10);
      let counts = res?.data?.counts;
      const newPageCount = Math.ceil(counts / limit);
      setPageCount(newPageCount);
      setStudentData(newStudents);
      // console.log(res.data, "RRR");
    } catch (err) {
      console.log(err);
      toast.error("Error in fetching data");
    }
  };

  const fetchData1 = async (page = 1, limit = 10) => {
    let headers = {};
    let token = localStorage.getItem("token");
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    const dataSending = {
      applicationFilter: "",
      location: [],
      educations: [],
      category: [],
      designation: [],
      industryType: [],
      skills: [],
      profileSearch: [],
      gender: [],
      work_shit: [],
      emp_type: [],
      experience: "",
      state: [],
      educations_course: [],
      timestamp: "",
      total_experience: "",
    };
    try {
      const res = await axios.post(
        apiList.searchApplicats + "?page=" + page + `&&limit=${limit}`,
        dataSending,
        {
          headers,
        }
      );
      let students = res?.data?.posts;
      const counts = res?.data?.counts;
      return [students, counts];
      // setStudentData(students);
      // console.log(res.data, "RRR");
    } catch (err) {
      // console.log(err);
      toast.error("Error in fetching data");
    }
  };

  const handleChangeLimit = async (e) => {
    const val = e?.target?.value;
    let [students, counts] = await fetchData1(page, val);
    toast.success(val + " Records fetched successfully");
    setPageCount(Math.ceil(counts) / val);
    setStudentData(students);
    setLimit(val);
  };

  const handleApply = async (
    e,
    page = 1,
    des,
    skills,
    experience,
    state,
    location,
    timestamp,
    limit = 10
  ) => {
    e.preventDefault();
    // console.log(location, "skills");
    const filteredEdu = edu.filter((item, index) => item.value);
    let chils = [];
    for (let i = 0; i < filteredEdu.length; i++) {
      const ddd = filteredEdu[i].childs.filter((item1, index1) => item1.value);
      chils.push(ddd);
    }
    chils = chils.flat();
    const parents = filteredEdu.map((item) => item.name);
    const childss = chils.map((item) => item.name);

    const model = {
      applicationFilter: "",
      location: [],
      experience: "",
      educations: [],
      category: null,
      industryType: [],
      skills: skills,
      timestamp: timestamp ? timestamp : "",
      work_shift: [],
      emp_type: [],
      educations_course: [],
    };
    model.educations = parents;
    model.educations_course = childss;

    if (!!experience) {
      model.experience = experience;
    } else {
      model.experience = "";
    }
    model.applicationFilter = mainDataObj.searchOptions;

    model.ageMin = mainDataObj.age.min ? mainDataObj.age.min : "";
    model.ageMax = mainDataObj.age.max ? mainDataObj.age.max : "";
    model.profileSearch = [];
    if (des && des.length > 0) {
      model.category = [des];
    } else {
      model.category = [];
    }
    if (state && state.length > 0) {
      model.state = [state];
    } else {
      model.state = [];
    }
    if (location && location.length > 0) {
      model.location = location;
    } else {
      model.location = [];
    }
    if (mainDataObj.gender) {
      model.gender = [mainDataObj.gender];
    } else {
      model.gender = [];
    }
    console.log(mainDataObj.show, "show");
    model.isPhoneVerified = mainDataObj.show[0].isSelected;
    model.isEmailVerified = mainDataObj.show[2].isSelected;
    model.isResume = mainDataObj.show[1].isSelected;
    model.expectedCTC = mainDataObj.expectedCTC;
    let newFiltered = mainDataObj?.workShift?.filter((item) => item.isSelected);
    console.log(newFiltered, "newFiltered");
    for (let i = 0; i < newFiltered.length; i++) {
      model.work_shift.push(newFiltered[i].name);
    }
    let newFiltered1 = mainDataObj?.jobTypes?.filter((item) => item.isSelected);
    console.log(newFiltered1, "newFiltered");

    for (let i = 0; i < newFiltered1.length; i++) {
      model.emp_type.push(newFiltered1[i].name);
    }
    let headers = {};
    let token = localStorage.getItem("token");
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    try {
      const res = await axios.post(
        apiList.searchApplicats + "?page=" + page + `&&limit=${limit}`,
        model,
        {
          headers,
        }
      );
      let students = res?.data?.posts;
      let counts = res?.data?.counts;
      const newPageCount = Math.ceil(counts / limit);
      setPageCount(newPageCount);
      setStudentData(students);
      toast(students.length + " New Data is fetched", {
        type: "success",
        theme: "dark",
      });
      console.log(res.data.posts, "RRR");
    } catch (err) {
      toast.error("Error in fetching data");
    }
  };

  console.log(mainDataObj, "edu edu edu employment");
  //  'Today': [moment(), moment()],
  //     'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  //     'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  //     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  //     'This Month': [moment().startOf('month'), moment().endOf('month')],
  //     'Last Month': [moment().subtract(1, 'month').startOf('month'),

  const downloadReusme = (resume) => {
    if (resume === "" || resume == null) {
      toast.error("Resume not uploaded");
    } else {
      const data = resume;
      FileSaver.saveAs(data, "application/pdf");
      toast.success("Resume downloaded successfully");
    }
  };

  return (
    <>
      <div style={{ marginTop: "110px" }}>
        <div className="job_detail_wrapper">
          <div className="heading_pic_filter_list">
            <h1 className="filter_list_heading_1">Student List</h1>
            <p className="text-center filter_list_sub_heading">
              <Link to="/" className="filter_list_sub_heading_1">
                Home
              </Link>
              <i class="fas fa-greater-than text-white px-2"></i>
              {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="filter_list_sub_heading_2 ">
                Student List
              </a>
            </p>
          </div>
        </div>
        <div className="search_cand_Filter">
          <div className="container">
            <div className="row">
              <div className="search_cand_fil_top">
                <form action="#">
                  <div class="form-row">
                    <div class="form-group col-lg-4 col-md-6  search_indv px-5">
                      <label for="inputPassword4">Designation :</label>
                      <Autocomplete
                        id="combo-box-demo"
                        single
                        value={
                          mainDataObj?.designation
                            ? mainDataObj?.designation
                            : null
                        }
                        options={Designationdata.map((res) => {
                          return res.Designation;
                        })}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          // setEmployment({
                          //   ...employment,
                          //   designation: value,
                          // });
                          setMainDataObj({
                            ...mainDataObj,
                            designation: value,
                          });
                          // console.log(value, "value");
                          handleApply(
                            e,
                            page,
                            value,
                            mainDataObj.skills,
                            mainDataObj.experience,
                            mainDataObj.state,
                            mainDataObj.location,
                            mainDataObj.timestamp,
                            limit
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="single"
                            label="Present Designation"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      />
                    </div>

                    <div class="form-group col-lg-4 col-md-6 search_indv px-5">
                      <label for="inputEmail4">Skills :</label>
                      <Autocomplete
                        id="combo-box-demo"
                        multiple
                        value={mainDataObj.skills}
                        options={Skillsdata.map((res) => {
                          return res.Skill;
                        })}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={async (e, value) => {
                          setMainDataObj({
                            ...mainDataObj,
                            skills: value,
                          });
                          let alreadyExistSkills;
                          let newSkills = [...value];
                          alreadyExistSkills = [...new Set(newSkills)];
                          await handleApply(
                            e,
                            page,
                            mainDataObj.designation,
                            alreadyExistSkills,
                            mainDataObj.experience,
                            mainDataObj.state,
                            mainDataObj.location,
                            mainDataObj.timestamp,
                            limit
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="multiple"
                            label="Enter your Skills"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      />
                    </div>

                    <div class="form-group col-lg-4 col-md-6  search_indv px-5">
                      <label for="inputPassword4">Experience :</label>
                      <select
                        className="form_control"
                        name="min"
                        id="minexperience"
                        value={mainDataObj?.experience}
                        style={{ border: "1px solid blue" }}
                        onChange={(e) => {
                          setMainDataObj({
                            ...mainDataObj,
                            experience: e.target.value,
                          });
                          handleApply(
                            e,
                            page,
                            mainDataObj.designation,
                            mainDataObj.skills,
                            e.target.value,
                            mainDataObj.state,
                            mainDataObj.location,
                            mainDataObj.timestamp,
                            limit
                          );
                        }}
                      >
                        <option hidden>Years</option>
                        <option value="0-2 Years">0-2 Years</option>
                        <option value="2-5 Years">2-5 Years</option>
                        <option value="5-7 Years">5-7 Years</option>
                        <option value="7-10 Years">7-10 Years</option>
                        <option value="10+ Years">10+ Years</option>
                      </select>
                    </div>

                    <div class="form-group col-lg-4 col-md-6  search_indv px-5">
                      <label>State</label>
                      <Autocomplete
                        id="combo-box-demo"
                        single
                        value={[mainDataObj.state]}
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
                          handleApply(
                            e,
                            page,
                            mainDataObj.designation,
                            mainDataObj.skills,
                            mainDataObj.experience,
                            value,
                            mainDataObj.location,
                            mainDataObj.timestamp,
                            limit
                          );
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
                    <div class="form-group col-lg-4 col-md-6  search_indv px-5">
                      <label for="inputPassword4">Locations :</label>
                      <Autocomplete
                        id="combo-box-demo"
                        multiple
                        value={[...mainDataObj?.currentlocation]}
                        options={newState.map((res) => {
                          return res.name;
                        })}
                        getOptionLabel={(option) => option}
                        onChange={(e, value) => {
                          setMainDataObj({
                            ...mainDataObj,
                            currentlocation: value,
                          });
                          handleApply(
                            e,
                            page,
                            mainDataObj.designation,
                            mainDataObj.skills,
                            mainDataObj.experience,
                            mainDataObj.state,
                            value,
                            mainDataObj.timestamp,
                            limit
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="multiple"
                            label="Enter Locations"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      />
                    </div>

                    <div className="col-lg-4 col-md-6  search_indv px-5 position-relative">
                      <button
                        type="button"
                        className="filter_more_src"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        <i class="fas fa-plus"></i> More Filter
                      </button>

                      <div
                        class="modal fade "
                        id="exampleModalCenter"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
                          role="document"
                        >
                          <div class="modal-content search_candidates_modal">
                            <div className="modal-header modal-header--sticky">
                              <button
                                type="button"
                                className="close modal_srcand_close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <div className="modal_content">
                                <UI
                                  newState={newState}
                                  setNewState={setNewState}
                                  setEdu={setEdu}
                                  edu={edu}
                                  handleApply={handleApply}
                                  mainDataObj={mainDataObj}
                                  setMainDataObj={setMainDataObj}
                                  handleChangeSelectExperience={
                                    handleChangeSelectExperience
                                  }
                                  handleChangeSelectSalary={
                                    handleChangeSelectSalary
                                  }
                                  handleChangeSelectAge={handleChangeSelectAge}
                                  workShifts={workShifts}
                                  showJobs={showJobs}
                                  jobTypes={jobTypess}
                                  handleOnChangeWorkShift={
                                    handleOnChangeWorkShift
                                  }
                                  handleOnChangeShow={handleOnChangeShow}
                                  handleOnChangeJobType={handleOnChangeJobType}
                                />
                              </div>
                            </div>
                            <div class="modal-footer modal-footer--sticky search_footer">
                              <div className="fixed_apply d-inline-block">
                                <div className="d-flex">
                                  <button
                                    className="btn reset_cand"
                                    type="submit"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (
                                        window.confirm(
                                          "Are you sure you want to reset the filters?"
                                        )
                                      ) {
                                        setMainDataObj({
                                          searchOptions: "intialvalue",
                                          role: "",
                                          expectedCTC: "",
                                          locality: "",
                                          experience: "",
                                          education: "",
                                          salary: {
                                            min: 0,
                                            max: 0,
                                          },
                                          designation: [],
                                          location: [],
                                          skills: [],
                                          jobTypes: JSON.parse(
                                            JSON.stringify(jobTypess)
                                          ),
                                          workShift: JSON.parse(
                                            JSON.stringify(workShifts)
                                          ),
                                          gender: "",
                                          age: {
                                            min: 0,
                                            max: 0,
                                          },
                                          timestamp: "",
                                          currentlocation: [],
                                          show: JSON.parse(
                                            JSON.stringify(showJobs)
                                          ),
                                        });
                                      }
                                    }}
                                  >
                                    {" "}
                                    RESET
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-block apply_btn"
                                    onClick={(e) =>
                                      handleApply(
                                        e,
                                        page,
                                        mainDataObj.designation,
                                        mainDataObj.skills,
                                        mainDataObj.experience,
                                        mainDataObj.state,
                                        mainDataObj.currentlocation,
                                        mainDataObj.timestamp,
                                        limit
                                      )
                                    }
                                    data-dismiss="modal"
                                  >
                                    APPLY
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* //gfg */}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3"></div>

              <div className="col-md-3"></div>
              <div className="col-md-3">
                <div className="form-group">
                  <select
                    className="form_control"
                    name="midsan"
                    value={mainDataObj.timestamp ? mainDataObj.timestamp : ""}
                    id="minexperience"
                    onChange={(e) => {
                      // console.log(e.target.value, typeof e.target.value);
                      // setProfile({
                      //   ...profile,
                      //   timestamp: e.target.value,
                      // });
                      setMainDataObj({
                        ...mainDataObj,
                        timestamp: e.target.value,
                      });
                      handleApply(
                        e,
                        page,
                        mainDataObj.designation,
                        mainDataObj.skills,
                        mainDataObj.experience,
                        mainDataObj.state,
                        mainDataObj.currentlocation,
                        e.target.value
                      );
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

              <div className="col-md-3 ml-auto mb-3">
                <div className="search_candidate_dropdownbtn">
                  <span>Result Per Page :</span>
                  <select
                    className=""
                    name=""
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                    }}
                    value={limit}
                    onChange={(e) => handleChangeLimit(e)}
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                  </select>
                </div>
              </div>
            </div>

            {studentdata?.length > 0 ? (
              studentdata?.map((student, index) => {
                return (
                  <div className="row src_cand_card">
                    <div className=" col-md-3 col-lg-2 src_cand_side">
                      <div className="src_cand_top_inner">
                        <div className="text-center src_cand_img">
                          <img
                            className="src_cand_card_img"
                            alt={"candidate_profile" + index}
                            src={
                              student.profileImage
                                ? student.profileImage
                                : `images/girl_avtar.png`
                            }
                          />

                          <div className="src_cand_name">
                            <h4>{student?.name}</h4>
                          </div>

                          <div className="src_cand_mail">
                            {student?.contactNumber ? (
                              <div class="table-cell table_data2">
                                <span
                                  className="font-weight-bold"
                                  style={{ fontSize: "14px" }}
                                >
                                  xxxxxx{" "}
                                </span>
                                {student?.contactNumber
                                  ? student.contactNumber.toString().slice(-4)
                                  : null}
                                {/* {applicant?.contactNumber} */}
                              </div>
                            ) : (
                              <div class="table-cell table_data2">
                                [Not Updated]
                              </div>
                            )}
                          </div>

                          {/* <div>{student?.contactNumber}</div> */}
                          <div className="src_cand_mail">
                            {student?.email ? (
                              <div class="table-cell table_data2">
                                <span
                                  className="font-weight-bold"
                                  style={{ fontSize: "14px" }}
                                >
                                  xxxxxx{" "}
                                </span>
                                {student?.email
                                  ? student.email.toString().slice(-12)
                                  : null}
                              </div>
                            ) : (
                              <div class="table-cell table_data2">
                                [Not Updated]
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 col-lg-10">
                      <div className="src_cand_std_data position-relative">
                        <div className="download_src_resume">
                          <a
                            onClick={() => downloadReusme(student?.resume.url)}
                          >
                            <i class="fas fa-download "></i>{" "}
                          </a>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Key Skills</p>
                              <h6>
                                {student?.skills == "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  student?.skills?.map((val) => {
                                    return (
                                      <span className="pr-1 sc_comma">
                                        {val}
                                      </span>
                                    );
                                  })
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Experience</p>
                              <h6>
                                {student?.experience == "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <span>
                                    {/* <h6> {student?.experience}</h6> */}
                                    {student?.experience == "fresher" ? (
                                      <h6> {student?.experience}</h6>
                                    ) : null}

                                    {student?.experience == "experienced" ? (
                                      <h6> {student?.total_experience}</h6>
                                    ) : null}
                                  </span>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Designation</p>
                              <h6>
                                {student?.employment?.[0]?.designation == "" ? (
                                  <> [Not Updated]</>
                                ) : (
                                  <>{student?.employment[0]?.designation}</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Desired Industry</p>
                              <h6>
                                {" "}
                                {student?.employment?.[0]?.organization ==
                                "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <>{student?.employment[0]?.organization}</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Highest Graduation</p>
                              <h6>
                                {student?.education?.[0]?.course == "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <>
                                    {student?.education[0]?.course} -in-{" "}
                                    {student?.education[0]?.specialization}
                                  </>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Job Type</p>
                              <h6>
                                {student?.careerprofile?.[0]
                                  ?.Desired_Job_Type ? (
                                  <>
                                    {
                                      student?.careerprofile[0]
                                        ?.Desired_Job_Type
                                    }
                                  </>
                                ) : (
                                  <>[Not Updated]</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Employment Type</p>
                              <h6>
                                {student?.careerprofile?.[0]
                                  ?.Desired_Employement_Type ? (
                                  <>
                                    {
                                      student?.careerprofile[0]
                                        ?.Desired_Employement_Type
                                    }
                                  </>
                                ) : (
                                  <>[Not Updated]</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Prefered Shift</p>
                              <h6>
                                {student?.careerprofile?.[0]
                                  ?.Desired_PrefferedShift ? (
                                  <>
                                    {
                                      student?.careerprofile[0]
                                        ?.Desired_PrefferedShift
                                    }
                                  </>
                                ) : (
                                  <>[Not Updated]</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Current Location</p>
                              <h6>
                                {student?.currentlocation == "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <>{student?.currentlocation}</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Prefered Location</p>
                              <h6>
                                {student?.careerprofile?.[0]
                                  ?.Desired_Location ? (
                                  <>
                                    {
                                      student?.careerprofile[0]
                                        ?.Desired_Location
                                    }
                                  </>
                                ) : (
                                  <>[Not Updated]</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Excepted CTC</p>
                              <h6>
                                {student?.careerprofile?.[0]
                                  ?.Desired_Expected_SalaryinLakhs ? (
                                  <>
                                    {
                                      student?.careerprofile[0]
                                        ?.Desired_Expected_SalaryinLakhs
                                    }
                                  </>
                                ) : (
                                  <>[Not Updated]</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Date of Birth</p>
                              <h6>
                                {student?.personaldetails?.dateofbirth ? (
                                  <>
                                    {moment(
                                      student?.personaldetails?.dateofbirth
                                    ).format("YYYY-MM-DD")}
                                  </>
                                ) : (
                                  <>[Not Updated]</>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Age</p>
                              <h6>
                                <h6>
                                  {student?.personaldetails?.age ? (
                                    <>{student?.personaldetails?.age}</>
                                  ) : (
                                    <>[Not Updated]</>
                                  )}
                                </h6>
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Gender</p>
                              <h6>
                                {student?.personaldetails?.gender == "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <span>
                                    {student?.personaldetails?.gender}
                                  </span>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Marital Status</p>
                              <h6>
                                {student?.personaldetails?.maritalStatus ==
                                "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <span>
                                    {student?.personaldetails?.maritalStatus}
                                  </span>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Pincode</p>
                              <h6>
                                {student?.personaldetails?.pincode == "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <span>
                                    {student?.personaldetails?.pincode}
                                  </span>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Address Proof</p>
                              <h6>
                                {" "}
                                {student?.personaldetails?.AddressProof ==
                                "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <span>
                                    {student?.personaldetails?.AddressProof}
                                  </span>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Adress Proof Number</p>
                              <h6>
                                {" "}
                                {student?.personaldetails?.AdressProofNumber ==
                                "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  <span>
                                    {
                                      student?.personaldetails
                                        ?.AdressProofNumber
                                    }
                                  </span>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="src_main_data_heading">
                              <p>Languages Known</p>
                              <h6>
                                {" "}
                                {student?.personaldetails?.languages == "" ? (
                                  <span> [Not Updated]</span>
                                ) : (
                                  student?.personaldetails?.languages?.map(
                                    (val) => {
                                      return (
                                        <span className="pr-1 sc_comma">
                                          {val}
                                        </span>
                                      );
                                    }
                                  )
                                )}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Data Found</h1>
            )}
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};
export default Searchcandidates;
