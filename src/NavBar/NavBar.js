import React from 'react'
import { BrowserRouter, Link, Route, Routes, Switch, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import apiList from '../lib/apiList';
import axios from 'axios';
import Employer_Navbar from './Employer_Navbar';
import Student_Navbar from './Student_Navbar';
import Auth from '../auth/Auth';
import ReactGA from 'react-ga';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

const Navbar = () => {
    const [state, setState] = useState({ navbar_content: "white", color: "black" });
    const [collapse, setCollapse] = useState();
    const [id, setId] = useState();
    const result = useSelector(state => state.data)
    console.log(result)
    const [width, setWidth] = useState(window.innerWidth)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const Resize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", Resize)
    }, []);

    useEffect(() => {
        if (width < 991) {
            setCollapse("collapse")
            setId("#navbarNav")
        } else {
            setCollapse("")
            setId("")
        }
    }, [width]);

    useEffect(() => {
        // console.log("window.location.pathname + window.location.search", location.pathname);
        ReactGA.pageview(location.pathname);
      }, [location])

    console.log('modalIsOpen',modalIsOpen);
   

    return (
        <>
            <div id="nav-bar" >
                <nav className="navbar navbar-expand-lg fixed-top navbar_content mb-5" id="myScrollspy" style={{ backgroundColor: `${state.navbar_content}` }}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img type="logo" className="img-fluid logo_img" src="/images/Untitled-10-01.png " height="100" width="200" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <i className="fa fa-bars text-white"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav" >
                            <ul className="navbar-nav "   >

                            { result?.type === "recruiter" ?
                                        null
                                    :
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold" style={{ color: state.color }} id="a1" to="/" data-toggle={collapse} data-target={id}>HOME</Link>
                                </li>

                            }
                                {/* <li className="nav-item">
                                    <Link className="nav-link font-weight-bold" style={{ color: state.color }} id="a1" to="/companies" data-toggle={collapse} data-target={id}>COMPANIES</Link>
                                </li> */}
                            

                                  { result?.type === "recruiter" ?
                                        null
                                    :
                                <li className="nav-item dropdown position-relative d-inline-block">
                                    <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a2" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: state.color }}>
                                        BROWSE JOBS
                                    </a>
                                    
                                    <div className="dropdown-menu dropdown-content d-none position-absolute ml-4 bg-white rounded"
                                        data-toggle={collapse} data-target={id}
                                        aria-labelledby="a2">
                                        <Link className="dropdown-item" to="/browsefilterlist" >My
                                            Browse Filter List</Link>
                                        
                                    </div>
                                </li>
                                 }

                                 { 
                                    result?.type === "recruiter" ?
                                        null
                                    :
                                <li className="nav-item dropdown position-relative d-inline-block">
                                    <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: state.color }}>
                                        JOBS
                                    </a>
                                    {/* toggler  changes */}
                                    <div className="dropdown-menu dropdown-content  d-none position-absolute ml-4 bg-white rounded" data-toggle={collapse} data-target={id}
                                        aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/alljobs">All Jobs</Link>
                                        <Link className="dropdown-item" to="/companyjobs">Company Jobs</Link>
                                        <Link className="dropdown-item" to="/categoryjobs">Category Jobs</Link>
                                        <Link className="dropdown-item" to="/locationaljobs">Locational Jobs</Link>
                                        <Link className="dropdown-item" to="/designationjobs">Designation Jobs</Link>
                                        <Link className="dropdown-item" to="/skilljobs">Skill Jobs</Link>
                                        
                                    </div>
                                </li>
                                }
                                   
                                
                                    {/* { 
                                    result?.type === "recruiter" ?
                                        null
                                    :
                                    <li className="nav-item">
                                        <Link className="nav-link font-weight-bold" style={{ color: state.color }} id="a1" to="/onlinetest" data-toggle={collapse} data-target={id}>ONLINE EXAM</Link>
                                    </li> 
                                            } */}
                                            
                            </ul>
                            {result ? (
                                result.type === "recruiter" ?
                                    (
                                        <Employer_Navbar />
                                    ) :
                                    (
                                        <Student_Navbar />
                                    )
                            )
                                : (

                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to="/auth">
                                                <button type="button"
                                                    className="btn  navbar-btn" /*onClick={() => setIsOpen(true)} */ data-toggle={collapse} data-target={id}><i
                                                        className="fas fa-user"></i> SIGNUP/SIGNIN</button>
                                            </Link>
                                            
                                        </li>
                                    </ul>
                                )
                            }

                        </div>
                    </div>
                </nav>
            </div>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Auth />
            </Modal>
           
        </>
    )
}

export default Navbar

