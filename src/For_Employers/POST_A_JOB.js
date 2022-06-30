import React, { useState } from 'react'
import { Link ,Navigate, useNavigate  } from 'react-router-dom';
import EmployeeSideBar from './EmployeeSideBar';
import { useDispatch, useSelector } from 'react-redux'
// import { getPostJob } from '../action/action'
import { useForm } from "react-hook-form";
import axios from 'axios';
import ChipInput from "material-ui-chip-input";
import {TagsInput} from "react-tag-input-component"
import { toast } from 'react-toastify';
import apiList from '../lib/apiList';
import { Autocomplete } from '@mui/material';
import { TextField } from '@material-ui/core';
import data from '../JsonData/locations.json';
import skillsdata from '../JsonData/Skill.json'
const POST_A_JOB = (props) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();
    // const dispatch = useDispatch();
    // const postdata = useSelector((post) => post);
    // console.log(postdata.auth.data)


    const [post, setPost] = useState({
        title: '',
        maxPositions: '',
        jobType: '',
        experience: '',
        country: '',
        deadline: '',
        education: '',
        description: '',
        salary: '',
        skillsets:[],
        cities:[],
    })

    //console.log(register)
    const formHandling = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const handleUpdate=(e)=>{
        e.preventDefault()
        axios
      .post(`${apiList.jobs}`, post, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      })
      .then((response) => {
        console.log(response)
        toast.success(response.data.message)
        navigate("/Manage_jobs")
        })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message)
      });
    }

    // const venkat=(e) =>
    // {
    //     // e.preventDefault();

    //     dispatch(getPostJob(post));


    // }
    //console.log(register)
    return (
        <div>


            <div className="container main_content my-5">
                <div className="row">
                    <div className="col-lg-3">
                        <EmployeeSideBar />
                    </div>
                    <div className="col-lg-9">
                        <div className="wrapper">
                            <div className="content">
                                <div className="job-bx-title clearfix">
                                    <h5 className=" pull-left text-uppercase cp">Post A Job</h5>
                                    <Link to="/" className="site-button right-arrow button-sm float-right"> Back </Link>
                                </div>

                                <form >
                                    <div className="row m-b30">
                                        <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label> Job Title</label>
                                                <input type="text" name="title" className="form_control"

                                                    placeholder="Enter Your Designation Here" onChange={(e=>formHandling(e))}
                                                />

                                            </div>
                                        </div>
                                        <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label> Positions available</label>
                                                <input type="number" name='maxPositions' required
                                                    className="form_control"

                                                    placeholder="No. of positions available" onChange={(e=>formHandling(e))}
                                                />

                                            </div>
                                        </div>
                                        <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Job Type</label>
                                                <select className="form_control mr-sm-2"

                                                    name='jobType' onChange={(e=>formHandling(e))}
                                                >
                                                    <option hidden>Select Job Type</option>
                                                    <option value="Full Time">Full Time</option>
                                                    <option value="Part Time">Part Time</option>
                                                    <option value="freelancer">Freelancer</option>
                                                </select>
                                                {errors.jobType && (<small className="text-danger">{errors.jobType.message}</small>)}
                                            </div>
                                        </div>
                                        <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Experience</label>
                                                <select className="form_control mr-sm-2"

                                                    name="experience" onChange={(e=>formHandling(e))}
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
                                                <label>Maximum salary</label>
                                                <input type="number" name='salary' className='form_control'
                                                    required placeholder="₹0 INR" onChange={(e=>formHandling(e))}
                                                />

                                            </div>
                                        </div>
                                        <div className=" col-lg-6 col-md-6">
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
                                                  /> */}
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
                                        </div>


                                        <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Region</label>
                                                <select className="form_control mr-sm-2" name='country' required onChange={(e=>formHandling(e))}>
                                                    <option hidden >Select Your Region</option>
                                                    <option value="India">India</option>


                                                </select>
                                                {errors.region && (<small className="text-danger">{errors.region.message}</small>)}
                                            </div>
                                        </div>
                                        <div className=" col-lg-6 col-md-6">
                                        <div className="form-group">
                                                <label>Locations</label>
                                                <Autocomplete
                                                    id="combo-box-demo"
                                                    multiple
                                                    value={post.cities}
                                                    options={data.map((res)=>{
                                                    return res.location
                                                    })}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(e, value) => {
                                                    setPost({
                                                        ...post,
                                                        cities:value
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
                                             
                                                  <span>Press enter to add cities</span>
                                                </div>
                                        </div>

                                        <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Deadline</label>
                                                <input type="date" className="form_control" name="deadline" placeholder="12/06/1998" required onChange={(e=>formHandling(e))}
                                                />
                                            </div>
                                        </div>
                                        <div className=" col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Education</label>
                                                <input type="text" className="form_control" name='education' placeholder="Education Required" required onChange={(e=>formHandling(e))}
                                                />

                                            </div>
                                        </div>

                                        <div className=" col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Job Description</label>
                                                <textarea type="text" name="description" required className="form_control" cols="30"
                                                    rows="5" placeholder="Describe Here..." onChange={(e=>formHandling(e))}
                                                ></textarea>


                                            </div>
                                        </div>



                                    </div>
                                </form>
                                <button className="update_pj" onClick={(e)=>handleUpdate(e)} >Post a Job</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default POST_A_JOB;