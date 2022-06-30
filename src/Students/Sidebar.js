import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import apiList, { server } from "../lib/apiList";
import ProfileImageUpload from "../common/ProfileImageUpload";
import { toast } from "react-toastify";
import S3 from "react-aws-s3";
import config from "../config/awsConfig";
window.Buffer = window.Buffer || require("buffer").Buffer;

const Sidebar = () => {
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    dispatch({ type: "CLEAR" });
    navigate("/auth");
  };
  console.log(profile);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const [profileImg, setProfileImg] = useState({
    profileImage: "",
  });
  const [file, setFile] = useState("");
  console.log(config, "config");

  const ReactS3Client = new S3(config);
  const imageonChangeHandling = (e) => {
    // setFile(event.target.files[0]);
    // setFile(e?.target?.files[0]);
    handleprofileUpload(e?.target?.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile({ ...profile, profileImage: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  // }
  const handleprofileUpload = async (file1) => {
    const newFileName = "file" + new Date().getTime();
    try {
      const data = await ReactS3Client.uploadFile(file1, newFileName);
      setProfile({ ...profile, profileImage: data.location });
      await callPost(data.location);
    } catch (err) {
      console.error(err, "err data");
      toast.error("Profile Image Upload Failed");
    }
  };
  const callPost = async (profile1) => {
    try {
      const response = await axios.post(
        apiList.uploadProfileImage,
        {
          profileImage: profile1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Profile Image Upload Failed");
    }
  };

  // const handleprofileUpload = async (e) => {

  // const uploadImage = async (e) => {

  // };
  // const handleprofileUpload=()=>{
  //   const data = new FormData();
  //   console.log(file)
  //   data.append("file", file);

  // }
  // useEffect(() => {
  //   handleprofileUpload();
  // }, [file]);

  return (
    <div className="sticky-top">
      <p>
        <button
          className="sidebar_button"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onclick="ezy()"
        >
          Profile Menu
          <i className="fas fa-arrow-right  text-white ml-2    sidebar_toggle-btn"></i>
        </button>
      </p>
      <div className="collapse show" id="collapseExample">
        <div className="sidebar" id="sidebar">
          <div className="main_header text-center">
            {/* <div className="heading ">
                                    <img src={profile.profileImage? profile.profileImage :`images/girl_avtar.png`} alt="" className="info_img" height="145px" />
                                    <h4 className="company">{profile.name}</h4>
                                    <p className="company_text">Web developer</p>
                                </div> */}

            <div className="canditate-des">
              <label for="file">
                <p href="#">
                  <img
                    className="resume_img img-responsive"
                    src={
                      profile.profileImage
                        ? profile.profileImage
                        : `images/girl_avtar.png`
                    }
                  />
                </p>

                <i class="fas fa-camera img_edit_sidebar"></i>
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(event) => imageonChangeHandling(event)}
              />
            </div>
          </div>
          <NavLink to="/myprofile">
            <i className="fa fa-user pr-2" aria-hidden="true"></i>Candidate
            Profile
          </NavLink>
          <NavLink to="/myresume">
            <i className="far fa-file-alt pr-2"></i> My Resume
          </NavLink>
          <NavLink to="/appliedjobs">
            <i className="fas fa-briefcase pr-2"></i> Applied Jobs
          </NavLink>
          <NavLink to="/jobalerts">
            <i className="far fa-address-card pr-2"></i> Job Alert
          </NavLink>
          <NavLink to="/savedjobs">
            <i className="fas fa-random pr-2"></i> Saved Jobs
          </NavLink>
          {/* <a href="../../../Company/candidate_profile/cv manager/cv_manager.html"><i className="far fa-address-card"></i> CV Manager</a> */}
          <NavLink to="/changepassword">
            <i className="fas fa-key"></i> Change Password
          </NavLink>
          <a onClick={() => handleClick()}>
            <i className="fas fa-sign-out-alt"></i> Log Out
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
