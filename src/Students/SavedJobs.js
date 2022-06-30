import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiList from '../lib/apiList';
import moment from 'moment';

const SavedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [recruiter, setRecruiter] = useState([])
    

    useEffect(() => {
        axios
            .get(apiList.wishlist + 'list', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setJobs(response.data.data.reverse());
                setRecruiter(response.data.postedby);
            })
            .catch((err) => {
                console.log(err.response.data);

            });
    }, [])

    console.log('jobsjobs ', jobs);

    return (
        <>
          

            <div id='sec4'>
                <div class="container main_content my-5">
                    <div class="row">
                        <div class="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9 mt-4">
                            <div className="wrapper">
                                <div className="content">
                                    <div class="job-bx-title clearfix">
                                        <h5 class=" pull-left text-uppercase cp">SAVED JOBS</h5>
                                        <a href="#" class=" float-right custom_class">
                                            <span class="sort">Sort</span>
                                            <select name="#" id="#" class="custom_button">
                                                <option>Recent</option>
                                                <option>Read</option>
                                                <option>Unread</option>
                                                {/* <option></option> */}
                                            </select>
                                        </a>
                                    </div>

                                    {jobs.map((job, key) => {
                                        return <Link to={`/jobdetailes/${job.jobId._id}`}>
                                            <ul className="job-post">
                                                <li>
                                                    <div className="job-box">
                                                        <div className="d-flex mb-2">

                                                        <div className="saved_jobs_img">
                                    {/* <span><img alt="" src={job.recruiter?.profileImage? `${server}/public/profile/${job.recruiter.profileImage}`: " " }/></span> */}
                                    <img src={job.recruiter?.profileImage? job.recruiter.profileImage:" " } alt=""/>
                                  </div>

                                                            <div className="job-info">
                                                                <h4>
                                                                    {job.jobId.title}
                                                                </h4>
                                                                <ul>
                                                                    <li>
                                                                        <h5 className="home_company_name">{job.recruiter?.companyname}</h5>
                                                                    </li>
                                                                    <li>
                                                                        <h6 className="star_box">

                                                                        </h6>
                                                                    </li>
                                                                </ul>
                                                                <ul className="home_job_details">
                                                                    <li>
                                                                        <i className="fas fa-map-marker-alt"></i>
                                                                        {job.jobId.cities[0]}
                                                                    </li>
                                                                    <li>
                                                                        <i className="far fa-bookmark"></i>{job.jobId.jobType}
                                                                    </li>

                                                                    <li>
                                                                        <i className="fas fa-shopping-bag"></i>{job.jobId.experience}
                                                                    </li>
                                                                    <li>
                                                                        <i className="fas fa-rupee-sign"></i>{job.jobId.salary}
                                                                    </li>
                                                                </ul>
                                                                <div className="mt-3">
                                                                    {job.jobId.skillsets.map(skill => <button className="home_job_btn">{skill}</button>)}
                                                                    


                                                                    <div className="posted_home">
                                                                        <div className="job-type">
                                                                            <a href="#">
                                                                                <span>
                                                                                    <i className="fas fa-history"></i> {moment(job.jobId.postedAt? Number(job.jobId.postedAt) : job.jobId.dateOfPosting ).fromNow()}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Link>
                                    })}





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SavedJobs