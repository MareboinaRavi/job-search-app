import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, NavLink } from "react-router-dom";
import apiList from "../lib/apiList";
// import isAuth, { userType } from "../lib/isAuth";
import './styles.css'
import {toast} from 'react-toastify'
const Signup = ()=>{
    const dispatch = useDispatch();
    const result = useSelector(state=>state.data)
    const [signupDetails, setSignupDetails] = useState({
        type: "applicant",
        email: "",
        password: "",
        name: "",
        contactNumber: ""
      });
    const [errors,setErrors]=useState({
        email: "",
        password: "",
        name: "",
        contactNumber: ""
    });  
    const validate = (name, value) => {
      switch (name) {
        case "name":
          if (!value || value.trim() === "") {
            return "Name is Required";
          } else {
            return "";
          }
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
        case "contactNumber":
          if (!value || value.trim() === "") {
            return "contactNumber number is Required";
          } else if (!value.match(/^[6-9]\d{9}$/)) {
            return "Enter a valid contactNumber number.";
          } else {
            return "";
          }
        case "password":
          if (!value) {
            return "Password is Required";
          } else if (value.length < 8 || value.length > 15) {
            return "Please fill at least 8 character";
          } else if (!value.match(/[a-z]/g)) {
            return "Please enter at least lower character.";
          } else if (!value.match(/[A-Z]/g)) {
            return "Please enter at least upper character.";
          } else if (!value.match(/[0-9]/g)) {
            return "Please enter at least one digit.";
          } else {
            return "";
          }
        // case "confirmPassword":
        //   if (!value) {
        //     return "Confirm Password Required";
        //   } else if (value !== fields.password) {
        //     return "New Password and Confirm Password Must be Same";
        //   } else {
        //     return "";
        //   }
        default: {
          return "";
        }
      }
    };
  
    const api_key = '95da0f09-67a8-11ec-b710-0200cd936042'
    const [sessionid,setSessionid] = useState();
    const [otp,setOtp]=useState();
    const [isDisabled, setDisabled] = useState(false);
    // sendotp
    const sendOtp =(e)=>{
    e.preventDefault()
    const {contactNumber} = signupDetails
          axios.get(`https://2factor.in/API/V1/${api_key}/SMS/${contactNumber}/AUTOGEN`)
          .then((response)=>{
            console.log(response)
            setSessionid(response.data.Details)
            toast.success("OTP has sent")
          })
          .catch((err)=>console.log(err))
    }

      // verifing the otp and the client number
      const validateOTP = () => {
        axios.get(`https://2factor.in/API/V1/${api_key}/SMS/VERIFY/${sessionid}/${otp}`)
            .then(data => {
              if(data){
                console.log(data)
                toast.success("Verified Successful")
                setDisabled(false)
              }
               else{
                toast.error("Please enter valid OTP")
               }
            }).catch((err)=>console.log(err))
          }


      const handleInput = (e) => {
        setSignupDetails({
          ...signupDetails,
          [e.target.name]: e.target.value,
        });
        setErrors({
          ...errors,
          [e.target.name]:validate(e.target.name,e.target.value)
        })
      };

      const handleLoginRecruiter = (e) => {
        e.preventDefault()
        let validationErrors = {};
          Object.keys(signupDetails).forEach(name => {
            const error = validate(name, signupDetails[name]);
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
        .post(apiList.signup,signupDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          dispatch({type:"USER",payload:response.data})
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response);
        });
      }
    }

    const handleLogin = (e)=>{
        e.preventDefault()
          let validationErrors = {};
          Object.keys(signupDetails).forEach(name => {
            const error = validate(name, signupDetails[name]);
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
            .post(apiList.signup,signupDetails)
            .then((response) => {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("type", response.data.type);
              dispatch({type:"USER",payload:response.data})
              console.log(response);
            })
            .catch((err) => {
              console.log(err.response);
            });
          }
          
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
                activeClassName="active"
                className="pageSwitcherItem"
              >
                SIGNIN
              </NavLink>{"  "}
              or{" "}
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="pageSwitcherItem"
              >
                SIGNUP
              </NavLink>
{/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
<form className="form">
<div className="email-type">
<select class="form-control" name="type" onChange={(e)=>handleInput(e)}>
<option value="applicant" selected>Applicant</option>
<option value="recruiter">Recruiter</option>
</select> 
</div>
<div className="input-group email-group">
    <label htmlFor="email">Name</label>
    <input type="text" name="name" placeholder="enter your name" onChange={(e)=>handleInput(e)}/>
    <div className="text-danger error">{errors.name}</div>
  </div>
  <div className="input-group email-group">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="enter your email" onChange={(e)=>handleInput(e)} />
    <div className="text-danger error">{errors.email}</div>
  </div>
  <div className="input-group email-group">
    <label htmlFor="email">Contact Number</label>
    <input type="text" name="contactNumber" placeholder="enter your contactnumber" onChange={(e)=>handleInput(e)}/>
   {signupDetails.contactNumber.length === 10?
   <button  data-toggle="modal" data-target="#exampleModalCenter" className="verifyButton btn" onClick={(e)=>sendOtp(e)}>Verify</button>:null
  }
   
    
    <div className="text-danger error">{errors.contactNumber}</div>
  </div>
  <div className="input-group email-group">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="create your password" onChange={(e)=>handleInput(e)}/>
    <div className="text-danger error">{errors.password}</div>
  </div>
  <div className="formField">
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
          </div>
        <button disabled={isDisabled} className="primary signup-btn" onClick={(e) => {
            signupDetails.type === "applicant"
              ? handleLogin(e)
              : handleLoginRecruiter(e);
          }} >SIGNUP</button>
           <div>
  <Link to="/signin" className="formFieldLink">
              I'm already member
            </Link>
            </div>
             <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
             <div class="modal-dialog modal-dialog-centered" role="document">
               <div class="modal-content">
                 <div class="modal-header">
                   {/* <h5 class="modal-title" id="exampleModalLongTitle">Reset Your Account Password</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button> */}
                 </div>
                     <div class="modal-body">
                     <div class="  text-center">
                     <h6>Please enter the one time password <br /> to verify your account</h6>
                     {/* <div> <span>A code has been sent to</span> <small>*******9897</small> </div> */}
                     <div id="otp" class="inputs d-flex flex-row justify-content-center mt-4">
                         <input type="text" className="form-control w-50" id="exampleInputName"  placeholder="Enter OTP" maxLength="6" onChange={(e) =>setOtp(e.target.value)}/>
                     </div>
                     <div> <button type='button' class="btn btn-verify px-4 validate mt-4"  aria-label="Close"  data-dismiss="modal" onClick={() =>{ validateOTP()}} >Validate</button> </div>
                 </div>
                 <div class="card-2 mt-3">
                     <div class="content d-flex justify-content-center align-items-center"> <span>Didn't get the code</span> <a href="#" class="text-decoration-none ms-3"> Resend</a> </div>
                 </div>
                  
                 </div>
               </div>
             </div>
           </div>

</form>
</div>
</div>
}

</>)
}
export default Signup