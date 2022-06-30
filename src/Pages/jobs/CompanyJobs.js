
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import apiList from "../../lib/apiList";
import Subfilter from './subfilter';
import { useLocation,useNavigate} from 'react-router-dom'
import SearchFilter from './SearchFilter';
import CjobsAds from '../../ads/CjobsAds';
import { useDispatch, useSelector } from "react-redux";
import Chip from '@material-ui/core/Chip';

const CompanyJobs = () => {
    const Selected = useSelector(state => state.selectedCompanies);
    let navigate = useNavigate();
    let Show = Selected.length > 0 ? true : false;
    const dispatch = useDispatch();


    const [searchTerm , setsearchTerm] = useState('')
    const location = useLocation();
    console.log(location.pathname)
    const [companies, setCompanies] = useState([])
    const [isReadMore, setIsReadMore] = useState(true);

    
    // const toggleReadMore = () => {
    //     setIsReadMore(!isReadMore);
    //   };
    const fetchCompanies = async () => {
        await axios.get(apiList.listCompanies)
            .then((response) => {
                setCompanies(response.data.companies)
            })
            .catch((err) => {
                console.log(err.response.data);
                toast.error(err.response.data.message)
            });
    }
        
    useEffect(async () => {
        fetchCompanies();
    }, [])

    const handleSort = async (char) => {
        await axios.get(apiList.listCompanies + '?q=' + char)
            .then((response) => {
                setCompanies(response.data.companies)
            })
            .catch((err) => {
                console.log(err.response.data);
                toast.error(err.response.data.message)
            });
    }
    const handleDelete = (chipToDelete)=> {
        // setChipData((chips) => Selected.filter((chip) => chip.key !== chipToDelete.key));
        // console.log(chipToDelete, "chipToDelete");
        dispatch({
            type: "SELECTED_COMPANIES",
            payload: chipToDelete
        })
      };


    return (
        <div >
             { location.pathname === '/companyjobs'?
            <div class="jobs_sec_1_companyjobs">
                <div class="heading_pic_companyjobs">
                    <div class="container">

                   <SearchFilter />

                        <Subfilter />
                    </div>
                </div>
            </div>
            :
            null}


            {/* <!-- sec 1 -->

    <!-- section 2 --> */}

            <div class="company_jobs_section_2">
                <div class="container">
                <div className='row'>


             <div className='col-md-12'>
                
                    <div class="company_jobs_section_2_sub">
                       
                        <div className='row'>
                            <div className='col-md-6'>
                                <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY COMPANIES</h6>
                            </div>
                            <div className='col-md-6'>
                            {
                             location.pathname === '/companyjobs'?
                                <form>
                                    <div ng-app="angularsearch" ng-controller="searchsuggetions">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input type="text" class="form-control serach_input_1" id="se" placeholder="Search" ng-model="in" onChange={(event)=>{setsearchTerm(event.target.value);}} />
                                                <div class="input-group-btn">
                                                    <button type="submit" class="btn search_btn_1"><i class="fa fa-search"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                :null}
                            </div>
                        </div>
                        <hr class="bg-secondary " />
                        { location.pathname === '/companyjobs'?
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


                        </div>:null }

                        {
                                    location.pathname === '/companyjobs' && Show ? (
                                        <>
                                         <div className="d-flex" style={{
                                            justifyContent: "center",
                                            marginTop: "20px",
                                            width:"100%"
                                        }}>
                                            {
                                                Selected.map((item, index) => (
                                                    <Chip key={index} className="jobs_new_filter" label={item.value} onDelete={() => handleDelete(item)}></Chip>
                                                ))

                                            }
                                        </div>
                                            {Selected.length > 0 && <center>
                                                <button class="btn btn-primary mt-4"
                                                    onClick={async () => {
                                                        //  alert("onclick")
                                                        await dispatch({ type: "FROM_MAIN_COMPANY" });
                                                        navigate("/browsefilterlist");
                                                    }}
                                                >
                                                    Filter Companies &nbsp;  <i class="fas fa-search"></i>
                                                </button></center>}</>) : null}

                        <div class="row">
                            {
                             location.pathname === '/companyjobs'?
                            companies.filter((val)=>
                            {
                                if(searchTerm == "")
                                {
                                    return val
                                }
                                else if(val.companyname.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                                {
                                    return val
                                }
                            }).map(company => {
                                return <div class="col-lg-3 col-md-6">
                                    {/* <Link to={`/browsefilterlist?company=${company.userId}`}> */}
                                    <a class="company_jobs_anchor p-2" onClick={() => dispatch({ type: "SELECTED_COMPANIES", payload: company })}>
                                        <span class="company_jobs_img_1_text">{company.companyname}</span></a>
                                        {/* </Link> */}
                                </div>
                            })
                            :
                            
                            
                              <>
                                <div className="col-lg-2 col-md-4 col-sm-6 text-center" >
                                    <Link to="/browsefilterlist?company=620deb0ad8e816d778afc7e0">
                                <div className='defaultcompanies '>
                                <img src="images/Logos/logos7z-01.png" className="img-fluid" alt="" />
                                </div>
                                </Link>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                                <Link to="/browsefilterlist?company=620ddd52d8e816d778afc577">
                                <div className='defaultcompanies '>
                                <img src="images/Logos/logos7z-04.png" className="img-fluid" alt="" />
                                </div>
                                </Link>
                                    </div>
                    
                                    <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                                    <Link to="/browsefilterlist?company=620de44cd8e816d778afc5fc">
                                    <div className='defaultcompanies '>
                                <img src="images/Logos/logos7z-08.png" className="img-fluid" alt="" />
                                </div>
                                </Link>
                                    </div>
                    
                                    <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                                    <Link to="/companyjobs">
                                    <div className='defaultcompanies '>
                                <img src="images/Logos/logos7z-07.png" className="img-fluid" alt="" />
                                </div>
                                </Link>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                                    <Link to="/companyjobs">
                                    <div className='defaultcompanies '>
                                <img src="images/Logos/logos7z-02.png" className="img-fluid" alt="" />
                                </div>
                                </Link>
                                    </div>
                    
                                    <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                                    <Link to="/browsefilterlist?company=6231b51178332cae7b0efc5c">
                                    <div className='defaultcompanies '>
                                <img src="images/Logos/logos7z-11.png" className="img-fluid" alt="" />
                                </div>
                                </Link>
                                    </div>
                       
                                    </>
                         
                            }
                             
                        </div>
                        <div className='mb-3' id='category'>
                        
                        
                        {/* <span className="more_inner float-right mr-4" onClick={toggleReadMore}>{isReadMore ? "...more" : " show less"}</span> */}
                        {
                            location.pathname === '/companyjobs' ? null:<Link to="/companyjobs" className='float-right All-Links'><i class="fas fa-arrow-right pr-2"></i> View All Companies</Link>
                        }
                        </div>
                    </div>
                </div>

                
{/* 

                            {/* ad *
                <div className='col-md-2 vgad'>
                <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-3502028008615885" data-ad-slot={4102552451} data-ad-format="auto" data-full-width-responsive="true" />
                </div> */}

                {/* <div className='col-md-2 text-center google_ads'>
                    {/* <img src='images/ashok.jpeg' style={{width:"160px",height:"240px"}}/> *
                    <CjobsAds/>
                </div> */}




                </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyJobs