import React from "react";
import { Link } from "react-router-dom";

const BrowseFilterGrid = () => {
  return (
    <div>
      <div className="job_detail_wrapper">
        <div className="heading_pic_filter_list">
          <h1 className="filter_list_heading_1">Browse Grid</h1>
          <p className="text-center filter_list_sub_heading">
            <Link to="/" className="filter_list_sub_heading_1">
              Home
            </Link>{" "}
            &gt;
            <a href="#" className="filter_list_sub_heading_2 ">
              Browse Filter List
            </a>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filter_list_search-box">
          <form className="form-control">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label></label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="search_filter_list_input"
                      placeholder="Job Title, Keywords, or Phrase"
                    />
                    <div className="input-group-append">
                      <span className="filter_list_group_icon">
                        <i
                          className="fas fa-search ml-2"
                          id="filter_list_search_icon1"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label></label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="search_filter_list_input"
                      placeholder="Location"
                    />
                    <div className="input-group-append">
                      <span className="filter_list_group_icon">
                        <i
                          className="fas fa-map-marker-alt"
                          id="filter_list_search_icon2"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 ">
                <label for=""></label>
                <a href="#"></a>
                <button
                  id="filter_list_search_btn"
                  type="submit"
                  className=" btn-block"
                >
                  Find Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div id="job_filter_grid">
        <div className="container">
          <div className="d-flex mb-4">
            <div className="mr-auto">
              <h2 className="job_filter_grid_title">2269 Jobs Found</h2>
            </div>
            <div className="view_list_grid ">
              <Link to="/browsefilterlist" className="filter_list_view ">
                {" "}
                <button className="btn list_view mb-2">List View</button>
              </Link>
              <Link to="/browsefiltergrid" className="filter_grid_view ">
                {" "}
                <button className="btn grid_view mb-2 browse_active">
                  Grid View
                </button>
              </Link>
            </div>
          </div>

          <div className="job_filter_grid_content">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="sticky-top">
                  <div id="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <h5
                            class="accordionItemHeading"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                             
                            Top Companies{" "}
                            <span className="float-right">
                              <i className="fas fa-minus"></i>
                            </span>
                          </h5>
                         
                        </h5>
                      </div>

                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                         
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Accenture(750)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Reliance Industries(680)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Adani Group(248)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  IBM(576)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Cognizent Technologies(768)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/companyjobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2 */}

                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Collapsible Group Item #2
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <h2 className="accordionItemHeading">
                            Experience{" "}
                            <span className="float-right">
                              <i className="fas fa-plus"></i>
                            </span>
                          </h2>
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  0 - 1 years (120)
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  - 1 years (120)
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  0 - 1 years (120)
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  0 - 1 years (120)
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Collapsible Group Item #3
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <h2 className="accordionItemHeading">
                            Location{" "}
                            <span className="float-right">
                              <i className="fas fa-plus"></i>
                            </span>
                          </h2>
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Bangolore / Benguluru (18954)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Delhi (7586)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Mumbai (9756)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Hyderabad / Secunderabad (8765)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Chennai (8845)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Ahmedabad (9456)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Kolkata (6578)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/locationaljobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4 */}

                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Collapsible Group Item #3
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <h2 className="accordionItemHeading">
                            Industry{" "}
                            <span className="float-right">
                              <i className="fas fa-plus"></i>
                            </span>
                          </h2>
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  IT Services & Consulting (1500)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  BPO / Call Center(879)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Real Estate(589)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Management Jobs (685)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Financial Services (965)
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 5 */}

                    <div class="card">
                      <div class="card-header" id="headingFive">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Collapsible Group Item #3
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFive"
                        class="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <h2 className="accordionItemHeading">
                            Job Function / Category{" "}
                            <span className="float-right">
                              <i className="fas fa-plus"></i>
                            </span>
                          </h2>
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Production Management(120)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Design Engineering(300)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Saftey/health(235)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Engineering (568)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Product Development (798)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/categoryjobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 6 */}

                    <div class="card">
                      <div class="card-header" id="headingSix">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Collapsible Group Item #3
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseSix"
                        class="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <h2 className="accordionItemHeading">
                            Education
                            <span className="float-right">
                              <i className="fas fa-plus"></i>
                            </span>
                          </h2>
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  Post Graduate Not Required(15321)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Any Post Graduate(4783)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  Any Graduate (7634)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  B.Tech / B.E (14564)
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  B.Com (13567)
                                </label>
                              </div>

                              <div className="more">
                                <Link
                                  to="/designationjobs"
                                  className="more_inner float-right mr-4 py-1"
                                >
                                  {" "}
                                  more...{" "}
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 7 */}

                    <div class="card">
                      <div class="card-header" id="headingSeven">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            Collapsible Group Item #3
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseSeven"
                        class="collapse"
                        aria-labelledby="headingSeven"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <h2 className="accordionItemHeading">
                            Salary{" "}
                            <span className="float-right">
                              <i className="fas fa-plus"></i>
                            </span>
                          </h2>
                          <div className="accordionItemContent">
                            <form action="#" className="acc_form">
                              <div className="form-check  my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault2"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault2"
                                >
                                  0 - 3 Lakhs
                                </label>
                              </div>
                              <div className="form-check  my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  3 - 7 Lakhs
                                </label>
                              </div>
                              <div className="form-check  my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  7 - 15 Lakhs
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  15 - 30 Lakhs
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  30 - 60 Lakhs
                                </label>
                              </div>
                              <div className="form-check my-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="flexcheckboxDefault"
                                  id="flexcheckboxDefault1"
                                />
                                <label
                                  className="form-check-label pl-2"
                                  for="flexcheckboxDefault1"
                                >
                                  60 - 100+++ Lakhs
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 

                            


                            <div className="accordionWrapper">
                                 <div className="head_acc">
                                     <h5 className="acc_sidebar_filter float-left"><span className="acc_icon"><i className="fas fa-sliders-h sliders"></i></span><span className="refined">Refined By</span></h5>
                                     <Link to="/" className="acc_sidebar_filter_para float-right">Reset All</Link>
                                 </div>
                                <div className="accordionItem open">
                                    <h2 className="accordionItemHeading">Companies <span className="float-right"><i className="fas fa-minus"></i></span></h2>
                                    <div className="accordionItemContent">
                                     

                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              Job Mirror Consultancy(50)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                            Engineering Group(80) 
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Electric Co.(248)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                             Telcom Industry(576)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                            Safety/Health(768)
                                            </label>
                                          </div>
                                     </form>
                                       

                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Experience <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                       

                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              0 - 1 years (120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                 - 1 years (120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                0 - 1 years (120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                0 - 1 years (120)
                                            </label>
                                          </div>
                                     </form>
                                      
                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Job Function <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                       
                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              Production Management(120)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Design Engineering(300)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                             Saftey/health(235)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Engineering (568)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Product Development (798)
                                            </label>
                                          </div>
                                     </form>
                                       
                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Salary <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                    
                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Job Mirror Consultancy (50)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Engineering Group (80)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Electric Co. (235)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Telecom industry (568)
                                            </label>
                                          </div>
                                     </form>
                                      
                                    </div>
                                </div>
    
                                <div className="accordionItem close">
                                    <h2 className="accordionItemHeading">Industry <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                    <div className="accordionItemContent">
                                       
                                     <form action="#" className="acc_form">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              Telcom(5)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Consulting Services(10)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                            Engineering/Projects(15)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Manfacturing/Industries(12)
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              Architecture/Interior Design(8)
                                            </label>
                                          </div>
                                     </form>
                                       
                                    </div>
                                </div>
                            </div> */}
                </div>
              </div>

              <div className="col-xl-9 col-lg-8 col-md-6">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="job_filter_grid_box">
                      <div className="d-flex mb-4">
                        <div className="job_filter_grid_info">
                          <h5>
                            <a href="#">Digital Marketing Executive</a>
                          </h5>
                          <p>
                            <div className="job_filter_grid_in_up">
                              <i className="fas fa-map-marker-alt"></i>
                              <span> Hyderabad</span>
                              <i className="far fa-bookmark"></i>
                              <span> Full Time</span>
                              <div className="job_filter_grid_in_down">
                                <i className="far fa-clock"></i>{" "}
                                <span> Published 1 hour ago</span>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="job_filter_grid_type mr-auto mb-3">
                          <span>Full Time</span>
                        </div>
                        <div className="job_filter_grid_salary">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 15000 -
                            <i className="fas fa-rupee-sign"></i> 25000
                          </span>
                        </div>
                      </div>
                      <label className="job_filter_grid_wishlist">
                        <input type="checkbox" />
                        <span className="filter_grid_added">
                          <i className="fas fa-heart"></i>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="job_filter_grid_box">
                      <div className="d-flex mb-4">
                        <div className="job_filter_grid_info">
                          <h5>
                            <a href="#">Digital Marketing Executive</a>
                          </h5>
                          <p>
                            <div className="job_filter_grid_in_up">
                              <i className="fas fa-map-marker-alt"></i>
                              <span> Hyderabad</span>
                              <i className="far fa-bookmark"></i>
                              <span> Full Time</span>
                              <div className="job_filter_grid_in_down">
                                <i className="far fa-clock"></i>{" "}
                                <span> Published 1 hour ago</span>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="job_filter_grid_type mr-auto mb-3">
                          <span>Full Time</span>
                        </div>
                        <div className="job_filter_grid_salary">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 15000 -
                            <i className="fas fa-rupee-sign"></i> 25000
                          </span>
                        </div>
                      </div>
                      <label className="job_filter_grid_wishlist">
                        <input type="checkbox" />
                        <span className="filter_grid_added">
                          <i className="fas fa-heart"></i>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="job_filter_grid_box">
                      <div className="d-flex mb-4">
                        <div className="job_filter_grid_info">
                          <h5>
                            <a href="#">Digital Marketing Executive</a>
                          </h5>
                          <p>
                            <div className="job_filter_grid_in_up">
                              <i className="fas fa-map-marker-alt"></i>
                              <span> Hyderabad</span>
                              <i className="far fa-bookmark"></i>
                              <span> Full Time</span>
                              <div className="job_filter_grid_in_down">
                                <i className="far fa-clock"></i>{" "}
                                <span> Published 1 hour ago</span>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="job_filter_grid_type mr-auto mb-3">
                          <span>Full Time</span>
                        </div>
                        <div className="job_filter_grid_salary">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 15000 -
                            <i className="fas fa-rupee-sign"></i> 25000
                          </span>
                        </div>
                      </div>
                      <label className="job_filter_grid_wishlist">
                        <input type="checkbox" />
                        <span className="filter_grid_added">
                          <i className="fas fa-heart"></i>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="job_filter_grid_box">
                      <div className="d-flex mb-4">
                        <div className="job_filter_grid_info">
                          <h5>
                            <a href="#">Digital Marketing Executive</a>
                          </h5>
                          <p>
                            <div className="job_filter_grid_in_up">
                              <i className="fas fa-map-marker-alt"></i>
                              <span> Hyderabad</span>
                              <i className="far fa-bookmark"></i>
                              <span> Full Time</span>
                              <div className="job_filter_grid_in_down">
                                <i className="far fa-clock"></i>{" "}
                                <span> Published 1 hour ago</span>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="job_filter_grid_type mr-auto mb-3">
                          <span>Full Time</span>
                        </div>
                        <div className="job_filter_grid_salary">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 15000 -
                            <i className="fas fa-rupee-sign"></i> 25000
                          </span>
                        </div>
                      </div>
                      <label className="job_filter_grid_wishlist">
                        <input type="checkbox" />
                        <span className="filter_grid_added">
                          <i className="fas fa-heart"></i>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="job_filter_grid_box">
                      <div className="d-flex mb-4">
                        <div className="job_filter_grid_info">
                          <h5>
                            <a href="#">Digital Marketing Executive</a>
                          </h5>
                          <p>
                            <div className="job_filter_grid_in_up">
                              <i className="fas fa-map-marker-alt"></i>
                              <span> Hyderabad</span>
                              <i className="far fa-bookmark"></i>
                              <span> Full Time</span>
                              <div className="job_filter_grid_in_down">
                                <i className="far fa-clock"></i>{" "}
                                <span> Published 1 hour ago</span>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="job_filter_grid_type mr-auto mb-3">
                          <span>Full Time</span>
                        </div>
                        <div className="job_filter_grid_salary">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 15000 -
                            <i className="fas fa-rupee-sign"></i> 25000
                          </span>
                        </div>
                      </div>
                      <label className="job_filter_grid_wishlist">
                        <input type="checkbox" />
                        <span className="filter_grid_added">
                          <i className="fas fa-heart"></i>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="job_filter_grid_box">
                      <div className="d-flex mb-4">
                        <div className="job_filter_grid_info">
                          <h5>
                            <a href="#">Digital Marketing Executive</a>
                          </h5>
                          <p>
                            <div className="job_filter_grid_in_up">
                              <i className="fas fa-map-marker-alt"></i>
                              <span> Hyderabad</span>
                              <i className="far fa-bookmark"></i>
                              <span> Full Time</span>
                              <div className="job_filter_grid_in_down">
                                <i className="far fa-clock"></i>{" "}
                                <span> Published 1 hour ago</span>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="job_filter_grid_type mr-auto mb-3">
                          <span>Full Time</span>
                        </div>
                        <div className="job_filter_grid_salary">
                          <span>
                            <i className="fas fa-rupee-sign"></i> 15000 -
                            <i className="fas fa-rupee-sign"></i> 25000
                          </span>
                        </div>
                      </div>
                      <label className="job_filter_grid_wishlist">
                        <input type="checkbox" />
                        <span className="filter_grid_added">
                          <i className="fas fa-heart"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div
              className="pagination-bx float-right mr-5"
              id="filter_grid_pagination"
            >
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item filter_grid_page_item">
                    <a
                      className="page-link filter_grid_page_link"
                      href="#"
                      tabindex="-1"
                    >
                      {" "}
                      <span className="fas fa-arrow-left"> </span> Prev
                    </a>
                  </li>
                  <li className="page-item filter_grid_page_item active">
                    <a className="page-link filter_grid_page_link" href="#">
                      1 <span className="sr-only"></span>
                    </a>
                  </li>
                  <li className="page-item filter_grid_page_item">
                    <a className="page-link filter_grid_page_link" href="#">
                      2
                    </a>
                  </li>

                  <li className="page-item filter_grid_page_item">
                    <a className="page-link filter_grid_page_link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item filter_grid_page_item">
                    <a className="page-link filter_grid_page_link" href="#">
                      Next <span className="fas fa-arrow-right"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrowseFilterGrid;
