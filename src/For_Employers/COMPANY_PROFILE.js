import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeSideBar from "./EmployeeSideBar";
import { useDispatch, useSelector } from "react-redux";
// import { getCompanyProfile } from "../action/action";
import { useForm } from "react-hook-form";
import { Autocomplete } from '@mui/material';
import { TextField } from '@material-ui/core';
import axios from "axios"
import moment from "moment";
import { toast } from "react-toastify";
import apiList from "../lib/apiList";
import industrydata from '../JsonData/Category.json'

export const COMPANY_PROFILE = () => {
  // const dispatch = useDispatch();
  // const resultdata = useSelector((company) => company);
  // console.log(resultdata.auth.data);
  // const { trigger } = useForm();

  const [company, setCompany] = useState({
    profileImage:"",
    companyname:"",
    websitelink:"",
    foundedDate:"",
    organizationType:[],
    country:"",
    description:"",
    contactNumber:"",
    email:"",
    state:"",
    address:"",
    pincode:"",
    facebook:"",
    twitter:"",
    google:"",
    city:""

  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSumbit] = useState(false);

  const {
    companyname,
    websitelink,
    foundedDate,
    organizationType,
    country,
    description,
    contactNumber,
    email,
    state,
    address,
    pincode,
    facebook,
    twitter,
    google,
    linkedin,
    city
  } = company;

  const formHandling = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(getCompanyProfile(company));
  //   // setFormErrors(validate(company));
  //   setIsSumbit(true);
  // };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(company);
    }
  }, [formErrors]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${apiList.user}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setCompany(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleUpdate =(e)=>{
    e.preventDefault();
    axios
      .put(`${apiList.user}`, company, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response)
        toast.success(response.data.message)
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        console.log(err.response);
      });
  }

  return (
    <div>
      <form
      //  onSubmit={handleSubmit} 
      //  trigger
       >
        <div className="container main_content my-5">
          <div className="row">
            <div className="col-lg-3">
              <EmployeeSideBar/>
            </div>
            <div className="col-lg-9">
              <div className="wrapper">
                <div className="content">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left text-uppercase cp">
                      Company Profile
                    </h5>

                    <Link
                      to="/"
                      className="site-button right-arrow button-sm float-right"
                    >
                      {" "}
                      Back{" "}
                    </Link>
                  </div>
                  <form action="#">
                    <div className="row m-b30">
                      <div className=" col-lg-12 col-md-12">
                        <div className="form-group">
                          <label> Company Name</label>
                          <input
                            type="text"
                            name="companyname"
                            className="form_control"
                            placeholder="Enter Company Name"
                            value={companyname}
                            onChange={(e)=>formHandling(e)}

                          />

                        </div>
                      </div>

                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label> Website Link</label>
                          <input
                            type="text"
                            name="websitelink"
                            className="form_control"
                            placeholder="Website Link"
                            onChange={(e)=>formHandling(e)}
                            value={websitelink}
                          />

                        </div>
                      </div>
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label> Founded Date</label>
                          <input
                            type="date"
                            name="foundedDate"
                            className="form_control"
                            placeholder="07/12/2021"
                            onChange={(e)=>formHandling(e)}
                            value={moment(foundedDate).format("YYYY-MM-DD")}
                          />

                        </div>
                      </div>

                      <div className=" col-lg-12 col-md-12">
                        <div className="form-group">
                          <label> Industry Type</label>
                          {/* <input
                            type="text"
                            name="organizationType"
                            className="form_control"
                            placeholder="Ex : IT, Non-IT "
                            onChange={(e)=>formHandling(e)}
                            value={organizationType}
                          /> */}
                          <Autocomplete
                                                    id="combo-box-demo"
                                                    single
                                                    value={organizationType}
                                                    options={industrydata.map((res)=>{
                                                    return res.Category
                                                    })}
                                                    getOptionLabel={(option) => option}
                                                    onChange={(e, value) => {
                                                    setCompany({
                                                        ...company,
                                                        organizationType:value
                                                    });
                                                    }}
                                                    
                                                    renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        name="single"
                                                        label="Enter your Industry Type"
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                    )}
                                                />

                        </div>
                      </div>

                      <div className=" col-lg-12 col-md-12">
                        <div className="form-group">
                          <label> Description </label>
                          <textarea
                            name="description"
                            className="form_control"
                            cols="30"
                            rows="5"
                            onChange={(e)=>formHandling(e)}
                            value={description}
                            placeholder="Describe here..."
                          ></textarea>

                        </div>
                      </div>
                    </div>
                  </form>

                  <h5 className="contact_info">Contact Information</h5>
                  <form action="#">
                    <div className="row m-b30">
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label> Phone</label>
                          <input
                            type="text"
                            name="contactNumber"
                            className="form_control"
                            placeholder="+919876543210"
                            onChange={(e)=>formHandling(e)}
                            value={contactNumber}
                          />

                        </div>
                      </div>
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label> Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form_control"
                            placeholder="Example@gmail.com"
                            onChange={(e)=>formHandling(e)}
                            value={email}
                          />

                        </div>
                      </div>

                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label> Country</label>
                          <select
                            name="country"
                            className="form_control mr-sm-2"
                            onChange={(e)=>formHandling(e)}
                            value={country.charAt(0).toUpperCase() + country.slice(1)}
                          >
                            <option hidden>Select Your Country</option>
                            <option >India</option>

                          </select>

                        </div>
                      </div>
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label> State</label>
                          <select
                          defaultValue={"this.state.selectValue"} 
                            name="state"
                            className="form_control mr-sm-2"
                            onChange={(e)=>formHandling(e)}
                            value={state.charAt(0).toUpperCase() + state.slice(1)}
                          >
                            <option hidden>Select Your State</option>
                            <option className="p-2">Andhra Pradesh</option>
                            <option >Arunachal Pradesh</option>
                            <option >Assam</option>
                            <option >Bihar</option>
                            <option >Chattisghar</option>
                            <option >Goa</option>
                            <option >Haryana</option>
                            <option >Himachal Pradesh</option>
                            <option >Jammu Kashmir</option>
                            <option >Jharkhand</option>
                            <option >Karnataka</option>
                            <option >Kerala</option>
                            <option >Madhya Pradesh</option>
                            <option >Maharastra</option>
                            <option >Manipur</option>
                            <option >Meghalaya</option>
                            <option >Mizoram</option>
                            <option >Nagaland</option>
                            <option >Odisha</option>
                            <option >Punjab</option>
                            <option >Rajasthan</option>
                            <option >Sikkim</option>
                            <option >Tamilnadu</option>
                            <option >Telangana</option>
                            <option >Tripura</option>
                            <option >UttaraKhand</option>
                            <option >Uttar Pradesh</option>
                            <option >West Bengal</option>
                          </select>
                          <p style={{ color: "red" }}>{formErrors.State}</p>
                        </div>
                      </div>

                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            className="form_control"
                            placeholder="Enter Your City"
                            onChange={(e)=>formHandling(e)}
                            value={city}
                          />

                        </div>
                      </div>




                      
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label> Pin-code</label>
                          <input
                            type="number"
                            name="pincode"
                            className="form_control"
                            placeholder="505001"
                            value={pincode}
                            onChange={(e)=>formHandling(e)}
                          />

                        </div>
                      </div>
                      <div className=" col-lg-12 col-md-12">
                        <div className="form-group">
                          <label> Address</label>
                          <textarea
                            cols="30"
                            rows="3"
                            name="address"
                            className="form_control"
                            placeholder="Enter Your Address here.."
                            value={address}
                            onChange={(e)=>formHandling(e)}
                          ></textarea>

                        </div>
                      </div>
                    </div>
                  </form>

                  <h5 className="contact_info">Social link</h5>
                  <form action="#">
                    <div className="row m-b30">
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Facebook</label>
                          <input
                            type="text"
                            className="form_control"
                            name="facebook"
                            placeholder="Enter Your Facebook Id"
                            value={facebook}
                            onChange={(e)=>formHandling(e)}
                          />

                        </div>
                      </div>
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Twitter</label>
                          <input
                            type="email"
                            className="form_control"
                            name="twitter"
                            placeholder="Enter Your twitter Id"
                            onChange={(e)=>formHandling(e)}
                            value={twitter}
                          />

                        </div>
                      </div>

                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Google</label>
                          <input
                            type="text"
                            className="form_control"
                            name="google"
                            placeholder="Enter Your Google Account"
                            onChange={(e)=>formHandling(e)}
                            value={google}
                          />

                        </div>
                      </div>
                      <div className=" col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Linkedin</label>
                          <input
                            type="text"
                            name="linkedin"
                            className="form_control"
                            placeholder="Enter Your Linked in Profile"
                            onChange={(e)=>formHandling(e)}
                            value={linkedin}
                          />

                        </div>
                      </div>
                    </div>
                  </form>
                  <button className="update" onClick={(e) => handleUpdate(e)}>Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default COMPANY_PROFILE;
