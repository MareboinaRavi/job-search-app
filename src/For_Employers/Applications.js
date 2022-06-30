import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import apiList, { server } from "../lib/apiList";
import FileSaver, { saveAs } from 'file-saver';

export const Applications = () => {
  const [applications, setApplications] = useState([]);
  let { id } = useParams();

  const updateStatus = (status, id) => {
    const address = `${apiList.applications}/${id}`;
    const statusData = {
      status: status,
      dateOfPosting: new Date().toISOString(),
    };
    axios
      .put(address, statusData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let address = `${apiList.applicants}?jobId=${id}`;
    console.log(address);
    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setApplications(response.data);
        toast.success(response.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
        setApplications([]);
      });
  };

// const downloadReusme=(resume)=>{
//   const data = `${server}/public/resume/${resume}`
//   FileSaver.saveAs(data, "application/pdf");
// }

const downloadReusme=(resume)=>{
  const data = resume;
  FileSaver.saveAs(data, "application/pdf");
}

  return (
    <div class="container mb-5">
      <div class="applications">
        <div class="job-bx-title clearfix">
          <h5 class=" pull-left text-uppercase cp">Applications</h5>
          <Link
            to="/Manage_jobs"
            class="site-button right-arrow button-sm float-right"
          >
            {" "}
            Back{" "}
          </Link>
          <div class="row my-4">
            <div class="col-lg-12">
              {applications.length > 0 ? (
                applications.map((application) => {
                  console.log(application);
                  return (
                    <div class="box">
                      <div className="application_box">
                        <h5 class="heading_box">
                         <span><i className="fas fa-user"></i></span> {application.jobApplicant.name}
                        </h5>
                        <div>
                        <p class="designer ">
                          <span>UI/UX Designer</span> At Attract Solutions{" "}
                        </p>
                        </div>
                        <div className="desigantion_content">
                      {/* <p class="designer">
                          <span>UI/UX Designer</span> At Attract Solutions{" "}
                        </p> */}

                        <div class="resume_content_location  d-inline">
                          <p class="resume_content_location_sub_sub d-inline">
                            <i class="fas fa-graduation-cap"></i>
                            {"  "}
                            {
                           application?.jobApplicant?.education[0]?.highestgraduation?
                           <div class="table-cell table_data2">{application?.jobApplicant?.education[0]?.highestgraduation}</div>
                           :<div class="table-cell table_data2">Not Updated</div>
                         }
                          </p>
                          <p class="resume_content_location_sub_sub d-inline">
                            <i class="fas fa-briefcase"></i> {" "}
                            {
                          application?.jobApplicant?.experience?.experience ?
                          <span >{application?.jobApplicant?.experience?.experience.charAt(0).toUpperCase() + application?.jobApplicant?.experience?.experience.slice(1)}
                          ({application?.jobApplicant?.experience?.year} Years - {application?.jobApplicant?.experience?.month})
                          </span>
                          :
                          <span >{application?.jobApplicant?.experience?.charAt(0).toUpperCase() + application?.jobApplicant?.experience?.slice(1)}</span>
                          }
                          </p>
                          <p class="resume_content_location_sub_sub d-inline ">
                            <i class="fas fa-rupee-sign"></i>
                            25000
                          </p>
                        </div>
                      </div>
                      <div className="row table_row">
                        <div className="col-md-6 ">
                        <div class="table table_row_right">
                  
                       <div class="table-row">
                         <div class="table-cell table_data1">Education</div>
                         {
                           application?.jobApplicant?.education[0]?.highestgraduation?
                           <div class="table-cell table_data2">{application?.jobApplicant?.education[0]?.highestgraduation}</div>
                           :<div class="table-cell table_data2">Not Updated</div>
                         }
                         
                       </div>
                       <div class="table-row">
                         <div class="table-cell table_data1">Email</div>
                         <div class="table-cell table_data2">{application.jobApplicant.email}</div>
                       </div>
                       <div class="table-row">
                         <div class="table-cell table_data1">Experience</div>
                         <div class="table-cell table_data2">
                         {
                          application?.jobApplicant?.experience?.experience ?
                          <span >{application?.jobApplicant?.experience?.experience.charAt(0).toUpperCase() + application?.jobApplicant?.experience?.experience.slice(1)}
                          ({application?.jobApplicant?.experience?.year} Years - {application?.jobApplicant?.experience?.month})
                          </span>
                          :
                          <span >{application?.jobApplicant?.experience?.charAt(0).toUpperCase() + application?.jobApplicant?.experience?.slice(1)}</span>
                          }
                         </div>
                       </div>
                       <div class="table-row">
                         <div class="table-cell table_data1">Employment</div>
                         <div class="table-cell table_data2">IT job</div>
                       </div>

                        </div>
                        </div>

                        <div className="col-md-6 ">
                        <div class="table table_row_right">
                  
                  <div class="table-row">
                    <div class="table-cell table_data1">Location</div>
                    <div class="table-cell table_data2">{application.jobApplicant.email}</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell table_data1">Gender</div>
                    <div class="table-cell table_data2">Male</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell table_data1">Pincode</div>
                    <div class="table-cell table_data2">523273</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell table_data1">Marital Status</div>
                    <div class="table-cell table_data2">UnMarried</div>
                  </div>

                   </div>
                        </div>
                      </div>

                      
                       
                      
                        {application?.jobApplicant?.skills.map((skill) => {
                          return (
                            <>
                              <div className="application_skills d-inline-block">
                                <button class="php">{skill}</button>
                              </div>
                            </>
                          );
                        })}
                        {application.status === "applied" ? (
                          <>
                            <div className="application_apply">
                              <button
                                type="button"
                                class="btn btn-warning"
                                onClick={() =>
                                  updateStatus(
                                    "shortlisted",
                                    `${application._id}`
                                  )
                                }
                              >
                                Shortlist
                              </button>
                              {"  "}
                              <button
                                type="button"
                                class="btn btn-danger"
                                onClick={() =>
                                  updateStatus("rejected", `${application._id}`)
                                }
                              >
                                Reject
                              </button>
                            </div>
                          </>
                        ) : application.status === "shortlisted" ? (
                          <>
                            <div className="application_apply">
                              <button
                                type="button"
                                class="btn btn-success"
                                onClick={() =>
                                  updateStatus("accepted", `${application._id}`)
                                }
                              >
                                Accept
                              </button>
                              {"  "}
                              <button
                                type="button"
                                class="btn btn-danger"
                                onClick={() =>
                                  updateStatus("rejected", `${application._id}`)
                                }
                              >
                                Reject
                              </button>
                            </div>
                          </>
                        ) : application.status === "rejected" ? (
                          <div className="application_apply">
                            <button type="button" class="btn btn-danger">
                              Rejected
                            </button>
                          </div>
                        ) : application.status === "accepted" ? (
                          <div className="application_apply">
                            <button type="button" class="btn btn-success">
                              Accepted
                            </button>
                          </div>
                        ) : null}

                        <a
                          onClick={()=>downloadReusme(application.jobApplicant.resume.url)}
                          class="download_box"
                          data-tip
                          data-for="registerTip"
                        >
                          <i class="fa fa-download download_icon_app"></i>
                        
                        </a>
                        {/* <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                            <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a> */}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No applications found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Applications;