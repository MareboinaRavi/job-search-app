import React,{useState,useEffect, useRef} from 'react'
// import { Link,useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
// import {toast} from 'react-toastify'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Pagination from './Pagination';
import axios from 'axios'
import apiList from "../lib/apiList"
import ReactPaginate from "react-paginate"
import ReactLoading from 'react-loading';
import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const RecentJobs = () => {
 
    const [jobs,setJobs] = useState([])
    const navigate = useNavigate(); 
    const list = [1, 2, 3, 4, 5, 6];
    // Pagination code
    const [offset, setOffset] = useState(1);
  //   const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(30);
    const [pageCount, setPageCount] = useState(0);
    const indexOfLastPost = offset * perPage;
      const indexOfFirstPost = indexOfLastPost - perPage;
      const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);
      // const navigate = useNavigate();
      const result = useSelector(state=>state.data)
      console.log(result)
        const handlePageClick = (e) => {
       
          const selectedPage = e.selected;
          setOffset(selectedPage + 1);
          window.scrollTo({
            top: 450,
            behavior: 'smooth',
          })
          // window.scrollTo(0, 450)
        };
     

    useEffect(() => {
      getData();
    },[]);
  
    const getData = () => {
      axios
        .get(apiList.alljobs)
        .then((response) => {
          setPageCount(Math.ceil(response.data.length)/perPage)
          setJobs(response.data.reverse());
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
  
    const handleApply = (e,id) => {
      e.preventDefault()
      axios
        .post(
          `${apiList.jobs}/${id}/applications`,{
              sop:"ksajdfk"
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        )
        .then((response) => {
         console.log(response.data)
      //    setApply(response.data.status)
        navigate("/appliedjobs")
         toast.success(response.data.message)
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.message)
        });
    };


    return (
        <div>
            
<div id="sec4">
<div className="container">
  <div className="d-flex mb-4">
    <div className="mr-auto">
      <h2>Recent Jobs</h2>
      <h6>30+ Recently Added Jobs</h6>
    </div>
    <div className="align-self-end">
      <Link className="browse button" to="/alljobs">
        Browse All Jobs <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
      {
        jobs.length>0?
        currentPosts.map((job,i)=>{
        //  const dateOfPosting=()=> {
        //   const date =new Date(job.dateOfPosting).toLocaleString('en-US', {
        //     timeZone: 'Asia/Calcutta'})
        //     console.log(date)
        //     return( <span>
        //       <i className="fas fa-history"></i>
        //       {moment(date).startOf('day').fromNow() }
        //     </span>)
        // }
          return(<>
          <div >
            <Link to={`/jobdetailes/${job._id}`}>
          <ul className="job-post">
        <li >
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
              {/* <a href="#" type="btn" className="job_details_applybtn" disabled={result?.type === "recruiter"} onClick={(e)=>handleApply(e)}>Apply</a> */}
              <label className="wishlist">
             {result?.type==="applicant" ? 
             <button className='btn job_details_applybtn'  onClick={(e)=>handleApply(e,job._id)}> Apply </button>: 
             result?.type==="recruiter"? null :  
             <Link to="/auth" > <button className='btn job_details_applybtn'> Login to Apply </button>  </Link>} 
            </label>
                <h4>
                    {job.title.charAt(0).toUpperCase() + job.title.slice(1)}
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">{job.recruiter.companyname}</h5>
                  </li>
                
                  <li>
                    {/* <h6 className="star_box"> */}
                      {" "}
                      {/* <span>
                        {" "} */}
                        {/* 5<i className="fas fa-star star_rating"></i> */}
                        {/* <a href="#">(53 Reviews)</a> */}
                      {/* </span> */}
                    {/* </h6> */}
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
                    <i className="fas fa-shopping-bag"></i>{job.experience}
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
                                <i className="fas fa-history"></i>
                                {/* {moment(job.dateOfPosting)
                                .subtract(
                                  moment(job.dateOfPosting).utcOffset(), 
                                  'minutes')
                                .utc()
                                } */}{" "}
                               {/* {moment(job.dateOfPosting).format('YYYY-MM-DD hh:mm:ss').toString()} */}
                                {/* {moment.utc(job.dateOfPosting).local().startOf('seconds').fromNow()} */}
                                {moment.utc(job.dateOfPosting).local().startOf('seconds').fromNow()}
                                {/* {moment(job.dateOfPosting).format('YYYY-MM-DD hh:mm:ss A Z')} */}
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
    </div>
          </>)
        }): 
        <div className="skeleton">
          {list.map((item)=>{
            return(
          <div className="contact__item mb-5" key={item}>
            <ul className="job-post">
          <li >
            <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
              <div style={{ display: "flex", width: "100%" }}>
                <Skeleton circle={false} height={50} width={50} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%"
                  }}
                >
                  <Skeleton
                    height={12}
                    width="30%"
                    style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
                  />
                  <Skeleton
                    height={8}
                    width="40%"
                    style={{ marginLeft: "1rem" }}
                  />
                  <Skeleton
                    height={8}
                    width="50%"
                    style={{ marginLeft: "1rem", marginTop: 0 }}
                  />
                  <Skeleton
                    height={12}
                    width="80%"
                    style={{ marginLeft: "1rem", marginTop: "0.6rem" }}
                  />
                </div>
              </div>
            </SkeletonTheme>
            </li>
          </ul>
          </div>
            )
          })}
    </div>
        // <div style={{textAlign:"-webkit-center"}}>
        // <ReactLoading type="balls" color={"rgb(118 55 117)"} height={500} width={150} />
        // </div>
      }
       <div className="d-flex justify-content-center">
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
    {/* <div className="col-lg-3">
      <div className="sticky-top"> */}
        {/* modification Required */}
        {/* <div className="member mb-4"> */}
          {/* <div className="member-box"> */}
            {/* <div className="test-pic round">
              <img src="" alt="" />
            </div> */}
            {/* <div className="test-matter">
              <p>
                You’ve made it through the rigorous interview process
                successfully and the organization has extended you an
                offer for employment. Congratulations! Now, it’s time to
                take a better look at what the offer includes.
              </p>
            </div>
            <div className="test-location">
              <p>
                <b className="test-name">Richard Anderson</b>
              </p>
              <p>
                <span className="test-place">Nevada, USA</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sentence-box">
          <div className="sentence-matter">
            <h4>Make a Difference with Your Online Resume!</h4>
            <p>
              Your resume in minutes with JobBoard resume assistant is
              ready!
            </p>
            <a className="acc-btn" href="#">
              Create an Account
            </a>
          </div>
        </div>
      </div> */}
    {/* </div> */}
      
 </div>
</div>
</div>

        </div>
    )
}

export default RecentJobs