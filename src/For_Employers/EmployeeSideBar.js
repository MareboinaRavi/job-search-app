import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import apiList, { server } from "../lib/apiList";
import ProfileImageUpload from "../common/ProfileImageUpload";
import { toast } from "react-toastify";
import config from "../config/awsConfig";
import S3 from "react-aws-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;
export const EmployeeSideBar = () => {
  const [profile, setProfile] = useState({});
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    dispatch({ type: "CLEAR" });
    navigate("/auth");
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(profile);
  const getData = async () => {
    await axios
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

  // const imageonChangeHandling = (event) => {
  //   setFile(event.target.files[0]);
  // };
  // console.log(file);

  // const handleUpload = () => {
  //   const data = new FormData();
  //   data.append("file", file);
  //   axios
  //     .post(apiList.uploadProfileImage, data, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setProfile({ ...profile, profileImage: response.data.image });
  //       toast.success(response.data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //       toast.error(err.response.data.message);
  //     });
  // };

  // useEffect(()=>{
  //   handleUpload()
  // },[file])
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
          <i className="fa fa-bars text-white"></i>
        </button>
      </p>
      <div className="collapse show" id="collapseExample">
        <div className="sidebar" id="sidebar">
          <div className="main_header text-center">
            {/* <img src="images/girl_avtar.png" alt="" className="info_img" /> */}
            <div className="canditate-des">
              <label for="file">
                <p href="#">
                  <img
                    className="resume_img img-responsive"
                    alt=""
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
            {/* <ProfileImageUpload url={profile.profileImage} /> */}
            <h4 className="company">{profile.companyname}</h4>
          </div>
          <NavLink to="/company_profile">
            <i className="fa fa-user" aria-hidden="true"></i> Company Profile
          </NavLink>

          <NavLink to="/post_jobs">
            <i className="far fa-file-alt"></i> Post a Job
          </NavLink>

          <NavLink to="/Manage_jobs">
            <i className="fas fa-briefcase"></i> My Jobs
          </NavLink>

          <NavLink to="/password">
            <i className="fas fa-key"></i> Change Password
          </NavLink>

          <a className="cursor-pointer" onClick={() => handleClick()}>
            <i className="fas fa-sign-out-alt"></i> Log Out
          </a>
        </div>
      </div>
    </div>
  );
};
export default EmployeeSideBar;
