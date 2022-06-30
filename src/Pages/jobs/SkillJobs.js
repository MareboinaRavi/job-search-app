import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiList from '../../lib/apiList'
import Subfilter from './subfilter'
import data from "../../JsonData/Skill.json"
import { useLocation, useNavigate } from 'react-router-dom'
import SearchFilter from './SearchFilter'
import SkilljobAds from '../../ads/SkilljobAds'
import { useDispatch, useSelector } from "react-redux";
//chip from material-ui
import Chip from '@material-ui/core/Chip';
//import useHistory

const SkillJobs = () => {
    const Selected = useSelector(state => state.selectedSkills);
    let navigate = useNavigate();
    let Show = Selected.length > 0 ? true : false;
    const dispatch = useDispatch();



    const [searchTerm, setsearchTerm] = useState('')

    const location = useLocation();
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    const [skills, setSkills] = useState(data)

    const handleSort = (char) => {
        setSkills(data.filter(post => {
            if (char === "") {
                //if query is empty
                return post;
            } else if (post.Skill.charAt(0).toLowerCase().includes(char.toLowerCase())) {
                //returns filtered array
                return post;
            }
        }))

    }

    // const fetchSkills = async () => {
    //     await axios.get(apiList.listSkills)
    //         .then((response) => {
    //             setSkills(response.data.skills)
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data);
    //             toast.error(err.response.data.message)
    //         });
    // }

    // useEffect(async () => {
    //     fetchSkills();
    // }, [])
    const handleDelete = (chipToDelete) => {
        // setChipData((chips) => Selected.filter((chip) => chip.key !== chipToDelete.key));
        // console.log(chipToDelete.key, "chipToDelete");
        dispatch({
            type: "SELECTED_SKILLS",
            payload: chipToDelete.value
        })
    };


    return (
        <div >
            {location.pathname === '/skilljobs' ?
                <div className="jobs_sec_1_skilljob">
                    <div className="heading_pic_skilljob">
                        <div className="container">
                            <SearchFilter />

                            <Subfilter />
                        </div>
                    </div>
                </div> : null}


            {/* <!-- sec 1 -->

    <!-- sec 2 --> */}

            <div className="jobskill_sec_2">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12'>

                            {/* 
            <!-- container --> */}

                            <div className="jobskill_sec_2_sub">
                                {/* <h6 className="jobskill_sec_2_heading_1">BROWSE JOBS BY Skill</h6> */}
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY SKILL</h6>
                                    </div>
                                    <div className='col-md-6'>
                                        {
                                            location.pathname === '/skilljobs' ?
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
                                {location.pathname === '/skilljobs' ?
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
                                    location.pathname === '/skilljobs' && Show ? (
                                        <>
                                            <div className="d-flex" style={{
                                                justifyContent: "center",
                                                marginTop: "20px",
                                                width: "fit-content",
                                                flexBasis: "fit-content"
                                            }}>
                                                {
                                                    Selected.map((item, index) => (
                                                        <div className='d-flex'>
                                                            <Chip key={index} className="jobs_new_filter" label={item.value} onDelete={() => handleDelete(item)}></Chip>
                                                        </div>
                                                    ))

                                                }

                                            </div>
                                            <div className='text-center'>

                                                {Selected.length > 0 &&
                                                    <div className='d-inline-block text-center'>
                                                        <button class="btn btn-primary mt-4 mx-2"
                                                            onClick={async () => {
                                                                //  alert("onclick")
                                                                await dispatch({ type: "FROM_MAIN_SKILL" });
                                                                navigate("/browsefilterlist");
                                                            }}
                                                        >
                                                            Filter Skills &nbsp;  <i class="fas fa-search"></i>
                                                        </button>
                                                    </div>}

                                                {Selected.length > 0 &&
                                                    <div className='d-inline-block  '>
                                                        <button class="btn btn-primary mt-4 mx-2">
                                                            Reset Filter &nbsp;
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        </>) : null}







                                <div className="row">
                                    {
                                        location.pathname === '/skilljobs' ?
                                            skills.filter((val) => {
                                                if (searchTerm == "") {
                                                    return val
                                                }
                                                else if (val.Skill.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                                    return val
                                                }
                                            }).map(res => {
                                                return <div className="col-lg-3 col-md-6">
                                                    {
                                                        query.get('from') ?
                                                            <Link to={"/studentlist?skill=" + res.Skill}>
                                                                <a class="company_jobs_anchor p-2">
                                                                    <span class="company_jobs_img_1_text">{res.Skill}</span></a>
                                                            </Link>
                                                            :

                                                            // <Link to={"/browsefilterlist?skill=" + res.Skill}>
                                                            <a class="company_jobs_anchor p-2" onClick={() => dispatch({ type: "SELECTED_SKILLS", payload: res.Skill })}>
                                                                <span class="company_jobs_img_1_text">{res.Skill}</span></a>
                                                        // </Link>

                                                    }
                                                </div>

                                            }) :
                                            // skills.slice(0,15).map(res => {
                                            //     return <div className="col-lg-3 col-md-6">
                                            //          <Link to="#">
                                            //             <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span>
                                            //                 {/* <img src="images/auto_repair.png" alt=""
                                            //                 class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /> */}
                                            //                 </span><span class="company_jobs_img_1_text align-self-center px-2">{res.Skill}</span></a>
                                            //         </Link>
                                            //     </div>
                                            // })


                                            <>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=ReactJS'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/atom_2MC_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Reacts Js-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">ReactJs</span></a>
                                                    </Link>
                                                </div>


                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=Banking'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/bank_9WD_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Banking-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Banking</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=Cooking'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/cooking_DJS_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Cooking-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Cooking</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=Hiring'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/hired_Wi6_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Hiring-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Hiring</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=Teaching'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/presentation_Quv_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/teaching-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Teaching</span></a>
                                                    </Link>
                                                </div>


                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Software Testing</span></a>
                                    </Link>
                                </div> */}

                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">SAP abap</span></a>
                                    </Link>
                                </div> */}

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=Writing'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span>
                                                                {/* <img src='images/pencil_Rcw_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Writting-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Writing</span></a>
                                                    </Link>
                                                </div>
                                                {/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Mainframe</span></a>
                                    </Link>
                                </div> */}

                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">SAP FICO</span></a>
                                    </Link>
                                </div> */}

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=%20SAP'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/sap.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/ABAP-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">SAP</span></a>
                                                    </Link>
                                                </div>

                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">SEO</span></a>
                                    </Link>
                                </div> */}

                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">.NET</span></a>
                                    </Link>
                                </div> */}

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=%20Oracle'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/oracle_1_PhD_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Oracle-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Oracle</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=%20PHP'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/php_lyw_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Php-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">PHP</span></a>
                                                    </Link>
                                                </div>

                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Back office</span></a>
                                    </Link>
                                </div> */}

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=%20Java'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/java_1_WBx_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Java-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Java</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=Node%20JS'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/nodejs_amJ_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/node-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Node Js</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?skill=Yoga'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon'>
                                                                {/* <img src='images/meditation_rYu_icon.ico' /> */}
                                                                <img src='images/BROWSE JOBS BY SKILL/Yoga-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Yoga</span></a>
                                                    </Link>
                                                </div>

                                                {/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">SAP Basis</span></a>
                                    </Link>
                                </div> */}

                                                {/* <div class="col-lg-3 col-md-6">
                                    <Link to='#'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Oracle</span></a>
                                    </Link>
                                </div> */}

                                            </>
                                    }

                                </div>
                                <div className='mb-3' id='location'>
                                    {location.pathname === '/skilljobs' ? null : <Link to="/skilljobs" className='float-right All-Links'><i class="fas fa-arrow-right pr-2"></i> View All Skills</Link>}
                                </div>
                            </div>

                        </div>





                        {/* ad */}
                        {/* <div className='col-md-2 text-center google_ads'>
                            {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-3502028008615885" data-ad-slot={4102552451} data-ad-format="auto" data-full-width-responsive="true" /> */}
                            {/* <img src='images/ashok.jpeg' style={{width:"160px",height:"418px"}}/> *
                            <SkilljobAds />
                        </div> */}





                    </div>

                </div>
            </div>

            {/* <div className="container">
                <div className="jobskill_sec_2_sub">

                    <h6 className="jobskill_sec_2_heading_1">BROWSE JOBS BY NON-SKILL</h6>
                    <hr className="bg-light" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Email
                                Marketing</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Philips
                                Software Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="jobskill_anchor_1"><span className="jobskill_img_1_text">Direct
                                Job</span></a>
                        </div>


                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default SkillJobs