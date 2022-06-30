import Sidebar from '../../Students/Sidebar'
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import PostAction from "../../Reducer/PostAction";
import axios from 'axios'
import apiList, { server } from "../../lib/apiList";
import ChipInput from "material-ui-chip-input";
// import PersonalDetails from './personalDetails'
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from 'react-toastify';
import { Line } from 'rc-progress';
// import FileUploadInput from "./FileUploadInput";
import ResumeFileUpload from "../../common/ResumeFileUpload";
import ProfileImageUpload from "../../common/ProfileImageUpload";
import Modal from 'react-modal';
import { Autocomplete } from '@mui/material';
import { TextField } from '@material-ui/core';
import Skillsdata from '../../JsonData/Skill.json';
import Designationdata from '../../JsonData/Designation.json';
import Categorydata from '../../JsonData/Category.json';
import NoticePerioddata from '../../JsonData/Noticeperiod.json'
import data from '../../JsonData/locations.json'

const SellSkill = () => {
    const [file, setFile] = useState("");
    const [resume, setResume] = useState("")
    const dispatch = useDispatch();
    const [projectType, setProjectType] = useState(false);
    const [progressBar, setProgressBar] = useState(0);
    const [currentcompany, setCurrentcompany] = useState(false);
    const [modalData, setModalData] = useState()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [verifyType, setVerifyType] = useState();

    const [profile, setProfile] = useState({
        requiredItem: 0,
        name: "",
        email: "",
        profileImage: "",
        contactNumber: "",
        experience: "",
        currentlocation: "",
        resumeHeadline: "",
        profileSummary: "",
        skills: [],
        employment: [],
        education: [],
        project: [],
        worksample: [],
        presentation: [],
        careerprofile: [],
        presentation: [],
        publication: [],
        patent: [],
        personaldetails: {
            dateofbirth: "",
            address: "",
            gender: "",
            pincode: "",
            maritalStatus: "",
            hometown: "",
            languages: [],
        },
        resume: {
            filename: "",
            url: ""
        }
    })

    const [post, setPost] = useState({
        title: '',
        // maxPositions: '',
        trainingType: '',
        experience: '',
        // country: '',
        time: '',
        // education: '',
        description: '',
        fees: '',
        // skillsets:[],
        // cities:[],
    })
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    //console.log(register)
    const formHandling = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        //     axios
        //   .post(`${apiList.jobs}`, post, {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem("token")}`,
        //       },
        //   })
        //   .then((response) => {
        //     console.log(response)
        //     toast.success(response.data.message)
        //     navigate("/Manage_jobs")
        //     })
        //   .catch((err) => {
        //     console.log(err.response);
        //     toast.error(err.response.data.message)
        //   });
        // axios.post()
        console.log(post)
    }


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
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };
    // getting profile data
    useEffect(() => {
        getData();
    }, []);


    const imageonChangeHandling = (event) => {

        setFile(event.target.files[0])

    }

    return (
        <div>
            <div style={{ marginTop: "75px" }}>
                <div className="container-fluid my_profile ">
                    <div className="container " >
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="canditate-des">
                                                <label for="file">
                                                    <p href="#">

                                                        <img
                                                            className="resume_img img-responsive"
                                                            src={profile.profileImage ? profile.profileImage : `images/girl_avtar.png`}
                                                        />
                                                    </p>

                                                    <i class="fas fa-camera img_pencil img_edit"></i>
                                                </label>
                                                <input type="file"
                                                    id="file"
                                                    style={{ display: "none" }}
                                                    onChange={(event) => imageonChangeHandling(event)}
                                                />

                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <h4 className="resume_title">
                                                {profile.name}{" "}
                                                <Link to="/myprofile">
                                                    <span class="correct_pencil">
                                                        <i class="fas fa-pencil-alt pencil_icon"></i>
                                                    </span>
                                                </Link>
                                            </h4>
                                            <p className="resume_text">
                                                {profile.resumeHeadline}
                                            </p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="location_resume_1 d-block">
                                                        <span>
                                                            <i className="fas fa-map-marker-alt marker_icon"></i>
                                                        </span>{" "}
                                                        <span className="location_resume">{profile.currentlocation}</span>
                                                    </p>

                                                    <p className="location_resume_2 d-block">
                                                        <span>
                                                            <i class="fas fa-shopping-bag marker_icon"></i>
                                                        </span>{" "}
                                                        {
                                                            profile?.experience.experience ?
                                                                <span className="location_resume">{profile.experience.experience.charAt(0).toUpperCase() + profile.experience.experience.slice(1)}</span> :
                                                                <span className="location_resume">{profile.experience.charAt(0).toUpperCase() + profile.experience.slice(1)}</span>
                                                        }
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>
                                                        <span>
                                                            <i className="fas fa-mobile-alt mobile_icon ml-1"></i>
                                                        </span>{" "}
                                                        <span className="mobile_resume">{profile.contactNumber}</span>
                                                        {/* {profile.isPhoneVerified ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: "13px" }} >
                                                                <path fill="#388e3c" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                                            </svg>
                                                            :
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: "13px" }} onClick={sendPhoneOtp}  >
                                                                <path fill="#ffa000" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
                                                            </svg>
                                                        } */}


                                                    </p>

                                                    <p>
                                                        <span>
                                                            <i class="far fa-envelope mobile_icon"></i>
                                                        </span>{" "}
                                                        <span className="mobile_resume">
                                                            {profile.email}

                                                        </span>
                                                        {/* {profile.isEmailVerified ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: "13px" }} >
                                                                <path fill="#388e3c" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                                            </svg>
                                                            :
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ height: "13px" }} onClick={verifyEmail} >
                                                                <path fill="#ffa000" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
                                                            </svg>
                                                        } */}



                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div id="Resume_Headline"></div>
                        </div>
                    </div>
                </div>

                <div className="container content">
                    <div className="job-bx-title clearfix">
                        <h5 className=" pull-left text-uppercase cp">Post Your Skill</h5>
                        <Link to="/" className="site-button right-arrow button-sm float-right"> Back </Link>
                    </div>

                    <form >
                        <div className="row m-b30">
                            <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label> Skill Title</label>
                                    <input type="text" name="title" className="form_control"

                                        placeholder="Enter Your Designation Here" onChange={(e => formHandling(e))}
                                    />

                                </div>
                            </div>
                            {/* <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label> Positions available</label>
                                                <input type="number" name='maxPositions' required
                                                    className="form_control"

                                                    placeholder="No. of positions available" onChange={(e=>formHandling(e))}
                                                />

                                            </div>
                                        </div> */}
                            <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Training Type</label>
                                    <select className="form_control mr-sm-2"

                                        name='trainingType' onChange={(e => formHandling(e))}
                                    >
                                        <option hidden>Select Training Type</option>
                                        <option value="Online">Online</option>
                                        <option value="Offline">Offline</option>
                                        {/* <option value="freelancer">Freelancer</option> */}
                                    </select>
                                    {/* {errors.jobType && (<small className="text-danger">{errors.jobType.message}</small>)} */}
                                </div>
                            </div>
                            <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Skill Experience</label>
                                    <select className="form_control mr-sm-2"

                                        name="experience" onChange={(e => formHandling(e))}
                                    >
                                        <option hidden>Select Experience</option>
                                        <option value="0-2 years">0-2 years</option>
                                        <option value="2-5 years">2-5 years</option>
                                        <option value="5-10 years">5-10 years</option>
                                        <option value="10-15 years">10-15 years</option>
                                        <option value="15+ years">15+ years</option>
                                    </select>


                                </div>
                            </div>


                            <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Expected Fee</label>
                                    <input type="number" name='fees' className='form_control'
                                        required placeholder="₹0 INR" onChange={(e => formHandling(e))}
                                    />
                                </div>
                            </div>

                            {/* <div className=" col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Technical Skills :</label>
                                                {/* <ChipInput
                                                    label="Skills"
                                                    variant="outlined"
                                                    // helperText="Press enter to add skills"
                                                    value={post.skillsets}
                                                    onAdd={(chip) =>
                                                      setPost({
                                                        ...post,
                                                        skillsets: [...post.skillsets, chip],
                                                      })
                                                    }
                                                    onDelete={(chip, index) => {
                                                      let skillsets = post.skillsets;
                                                      skillsets.splice(index, 1);
                                                      setPost({
                                                        ...post, 
                                                        skillsets: skillsets,
                                                      });
                                                    }}
                                                    fullWidth
                                                  /> *
                                                  <Autocomplete
                                                    id="combo-box-demo"
                                                    multiple
                                                    value={post.skillsets}
                                                    options={skillsdata.map((res)=>{
                                                    return res.Skill
                                                    })}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(e, value) => {
                                                    setPost({
                                                        ...post,
                                                        skillsets:value
                                                    });
                                                    }}
                                                    
                                                    renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        name="multiple"
                                                        label="Enter your Technical Skills"
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                    )}
                                                />
                                                  <span>Press enter to add skills</span>
                                                </div>
                                        </div> */}


                            {/* <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Region</label>
                                                <select className="form_control mr-sm-2" name='country' required 
                                                onChange={(e=>formHandling(e))}
                                                >
                                                    <option hidden >Select Your Region</option>
                                                    <option value="India">India</option>


                                                </select>
                                                {/* {errors.region && (<small className="text-danger">{errors.region.message}</small>)} *
                                            </div>
                                        </div> */}

                            <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Available Locations</label>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        multiple
                                        value={post.cities}
                                        options={data.map((res) => {
                                            return res.location
                                        })}
                                        getOptionLabel={(option) => option}
                                        onChange={(e, value) => {
                                            setPost({
                                                ...post,
                                                cities: value
                                            });
                                        }}

                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                name="multiple"
                                                label="Enter your current location"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        )}
                                    />

                                    <span>Press & enter to add Locations</span>
                                </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Training in Hours</label>
                                    {/* <input type="date" className="form_control" name="deadline" placeholder="12/06/1998" required 
                                                onChange={(e=>formHandling(e))}
                                                /> */}
                                    <input

                                        type="time"
                                        name='time'
                                        //   value="01:01:01"
                                        //   step="1"
                                        className="form_control" onChange={(e => formHandling(e))} />
                                </div>
                            </div>
                            {/* <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Education</label>
                                                <input type="text" className="form_control" name='education' placeholder="Education Required" required 
                                                onChange={(e=>formHandling(e))}
                                                />

                                            </div>
                                        </div> */}

                            <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                    <label>Job Description</label>
                                    <textarea type="text" name="description" required className="form_control" cols="30"
                                        rows="5" placeholder="Describe Here..."
                                        onChange={(e => formHandling(e))}
                                    ></textarea>


                                </div>
                            </div>



                        </div>
                    </form>
                    <button className="update_pj" onClick={(e) => handleUpdate(e)} >Post Your Skill</button>
                </div>

            </div>
        </div>
    )
}

export default SellSkill
