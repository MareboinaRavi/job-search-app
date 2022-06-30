import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Sidebar from './Sidebar'
import {toast} from 'react-toastify'
import apiList from '../lib/apiList'
import {FaRegEyeSlash,FaRegEye} from 'react-icons/fa'
const ChangePassword = () => {
    const [oldpassword,setoldPassword]=useState('')
    const [isOldPassword, setIsOldPassword] = useState(false);
    const [isNewPassword, setNewPassword] = useState(false);
    const [isConPassword, setIsConPassword] = useState(false);
    const [password,setPassword] = useState({
        newpassword:'',
        confirmpassword:''
    })
    const oldpasswordHandle=(e)=>{
        setoldPassword(e.target.value)
    }
    const newpasswordHandle=(e)=>{
        
        setPassword({...password,[e.target.name]:e.target.value})
    }
        const resetInput = ()=>{
            setoldPassword("")
            setPassword({
                newpassword:"",
                confirmpassword:""
            })
        }

  const updatePassword=(e)=>{
    e.preventDefault()
      if(!oldpassword || !password.newpassword || !password.confirmpassword){
          toast.error("Please fill all fields")
          return false
      }
    if (password.newpassword.length < 8 || password.newpassword.length> 15) {
        toast.error( "Please fill at least 8 character");
        return false
      }  
    if (!password.newpassword.match(/[a-z]/g)) {
        toast.error( "Please enter at least lower character.");
        return false
      }  
    if (!password.newpassword.match(/[A-Z]/g)) {
        toast.error( "Please enter at least upper character.");
        return false
      }  
    if (!password.newpassword.match(/[0-9]/g)) {
        toast.error( "Please enter at least one digit.");
        return false
      }
      if(password.newpassword !== password.confirmpassword){
        toast.error("New Password and Confirm Password should match")
        return false
    }
    else{
        axios
    .post(apiList.changepassword,
     {password:oldpassword, newpassword:password.newpassword}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
        resetInput();
      toast.success(response.data.message)
     
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
}
};
  


    return (
        <div class="container main_content my-5">
        <div class="row">
            <div class="col-lg-3">
                <Sidebar />
            </div>
            <div class="col-lg-9">
                <div class="wrapper">
                    <div class="content">
                        <div class="job-bx-title clearfix">
                            <h5 class=" pull-left text-uppercase cp">Change Password</h5>
                            <a href="/" class="site-button right-arrow button-sm float-right"> Back </a>
                        </div>
                        <form action="#">
                            <div class="row m-b30">
                                {/* <!-- first --> */}
                                <div class=" col-lg-12 col-md-12">
                                    <div class="form-group ">
                                        <label>Old Password</label>
                                        <input type={isOldPassword ? "text" : "password"} value={oldpassword} class="form_control" onChange={(e)=>oldpasswordHandle(e)}/>
                                    </div>
                                    <span className='password_change'
                                        onClick={() => setIsOldPassword(prevState => !prevState)}
                                        >
                                    {isOldPassword ? <i class="fa fa-eye-slash" aria-hidden="true"></i>: <i class="fa fa-eye" aria-hidden="true"></i>}                                                      
                                    </span>
                                </div>
                                {/* <!-- second --> */}
                                <div class=" col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label> New Password</label>
                                        <div class="form-group ">
                                        <input type={isNewPassword ? "text" : "password"} value={password.newpassword} name="newpassword" class="form_control" onChange={(e)=>newpasswordHandle(e)}/>
                                        </div>
                                        <span className='password_change'
                                            onClick={() => setNewPassword(prevState => !prevState)}
                                            >
                                        {isNewPassword ? <i class="fa fa-eye-slash" aria-hidden="true"></i>: <i class="fa fa-eye" aria-hidden="true"></i>}                                                      
                                        </span>
                                    </div>
                                </div>
                                <div class=" col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label> Confirm Password</label>
                                        <input type={isConPassword ? "text" : "password"} value={password.confirmpassword} name="confirmpassword" class="form_control" onChange={(e)=>newpasswordHandle(e)}/>
                                        </div>
                                        <span className='password_change'
                                            onClick={() => setIsConPassword(prevState => !prevState)}
                                            >
                                        {isConPassword ? <i class="fa fa-eye-slash" aria-hidden="true"></i>: <i class="fa fa-eye" aria-hidden="true"></i>}                                                      
                                        </span>
                                      
                                </div>
                            </div>
                        </form>
                        <button class="update" onClick={(e)=>updatePassword(e)}>Update Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ChangePassword