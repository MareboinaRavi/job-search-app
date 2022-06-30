import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiList from '../lib/apiList';
import Sidebar from './Sidebar'
import ReactPaginate from "react-paginate"

 const AppliedJobs = () => {
    const [applications, setApplications] = useState([]);


     // Pagination code
     const [offset, setOffset] = useState(1);
     //   const [data, setData] = useState([]);
       const [perPage, setPerPage] = useState(5);
       const [pageCount, setPageCount] = useState(0);
       const indexOfLastPost = offset * perPage;
         const indexOfFirstPost = indexOfLastPost - perPage;
         const currentPosts = applications.slice(indexOfFirstPost, indexOfLastPost);
           const handlePageClick = (e) => {
             const selectedPage = e.selected;
             setOffset(selectedPage + 1);
           };


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.applications, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPageCount(Math.ceil(response.data.length)/perPage)
        console.log(response.data);
        setApplications(response.data);
      })
      .catch((err) => {
        // history.push("/login")
        // console.log(err.response);
        console.log(err.response.data);
      });
  };



    return (
        <div className="container main_content my-5">
        <div className="row">
            <div className="col-lg-3">
                <Sidebar />
            </div>
            <div className="col-lg-9">
                <div className="wrapper">
                    <div className="content">
                        <div className="job-bx-title clearfix">
                            <h5 className=" pull-left text-uppercase cp">{applications.length} JOBS FOUND</h5>
                            {/* <a href="#" className=" float-right custom_class">
                                <span className="sort">Sort By Freshness</span>
                                <select name="#" id="#" className="custom_button">
                                    <option>Last 2 months</option>
                                    <option>Last month</option>
                                    <option>Last Weak</option>
                                    <option>Last 3 days</option>
                                </select>
                            </a> */}
                        </div>
                        
                        {applications.length > 0 ? (
                            currentPosts.map((application) => (
                                <Link to={`/jobdetailes/${application.job._id}`}>
                                <div className="box">
                            <h5 className="heading_box">
                                {application.job.title.charAt(0).toUpperCase() + application.job.title.slice(1)}
                            </h5>
                            {/* <p className="designer"><span>UI/UX Designer</span> At Attract
                                Solutions </p> */}
                            <div className="box_location_main"> 
                                <p className="box_location_sub"><i className="fas fa-map-marker-alt marker_icon"></i>
                                    {application.job.cities}
                                </p>
                                <p className="box_money"><i className="far fa-money-bill-alt"></i> {application.job.salary}</p>
                            </div>
                            {
                                            application?.job?.skillsets?.map(val=>{
                                                return(<button className="php">{val}</button>)
                                            })
                                        }
                            <div className="posted">
                                <p className="posted_content">Posted : <span className="posted_content_sub">2 Days ago</span>
                                    <button className="apply float-right">{application.status.charAt(0).toUpperCase() + application.status.slice(1)}</button></p>
                            </div>
                        </div>
                        </Link>
                            ))
                            ) : (
                            <h1 variant="h5" style={{ textAlign: "center" }}>
                                No Applications Found
                            </h1>
                            )
                            }
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
                </div>
                
            </div>
        </div>
    </div>
    )
}
export default AppliedJobs