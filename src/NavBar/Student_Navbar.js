import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Logout from './Logout';
import { useDispatch } from 'react-redux';
import IdleTimer from 'react-idle-timer';
import axios from 'axios';
import apiList from '../lib/apiList';
const Student_Navbar = () => {
  const idleTimerRef = useRef(null)
  const [state, setState] = useState({ navbar_content: "white", color: "black" });
  const [collapse, setCollapse] = useState();
  const [id, setId] = useState();
  const dispatch = useDispatch()
  const [width, setWidth] = useState(window.innerWidth)
  const navigate = useNavigate();
  const Resize = () => {
    setWidth(window.innerWidth)
  }
  const [notificationCounts, setNotificationCounts] = useState();

  useEffect(() => {
    window.addEventListener("resize", Resize)
    fetchNotifications();
  }, [])
  useEffect(() => {
    if (width < 1440) {
      setCollapse("collapse")
      setId("#navbarNav")
    } else {
      setCollapse("")
      setId("")
    }
  }, [width])
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    dispatch({ type: "CLEAR" })
    navigate("/auth")
  };

  const onIdle = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    dispatch({ type: "CLEAR" })
    navigate("/auth")
  }

  const fetchNotifications = () => {
    axios
      .get(apiList.notification, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // setPageCount(Math.ceil(response.data.length)/perPage)
        console.log('ddd ', response.data);
        setNotificationCounts(response.data)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  let bellCount = 0

  bellCount = notificationCounts && notificationCounts?.jobAlerts + notificationCounts?.appliedJobs
  bellCount = bellCount > 99 ? "99+" : bellCount

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav"   >
        <ul className="navbar-nav"   >

          {/* <li className="nav-item">
            <Link className="nav-link font-weight-bold" style={{ color: state.color }} id="a1" to="/onlinetest" data-toggle={collapse} data-target={id}>ONLINE EXAM</Link>
          </li> */}


          <li className="nav-item dropdown position-relative d-inline-block">
            <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a3" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: state.color }}>
              SERVICES<sup className='new_blink'>New</sup>
            </a>

            {/* toggler  changes */}
            <div className="dropdown-menu dropdown-content  d-none position-absolute position-relative ml-4 bg-white rounded" data-toggle={collapse} data-target={id}
              aria-labelledby="navbarDropdown">

              <Link className="dropdown-item" to="/hireandtrain">HireAndTrain <sup className='new_blink_inner'>New</sup></Link>
              <Link className="dropdown-item" to="/onlinetest">OnlineExam<sup className='new_blink_inner'>New</sup></Link>
              <Link className="dropdown-item" to="/textresume">GetYourResume <sup className='new_blink_inner'>New</sup></Link>
              <Link className="dropdown-item"
                to="/sellskill">Sell Your Skills  <sup className='new_blink_inner'>New</sup>   </Link>


            </div>
          </li>

          <li className="nav-item dropdown position-relative d-inline-block">
            <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a3" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: state.color }}>
              PAYMENTS
            </a>

            {/* toggler  changes */}
            <div className="dropdown-menu dropdown-content  d-none position-absolute position-relative ml-4 bg-white rounded" data-toggle={collapse} data-target={id}
              aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/payment">HireAndTrain</Link>

              {/* <Link className="dropdown-item"
                                                to="/textresumepayment">Text Resume Payment</Link> */}
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto"   >

          <li className="nav-item dropdown profile_dropdown position-relative d-inline-block">

            <div className="notBtn position-relative">
              <div class="number">{bellCount}</div>
              <i class="far fa-bell nav_bell"></i>

              {/* <div class=" bell_box">
    <div class="display">
      <div class="conts">
        <div class="secs ">
        <Link to="/jobalerts">
        <h1>Recomended Jobs({notificationCounts?.jobAlerts})</h1>
        </Link>
        </div>
        <div class="secs">
          <Link to="/appliedjobs">
          <h1>Applied Jobs ({notificationCounts?.appliedJobs})</h1>
          </Link>
          
        </div>
        <div class="secs">
          <h1>Pending Actions (6)</h1>
        </div>
      </div>
    </div>
  </div> */}

              <div className="dropdown-menu  dropdown-content bell_content d-none position-absolute bg-white rounded" aria-labelledby="a2" data-toggle={collapse} data-target={id}>
                <Link className="dropdown-item" to="/jobalerts">
                  Recomended Jobs({notificationCounts?.jobAlerts})
                </Link>
                <Link className="dropdown-item" to="/appliedjobs">
                  Applied Jobs ({notificationCounts?.appliedJobs})
                </Link>
                <Link className="dropdown-item" to="appliedjobs">
                  Pending Actions (6)
                </Link>
              </div>
            </div>

          </li>

          <li className="nav-item dropdown profile_dropdown position-relative d-inline-block">

            <a className=" font-weight-bold dropdown-toggle" id="a5" >
              <button type="button"
                className="btn  navbar-btn profile-btn" data-toggle="modal" data-target="#MyModal"><i
                  className="fas fa-user"></i>
              </button></a>

            <div
              id='profile-dropdown'
              className="dropdown-menu dropdown-content d-none position-absolute bg-white rounded"
              aria-labelledby="a2" data-toggle={collapse} data-target={id}
            >
              <Link className="dropdown-item" to="/myprofile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/myresume">
                My Resume
              </Link>
              <Link className="dropdown-item" to="appliedjobs">
                Applied Jobs
              </Link>
              <Link className="dropdown-item" to="/jobalerts">
                Job Alerts
              </Link>
              <Link className="dropdown-item " to="/savedjobs">
                Saved Jobs
              </Link>
              <Link className="dropdown-item" to="/changepassword">
                Change Password
              </Link>
              <a onClick={() => handleClick()} className=" font-weight-bold" id="a5" data-toggle={collapse} data-target={id}>
                <button type="button"
                  className="btn logout-btn" data-toggle="modal" data-target="#MyModal">
                  Logout</button>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <IdleTimer ref={idleTimerRef} timeout={900 * 1000} onIdle={onIdle}></IdleTimer>

    </>
  )
}
export default Student_Navbar