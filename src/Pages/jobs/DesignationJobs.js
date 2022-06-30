import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../JsonData/Designation.json'
import Subfilter from './subfilter'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchFilter from './SearchFilter'
import DesignationjobAds from '../../ads/DesignationjobAds'
import { useDispatch, useSelector } from "react-redux";
import Chip from '@material-ui/core/Chip';

const DesignationJobs = () => {
    const Selected = useSelector(state => state.selectedDesignations);
    let navigate = useNavigate();
    let Show = Selected.length > 0 ? true : false;
    const dispatch = useDispatch();


    const [searchTerm, setsearchTerm] = useState('')

    const location = useLocation();
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    const [designation, setDesignation] = useState(data)
    const handleSort = (char) => {
        setDesignation(data.filter(post => {
            if (char === "") {
                //if query is empty
                return post;
            } else if (post.Designation.charAt(0).toLowerCase().includes(char.toLowerCase())) {
                //returns filtered array
                return post;
            }
        }))

    }
    const handleDelete = (chipToDelete) => {
        // setChipData((chips) => Selected.filter((chip) => chip.key !== chipToDelete.key));
        // console.log(chipToDelete.key, "chipToDelete");
        dispatch({
            type: "SELECTED_DESIGNATIONS",
            payload: chipToDelete.value
        })
    };

    return (
        <div >
            {location.pathname === '/designationjobs' ?
                <div className="jobs_sec_1_jobdesignation">
                    <div className="heading_pic_jobdesignation">
                        <div className="container">
                            <SearchFilter />
                            <Subfilter />
                        </div>
                    </div>
                </div> : null}


            {/* <!-- sec 1 --> */}

            <div className="jobdesignation_sec_2">
                <div className="container">

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="jobcategory_sec_2_sub">
                                {/* <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6> */}
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6>
                                    </div>
                                    <div className='col-md-6'>
                                        {
                                            location.pathname === '/designationjobs' ?
                                                <form>
                                                    <div ng-app="angularsearch" ng-controller="searchsuggetions">
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control serach_input_1" id="se" placeholder="Search" ng-model="in" onChange={(event) => { setsearchTerm(event.target.value); }} />
                                                                <div class="input-group-btn">
                                                                    <button type="submit" class="btn search_btn_1"><i class="fa fa-search"></i></button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                                : null}
                                    </div>
                                </div>

                                <hr className="bg-light" />
                                {location.pathname === '/designationjobs' ?
                                    <div class="company_jobs_section_2_buttons text-left my-4">
                                        {/* <button class="company_jobs_section_2_button_sub current d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">Top 100</button> */}
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('a')}>A</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('b')}>B</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('c')}>C</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('d')}>D</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('e')}>E</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('f')}>F</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('g')}>G</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('h')}>H</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('i')}>I</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('j')}>J</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('k')}>K</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('l')}>L</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('m')}>M</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('n')}>N</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('o')}>O</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('p')}>P</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('q')}>Q</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('r')}>R</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('s')}>S</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('t')}>T</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('u')}>U</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('v')}>V</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('w')}>W</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('x')}>X</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('y')}>Y</button>
                                        <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white " onClick={() => handleSort('z')}>Z</button>
                                        {/* <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">0-99</button> */}


                                    </div> : null}

                                {
                                    location.pathname === '/designationjobs' && Show ? (
                                        <> <div className="d-flex" style={{
                                            justifyContent: "center",
                                            marginTop: "20px",
                                            width: "100%"
                                        }}>
                                            {
                                                Selected.map((item, index) => (
                                                    <Chip key={index} className="jobs_new_filter" label={item.value} onDelete={() => handleDelete(item)}></Chip>
                                                ))

                                            }
                                        </div>
                                            {Selected.length > 0 && <center>
                                                <button class="btn btn-primary mt-4 job_new_filter_sub"
                                                    onClick={async () => {
                                                        //  alert("onclick")
                                                        await dispatch({ type: "FROM_MAIN_DES" });
                                                        navigate("/browsefilterlist");
                                                    }}
                                                >
                                                    Filter Selected Designations &nbsp;  <i class="fas fa-search"></i>
                                                </button></center>}</>) : null}
                                <div className="row">
                                    {
                                        location.pathname === '/designationjobs' ?
                                            designation?.filter((val) => {
                                                if (searchTerm == "") {
                                                    return val
                                                }
                                                else if (val.Designation.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                                    return val
                                                }
                                            }).map(designation => {
                                                return <div class="col-lg-4 col-md-6">
                                                    {
                                                        query.get('from') ?
                                                            <Link to={`/studentlist?designate=${designation?.Designation}`}>
                                                                <a class="company_jobs_anchor p-2">
                                                                    <span class="company_jobs_img_1_text">{designation?.Designation}</span></a>
                                                            </Link>
                                                            :
                                                            // <Link to={`/browsefilterlist?designate=${designation?.Designation}`}>
                                                            <a class="company_jobs_anchor p-2" onClick={() => dispatch({ type: "SELECTED_DESIGNATIONS", payload: designation.Designation })}>
                                                                <span class="company_jobs_img_1_text">{designation?.Designation}</span></a>
                                                        // </Link>
                                                    }
                                                </div>
                                            }) :
                                            // designation?.slice(0,15).map(designation => {
                                            //     return <div class="col-lg-3 col-md-6">
                                            //         <Link to={`/browsefilterlist?designate=${designation?.Designation}`}>
                                            //             <a  class="company_jobs_anchor p-2"><span>

                                            //                 </span><span class="company_jobs_img_1_text">{designation?.Designation}</span></a>
                                            //         </Link>
                                            //     </div>
                                            // })
                                            <>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=ABAP%20Consultant'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/sap.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/ABAP-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">ABAP Consultant</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=BPO%20Executive'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">    <span className='B_icon'>
                                                            {/* <img src='images/call_center_9dy_icon.ico' /> */}
                                                            <img src='images/BROWSE JOBS BY DESIGNATION/BPO-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">BPO Executive</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Chef'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'>
                                                            {/* <img src='images/chef_MWB_icon.ico' /> */}
                                                            <img src='images/BROWSE JOBS BY DESIGNATION/Chef-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Chef</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Database%20Developer'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/data_science_v68_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Data Base Developer-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Database Developer</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Editor'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/film_editor_BIB_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Editor-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Editor</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Finance%20Manager'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/assets_zmH_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Finance Manager-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Finance Manager</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Game%20Designer'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/game_developer_x67_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Game Designer-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Game Desiner</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=HR%20Assistant'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/hr_SWp_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/HR-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">HR Assistant</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Industrial%20Engineer'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/engineer_22H_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Industrial Engineer-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Industrial Engineer</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Java%20Developer'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/java_8TV_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Java Developer-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Java Developer</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Law%20Officer'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/lawyer_9Tk_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Law-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Law Officer</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?designate=Network%20Engineer'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/software_engineer_QTn_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY DESIGNATION/Network Engineer-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Network Engineer</span></a>
                                                    </Link>
                                                </div>

                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Academic%20Associate'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                   
                                        <span class="company_jobs_img_1_text align-self-center px-2">Academic Associate</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Academic%20Consultant'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Academic Consultant</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Academic%20Coordinator'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Academic Coordinator</span></a>
                                    </Link>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?designate=Accounts%20Manager'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Account's Manager</span></a>
                                    </Link>
                                </div> */}
                                            </>
                                    }
                                </div>
                                <div className='mb-5 mt-4' id='skill'>
                                    {
                                        location.pathname === '/designationjobs' ? null : <Link to="/designationjobs" className='float-right All-Links'><i class="fas fa-arrow-right pr-2"></i> View All Designations</Link>
                                    }
                                </div>
                            </div>
                            {/* 
            <!-- container --> */}

                            {/* <div className="jobdesignation_sec_2_sub">

                        <h6 className="jobdesignation_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6>
                        <hr className="bg-light" /> */}

                            {/* <!-- buttons --> */}
                            {/* <div className="jobdesignation_section_2_buttons text-left my-4">
                            <button className="jobdesignation_section_2_button_sub current">Top 100</button>
                            <button className="jobdesignation_section_2_button_sub">A</button>
                            <button className="jobdesignation_section_2_button_sub">B</button>
                            <button className="jobdesignation_section_2_button_sub">C</button>
                            <button className="jobdesignation_section_2_button_sub">D</button>
                            <button className="jobdesignation_section_2_button_sub">E</button>
                            <button className="jobdesignation_section_2_button_sub">F</button>
                            <button className="jobdesignation_section_2_button_sub">G</button>
                            <button className="jobdesignation_section_2_button_sub">H</button>
                            <button className="jobdesignation_section_2_button_sub">I</button>
                            <button className="jobdesignation_section_2_button_sub">J</button>
                            <button className="jobdesignation_section_2_button_sub">K</button>
                            <button className="jobdesignation_section_2_button_sub">L</button>
                            <button className="jobdesignation_section_2_button_sub">M</button>
                            <button className="jobdesignation_section_2_button_sub">N</button>
                            <button className="jobdesignation_section_2_button_sub">O</button>
                            <button className="jobdesignation_section_2_button_sub">P</button>
                            <button className="jobdesignation_section_2_button_sub">Q</button>
                            <button className="jobdesignation_section_2_button_sub">R</button>
                            <button className="jobdesignation_section_2_button_sub">S</button>
                            <button className="jobdesignation_section_2_button_sub">T</button>
                            <button className="jobdesignation_section_2_button_sub">U</button>
                            <button className="jobdesignation_section_2_button_sub">V</button>
                            <button className="jobdesignation_section_2_button_sub">W</button>
                            <button className="jobdesignation_section_2_button_sub">X</button>
                            <button className="jobdesignation_section_2_button_sub">Y</button>
                            <button className="jobdesignation_section_2_button_sub">Z</button>
                            <button className="jobdesignation_section_2_button_sub">0-99</button>

                        </div>


                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                    Job</span></a>
                            </div>
                        </div>
                    </div> */}


                        </div>





                        {/* ad */}
                        {/* <div className='col-md-2 text-center google_ads'>
                            {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-3502028008615885" data-ad-slot={4102552451} data-ad-format="auto" data-full-width-responsive="true" /> */}
                            {/* <img src='images/ashok.jpeg' style={{width:"160px",height:"452px"}}/> *
                            <DesignationjobAds />
                        </div> */}





                    </div>
                </div>
            </div>

        </div>
    )
}

export default DesignationJobs