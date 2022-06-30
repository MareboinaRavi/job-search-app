import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Testimonials from './Testimonials';
// import Pagination from './Pagination';
import Categories from './categories';
import OurClients from './OurClients';
import FeaturedCities from './FeaturedCities'
import RecentJobs from './RecentJobs';
import { toast } from 'react-toastify';
import Subfilter from '../Pages/jobs/subfilter';
import LocationalJobs from '../Pages/jobs/LocationalJobs';
import CompanyJobs from '../Pages/jobs/CompanyJobs';
import CategoryJobs from '../Pages/jobs/CategoryJobs';
import DesignationJobs from '../Pages/jobs/DesignationJobs';
import SkillJobs from '../Pages/jobs/SkillJobs';
import { Link } from 'react-scroll'
import HomeBanners from './HomeBanners/HomeBanners';
import HomeBanner2 from './HomeBanners/HomeBanner2';
import HomeBanner3 from './HomeBanners/HomeBanner3';
import HomeBanner4 from './HomeBanners/HomeBanner4';
import { Autocomplete } from '@mui/material';
import { TextField } from '@material-ui/core';
import skillsdata from '../JsonData/Skill.json';
import data from '../JsonData/locations.json'
import BannerAds from '../ads/BannerAds';
import MobileAds from '../ads/MobileAds'
import { useMediaQuery } from 'react-responsive'
import Modal from 'react-modal';

const Home = () => {
    const timer = useRef(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' })
    const [keyword, setKeyword] = useState("");
    const [qlocation, setQLocation] = useState("");
    const [keywordError, setKeywordError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();

    const [post, setPost] = useState({

        skillsets: [],
        cities: [],

    })

    const options = {
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    }

    const handleSearch = () => {

        if (post.cities.length > 0 || post.skillsets.length > 0) {

            navigate(`/browsefilterlist?keyword=${post.skillsets}&qlocation=${post.cities}`)
        }


    }
    console.log('keywordError', keywordError);

    // useEffect(() => {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({});
    // }, [])

    const showPopUp = () => {
        let shownPopup = localStorage.getItem("shownPopup")
        if (!shownPopup) {
            setModalIsOpen(true)
            localStorage.setItem("shownPopup", true)
        }

    }

    useEffect(() => {
        timer.current = setTimeout(() => {
            showPopUp();
        }, 15000);
        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, []);

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setModalIsOpen(false)}
                style={{ content: { height: "200px", marginTop: "200px" } }}
                contentLabel="Example Modal"
            >
                <button onClick={() => setModalIsOpen(false)}>close</button>
                <div>I am a modal</div>
                0
            </Modal>

            <section>
                <div id="sec1" className="container-fluid">
                    <div className="container hm1">
                        <div className="home1">
                            <h2 className="am2">Find Your Right Job Here .....
                            </h2>
                            <div className="browse_joblocation_list-search_box">
                                <form className="form-control">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5" id="input1_joblocation">


                                            {/* <input type="text" className="form-control" id="search_box_input_joblocation"
                                                placeholder="Job Title, Keywords, or Phrase" name='keyword' value={keyword} />onChange={(e) => { setKeyword(e.target.value); setKeywordError("") }} />
                                            {keywordError != '' && <small style={{ color: 'red' }}>{keywordError}</small>} */}

                                            <div>
                                                {/* <label>Technical Skills :</label> */}
                                                <Autocomplete
                                                    id="combo-box-demo"
                                                    multiple
                                                    value={post.skillsets}
                                                    options={skillsdata.map((res) => {
                                                        return res.Skill
                                                    })}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(e, value) => {
                                                        setPost({
                                                            ...post,
                                                            skillsets: value
                                                        });
                                                    }}

                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            name="multiple"
                                                            label="Job Title, Keywords, or Phrase"
                                                            variant="outlined"
                                                            fullWidth
                                                            name='keyword' value={keyword} onChange={(e) => { setKeyword(e.target.value) }}
                                                        />
                                                    )}
                                                />
                                                {/* <span>Press enter to add skills</span> */}
                                            </div>


                                        </div>
                                        <div className="col-lg-5 col-md-5" id="input2_joblocation">
                                            {/* <input type="text" className="form-control" id="search_box_input_joblocation"
                                                placeholder="City ,Province or Region" name='qlocation' value={qlocation} onChange={(e) => { setQLocation(e.target.value); setLocationError("") }} />
                                            {locationError != '' && <small style={{ color: 'red' }}>{locationError}</small>} */}


                                            {/* <div className="form-group"> */}
                                            {/* <label>Locations</label> */}
                                            <Autocomplete
                                                id="combo-box-demo"
                                                multiple
                                                value={post.cities}
                                                options={data.map((res) => {
                                                    return res.location

                                                })}
                                                getOptionLabel={(option) => option}
                                                onChange={(e, value) => {
                                                    setPost({
                                                        ...post,
                                                        cities: value
                                                    });
                                                }}

                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        name="multiple"
                                                        label="City ,Province or Region"
                                                        variant="outlined"
                                                        fullWidth
                                                        name='qlocation' value={qlocation} onChange={(e) => { setQLocation(e.target.value) }}
                                                    />
                                                )}
                                            />

                                            {/* <span>Press enter to add cities</span> */}
                                            {/* </div> */}


                                        </div>
                                        <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                            id="input_btn_joblocation">
                                            {/* <Link to={`/browsefilterlist?keyword=${keyword}&qlocation=${qlocation}`} > */}
                                            <a>
                                                <button type='button' id="search_box_btn_joblocation" className="btn-block" onClick={handleSearch} >
                                                    Search</button>
                                            </a>
                                            {/* </Link> */}
                                        </div>

                                    </div>

                                </form>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <div className='container google_ads'>

                <BannerAds />

            </div>

            <div className='container mobile_ads'>

                {isTabletOrMobile && <MobileAds />}

            </div>





            {/* <Categories /> */}
            <CompanyJobs />

            {/* ad */}
            <div className='container google_ads'>

                <BannerAds />

            </div>

            <div className='container mobile_ads'>

                {isTabletOrMobile && <MobileAds />}

            </div>



            <CategoryJobs />

            <div className='container google_ads'>

                <BannerAds />

            </div>

            <div className='container mobile_ads'>

                {isTabletOrMobile && <MobileAds />}

            </div>



            <HomeBanners />

            <DesignationJobs />

            <div className='container google_ads'>

                <BannerAds />

            </div>

            <div className='container mobile_ads'>

                {isTabletOrMobile && <MobileAds />}

            </div>



            <HomeBanner3 />

            <SkillJobs />

            <div className='container google_ads'>

                <BannerAds />


            </div>

            <div className='container mobile_ads'>

                {isTabletOrMobile && <MobileAds />}

            </div>



            <HomeBanner2 />

            <FeaturedCities />

            <HomeBanner4 />

            <div className='container google_ads'>

                <BannerAds />

            </div>

            <div className='container mobile_ads'>

                {isTabletOrMobile && <MobileAds />}

            </div>



            {/* <LocationalJobs /> */}
            {/* <OurClients /> */}
            {/* <Testimonials /> */}



        </div>


    )
}
export default Home