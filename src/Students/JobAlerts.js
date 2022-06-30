import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import axios from 'axios'
import apiList from "../lib/apiList"
import ReactPaginate from 'react-paginate'
 const JobAlerts = () => {
    const [jobs,setJobs] = useState([])

    // Pagination code
    const [offset, setOffset] = useState(1);
  //   const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const indexOfLastPost = offset * perPage;
      const indexOfFirstPost = indexOfLastPost - perPage;
      const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);
        const handlePageClick = (e) => {
          const selectedPage = e.selected;
          setOffset(selectedPage + 1);
          window.scrollTo({
            top: 40,
            behavior: 'smooth',
          })
        };
        
    useEffect(() => {
        getData();
      },[]);
    
      const getData = () => {
        axios
          .get(apiList.jobAlerts + 'list', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            setPageCount(Math.ceil(response.data.length)/perPage)
            console.log('ddd ',response.data);
            let jobs = response.data.data.map(job => {
              
              let output = job.jobId
              output.recruiter = job.recruiter
              return output;
            })
            console.log('jjjjssss ',jobs);
            setJobs(jobs);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      };
    
    return (
      <div id='sec4'>
        <div class="container main_content my-5">
        <div class="row">
            <div class="col-lg-3">
                <Sidebar />
            </div>
            <div className="col-lg-9">
                <div className="wrapper">
                    <div className="content">
                    <div class="job-bx-title clearfix">
                            <h5 class=" pull-left text-uppercase cp">Job Alerts</h5>
                            <a href="#" class=" float-right custom_class">
                                <span class="sort">Sort</span>
                                <select name="#" id="#" class="custom_button">
                                    <option>Last 3 Days</option>
                                    <option>Last Week</option>
                                    <option>Last Month</option>
                                    <option>Last 2 Month</option>
                                </select>
                            </a>
                        </div>
                        {console.log(jobs, 'jobs')}
                    {
                      jobs.length>0?
        currentPosts.map((job)=>{
          return(<>
           <Link to={`/jobdetailes/${job._id}`}>
          <ul className="job-post">
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                 
                    {job.title}
                
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">{ job.recruiter.companyname }</h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      {/* <span>
                        {" "} */}
                        {/* 5<i className="fas fa-star star_rating"></i> */}
                        {/* <a href="#">(53 Reviews)</a> */}
                      {/* </span> */}
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    {job.cities.map((job,index,arr)=>{
                return (<>
                  {job}{index!=(arr.length-1)?"/":""}
                  </>)
              })}
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>{job.jobType}
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>{job.experience}yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>{job.salary}
                  </li>
                </ul>
                <div className="mt-3">
                  {
                    job.skillsets.map((job)=>{
                      return(<>
                      <button className="home_job_btn">{job}</button>
                      </>)
                    })
                  }
                  
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
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
          </>)
        }):
        <h1 variant="h5" style={{ textAlign: "center" }}>
        No Applications Found
    </h1>
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
    </div>)
}
export default JobAlerts