import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, NavLink } from "react-router-dom";
import apiList from "../lib/apiList";
import './styles.css'
import {toast} from "react-toastify"
const Login = ()=>{
  const dispatch = useDispatch();
    const result = useSelector(state=>state.data)
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
      });
      const [errors,setErrors]=useState({
        email: "",
        password: "",
    });  
    const [toggle,setToggle]=useState(false)
    const [phone,setPhone]=useState('')
      const handleInput = (e) => {
        setLoginDetails({
          ...loginDetails,
          [e.target.name]: e.target.value,
        });
        setErrors({
          ...errors,
          [e.target.name]:validate(e.target.name,e.target.value)
        })
      };
      const validate = (name, value) => {
        console.log("calling")
        switch (name) {
          case "email":
            if (!value) {
              return "Email is Required";
            } else if (
              !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
            ) {
              return "Enter a valid email address";
            } else {
              return "";
            }
          case "password":
            if (!value) {
              return "Password is Required";
            } else {
              return "";
            }
          default: {
            return "";
          }
        }
      };
    const handleLogin = (e)=>{
        e.preventDefault()
        let validationErrors = {};
          Object.keys(loginDetails).forEach(name => {
            const error = validate(name, loginDetails[name]);
            if (error && error.length > 0) {
              validationErrors[name] = error;
            }
          });
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return;
          }
          else{
          axios
          .post(apiList.login,loginDetails)
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("type", response.data.type);
            dispatch({type:"USER", payload:response.data})
            toast.success("Login Successful")
            console.log(response);
          })
          .catch((err) => {
            toast.error(err.response.data.message)
            console.log(err.response);
          })
        }
      }
      const api_key = '95da0f09-67a8-11ec-b710-0200cd936042'
    const getOTP = (e)=>{
      e.preventDefault()
      axios
          .post(apiList.mobilelogin,{phone:phone})
          .then((response) => {
            if(response.status===200){
              axios.get(`https://2factor.in/API/V1/${api_key}/SMS/${phone}/AUTOGEN/OTP+Verification`)
              .then((response)=>{
                console.log(response)
                toast.success("OTP has sent")
              })
              .catch((err)=>console.log(err))
            }
            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("type", response.data.type);
            // dispatch({type:"USER", payload:response.data})
            // toast.success("Login Successful")
            console.log(response);
          })
          .catch((err) => {
            toast.error(err.response.data.error)
            console.log(err.response);
          })
    }
    const [otp,setOtp]=useState();
    const verifyOTP = (e)=>{
      e.preventDefault()
      axios
          .post(apiList.mobilelogin,{phone:phone})
          .then((response) => {
            if(response.status===200){
              axios.get(`https://2factor.in/API/V1/${api_key}/SMS/VERIFY3/${phone}/${otp}`)
              .then((res)=>{
                console.log(res)
                toast.success("Login Success")
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("type", response.data.type);
                dispatch({type:"USER", payload:response.data})
              })
              .catch((err)=>console.log(err))
            }
            
            // toast.success("Login Successful")
            console.log(response);
          })
          .catch((err) => {
            toast.error(err.response.data.error)
            console.log(err.response);
          })
      // https://2factor.in/API/V1/95da0f09-67a8-11ec-b710-0200cd936042/SMS/VERIFY3/+919908047879/150598
      
    }
return(<>
  {
    result ? (
    result.type === 'recruiter'?
    <Navigate to="/company_profile" />
      : 
     <Navigate to="/myprofile" /> )
     :
    <div id="email_root">
<div className="App">
            <NavLink
                to="/signin"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                SIGNIN
              </NavLink>{"  "}
               or{" "}
              <NavLink
                exact
                to="/signup"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                SIGNUP
              </NavLink>
{/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
{/* {
  toggle? */}
  <form className="form">
  <div className="input-group email-group">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="enter your email" onChange={(e)=>handleInput(e)}/>
    <div className="text-danger error">{errors.email}</div>
  </div>
  <div className="input-group email-group">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="create your password" onChange={(e)=>handleInput(e)}/>
    <div className="text-danger error">{errors.password}</div>
  </div>
  {/* <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div> */}
  <button onClick={(e)=>handleLogin(e)} className="primary signup-btn">SIGNIN</button>
  <div>
  <Link to="/signup" className="formFieldLink">
              Don't have an account
            </Link>
            </div>
            {/* <div>
  <a href="#" className="formFieldLink" onClick={()=>setToggle(!toggle)}>
  Use OTP to Login
            </a>
            </div> */}
           
    </form>
{/*  
            // <form className="form">
            //   <div className="input-group email-group">
            //     <label htmlFor="email">Mobile Number</label>
            //     <input type="email" name="email" placeholder="Enter your 10 digit Mobile number" onChange={(e)=>setPhone(e.target.value)}/>
            //   </div>
            //   <button data-toggle="modal" data-target="#exampleModalCenter"  className="primary signup-btn" onClick={(e)=>getOTP(e)}>Get OTP</button>
            //   <div>
            //   <Link to="/signup" className="formFieldLink">
            //               Don't have an account
            //             </Link>
            //             </div>
            //             <div>
            //   <a href="#" className="formFieldLink" onClick={()=>setToggle(!toggle)}>
            //   Use Email to Login
            //             </a>
            //             </div>

            //             <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            //             <div class="modal-dialog modal-dialog-centered" role="document">
            //               <div class="modal-content">
            //                 <div class="modal-header">
            //                   {/* <h5 class="modal-title" id="exampleModalLongTitle">Reset Your Account Password</h5>
            //                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //                     <span aria-hidden="true">&times;</span>
            //                   </button> */}
            {/* //                 </div>
            //                     <div class="modal-body">
            //                     <div class="  text-center">
            //                     <h6>Please enter the one time password <br /> to verify your account</h6>
            //                     {/* <div> <span>A code has been sent to</span> <small>*******9897</small> </div> */}
            {/* //                     <div id="otp" class="inputs d-flex flex-row justify-content-center mt-4">
            //                         <input type="text" className="form-control w-50" id="exampleInputName"  placeholder="Enter OTP" maxLength="6" onChange={(e) =>setOtp(e.target.value)}/>
            //                     </div>
            //                     <div> <button type='button' class="btn btn-verify px-4 validate mt-4"  aria-label="Close"  data-dismiss="modal" onClick={(e) =>{ verifyOTP(e)}} >Validate</button> </div>
            //                 </div>
            //                 <div class="card-2 mt-3">
            //                     <div class="content d-flex justify-content-center align-items-center"> <span>Didn't get the code</span> <a href="#" class="text-decoration-none ms-3"> Resend</a> </div>
            //                 </div>
                              
            //                 </div> */}
            {/* //               </div> */}
            {/* //             </div> */}
                     {/* </div>  */}
{/* 
            // </form> */}


{/* } */}
</div>
</div>
}
</>)
}
export default Login