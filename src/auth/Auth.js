import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiList from '../lib/apiList';
import Modal from 'react-modal';
import './auth.css';
import { GoogleLogin, GoogleLogout, useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID


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

const Auth = (props) => {
    const [selectedClient, setSelectedClient] = useState("");
    const dispatch = useDispatch();
    const [mainTab, setMainTab] = useState('signup')
    const [subTab, setSubTab] = useState(false)
    const [phone, setPhone] = useState()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showVerifyBtn, setVerifyBtn] = useState(false);
    const [contactNumber, setContactNumber] = useState("");
    const [contactSessionId, setContactSessionId] = useState();
    const [isContactVerified, setContactVerified] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const navigate = useNavigate();

    const switchMainTab = (tab) => {
        setMainTab(tab)
        setSubTab(false)
    }



    console.log('mmmm', mainTab);

    const handleLogin = e => {
        let haveError = false
        if (e.target.email.value == '') {
            haveError = true
            setEmailError('Email is required!')
        }
        if (e.target.password.value == '') {
            haveError = true
            setPasswordError('Password is required!')
        }

        e.preventDefault()
        if (!haveError) {
            let loginDetails = {
                email: e.target.email.value,
                password: e.target.password.value
            }
            axios
                .post(apiList.login, loginDetails)
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("type", response.data.type);
                    localStorage.setItem('isAuth', 'true');
                    dispatch({ type: "USER", payload: response.data })
                    toast.success("Login Successful")
                    console.log(response);
                    if (response.data.type === "applicant") {
                        navigate("/appliedjobs")
                    } else {
                        navigate("/Manage_jobs")
                    }
                })
                .catch((err) => {
                    toast.error(err.response.data.message)
                    console.log(err.response);
                })
        }

    }

    const handleSignUp = e => {

        e.preventDefault()
        let haveError = false
        if (e.target.email.value == '') {
            haveError = true
            setEmailError('Email is required!')
        }
        if (e.target.password.value == '') {
            haveError = true
            setPasswordError('Password is required!')
        }

        if (!e.target.contactNumber.value.match(/^[6-9]\d{9}$/)) {
            haveError = true
            setPhoneError("Enter a valid contactNumber number.")
        }
        if (e.target.contactNumber.value == '') {
            haveError = true
            setPhoneError('Phone is required!')
        }
        if (haveError) {
            return
        }
        if (e.target.password.value !== e.target.confirmPassword.value) {
            toast.error("Password is not matching")
            e.target.rest()
            return
        }

        // if (!isContactVerified) {
        //     toast.error("Contact needs to be verified!")
        // }
        let signupDetails = {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value,
            type: e.target.type.value,
            contactNumber: e.target.contactNumber.value,
        }
        axios
            .post(apiList.signup, signupDetails)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("type", response.data.type);
                dispatch({ type: "USER", payload: response.data })
                toast.success("Registered Successful")
                console.log(response);

                navigate("/")
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err.response);
            });
    }

    const handleOTPSend = e => {
        let haveError = false
        if (e.target.phone.value == '') {
            haveError = true
            setPhoneError('Phone number is required!')
        }
        if (e.target.phone.value.length != 10) {
            haveError = true
            setPhoneError('Enter valid phone number!')
        }
        e.preventDefault()
        if (haveError) {
            return
        }
        e.preventDefault()
        let otpDetails = {
            phone: e.target.phone.value,
        }
        axios
            .post(apiList.sendOTP, otpDetails)
            .then((response) => {
                // localStorage.setItem("token", response.data.token);
                // localStorage.setItem("type", response.data.type);
                // dispatch({ type: "USER", payload: response.data })
                toast.success("OTP Sended")
                console.log(response);
                setSubTab('verifyOtp')
                setPhone(otpDetails.phone)
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err.response);
            });
    }

    const handleVerifyOTP = e => {
        e.preventDefault()
        if (!phone) {
            setSubTab(false)
            return
        }
        let otpDetails = {
            phone,
            otp: e.target.otp.value,
        }
        axios
            .post(apiList.verifyOTP, otpDetails)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("type", response.data.type);
                dispatch({ type: "USER", payload: response.data })
                toast.success("Login Successfully")
                console.log(response);

                navigate("/")
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err.response);
            });
    }

    const handleForgotPassword = e => {
        let haveError = false
        if (e.target.phone.value == '') {
            haveError = true
            setPhoneError('Phone number is required!')
        }
        if (e.target.phone.value.length != 10) {
            haveError = true
            setPhoneError('Enter valid phone number!')
        }
        e.preventDefault()
        if (haveError) {
            return
        }
        let otpDetails = {
            phone: e.target.phone.value,
        }
        axios
            .post(apiList.forgotPassword, otpDetails)
            .then((response) => {
                // localStorage.setItem("token", response.data.token);
                // localStorage.setItem("type", response.data.type);
                // dispatch({ type: "USER", payload: response.data })
                toast.success("New password send to your number")
                console.log(response);
                setSubTab(false)
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err.response);
            });
    }

    const handleContactInput = (e) => {
        let value = e.target.value
        setContactNumber(value)
        setContactVerified(false)
        if (!value || value.trim() === "") {
            setVerifyBtn(false)
            return "contactNumber number is Required";
        } else if (!value.match(/^[6-9]\d{9}$/)) {
            setVerifyBtn(false)
            return "Enter a valid contactNumber number.";
        } else {
            setVerifyBtn(true)
        }
    }

    const handleContactVerify = () => {
        let otpDetails = {
            phone: contactNumber,
        }
        axios
            .post(apiList.contactSendOTP, otpDetails)
            .then((response) => {
                // localStorage.setItem("token", response.data.token);
                // localStorage.setItem("type", response.data.type);
                // dispatch({ type: "USER", payload: response.data })
                setIsOpen(true)
                setContactSessionId(response.data.sessionId)
                console.log(response);
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err.response);
            });
    }

    const handleContactOTPVerify = (e) => {
        console.log('contactSessionId', contactSessionId);
        e.preventDefault()
        let otpDetails = {
            sessionId: contactSessionId,
            otp: e.target.otp.value
        }
        axios
            .post(apiList.contactVerifyOTP, otpDetails)
            .then((response) => {
                // localStorage.setItem("token", response.data.token);
                // localStorage.setItem("type", response.data.type);
                // dispatch({ type: "USER", payload: response.data })
                setIsOpen(false)
                toast.success("Contact Verified")
                setContactSessionId()
                setContactVerified(true)
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err.response);
            });
    }


    const [state, setState] = useState({
        image:
            <img src='/images/Signup.jpg' className='signup_image img-fluid' />
    });

    const imgColumn = () => {
        setState((state) => ({
            image:
                <img src='images/Login.jpg' className='signup_image img-fluid' />
        }));
    };

    const imgColumn2 = () => {
        setState((state) => ({
            image:
                <img src='/images/Signup.jpg' className='signup_image img-fluid' />
        }));
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };



    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const [isSignupPwd, setIsSignupPwd] = useState(false);

    const [isConfirmPwd, setIsConfirmPwd] = useState(false);

    const resetError = () => {
        setEmailError("")
        setPasswordError("")
        setPhoneError("")
    }

    const handleSelectChange = (e) => {
        setSelectedClient(e.target.value);
    }

    const onGoogleSignUpSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        console.log('Token - ', res.tokenObj);
        let signupDetails = {
            email: res.profileObj.email,
            name: res.profileObj.name,
            // password: e.target.password.value,
            type: selectedClient,
            // contactNumber: e.target.contactNumber.value,
        }
        axios
            .post(apiList.signup + "/google", signupDetails, {
                headers: {
                    Authorization: res.tokenObj.id_token
                }
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("type", response.data.type);
                dispatch({ type: "USER", payload: response.data })
                toast.success("Registered Successful")
                console.log(response);
                signOut();
                navigate("/")
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err.response);
                signOut();
            });
        // refreshTokenSetup(res);
    };

    const onGoogleLoginSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        console.log('Token - ', res.tokenObj);
        let loginDetails = {
            email: res.profileObj.email,
            // password: e.target.password.value,
            // contactNumber: e.target.contactNumber.value,
        }
        axios
            .post(apiList.login + "/google", loginDetails, {
                headers: {
                    Authorization: res.tokenObj.id_token
                }
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("type", response.data.type);
                localStorage.setItem('isAuth', 'true');
                dispatch({ type: "USER", payload: response.data })
                toast.success("Login Successful")
                console.log(response);
                signOut();
                if (response.data.type === "applicant") {
                    navigate("/appliedjobs")
                } else {
                    navigate("/Manage_jobs")
                }
            })
            .catch((err) => {
                signOut();
                toast.error(err.response.data.message)
                console.log(err.response);

            });
        // refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        toast.error("Failed to login")
    };


    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        // alert('Logged out Successfully ✌');
    };

    const onLogoutFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onLogoutFailure,
    });


    return <>
        <div className="signin_signup container " id='main_form'>
            <div className="row">
                <div className="col-lg-7 modal_grid">
                    <section className="main">
                        <div className="form_wrapper">
                            <input
                                type="radio"
                                className="radio"
                                name="radio"
                                id="login"
                                defaultChecked=""
                            />
                            <input
                                type="radio"
                                className="radio"
                                name="radio"
                                id="signup"
                            />
                            <div className="tile py-2">
                                {mainTab === 'login' ? <h3 className="login">Login Form</h3> : <h3 className="signup">Signup Form</h3>}
                            </div>

                            <label id='signup_tab'
                                className={`tab login_tab ${mainTab === "signup" && 'active-tab'}`} htmlFor="signup"
                                onClick={() => { switchMainTab('signup'); imgColumn2(); scrollToTop(); }}>
                                {" "}
                                Signup{" "}
                            </label>
                            <label id='login_tab'
                                className={`tab login_tab ${mainTab === "login" && 'active-tab'}`}
                                // active-tab
                                htmlFor="login"
                                onClick={() => { switchMainTab('login'); imgColumn(); scrollToTop(); }}
                            >
                                {" "}
                                Login{" "}
                            </label>
                            <div className="form_wrap">
                                {mainTab === 'login' && (
                                    <div className="form_fild login_form">
                                        {!subTab && (
                                            <div id="Menu1">
                                                <form onSubmit={handleLogin} onChange={resetError}>
                                                    {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                                        <GoogleLogin
                                                            clientId={clientId}
                                                            buttonText="Log In with Google"
                                                            onSuccess={onGoogleLoginSuccess}
                                                            onFailure={onFailure}
                                                            cookiePolicy={'single_host_origin'}
                                                            style={{ marginTop: '100px' }}
                                                            isSignedIn={true}
                                                        />
                                                    </div> */}
                                                    <div className="input_group ">
                                                        <input type="email" name="email" className="input" placeholder="Email Address" />
                                                        <span className='input_email'> <i class="fa fa-envelope" aria-hidden="true"></i> </span>
                                                    </div>
                                                    {emailError != '' && <small style={{ color: 'red' }}>{emailError}</small>}
                                                    <div className="input_group">
                                                        <input type={isRevealPwd ? "text" : "password"} name="password" className="input" placeholder="Password" />
                                                        <span className='input_email'> <i class="fa fa-lock" aria-hidden="true"></i> </span>

                                                        <span className='password_hide'
                                                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                                                        >

                                                            {isRevealPwd ? <i class="fa fa-eye-slash" aria-hidden="true"></i> : <i class="fa fa-eye" aria-hidden="true"></i>}

                                                        </span>

                                                    </div>
                                                    {passwordError != '' && <small style={{ color: 'red' }}>{passwordError}</small>}
                                                    <div className="forgot">
                                                        <a className="forgot_pass" onClick={() => setSubTab('forgotPassword')}>
                                                            {" "}
                                                            Forgot password ?{" "}
                                                        </a>
                                                    </div>
                                                    <input type="submit" className="btn" defaultValue="Login" />
                                                    <div className="forgot text-center">
                                                        <a href="#" className="login_otp my-3" onClick={() => setSubTab('otp')}>
                                                            Login With OTP{" "}
                                                        </a>
                                                    </div>

                                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                                        <GoogleLogin
                                                            clientId={clientId}
                                                            buttonText="Log In with Google"
                                                            onSuccess={onGoogleLoginSuccess}
                                                            onFailure={onFailure}
                                                            cookiePolicy={'single_host_origin'}
                                                            style={{ marginTop: '100px' }}
                                                            isSignedIn={true}
                                                            className="login_google"
                                                        />
                                                    </div>

                                                    <div className="already pt-3">
                                                        <label htmlFor="signup"
                                                            onClick={() => { switchMainTab('signup'); imgColumn2(); scrollToTop(); }}>
                                                            Not a member? <span className="font-weight-bold"> Signup now</span>
                                                        </label>
                                                    </div>
                                                </form>

                                            </div>
                                        )}

                                        {subTab === 'forgotPassword' && (
                                            <div id="Menu2">
                                                <form onSubmit={handleForgotPassword} onChange={resetError}>
                                                    <div className="input_group">
                                                        <input
                                                            type="text"
                                                            className="input"
                                                            placeholder="Enter Registered Mobile Number..."
                                                            name="phone"

                                                        />
                                                        <span className='input_email'> <i class='fas fa-phone'></i> </span>
                                                    </div>
                                                    {phoneError != '' && <small style={{ color: 'red' }}>{phoneError}</small>}
                                                    <input
                                                        type="submit"
                                                        className="btn"
                                                        defaultValue="Get password"
                                                    />
                                                    <div className="not_mem">
                                                        <a onClick={() => setSubTab(false)}>
                                                            {" "}
                                                            <label> Login With Email</label>
                                                        </a>
                                                    </div>
                                                </form>
                                            </div>
                                        )}

                                        {subTab === 'otp' && (
                                            <div id="Menu3">
                                                <form onSubmit={handleOTPSend} onChange={resetError}>
                                                    <div className="input_group">
                                                        <input
                                                            type="number"
                                                            className="input"
                                                            placeholder="Enter Mobile Number"
                                                            name="phone"
                                                        />
                                                        <span className='input_email'> <i class='fas fa-phone'></i> </span>
                                                    </div>
                                                    {phoneError != '' && <small style={{ color: 'red' }}>{phoneError}</small>}
                                                    <a href="#" onclick="toggleVisibility('Menu4');">
                                                        {" "}
                                                        <input
                                                            type="submit"
                                                            className="btn"
                                                            defaultValue="Get OTP"
                                                        />
                                                    </a>
                                                    <div className="not_mem">
                                                        <a href="#" onClick={() => setSubTab(false)}>
                                                            {" "}
                                                            <label> Login With Email</label>
                                                        </a>
                                                    </div>
                                                </form>
                                            </div>
                                        )}

                                        {subTab === 'verifyOtp' && (
                                            <div id="Menu4">
                                                <form onSubmit={handleVerifyOTP}>
                                                    <h6>Enter Your Received OTP</h6>
                                                    <div className="input_group">
                                                        <input
                                                            type="number"
                                                            className="input"
                                                            placeholder="Enter Your OTP"
                                                            name="otp"
                                                            required
                                                        />
                                                        <span className='input_email'> <i class="fas fa-key" aria-hidden="true"></i> </span>
                                                    </div>
                                                    <input
                                                        type="submit"
                                                        className="btn"
                                                        defaultValue="Submit OTP"
                                                    />
                                                    <div className="not_mem">
                                                        <a href="#" onClick={() => setSubTab(false)}>
                                                            {" "}
                                                            <label> Login With Email</label>
                                                        </a>
                                                    </div>
                                                </form>
                                            </div>
                                        )}

                                    </div>
                                )}
                                {mainTab === 'signup' && (
                                    <div className="form_fild signup_form">
                                        <form onSubmit={handleSignUp} onChange={resetError}>
                                            <div className="input_group">
                                                {/* <select class="form-control multiple" name="type" value={selectedClient} onChange={handleSelectChange}>
                                                    <option hidden>Years</option>
                                                    <option value="applicant">Job Seekers</option>
                                                    <option value="recruiter">Recruiter</option>
                                                </select> */}

                                                <select
                                                    className="form_control"
                                                    name="type"
                                                    value={selectedClient} 
                                                    onChange={handleSelectChange}
                                                >
                                                    {/* <option hidden>select option</option> */}
                                                    <option value="applicant">Job Seekers</option>
                                                    <option value="recruiter">Recruiter</option>

                                                </select>
                                            </div>

                                            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                                <GoogleLogin
                                                    clientId={clientId}
                                                    buttonText="Sign Up with Google"
                                                    onSuccess={onGoogleSignUpSuccess}
                                                    onFailure={onFailure}
                                                    cookiePolicy={'single_host_origin'}
                                                    style={{ marginTop: '100px' }}
                                                    isSignedIn={true}
                                                />
                                                {/* <GoogleLogout
                                                    clientId={clientId}
                                                    buttonText="Logout"
                                                // onLogoutSuccess={onSuccess}
                                                ></GoogleLogout> *
                                            </div> */}

                                            <div className="input_group">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    placeholder={selectedClient === "applicant" ? "Enter Name" : "Company Name"}
                                                    name="name"

                                                />
                                                <span className='input_email'> <i class="fa fa-user" aria-hidden="true"></i> </span>
                                            </div>
                                            <div className="input_group" style={{ position: 'relative' }}>

                                                <input
                                                    type="text"
                                                    className="input"
                                                    placeholder="Phone Number"
                                                    name="contactNumber"
                                                    maxLength={10}
                                                    onChange={handleContactInput}

                                                />
                                                <span className='input_email'> <i class='fas fa-phone'></i> </span>
                                                {/* <button type="button" className="verfy-special-btn btn" onClick={handleContactVerify} disabled={!showVerifyBtn || isContactVerified}>{isContactVerified ? 'Verified': 'Verify'}</button> */}


                                            </div>
                                            {phoneError != '' && <small style={{ color: 'red' }}>{phoneError}</small>}
                                            <div className="input_group">
                                                <input
                                                    type="email"
                                                    className="input"
                                                    placeholder="Email Address"
                                                    name="email"

                                                />
                                                <span className='input_email'> <i class="fa fa-envelope" aria-hidden="true"></i> </span>
                                            </div>
                                            {emailError != '' && <small style={{ color: 'red' }}>{emailError}</small>}
                                            <div className="input_group">
                                                <input
                                                    type={isSignupPwd ? "text" : "password"}
                                                    className="input password_input"
                                                    placeholder="Password"
                                                    name="password"

                                                />
                                                <span className='input_email'> <i class="fa fa-lock" aria-hidden="true"></i> </span>

                                                <span className='password_hide'
                                                    onClick={() => setIsSignupPwd(!isSignupPwd)}
                                                >
                                                    {isSignupPwd ? <i class="fa fa-eye-slash" aria-hidden="true"></i> : <i class="fa fa-eye" aria-hidden="true"></i>}
                                                </span>
                                            </div>
                                            {passwordError != '' && <small style={{ color: 'red' }}>{passwordError}</small>}
                                            <div className="input_group">
                                                <input
                                                    type={isConfirmPwd ? "text" : "password"}
                                                    className="input"
                                                    placeholder="Confirm Password"
                                                    name="confirmPassword"

                                                />
                                                <span className='input_email'> <i class="fa fa-lock" aria-hidden="true"></i> </span>
                                                <span className='password_hide'
                                                    onClick={() => setIsConfirmPwd(prevState => !prevState)}
                                                >

                                                    {isConfirmPwd ? <i class="fa fa-eye-slash" aria-hidden="true"></i> : <i class="fa fa-eye" aria-hidden="true"></i>}

                                                </span>
                                            </div>
                                            <input
                                                type="submit"
                                                className="btn"
                                                defaultValue="Signup"
                                            />


                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <GoogleLogin
                                                    clientId={clientId}
                                                    buttonText={selectedClient === "applicant" ? "Signup as Applicant" : "Signup as Recruiter"}
                                                    onSuccess={onGoogleSignUpSuccess}
                                                    onFailure={onFailure}
                                                    cookiePolicy={'single_host_origin'}
                                                    style={{ marginTop: '100px' }}
                                                    isSignedIn={true}
                                                    className="SignUp_google"
                                                />

                                                {/* <GoogleLogout
                                                    clientId={clientId}
                                                    buttonText="Logout"
                                                // onLogoutSuccess={onSuccess}
                                                ></GoogleLogout> */}
                                            </div>


                                            <div className="already pt-3">
                                                <label htmlFor="signup"
                                                    onClick={() => { switchMainTab('login'); imgColumn(); scrollToTop(); }}>
                                                    Already have an Account? <span className="font-weight-bold"> Login here </span>
                                                </label>
                                            </div>

                                        </form>
                                    </div>
                                )}

                            </div>
                        </div>
                    </section>
                </div>

                <div className="col-lg-5 text-center  sticky-top full_img">
                    {state.image}
                </div>
            </div>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div class="  text-center">
                <h6>Please enter the one time password <br /> to verify your account</h6>
                {/* <div> <span>A code has been sent to</span> <small>***9897</small> </div> */}
                <form onSubmit={handleContactOTPVerify}>
                    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-4">
                        <input type="text" className="form-control w-50" id="exampleInputName" placeholder="Enter OTP" maxLength="6" name="otp" required />
                    </div>
                    <div> <button type="submit" class="btn btn-verify px-4 validate mt-4" aria-label="Close" data-dismiss="modal" >Validate</button> </div>
                </form>
            </div>
            <div class="card-2 mt-3">
                <div class="content d-flex justify-content-center align-items-center"> <span>Didn't get the code</span> <a href="#" class="text-decoration-none ms-3"> Resend</a> </div>
            </div>
        </Modal>

    </>
}

export default Auth;