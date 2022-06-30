import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import IdleTimer from 'react-idle-timer';
import { MdAccountCircle } from 'react-icons/md'
const Employer_Navbar = () => {
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
  useEffect(() => {
    window.addEventListener("resize", Resize)
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
  return (
    <>

      <div className="collapse navbar-collapse" id="navbarNav"   >
        <ul className="navbar-nav"   >
          <li className="nav-item">
            <Link className="nav-link font-weight-bold" style={{ color: state.color }} id="a1"
              to="/Buytabs" data-toggle={collapse} data-target={id}>BUY SERVICES<sup className='new_blink_inner'>New</sup></Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link font-weight-bold" style={{ color: state.color }} id="a1"
              to="/searchcandidate" data-toggle={collapse} data-target={id}>SEARCH CANDIDATES</Link>
          </li>

        </ul>

        <ul className="navbar-nav ml-auto">
          {/* <li>

            <div className="notBtn position-relative">
              <div class="number">20</div>
              <i class="fas fa-bell nav_bell"></i>
              <div class=" bell_box">
                <div class="display">
                  {/* <div class="nothing">
                    <i class="fas fa-child stick"></i>
                    <div class="cent">Looks Like your all caught up!</div>
                  </div> *
                  <div class="conts">
                    <div class="secs ">

                      <h1>Recomended Jobs(55)</h1>

                    </div>
                    <div class="secs">
                      <h1>Applied Jobs (99)</h1>
                    </div>
                    <div class="secs">
                      <h1>Pending Actions (6)</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </li> */}
          <li className="nav-item dropdown profile_dropdown position-relative d-inline-block">
            <li className="nav-item">
              <a className=" font-weight-bold dropdown-toggle" id="a5" >
                <button type="button"
                  className="btn  navbar-btn profile-btn" data-toggle="modal" data-target="#MyModal"><i
                    className="fas fa-user"></i>
                </button></a>
            </li>
            <div
              id='profile-dropdown'
              className="dropdown-menu dropdown-content  d-none position-absolute  bg-white rounded"
              aria-labelledby="navbarDropdown" data-toggle={collapse} data-target={id}
            >
              <Link className="dropdown-item" to="/company_profile">
                Company Profile
              </Link>
              <Link className="dropdown-item" to="/post_jobs">
                Post A Job
              </Link>
              <Link className="dropdown-item" to="/Manage_jobs">
                My Jobs
              </Link>
              <Link className="dropdown-item" to="/password">
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
export default Employer_Navbar