import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeSideBar from "./EmployeeSideBar";
import axios from "axios";
import apiList from "../lib/apiList";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
// import ReactLoading from "react-loading";


export const Manage_Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
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
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let searchParams = [`myjobs=1`];
    const queryString = searchParams.join("&");
    console.log(queryString);
    let address = apiList.jobs;
    if (queryString !== "") {
      address = `${address}?${queryString}`;
    }
    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPageCount(Math.ceil(response.data.length) / perPage);
        console.log(response);
        setJobs(response.data.reverse());
        setApplicants(response.data.result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${apiList.jobs}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message);
      });
  };

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
                  <h5 className=" pull-left text-uppercase cp">My Jobs</h5>
                  <a href="#" className=" float-right custom_class">
                    <span className="sort">Sort By Freshness</span>
                    <select name="#" id="#" className="custom_button">
                      <option>All</option>
                      <option>Read</option>
                      <option>Unread</option>
                    </select>
                  </a>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="table_head">
                      <tr>
                        <th scope="col">JobTitle</th>
                        <th scope="col">Applications</th>
                        {/* <th scope="col">Status</th> */}
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobs.length > 0 ? (
                        currentPosts.map((job, index) => {
                          return (
                            <tr>
                              <td>
                                <p className="heading_a_table">{job.title}</p>
                              </td>
                              <td>
                                <p className="appications">
                                  <Link to={`/Applications/${job._id}`}>
                                    View Applicants
                                  </Link>
                                </p>
                              </td>
                              {/* <td>
                                                                <p className="pending">Pending</p>
                                                            </td> */}
                              <td>
                                <div className="form-inline">
                                  <div className="content_del_eye">
                                    <Link to={`/jobdetailes/${job._id}`}>
                                      {" "}
                                      <i className="fas fa-eye eye"></i>
                                    </Link>
                                    <Link to={`/updatepost/${job._id}`}>
                                      <i className="fas fa-pencil-alt eye"></i>
                                    </Link>
                                    <a
                                      href="#"
                                      onClick={() => handleDelete(job._id)}
                                    >
                                      <i className="far fa-trash-alt del"></i>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <h1 style={{ textAlign: "center" }}>No Jobs Found</h1>
                      )}
                    </tbody>
                  </table>
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
      </div>
    </div>
  );
};
export default Manage_Jobs;
