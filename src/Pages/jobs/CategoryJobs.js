import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../JsonData/Category.json'
import Subfilter from './subfilter'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import apiList from '../../lib/apiList'
import SearchFilter from './SearchFilter'
import CategoryJobAds from '../../ads/CategoryjobAds'
import { useDispatch, useSelector } from "react-redux";
//chip from material-ui
import Chip from '@material-ui/core/Chip';
//import useHistory
// import { useHistory } from 'react-router-dom';

const CategoryJobs = () => {
    const Selected = useSelector(state => state.selectedCategories);
    let navigate = useNavigate();
    let Show = Selected.length > 0 ? true : false;
    const dispatch = useDispatch();

    const [searchTerm, setsearchTerm] = useState('')
    const [category, setCategory] = useState(data)
    const location = useLocation();
    const [search, setSearch] = useState(false);

    const selectedSearch = () => {
        setSearch(true)
    }


    const handleSort = (char) => {
        setCategory(data.filter(post => {
            if (char === "") {
                //if query is empty
                return post;
            } else if (post.Category.charAt(0).toLowerCase().includes(char.toLowerCase())) {
                //returns filtered array
                return post;
            }
        }))

    }
    const handleDelete = (chipToDelete) => {
        // setChipData((chips) => Selected.filter((chip) => chip.key !== chipToDelete.key));
        // console.log(chipToDelete.key, "chipToDelete");
        dispatch({
            type: "SELECTED_CATEGORIES",
            payload: chipToDelete.value
        })
    };



    return (
        <div >
            {location.pathname === '/categoryjobs' ?
                <div className="jobs_sec_1_jobscategory">
                    <div className="heading_pic_jobscategory">
                        <div className="container">
                            <SearchFilter />
                            <Subfilter />
                        </div>
                    </div>
                </div> : null}


            {/* <!-- sec 1 --> */}

            <div className="jobcategory_sec_2">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12'>

                            <div className="jobcategory_sec_2_sub ">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY FUNCTIONAL AREA / DEPARTMENT</h6>
                                    </div>
                                    <div className='col-md-6'>
                                        {location.pathname === '/categoryjobs' ?
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
                                            </form> :
                                            null
                                        }
                                    </div>
                                </div>
                                <hr className="bg-light" />
                                {location.pathname === '/categoryjobs' ?
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
                                    location.pathname === '/categoryjobs' && Show ? (
                                        <> <div className="d-flex" style={{
                                            justifyContent: "center",
                                            marginTop: "20px",
                                            width: "100%"
                                        }}>
                                            {
                                                Selected.map((item, index) => (
                                                    <Chip key={index} label={item.value} onDelete={() => handleDelete(item)} className="jobs_new_filter"></Chip>
                                                ))

                                            }
                                        </div>
                                            {Selected.length > 0 && <center>
                                                <button class="btn btn-primary mt-4"
                                                    onClick={async () => {
                                                        //  alert("onclick")
                                                        await dispatch({ type: "FROM_MAIN" });
                                                        navigate("/browsefilterlist");
                                                    }}
                                                >
                                                    Filter categories &nbsp;  <i class="fas fa-search"></i>
                                                </button> </center>}</>) : null}
                                <div className="row">
                                    {
                                        location.pathname === '/categoryjobs' ?
                                            category?.filter((val) => {
                                                if (searchTerm == "") {
                                                    return val
                                                }
                                                else if (val.Category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                                    return val
                                                }
                                            }).map((industry, index) => {
                                                return <div className='col-lg-3 col-md-6' key={index} >
                                                    {/* <Link to={`/browsefilterlist?category=${industry.Category}`}> */}
                                                    <a class="company_jobs_anchor p-2" onClick={() => { dispatch({ type: "SELECTED_CATEGORIES", payload: industry.Category }); selectedSearch(); }}>
                                                        <span class="company_jobs_img_1_text ">{industry.Category}</span>
                                                    </a>
                                                    {/* </Link> */}
                                                </div>
                                            }) :

                                            <>
                                                {/* className={search? " cat_select":"col-lg-3 col-md-6 cat_unselect"} */}
                                                <div class="col-lg-3 col-md-6 Home_ico" >
                                                    <Link to='/browsefilterlist?category=Airline' >
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#FF6B6B" }}>
                                                            {/* <i class="fas fa-plane-departure"></i> */}
                                                            <img src='images/Air Line-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Airline</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Advertising'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "green" }}>
                                                            {/* <i class="fas fa-ad"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Ad-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2" >Advertising</span></a>
                                                    </Link>
                                                </div>


                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Analytics'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#FF85B3" }}>
                                                            {/* <i class="fas fa-chart-bar"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Analytics-01-01.png' style={{width:"40px",height:"40px"}}/>
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2"  >Analytics</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Bank'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded">
                                                            <span className='B_icon' style={{ color: "#8D8DAA " }}>
                                                                {/* <i className="fas fa-university"></i> */}
                                                                <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Bank-01.png' style={{ width: "40px", height: "40px" }} />
                                                            </span>
                                                            <span class="company_jobs_img_1_text align-self-center px-2">Bank</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=BPO'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#FFD93D " }}>
                                                            {/* <i class="fas fa-headset"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/BPO-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">BPO</span></a>
                                                    </Link>
                                                </div>




                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Content%20Writing'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#006778 " }}>
                                                            {/* <i class="fas fa-pen"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Content Writer-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Content Writing</span></a>
                                                    </Link>
                                                </div>





                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Ecommerce'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#FFC300 " }}>
                                                            {/* <i class="fas fa-shopping-cart"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/ECommerce-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2" >Ecommerce</span></a>
                                                    </Link>
                                                </div>
                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=System%20Programming'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#203239 " }}>
                                                            {/* <i class="fas fa-server"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Systems Programming-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">System Programming</span></a>
                                                    </Link>
                                                </div>
                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Networking'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#86C6F4 " }}>
                                                            {/* <i class="fas fa-network-wired"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Network Design-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2" >Network Design</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=IT'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#395B64 " }}>
                                                            {/* <i class="fas fa-city"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/IT-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">IT</span></a>
                                                    </Link>
                                                </div>

                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Logistics'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "#FFC300 " }}>
                                                            {/* <i class="fas fa-shipping-fast"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Logistics-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Logistics</span></a>
                                                    </Link>
                                                </div>



                                                <div class="col-lg-3 col-md-6 Home_ico">
                                                    <Link to='/browsefilterlist?category=Pharma'>
                                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{ color: "green " }}>
                                                            {/* <i class="fas fa-capsules"></i> */}
                                                            <img src='images/BROWSE JOBS BY FUNCTIONAL AREA/Pharma-01.png' style={{ width: "40px", height: "40px" }} />
                                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Pharma</span></a>
                                                    </Link>
                                                </div>



                                            </>





                                    }
                                </div>

                                <div className='mb-5 mt-4' id='designation'>
                                    {
                                        location.pathname === '/categoryjobs' ? null : <Link to="/categoryjobs" className='float-right All-Links'> <i class="fas fa-arrow-right pr-2"></i> View All Functional Areas</Link>
                                    }
                                </div>
                            </div>



                        </div>





                        {/* <div className='col-md-2 text-center google_ads'>
                            {/* <img src='images/ashok.jpeg' style={{width:"160px",height:"475px"}}/> *
                            <CategoryJobAds />
                        </div> */}





                    </div>
                </div>

            </div>
        </div>
    )
}

export default CategoryJobs;
{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Consultant'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Consultant</span></a>
                                    </Link>
                                </div> */}
{/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Engineering'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Engineering</span></a>
                                    </Link>
                                </div> */}


{/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Merchandiser'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Merchandiser</span></a>
                                    </Link>
                                </div> */}

{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Security'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Security</span></a>
                                    </Link>
                                </div> */}

{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=HR'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">HR</span></a>
                                    </Link>
                                </div> */}

{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Hotel'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Hotel</span></a>
                                    </Link>
                                </div> */}

{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Application%20Programming'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Application Programming</span></a>
                                    </Link>
                                </div> */}



{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=DBA'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">DBA</span></a>
                                    </Link>
                                </div> */}


{/* <div class="col-lg-4 col-md-6">
                                            <Link to='/browsefilterlist?category=Hotel'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"#395B64 "}}><i class="fas fa-hospital"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2">Hotel</span></a>
                                            </Link>
                                        </div> */}




{/* <div class="col-lg-3 col-md-6">
                                            <Link to='/browsefilterlist?category=System%20Programming'>
                                                <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon' style={{color:"red"}}><i class="fas fa-desktop"></i>
                                                </span><span class="company_jobs_img_1_text align-self-center px-2" >System Programming</span></a>
                                            </Link>
                                        </div> */}




{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=DBA'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'><i class="fas fa-analytics"></i>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Marketing</span></a>
                                    </Link>
                                </div> */}









{/* 
                                <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=DBA'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span className='B_icon'><i class="fas fa-shipping-fast"></i>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Shipping</span></a>
                                    </Link>
                                </div> */}


{/* <div class="col-lg-3 col-md-6">
                                    <Link to='/browsefilterlist?category=Interior%20Design'>
                                        <a class="company_jobs_anchor py-1 pr-2 rounded"><span>
                                        </span><span class="company_jobs_img_1_text align-self-center px-2">Interior Design</span></a>
                                    </Link>
                                </div> */}


{/* <!-- next container --> */ }

{/* <div className="jobcategory_sec_2_sub">
                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY FUNCTIONAL AREA / DEPARTMENT</h6>
                        <hr className="bg-light" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>

                        </div>
                    </div> */}