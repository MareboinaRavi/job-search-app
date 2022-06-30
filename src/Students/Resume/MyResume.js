/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import PostAction from "../../Reducer/PostAction";
import axios from "axios";
import apiList from "../../lib/apiList";
// import ChipInput from "material-ui-chip-input";
// import PersonalDetails from './personalDetails'
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
// import { Line } from "rc-progress";
// import FileUploadInput from "./FileUploadInput";
// import ResumeFileUpload from "../../common/ResumeFileUpload";
// import ProfileImageUpload from "../../common/ProfileImageUpload";
import Modal from "react-modal";
import { Autocomplete } from "@mui/material";
import { TextField } from "@material-ui/core";
import Skillsdata from "../../JsonData/Skill.json";
import Designationdata from "../../JsonData/Designation.json";
import Categorydata from "../../JsonData/Category.json";
import NoticePerioddata from "../../JsonData/Noticeperiod.json";
import S3 from "react-aws-s3";
import config from "../../config/awsConfig";
import locations from "../../JsonData/locations.json";
// import { Console } from "console";
import Education from "../../config/Education";
import Languages from "../../common/Languages";

window.Buffer = window.Buffer || require("buffer").Buffer;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MyResume = () => {
  // const [file, setFile] = useState("");
  const [resume, setResume] = useState("");

  // const dispatch = useDispatch();
  const [projectType, setProjectType] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [currentcompany, setCurrentcompany] = useState(false);
  // const [modalData, setModalData] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [verifyType, setVerifyType] = useState();

  const currentcompany_yesButton = () => {
    setCurrentcompany(true);
    setEmployment({
      ...employment,
      startYear: "",
      endYear: new Date(),
    });
  };

  const currentcompany_NoButton = () => {
    setCurrentcompany(false);
    setEmployment({
      ...employment,
      startYear: "",
      endYear: "",
    });
  };

  const projectType_inprogress = () => {
    setProject({
      ...project,
      ProjectStartDate: "",
      ProjectWorkTill: new Date(),
    });
  };

  const projectType_finished = () => {
    setProjectType(false);
    setProject({
      ...project,
      ProjectStartDate: "",
      ProjectWorkTill: "",
    });
  };

  // const InprogressHandle = () => {
  //   setProjectType(!projectType);
  //   setProject({
  //     ...project,
  //     ProjectStartDate: "",
  //     ProjectWorkTill: new Date(),
  //   });
  // };

  // const FinishedProjectHandle = () => {
  //   setProjectType(!projectType);
  //   setProject({
  //     ...project,
  //     ProjectStartDate: "",
  //     ProjectWorkTill: "",
  //   });
  // };
  const [profile, setProfile] = useState({
    requiredItem: 0,
    name: "",
    email: "",
    profileImage: "",
    contactNumber: "",
    experience: "",
    currentlocation: "",
    Location: [],
    resumeHeadline: "",
    profileSummary: "",
    skills: [],
    employment: [],
    education: [],
    project: [],
    worksample: [],
    presentation: [],
    careerprofile: [],
    // presentation: [],
    publication: [],
    patent: [],
    personaldetails: {
      dateofbirth: "",
      address: "",
      gender: "",
      pincode: "",
      age: "",
      maritalStatus: "",
      hometown: "",
      AddressProof: "",
      AdressProofNumber: "",
      passport: "",
      margaccount: "",
      languages: [],
    },
    resume: {
      filename: "",
      url: "",
    },
  });

  const [education, setEducation] = useState([
    {
      highestgraduation: "",
      course: "",
      specialization: "",
      institute: "",
      passedoutyear: "",
      courseType: "",
      marks: "",
    },
  ]);
  const [employment, setEmployment] = useState([
    {
      years: "",
      months: "",
      CurrentCTC: "",
      // Total Experience:"",
      designation: [],
      organization: [],
      startYear: "",
      endYear: new Date(),
      profileDescription: "",
      noticePeriod: "",
      offerLetter: "",
      offerLetterName: "",
      salaryslip: "",
      salaryslipName: "",
      BankStatement: "",
      BankStatementName: "",
      expLetter: "",
      expLetterName: "",
    },
  ]);

  const [project, setProject] = useState([
    {
      ProjectTitle: "",
      ProjectClient: "",
      ProjectDescription: "",
      ProjectStartDate: "",
      ProjectWorkTill: "Present",
    },
  ]);

  //worksample state
  const [worksample, setworksample] = useState([
    {
      Work_Title: "",
      Work_URL: "",
      Work_Duration_From: "",
      Work_Duration_To: "",
      Work_Description: "",
    },
  ]);

  // worksample Initial Data
  const worksampleInitialData = () => {
    setworksample({
      Work_Title: "",
      Work_URL: "",
      Work_Duration_From: "",
      Work_Duration_To: "",
      Work_Description: "",
    });
  };

  // deleting worksample  data
  const deleteworksample = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/worksample`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  // worksample replace modal

  const replaceworksampleItem = (id) => {
    console.log("working");
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setworksample(profile.worksample[id]);
  };

  //onChange worksample
  const worksampleHandling = (e) => {
    setworksample({
      ...worksample,
      [e.target.name]: e.target.value,
    });
  };

  //worksample submit
  const handleworksample = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/worksample`, worksample, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      let updatedDetails = {
        ...profile,
        worksample: [...profile.worksample, worksample],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  //presentation state
  const [presentation, setPresentation] = useState([
    {
      Presentation_Title: "",
      Presentation_URL: "",
      Presentation_Description: "",
    },
  ]);

  // presentation Initial Data
  const presentationInitialData = () => {
    setPresentation({
      Presentation_Title: "",
      Presentation_URL: "",
      Presentation_Description: "",
    });
  };

  // deleting presentation  data
  const deletepresentation = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/presentation`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  // presentation replace modal

  const replacepresentationItem = (id) => {
    // console.log("working");
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setPresentation(profile?.presentation[id]);
  };

  //onChange presentation
  const presentationHandling = (e) => {
    setPresentation({
      ...presentation,
      [e.target.name]: e.target.value,
    });
  };

  //presentation submit
  const handlePresentation = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/presentation`, presentation, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      let updatedDetails = {
        ...profile,
        presentation: [...profile.presentation, presentation],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  //publication state
  const [publication, setpublication] = useState([
    {
      Publication_Title: "",
      Publication_URL: "",
      Publication_Year: "",
      Publication_Months: "",
      Publication_Description: "",
    },
  ]);

  // publication Initial Data
  const publicationInitialData = () => {
    setpublication({
      Publication_Title: "",
      Publication_URL: "",
      Publication_Year: "",
      Publication_Months: "",
      Publication_Description: "",
    });
  };

  // deleting publication  data
  const deletepublication = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/publication`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  // publication replace modal

  const replacepublicationItem = (id) => {
    console.log("working");
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setpublication(profile.publication[id]);
  };

  //onChange publication
  const publicationHandling = (e) => {
    setpublication({
      ...publication,
      [e.target.name]: e.target.value,
    });
  };

  //publication submit
  const handlepublication = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/publication`, publication, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      let updatedDetails = {
        ...profile,
        publication: [...profile.publication, publication],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  //patent state
  const [patent, setpatent] = useState([
    {
      Patent_Title: "",
      Patent_URL: "",
      Patent_Office: "",
      Patent_Status: "",
      Patent_Application_Number: "",
      Patent_Description: "",
    },
  ]);

  // patent Initial Data
  const patentInitialData = () => {
    setpatent({
      Patent_Title: "",
      Patent_URL: "",
      Patent_Office: "",
      Patent_Status: "",
      Patent_Application_Number: "",
      Patent_Description: "",
    });
  };

  // deleting patent  data
  const deletepatent = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/patent`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  // patent replace modal

  const replacepatentItem = (id) => {
    console.log("working");
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setpatent(profile.patent[id]);
  };

  //onChange patent
  const patentHandling = (e) => {
    setpatent({
      ...patent,
      [e.target.name]: e.target.value,
    });
  };

  //patent submit
  const handlepatent = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/patent`, patent, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      let updatedDetails = {
        ...profile,
        patent: [...profile.patent, patent],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  //certification state
  const [certification, setCertification] = useState([
    {
      Certification_Name: "",
      Certification_ID: "",
      Certification_URL: "",
      Certification_Validity_From: "",
      Certification_Validity_To: "",
    },
  ]);

  // certification Initial Data
  const certificationInitialData = () => {
    setCertification({
      Certification_Name: "",
      Certification_ID: "",
      Certification_URL: "",
      Certification_Validity_From: "",
      Certification_Validity_To: "",
    });
  };

  // deleting certification  data
  const deletecertification = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/certification`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  // certification replace modal

  const replacecertificationItem = (id) => {
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setCertification(profile?.certification[id]);
  };

  //onChange certification
  const certificationHandling = (e) => {
    setCertification({
      ...certification,
      [e.target.name]: e.target.value,
    });
  };

  //certification submit
  const handlecertification = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/certification`, certification, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      let updatedDetails = {
        ...profile,
        certification: [...profile.certification, certification],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  // const [careerprofile, setcareerprofile] = useState([
  //   {
  //     career_Industry: "",
  //     Desired_Functional_Area_Department: "",
  //     Desired_Role_URL: "",
  //     Desired_Job_Type: "",
  //     Desired_Employement_Type: "",
  //     Desired_PrefferedShift: "",
  //     Desired_AvailableJoinYears: "",
  //     Desired_AvailableJoinMonths: "",
  //     Desired_Expected_SalaryinLakhs: "",
  //     Desired_Expected_SalaryinThousands: "",
  //     Desired_Location: "",
  //     Desired_Industry: "",
  //   },
  // ]);

  const formHandling = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleInput = (key, value) => {
    console.log(key, value);
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const onchangeDetails = (e) => {
    setProfile({
      ...profile,
      personaldetails: {
        ...profile.personaldetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  //onChange employment
  const empHandling = (e) => {
    setEmployment({
      ...employment,
      [e.target.name]: e.target.value,
    });
    // setProfile({
    //   ...profile,
    //   employment: [
    //     {
    //       ...profile.employment[0],
    //       [e.target.name]: e.target.value,
    //     },
    //   ],
    // });
  };

  //onChange education
  console.log("style", profile);
  const [childs, setChilds] = React.useState([]);
  const [childChilds, setChildChilds] = React.useState([]);
  const eduHandling = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };
  const eduHandling1 = (e, extra) => {
    if (extra === "needFilter") {
      let newFilteredData = Education.filter(
        (item, index) => e.target.value === item.name
      );
      if (!!newFilteredData[0].childs && newFilteredData[0].childs.length > 0) {
        setChilds(newFilteredData[0].childs);
        setChildChilds([]);
      } else {
        setChilds([]);
        setChildChilds([]);
      }
    }
    if (extra === "needChildFilter") {
      let newFilteredData = childs.filter(
        (item, index) => e.target.value === item.name
      );
      if (
        !!newFilteredData[0].subchilds &&
        newFilteredData[0].subchilds.length > 0
      ) {
        setChildChilds(newFilteredData[0].subchilds);
      } else {
        setChildChilds([]);
      }
    }
  };

  //onChange Project
  const projectHandling = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  //onChange careerprofile
  const careerprofileHandling = (e) => {
    setProfile({
      ...profile,
      careerprofile: [
        {
          ...profile.careerprofile[0],
          [e.target.name]: e.target.value,
        },
      ],
    });
  };

  const handlePersonalDetails = (e) => {
    e.preventDefault();
    axios
      .put(apiList.user, profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        getData();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //employement submit
  const handleEmployment = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/employment`, employment, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          toast.success("Employment updated successfully");
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      // let updatedDetails = {
      //   ...profile,
      //   education: [...profile.education, education],
      // };
      let updatedDetails = {
        ...profile,
        employment: [...profile.employment, employment],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          toast.success("Employment added successfully");
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };
  const [dummy, setDummy] = useState(false);

  //education submit

  const handleEducation = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/education`, education, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      let updatedDetails = {
        ...profile,
        education: [...profile.education, education],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  //Projects submit
  const handleProject = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/project`, project, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      let updatedDetails = {
        ...profile,
        project: [...profile.project, project],
      };
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  //careerprofile submit
  const handlecareerprofile = (e, id) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${apiList.user}/${id}/careerprofile`, profile.careerprofile, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      // alert("Please fill all the fields");
      let updatedDetails = profile;
      axios
        .put(apiList.user, updatedDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(apiList.user, profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data, "thor");
        getData();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // getting profile data
  useEffect(() => {
    getData();
  }, []);

  const updateProgressBar = (data) => {
    let progressPercentage = 0;

    // if (data.profileImage && data.profileImage != '') {
    //   progressPercentage += 5
    // }

    if (data.resume?.url && data.resume?.url != "") {
      progressPercentage += 10;
    }

    if (data.resumeHeadline && data.resumeHeadline != "") {
      progressPercentage += 5;
    }

    if (data.profileSummary && data.profileSummary != "") {
      progressPercentage += 5;
    }

    if (data.skills && data.skills.length != 0) {
      progressPercentage += 10;
    }

    if (data.employment && data.employment.length != 0) {
      progressPercentage += 10;
    }

    if (data.education && data.education.length != 0) {
      progressPercentage += 10;
    }

    if (data.project?.url && data.project?.url != "") {
      progressPercentage += 10;
    }

    if (data.worksample?.url && data.worksample?.url != "") {
      progressPercentage += 5;
    }

    if (data.publication?.url && data.publication?.url != "") {
      progressPercentage += 5;
    }

    if (data.presentation?.url && data.presentation?.url != "") {
      progressPercentage += 3;
    }

    if (data.patent?.url && data.patent?.url != "") {
      progressPercentage += 2;
    }

    if (data.certification?.url && data.certification?.url != "") {
      progressPercentage += 5;
    }

    if (data.careerprofile?.url && data.careerprofile?.url != "") {
      progressPercentage += 10;
    }

    if (data.personaldetails?.url && data.personaldetails?.url != "") {
      progressPercentage += 10;
    }

    setProgressBar(progressPercentage);
  };

  const getData = async () => {
    try {
      const res = await axios.get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProfile(res.data);
      updateProgressBar(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Please try again");
    }

    // axios
    //   .get(apiList.user, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((response) => {
    // console.log(response.data, "mahi");
    // Desired_AvailableJoinMonths: "fdsadsfasdfdf",
    //   Desired_AvailableJoinYears: "dfaasdfasdfsd",
    //   Desired_Employement_Type: "fasdfadsfdf",
    //   Desired_Expected_SalaryinLakhs: "dfasd",
    //   Desired_Expected_SalaryinThousands: "sdfa",
    //   Desired_Functional_Area_Department: "dfasdfasdfasd",
    //   Desired_Industry: "asdfasdf",
    //   Desired_Job_Type: "dfasdfasdfa",
    //   Desired_Location: "Ahmedabad",
    //   Desired_PrefferedShift: "dfasdfasdfasdfads",
    //   Desired_Role_URL: "dfasdfasdfadsfasdf",
    //   career_Industry: "dfasdfasdfasdfasdfa",
    // };
    // const newUpdate = response.data[0];
    // alert(!!!response.data)
    // let res = { ...ress?.data };
    // console.log(res, "res");
    // if (!!res) {
    //   delete res.data.careerprofile[0];
    //   res.data.careerprofile[0]["Desired_AvailableJoinMonths"] =
    //     "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_AvailableJoinYears"] =
    //     "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_Employement_Type"] =
    //     "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_Expected_SalaryinLakhs"] =
    //     "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_Expected_SalaryinThousands"] =
    //     "dfgdsfadsfadsfadf";
    //   res.data[0]["Desired_Functional_Area_Department"] = "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_Industry"] = "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_Job_Type"] = "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_Location"] = "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_PrefferedShift"] = "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["Desired_Role_URL"] = "dfgdsfadsfadsfadf";
    //   res.data.careerprofile[0]["career_Industry"] = "dfgdsfadsfadsfadf";
    // }

    // })
    // .catch((err) => {
    //   console.log(err, "error mowa");
    // });
  };

  // employe replace modal
  const replaceModalItem = (id) => {
    console.log("working");
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setEmployment(profile.employment[id]);
  };

  // education replace modal

  const replaceEduModalItem = (id) => {
    console.log("working");
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setEducation(profile.education[id]);
  };

  // Project replace modal

  const replaceProjectModalItem = (id) => {
    console.log("working");
    setProfile({
      ...profile,
      requiredItem: id,
    });
    setProject(profile.project[id]);
  };

  //     // presentation replace modal

  // const replacepresentationModalItem = (id) => {
  //   console.log("working")
  //   setProfile({
  //     ...profile,
  //     requiredItem: id
  //   })
  //   setPresentation(profile.presentation[id])
  // }

  // employment Initial Data
  const setInitialData = () => {
    setEmployment({
      years: "",
      months: "",
      CurrentCTC: "",
      designation: [],
      organization: [],
      startYear: "",
      endYear: new Date(),
      profileDescription: "",
      noticePeriod: "",
      offerLetter: "",
      offerLetterName: "",
      salaryslip: "",
      salaryslipName: "",
      BankStatement: "",
      BankStatementName: "",
      expLetter: "",
      expLetterName: "",
    });
  };

  // education Initial Data
  const setEducationInitialData = () => {
    setEducation({
      highestgraduation: "",
      course: "",
      specialization: "",
      institute: "",
      passedoutyear: "",
      courseType: "",
      marks: "",
    });
  };

  // Project Initial Data
  const setProjectInitialData = () => {
    setProject({
      ProjectTitle: "",
      ProjectClient: "",
      ProjectDescription: "",
      ProjectStartDate: "",
      ProjectWorkTill: "",
    });
  };

  //     // presentation Initial Data
  // const setpresentationInitialData = () => {
  //   setPresentation({
  //     Presentation_Title:'',
  //     Presentation_URL:'',
  //     Presentation_Description:''

  //   })
  // }

  // deleting employee  data
  const deletedata = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/employment`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  // deleting Education  data

  const deleteEdudata = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/education`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  // deleting project data

  const deleteProjectdata = (id) => {
    // e.preventDefault()
    console.log(localStorage.getItem("token"));
    axios
      .delete(`${apiList.user}/${id}/project`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("funtion working");
        toast.success(response.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  //     // deleting presentation  data
  // const deletepresentationdata = (id) => {
  //   // e.preventDefault()
  //   console.log(localStorage.getItem("token"))
  //   axios
  //     .delete(`${apiList.user}/${id}/presentation`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       console.log("funtion working")
  //       toast.success(response.data.message)
  //       getData();
  //     })
  //     .catch((err) => {
  //       toast.error(err.response.data.message)
  //       console.log(err.response);
  //     });
  // };

  // const imageonChangeHandling = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const resumeonchangeHandling = (event) => {
  //   // setResume(event.target.files[0]);
  // };

  const verifyEmail = () => {
    axios
      .post(
        apiList.sendEmailOtp,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setVerifyType("email");
        setIsOpen(true);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message);
      });
  };

  const sendPhoneOtp = () => {
    axios
      .post(
        apiList.sendPhoneOtp,
        {
          phone: profile.contactNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setVerifyType("phone");
        setIsOpen(true);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.message);
      });
  };

  const imageonChangeHandling = (e, fileName) => {
    if (
      fileName === "resume" ||
      fileName === "offer" ||
      fileName === "bank" ||
      fileName === "experience" ||
      fileName === "salary"
    ) {
      handleprofileUpload(e?.target?.files[0], fileName);
    } else {
      let files = e.target.files[0];
      handleprofileUpload(files);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfile({ ...profile, profileImage: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const ReactS3Client = new S3(config);

  const handleprofileUpload = async (file1, fileName) => {
    const newFileName = "file" + new Date().getTime();
    console.log(file1, "mowa");
    const fileNameOrigin = file1?.name;
    console.log(fileNameOrigin, "mowa");
    try {
      const data = await ReactS3Client.uploadFile(file1, newFileName);
      if (fileName === "resume") {
        // <<<<<<< HEAD
        // alert("yooo chusko bolla resume", fileNameOrigin);
        // =======
        // >>>>>>> e754bf47c8dccfd30946774c1b4f3e33da7ef601
        setProfile({
          ...profile,
          resume: {
            filename: fileNameOrigin,
            url: data.location,
          },
        });
        setDummy(!dummy);
      } else if (fileName === "offer") {
        setEmployment({
          ...employment,
          offerLetterName: fileNameOrigin,
          offerLetter: data.location,
        });
      } else if (fileName === "bank") {
        setEmployment({
          ...employment,
          BankStatementName: fileNameOrigin,
          BankStatement: data.location,
        });
      } else if (fileName === "experience") {
        setProfile({
          ...profile,
          employment: [
            {
              ...profile.employment[0],
              expLetter: data.location,
              expLetterName: fileNameOrigin,
            },
          ],
        });
        setDummy(!dummy);
      } else if (fileName === "salary") {
        setEmployment({
          ...employment,
          salaryslip: data.location,
          salaryslipName: fileNameOrigin,
        });
      } else {
        setProfile({ ...profile, profileImage: data.location });
      }
      await callPost(data.location, fileName, fileNameOrigin);
    } catch (err) {
      console.error(err, "err data");
      toast.error("Upload Failed");
    }
  };
  console.log("Yoga", profile);
  const callPost = async (profile1, fileName, fileNameOrigin) => {
    // expLetterBankStatement  salaryslip
    console.log(profile, "mowa");
    let obj = {
      profileImage: profile?.profileImage ? profile?.profileImage : "",
      resume: profile?.resume?.url ? profile?.resume?.url : "",
      offerLetter: profile?.employment[0]?.offerLetter
        ? profile?.employment[0]?.offerLetter
        : "",
      expLetter: profile?.employment[0]?.expLetter
        ? profile?.employment[0]?.expLetter
        : "",
      BankStatement: profile?.employment[0]?.BankStatement
        ? profile?.employment[0]?.BankStatement
        : "",
      salaryslip: profile?.employment[0]?.salaryslip
        ? profile?.employment[0]?.salaryslip
        : "",
      resumeName: fileNameOrigin ? fileNameOrigin : "",
      offerLetterName: profile?.employment[0]?.offerLetterName
        ? profile?.employment[0]?.offerLetterName
        : "",
      expLetterName: profile?.employment[0]?.expLetterName
        ? profile?.employment[0]?.expLetterName
        : "",
      BankStatementName: profile?.employment[0]?.BankStatementName
        ? profile?.employment[0]?.BankStatementName
        : "",
      salaryslipName: profile?.employment[0]?.salaryslipName
        ? profile?.employment[0]?.salaryslipName
        : "",
    };
    if (fileName === "resume") {
      // obj.resume = profile1;
    } else if (fileName === "offer") {
      obj.offerLetter = profile1;
      obj.offerLetterName = fileNameOrigin;
    } else if (fileName === "bank") {
      obj.BankStatement = profile1;
    } else if (fileName === "experience") {
      obj.expLetter = profile1;
    } else if (fileName === "salary") {
      obj = {
        // profileImage: "vvv",
        // offerLetter: "ofvv",
        // BankStatement: "222",
        // salaryslip: "eee",
        // expLetter: "eeeee",
      };
      obj.salaryslip = profile1;
    } else {
      obj.profileImage = profile1;
    }
    try {
      const response = await axios.post(apiList.uploadProfileImage, obj, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Upload Failed");
    }
  };

  const handleContactOTPVerify = (e) => {
    e.preventDefault();
    console.log("oooo", e.target.otp.value);
    if (verifyType === "email") {
      axios
        .post(
          apiList.verifyEmailOtp,
          {
            otp: e.target.otp.value,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          setVerifyType("");
          setIsOpen(false);
          toast.success("Email Verified");
          getData();
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.message);
        });
    } else if (verifyType === "phone") {
      console.log("Tesinggg");
      axios
        .post(
          apiList.verifyPhoneOtp,
          {
            otp: e.target.otp.value,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          setVerifyType("");
          setIsOpen(false);
          toast.success("Phone Verified");
          getData();
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.message);
        });
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="  text-center">
          <h6>
            Please enter the one time password <br /> to verify your account
          </h6>
          <form onSubmit={handleContactOTPVerify}>
            <div
              id="otp"
              class="inputs d-flex flex-row justify-content-center mt-4"
            >
              <input
                type="text"
                className="form-control w-50"
                id="exampleInputName"
                placeholder="Enter OTP"
                maxLength="6"
                name="otp"
                required
              />
            </div>
            <div>
              {" "}
              <button
                type="submit"
                class="btn btn-verify px-4 validate mt-4"
                aria-label="Close"
                data-dismiss="modal"
              >
                Validate
              </button>{" "}
            </div>
          </form>
        </div>
        <div class="card-2 mt-3">
          <div class="content d-flex justify-content-center align-items-center">
            {" "}
            <span>Didn't get the code</span>{" "}
            <a href="#" class="text-decoration-none ms-3">
              {" "}
              Resend
            </a>{" "}
          </div>
        </div>
      </Modal>

      <div className="container-fluid my_profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    {/* <div className="canditate-des">
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
                        <i class="fas fa-camera img_pencil img_edit"></i>
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        style={{ display: "none" }}
                        onChange={(event) =>
                          imageonChangeHandling(event, "image")
                        }
                      />
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

                        <i class="fas fa-camera img_pencil img_edit"></i>
                      </label>
                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={(event) => imageonChangeHandling(event)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <h4 className="resume_title">
                      {profile.name}{" "}
                      <Link to="/myprofile">
                        <span class="correct_pencil">
                          <i class="fas fa-pencil-alt pencil_icon"></i>
                        </span>
                      </Link>
                    </h4>
                    <p className="resume_text">{profile.resumeHeadline}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="location_resume_1 d-block">
                          <span>
                            <i className="fas fa-map-marker-alt marker_icon"></i>
                          </span>{" "}
                          <span className="location_resume">
                            {profile.currentlocation}
                          </span>
                        </p>

                        <p className="location_resume_2 d-block">
                          <span>
                            <i class="fas fa-shopping-bag marker_icon"></i>
                          </span>{" "}
                          {profile?.experience.experience ? (
                            <span className="location_resume">
                              {profile.experience.experience
                                .charAt(0)
                                .toUpperCase() +
                                profile.experience.experience.slice(1)}
                            </span>
                          ) : (
                            <span className="location_resume">
                              {profile.experience.charAt(0).toUpperCase() +
                                profile.experience.slice(1)}
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <span>
                            <i className="fas fa-mobile-alt mobile_icon ml-1"></i>
                          </span>{" "}
                          <span className="mobile_resume">
                            {profile.contactNumber}
                          </span>
                          {profile.isPhoneVerified ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              style={{ height: "13px" }}
                            >
                              <path
                                fill="#388e3c"
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              style={{ height: "13px" }}
                              onClick={sendPhoneOtp}
                            >
                              <path
                                fill="#ffa000"
                                d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
                              />
                            </svg>
                          )}
                        </p>

                        <p>
                          <span>
                            <i class="far fa-envelope mobile_icon"></i>
                          </span>{" "}
                          <span className="mobile_resume">{profile.email}</span>
                          {profile.isEmailVerified ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              style={{ height: "13px" }}
                            >
                              <path
                                fill="#388e3c"
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              style={{ height: "13px" }}
                              onClick={verifyEmail}
                            >
                              <path
                                fill="#ffa000"
                                d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
                              />
                            </svg>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="progress resume_progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: progressBar + "%" }}
                        aria-valuenow={progressBar}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="text-right">{progressBar}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-3">
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
              <div id="collapseExample">
                <div className="sidebar " id="sidebar">
                  <a href="#AttachResume"> Upload Resume</a>
                  <a href="#Resume_Headline"> Resume Headline</a>
                  <a href="#ProfileSummary"> Profile Summary</a>
                  <a href="#KeySkills"> Keyskills</a>
                  <a href="#Employment"> Employment</a>
                  <a href="#Education"> Education</a>
                  {/* <a href="#ITskills"> IT Skills</a> */}
                  <a href="#Project"> Project</a>
                  <a href="#Accomplishment"> Accomplishments</a>
                  <a href="#DesiredCareer"> Desired Career Profile</a>
                  <a href="#PersonalDetails"> Personal Details</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-9"
            data-spy="scroll"
            data-target="#collapseExample"
            data-offset="300"
          >
            <div className="wrapper ">
              {/* Upload Resume Component */}

              <div className="content" id="AttachResume">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Upload Resume
                  </h5>
                </div>
                <p className="job_usa">
                  Resume is the most important document recruiters look for.
                  Recruiters generally do not look at profiles without resumes.
                </p>
                <form>
                  <div className="form-group">
                    <label for="myfile" className="file_upload">
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      id="myfile"
                      name="myfile"
                      hidden
                      onChange={(event) =>
                        imageonChangeHandling(event, "resume")
                      }
                    />
                  </div>
                </form>
                <h6>{profile.resume.filename}</h6>
              </div>

              {/* Resume Headline Component */}

              <div className="right_content" id="Resume_Headline">
                <div className="content">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left text-capitalize cp">
                      Resume Headline
                    </h5>
                    <a
                      href="#resume_headline"
                      className="site_button_resume  float-right"
                      // id="ProfileSummary"
                      data-toggle="modal"
                      data-target="#resume_headline"
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>
                  </div>

                  <p className="job_usa">{profile.resumeHeadline}</p>

                  <div
                    className="modal fade"
                    id="resume_headline"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered modal-lg "
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Resume Headline
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body ">
                          <div className="modal_content">
                            <p className="resume_modal_text">
                              It is the first thing recruiters notice in your
                              profile. Write concisely what makes you unique and
                              right person for the job you are looking for.
                            </p>
                            <div className="form-group my-4">
                              <label> Description </label>
                              <textarea
                                name="resumeHeadline"
                                className="form_control"
                                cols="30"
                                rows="5"
                                placeholder="Describe about yourself here"
                                onChange={(e) => formHandling(e)}
                                value={profile.resumeHeadline}
                                maxlength="50"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            data-dismiss="modal"
                            className="update"
                            onClick={(e) => handleUpdate(e)}
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content" id="ProfileSummary">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Profile Summary
                  </h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#profileSummary"
                  >
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>
                <p className="job_usa" id="KeySkills">
                  {profile.profileSummary}
                </p>

                <div
                  className="modal fade"
                  id="profileSummary"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg "
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Profile Summary
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="modal_content">
                          <p className="resume_modal_text">
                            Your Profile Summary should mention the highlights
                            of your career and education, what your professional
                            interests are, and what kind of a career you are
                            looking for. Write a meaningful summary of more than
                            50 characters.
                          </p>
                          <form action="#">
                            <div className="row my-3">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Details of Project </label>
                                  <textarea
                                    onChange={(e) => formHandling(e)}
                                    value={profile.profileSummary}
                                    name="profileSummary"
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                    maxlength="250"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="update"
                          data-dismiss="modal"
                          onClick={(e) => handleUpdate(e)}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Key Skills</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#key_skills"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>

                <div
                  className="modal fade"
                  id="key_skills"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered  modal-lg"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          {" "}
                          Key Skills
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body ">
                        <div className="modal_content">
                          <p className="resume_modal_text">
                            Tell recruiters what you know or what you are known
                            for e.g. Artificial Intelligence, Oracle, Java etc.
                          </p>
                          <form>
                            <div className="autocomplete">
                              <label>Skills</label>
                              <Autocomplete
                                id="combo-box-demo"
                                multiple
                                value={profile.skills}
                                options={Skillsdata.map((res) => {
                                  return res.Skill;
                                })}
                                getOptionLabel={(option) => option}
                                onChange={(e, value) => {
                                  setProfile({
                                    ...profile,
                                    skills: value,
                                  });
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    name="multiple"
                                    label="Enter your Skills"
                                    variant="outlined"
                                    fullWidth
                                  />
                                )}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="update"
                            data-dismiss="modal"
                            onClick={(e) => handleUpdate(e)}
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3">
                  {profile.skills.map((skill) => {
                    return (
                      <button className="js" id="Employment">
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* employement */}

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Employment</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#employ"
                    onClick={() => setInitialData()}
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>
                  </a>
                </div>

                {profile?.employment
                  ? profile?.employment?.map((employment, index) => {
                      return (
                        <>
                          <h5 className="junior_edit">
                            {employment?.designation}{" "}
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#employ"
                            >
                              {" "}
                              <i
                                className="fas fa-pencil-alt pencil_clearfix pencil"
                                onClick={() => replaceModalItem(index)}
                              ></i>
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              onClick={() => deletedata(employment._id)}
                            >
                              {" "}
                              <i class="far fa-trash-alt remove"></i>
                            </a>
                          </h5>
                          <p className="job_usa">{employment?.organization}</p>
                          <p className="job_usa">
                            {moment(employment?.startYear).format("YYYY MMMM")}{" "}
                            to{" "}
                            {moment(employment?.endYear).format("YYYY MMMM") ===
                            moment(new Date()).format("YYYY MMMM")
                              ? "Present"
                              : moment(employment?.endYear).format("YYYY MMMM")}
                            (
                            {moment(employment?.endYear).diff(
                              moment(employment?.startYear),
                              "years"
                            )}
                            {moment(employment?.endYear).diff(
                              moment(employment?.startYear),
                              "years"
                            ) === 1
                              ? " Year"
                              : " Years"}
                            -
                            {moment(employment?.endYear).diff(
                              moment(employment?.startYear).add(
                                moment(employment?.endYear).diff(
                                  moment(employment?.startYear),
                                  "year"
                                ),
                                "years"
                              ),
                              "months"
                            )}
                            {moment(employment?.endYear).diff(
                              moment(employment?.startYear).add(
                                moment(employment?.endYear).diff(
                                  moment(employment?.startYear),
                                  "year"
                                ),
                                "years"
                              ),
                              "months"
                            ) === 1
                              ? " Month"
                              : " Months"}
                            )
                          </p>
                          <p className="job_usa">
                            Available to join in {employment?.noticePeriod}
                          </p>
                          <p className="job_usa">{employment?.designation}</p>
                        </>
                      );
                    })
                  : null}

                <div></div>

                <div
                  className="modal fade"
                  id="employ"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Employement
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body ">
                        <div className="modal_content">
                          <form action="#">
                            <div className="row m-b30">
                              {/* <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Total Experience</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Years"
                                    name="years"
                                    value={employment.years}
                                    onChange={(e) => empHandling(e)}
                                  />
                                </div>
                              </div> */}
                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Total Experience</label>
                                  <select
                                    className="form_control"
                                    // value={employment.months}
                                    value={employment?.years}
                                    // name="months"
                                    name="years"
                                    onChange={(e) => empHandling(e)}
                                  >
                                    <option hidden>Years</option>
                                    <option value="0-2 Years">0-2 Years</option>
                                    <option value="2-5 Years">2-5 Years</option>
                                    <option value="5-7 Years">5-7 Years</option>
                                    <option value="7-10 Years">
                                      7-10 Years
                                    </option>
                                    <option value="10+ Years">10+ Years</option>
                                    {/* <option value="06 Months">06 Months</option>
                                    <option value="07 Months">07 Months</option>
                                    <option value="08 Months">08 Months</option>
                                    <option value="09 Months">09 Months</option>
                                    <option value="10 Months">10 Months</option>
                                    <option value="11 Months">11 Months</option> */}
                                  </select>
                                </div>
                              </div>

                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Current CTC</label>
                                  <select
                                    className="form_control"
                                    // value={employment.months}
                                    value={
                                      employment?.CurrentCTC
                                        ? employment?.CurrentCTC
                                        : ""
                                    }
                                    // name="months"
                                    name="CurrentCTC"
                                    onChange={(e) => empHandling(e, "ctc")}
                                  >
                                    <option hidden>Current CTC</option>
                                    <option value="0-3 LPA">0 - 3 LPA</option>
                                    <option value="3-5 LPA">3 - 5 LPA</option>
                                    <option value="5-7 LPA">5 - 7 LPA</option>
                                    <option value="7-10 LPA">7 - 10 LPA</option>
                                    <option value="10-15 LPA">
                                      10 - 15 LPA
                                    </option>
                                    <option value="15-20 LPA">
                                      15 - 20 LPA
                                    </option>
                                    <option value="10-15 LPA">
                                      10 - 15 LPA
                                    </option>
                                    {/* <option value="06 Months">06 Months</option>
                                    <option value="07 Months">07 Months</option>
                                    <option value="08 Months">08 Months</option>
                                    <option value="09 Months">09 Months</option>
                                    <option value="10 Months">10 Months</option>
                                    <option value="11 Months">11 Months</option> */}
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label> Your Designation</label>
                                  {/* <input
                                    type="text"
                                    name="designation"
                                    className="form_control"
                                    placeholder="Your Designation"
                                    onChange={(e) => empHandling(e)}
                                  /> */}
                                  <Autocomplete
                                    id="combo-box-demo"
                                    single
                                    value={
                                      employment?.designation
                                        ? employment?.designation
                                        : null
                                    }
                                    options={Designationdata.map((res) => {
                                      return res.Designation;
                                    })}
                                    getOptionLabel={(option) => option}
                                    onChange={(e, value) => {
                                      setEmployment({
                                        ...employment,
                                        designation: value,
                                      });
                                    }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        name="single"
                                        label="Present Designation"
                                        variant="outlined"
                                        fullWidth
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label> Your Organization Category</label>

                                  <Autocomplete
                                    id="combo-box-demo"
                                    single
                                    value={
                                      employment?.organization
                                        ? employment?.organization
                                        : null
                                    }
                                    options={Categorydata.map((res) => {
                                      return res.Category;
                                    })}
                                    getOptionLabel={(option) => option}
                                    onChange={(e, value) => {
                                      setEmployment({
                                        ...employment,
                                        organization: value,
                                      });
                                    }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        name="single"
                                        label="Present Organization Category"
                                        variant="outlined"
                                        fullWidth
                                      />
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <label> Is This Your Current Company ?</label>
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      defaultChecked
                                      className="form-check-input"
                                      type="radio"
                                      name="isCurrentCompany"
                                      id="inlineRadio1"
                                      value="No"
                                      checked={
                                        employment?.isCurrentCompany === "No"
                                      }
                                      onClick={(e) => empHandling(e)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      NO
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="isCurrentCompany"
                                      id="inlineRadio2"
                                      onClick={(e) => empHandling(e)}
                                      value="Yes"
                                      checked={
                                        employment?.isCurrentCompany === "Yes"
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      YES
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div>
                                {employment?.isCurrentCompany === "Yes" ? (
                                  <div className="row container">
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Started Working From</label>
                                        <input
                                          type="date"
                                          className="form_control"
                                          placeholder="Years"
                                          name="startYear"
                                          value={moment(
                                            employment?.startYear
                                          ).format("YYYY-MM-DD")}
                                          onChange={(e) => empHandling(e)}
                                        />
                                      </div>
                                    </div>
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Working Till</label>
                                        <input
                                          type="text"
                                          className="form_control"
                                          placeholder="Years"
                                          name="endYear"
                                          value="Present"
                                          disabled
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="row container">
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Started Working From</label>
                                        <input
                                          type="date"
                                          className="form_control"
                                          placeholder="Years"
                                          name="startYear"
                                          value={moment(
                                            employment?.startYear
                                          ).format("YYYY-MM-DD")}
                                          onChange={(e) => empHandling(e)}
                                        />
                                      </div>
                                    </div>
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Worked Till</label>
                                        <input
                                          name="endYear"
                                          type="date"
                                          className="form_control"
                                          placeholder="Years"
                                          value={moment(
                                            employment?.endYear
                                          ).format("YYYY-MM-DD")}
                                          onChange={(e) => empHandling(e)}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="content" id="AttachResume">
                                    <div className="job-bx_offer-title clearfix">
                                      <h5 className=" pull-left text-capitalize cp1">
                                        Offer Letter
                                      </h5>
                                    </div>
                                    <form>
                                      <div className="form-group">
                                        <label
                                          for="myfile1"
                                          className="letter_upload"
                                        >
                                          Upload Offer Letter
                                        </label>
                                        <input
                                          type="file"
                                          id="myfile1"
                                          name="myfile1"
                                          hidden
                                          onChange={(event) =>
                                            imageonChangeHandling(
                                              event,
                                              "offer"
                                            )
                                          }
                                        />
                                      </div>
                                    </form>
                                    <h6 className="offer_name">
                                      {employment?.offerLetterName
                                        ? employment?.offerLetterName
                                        : "No File Found"}
                                    </h6>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="content" id="AttachResume">
                                    <div className="job-bx_offer-title clearfix">
                                      <h5 className=" pull-left text-capitalize cp1">
                                        Experience Letter
                                      </h5>
                                    </div>
                                    <form>
                                      <div className="form-group">
                                        <label
                                          for="myfile2"
                                          className="letter_upload"
                                        >
                                          Upload Experience Letter
                                        </label>
                                        <input
                                          type="file"
                                          id="myfile2"
                                          name="myfile2"
                                          hidden
                                          onChange={(event) =>
                                            imageonChangeHandling(
                                              event,
                                              "experience"
                                            )
                                          }
                                        />
                                      </div>
                                    </form>
                                    <h6 className="offer_name">
                                      {employment?.expLetterName
                                        ? employment?.expLetterName
                                        : "No File Found"}
                                    </h6>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="content" id="AttachResume">
                                    <div className="job-bx_offer-title clearfix">
                                      <h5 className=" pull-left text-capitalize cp1">
                                        Salary Slips
                                      </h5>
                                    </div>
                                    <form>
                                      <div className="form-group">
                                        <label
                                          for="myfile3"
                                          className="letter_upload"
                                        >
                                          Upload Salary Slips
                                        </label>
                                        <input
                                          type="file"
                                          id="myfile3"
                                          name="myfile3"
                                          hidden
                                          onChange={(event) =>
                                            imageonChangeHandling(
                                              event,
                                              "salary"
                                            )
                                          }
                                        />
                                      </div>
                                    </form>
                                    <h6 className="offer_name">
                                      {employment?.salaryslipName
                                        ? employment?.salaryslipName
                                        : "No File Found"}
                                    </h6>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="content" id="AttachResume">
                                    <div className="job-bx_offer-title clearfix">
                                      <h5 className=" pull-left text-capitalize cp1">
                                        Bank Statements
                                      </h5>
                                    </div>
                                    <form>
                                      <div className="form-group">
                                        <label
                                          for="myfile4"
                                          className="letter_upload"
                                        >
                                          Upload Bank Statements
                                        </label>
                                        <input
                                          type="file"
                                          id="myfile4"
                                          name="myfile4"
                                          hidden
                                          onChange={(event) =>
                                            imageonChangeHandling(event, "bank")
                                          }
                                        />
                                      </div>
                                    </form>
                                    <h6 className="offer_name">
                                      {employment?.BankStatementName
                                        ? employment?.BankStatementName
                                        : "No File Found"}
                                    </h6>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group my-2">
                                  <label> Describe Your Job Profile </label>
                                  <textarea
                                    name="profileDescription"
                                    onChange={(e) => empHandling(e)}
                                    value={employment?.profileDescription}
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here..."
                                    maxlength="250"
                                  ></textarea>
                                </div>
                              </div>
                              {employment?.isCurrentCompany === "Yes" ? (
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label> Notice Period</label>
                                    {/* <input
                                    name="noticePeriod"
                                    onChange={(e) => empHandling(e)}
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Notice Period"
                                  /> */}
                                    <Autocomplete
                                      id="combo-box-demo"
                                      single
                                      value={employment?.noticePeriod}
                                      options={NoticePerioddata.map((res) => {
                                        return res.noticeperiod;
                                      })}
                                      getOptionLabel={(option) => option}
                                      onChange={(e, value) => {
                                        setEmployment({
                                          ...employment,
                                          noticePeriod: value,
                                        });
                                      }}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          name="single"
                                          label="Your Notice Period"
                                          variant="outlined"
                                          fullWidth
                                        />
                                      )}
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </form>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="update"
                            onClick={(e) => handleEmployment(e, employment._id)}
                            data-dismiss="modal"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* employment */}

              {/* education */}

              <div className="content" id="Education">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Education</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#study"
                    onClick={() => setEducationInitialData()}
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>
                  </a>
                </div>

                <p className="job_usa">
                  Mention your employment details including your current and
                  previous company work experience
                </p>

                {/* <div className="education_content_1" id="Project">
                  {
                    profile.education.map((edu) => {
                      return (<><h5 className="education_heading">
                        {edu.highestgraduation} - {edu.course}{" "}
                        <a href="#" data-toggle="modal" data-target="#study">
                          {" "}
                          <i className="fas fa-pencil-alt pencil_clearfix pencil"></i>
                        </a>
                      </h5>
                        <p className="eductaion_year">{edu.institute}</p>
                        <p className="eductaion_year">{edu.passedoutyear}({edu.courseType})</p></>)


                    })
                  }
                </div> */}

                {profile?.education.length > 0
                  ? profile?.education?.map((education, inde) => {
                      return (
                        <>
                          <h5 className="junior_edit">
                            {education?.highestgraduation} - {education?.course}{" "}
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#study"
                            >
                              {" "}
                              <i
                                className="fas fa-pencil-alt pencil_clearfix pencil"
                                onClick={() => replaceEduModalItem(inde)}
                              ></i>
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              onClick={() => deleteEdudata(education._id)}
                            >
                              {" "}
                              <i class="far fa-trash-alt remove"></i>
                            </a>
                          </h5>

                          <p className="eductaion_year">
                            {education?.institute}
                          </p>
                          <p className="eductaion_year">
                            {education?.passedoutyear}({education?.marks})
                          </p>
                        </>
                      );
                    })
                  : null}

                <div
                  className="modal fade"
                  id="study"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          {" "}
                          Education{" "}
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body ">
                        <p className="resume_modal_text">
                          *Fill the qualification details from highest to
                          lowest.
                        </p>
                        <div className="modal_content">
                          <form action="#">
                            <div className="row">
                              <div className=" col-lg-12 col-md-12">
                                <form>
                                  <div className="form-group">
                                    <label>Qualification</label>
                                    <select
                                      id="highGrad"
                                      className="form_control"
                                      name="highestgraduation"
                                      onChange={(e) => {
                                        setEducation({
                                          ...education,
                                          course: "",
                                          specialization: "",
                                          [e.target.name]: e.target.value,
                                        });
                                        eduHandling1(e, "needFilter");
                                      }}
                                      value={education?.highestgraduation}
                                    >
                                      {Education?.map((item, i) => (
                                        <option
                                          key={i}
                                          value={item.name}
                                          name="Highest_Graduation"
                                        >
                                          {item.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </form>
                                <div className="sets mt-2">
                                  <div className="phd_set" id="phdSet">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Course</label>
                                        <select
                                          id="course"
                                          className="form_control"
                                          name="course"
                                          defaultValue={"default"}
                                          onChange={(e) => {
                                            setEducation({
                                              ...education,
                                              specialization: "",
                                              [e.target.name]: e.target.value,
                                            });
                                            eduHandling1(e, "needChildFilter");
                                          }}
                                          value={
                                            education?.course == ""
                                              ? "default"
                                              : education?.course
                                          }
                                          disabled={childs.length === 0}
                                        >
                                          <option value={"default"} disabled>
                                            Choose an option
                                          </option>
                                          {childs?.map((item, i) => (
                                            <option
                                              key={i}
                                              value={item.name}
                                              name="course"
                                            >
                                              {item.name}
                                            </option>
                                          ))}
                                        </select>

                                        {/* <input
                                          name="course"
                                          onChange={(e) => eduHandling(e)}
                                          type="text"
                                          placeholder="Enter Your postgraduation Course"
                                          id="phdcourse"
                                          className="form_control"
                                          value={education.course}
                                        /> */}
                                      </div>
                                    </div>
                                    {console.log(
                                      childChilds,
                                      "childChilds",
                                      childs,
                                      "childs"
                                    )}
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Specialization</label>
                                        <select
                                          id="specialization"
                                          className="form_control"
                                          name="specialization"
                                          defaultValue={"default"}
                                          onChange={(e) => eduHandling(e)}
                                          value={
                                            education?.specialization == ""
                                              ? "default"
                                              : education?.specialization
                                          }
                                          disabled={childChilds.length === 0}
                                        >
                                          <option value={"default"} disabled>
                                            Choose an option
                                          </option>
                                          {childChilds?.map((item, i) => (
                                            <option
                                              key={i}
                                              value={item.name}
                                              id={item.name}
                                              name="course"
                                            >
                                              {item.name}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> University/Institute</label>
                                        <input
                                          name="institute"
                                          onChange={(e) => eduHandling(e)}
                                          type="text"
                                          className="form_control "
                                          id="university"
                                          aria-Describedby="emailHelp"
                                          placeholder="Select University Name"
                                          value={education.institute}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <label> Course Type </label>
                                      <div className="form-group">
                                        <div className="form-check form-check-inline">
                                          <input
                                            name="courseType"
                                            onChange={(e) => eduHandling(e)}
                                            className="form-check-input"
                                            type="radio"
                                            id="inlineRadio1"
                                            // value="Full time"
                                            value="Full time"
                                            checked={
                                              education.courseType ===
                                              "Full time"
                                            }
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio1"
                                          >
                                            Full Time
                                          </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input
                                            name="courseType"
                                            onChange={(e) => eduHandling(e)}
                                            className="form-check-input"
                                            type="radio"
                                            id="inlineRadio2"
                                            // value="Part Time"
                                            value="Part time"
                                            checked={
                                              education.courseType ===
                                              "Part time"
                                            }
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio2"
                                          >
                                            Part Time
                                          </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input
                                            name="courseType"
                                            onChange={(e) => eduHandling(e)}
                                            className="form-check-input"
                                            type="radio"
                                            id="inlineRadio3"
                                            // value=" Correspondence/Distance Learning"
                                            // value={education.courseType}
                                            value="correspondence/distance learning"
                                            checked={
                                              education.courseType ===
                                              "correspondence/distance learning"
                                            }
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio3"
                                          >
                                            Correspondence/Distance Learning
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                          <label> Passed Out Year</label>
                                          <input
                                            name="passedoutyear"
                                            onChange={(e) => eduHandling(e)}
                                            type="text"
                                            className="form_control "
                                            id="university"
                                            aria-Describedby="emailHelp"
                                            placeholder="Enter Passed Out Year"
                                            value={education.passedoutyear}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                          <label>
                                            Marks in Percentage or CGPA{" "}
                                          </label>

                                          <input
                                            name="marks"
                                            onChange={(e) => eduHandling(e)}
                                            type="text"
                                            placeholder="Enter your Marks in Percentage or CGPA"
                                            id="grading"
                                            className="form_control"
                                            value={education.marks}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="update"
                            onClick={(e) => handleEducation(e, education._id)}
                            data-dismiss="modal"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}

              {/* project */}
              <div className="content" id="Project">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Projects</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#projectsResume"
                    onClick={() => setProjectInitialData()}
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>

                {/* <h5 className="junior_edit">
                  Job Board{" "}
                  <a href="#" data-toggle="modal" data-target="#projectsResume">
                    {" "}
                    <i className="fas fa-pencil-alt pencil_clearfix pencil"></i>
                  </a>
                  <i class="far fa-trash-alt remove"></i>
                </h5>
                <p className="job_usa">w3itexpert (Offsite)</p>
                <p className="job_usa" id="ProfileSummary">
                  Dec 2018 to Present (Full Time)
                </p>
                <p className="job_usa" id="Accomplishment">Job Board Template</p> */}

                {profile?.project
                  ? profile?.project?.map((project, ind) => {
                      return (
                        <>
                          <h5 className="junior_edit">
                            {project?.ProjectTitle}{" "}
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#projectsResume"
                            >
                              {" "}
                              <i
                                className="fas fa-pencil-alt pencil_clearfix pencil"
                                onClick={() => replaceProjectModalItem(ind)}
                              ></i>
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              onClick={() => deleteProjectdata(project._id)}
                            >
                              {" "}
                              <i class="far fa-trash-alt remove"></i>
                            </a>
                          </h5>
                          <p className="job_usa">{project?.ProjectClient}</p>
                          <p className="job_usa">
                            {moment(project?.ProjectStartDate).format(
                              "YYYY MMMM"
                            )}{" "}
                            to{" "}
                            {moment(project?.ProjectWorkTill).format(
                              "YYYY MMMM"
                            ) === moment(new Date()).format("YYYY MMMM")
                              ? "Present"
                              : moment(project?.ProjectWorkTill).format(
                                  "YYYY MMMM"
                                )}
                            (
                            {moment(project?.ProjectWorkTill).diff(
                              moment(project?.ProjectStartDate),
                              "years"
                            )}
                            {moment(project?.ProjectWorkTill).diff(
                              moment(project?.ProjectStartDate),
                              "years"
                            ) === 1
                              ? " Year"
                              : " Years"}{" "}
                            -{" "}
                            {moment(project?.ProjectWorkTill).diff(
                              moment(project?.ProjectStartDate).add(
                                moment(project?.ProjectWorkTill).diff(
                                  moment(project?.ProjectStartDate),
                                  "year"
                                ),
                                "years"
                              ),
                              "months"
                            )}
                            {moment(project?.ProjectWorkTill).diff(
                              moment(project?.ProjectStartDate).add(
                                moment(project?.ProjectWorkTill).diff(
                                  moment(project?.ProjectStartDate),
                                  "year"
                                ),
                                "years"
                              ),
                              "months"
                            ) === 1
                              ? " Month"
                              : " Months"}
                            )
                          </p>

                          <p className="job_usa">
                            {project?.ProjectDescription}
                          </p>
                        </>
                      );
                    })
                  : null}

                <div
                  className="modal fade"
                  id="projectsResume"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Projects
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="modal_content">
                          <form action="#">
                            <div className="row m-b30">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Project Title</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    name="ProjectTitle"
                                    onChange={(e) => projectHandling(e)}
                                    value={project.ProjectTitle}
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Client</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    name="ProjectClient"
                                    // onChange={(e) => projectHandling(e)}
                                    onChange={(e) => projectHandling(e)}
                                    value={project.ProjectClient}
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <label> Project Type ? </label>
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      defaultChecked
                                      className="form-check-input"
                                      type="radio"
                                      name="Project_Type"
                                      id="inlineRadio1"
                                      value="In Progress"
                                      onClick={() => projectType_inprogress()}

                                      // onClick={() => InprogressButton()}
                                      // onChange={() => InprogressHandle()}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      In Progress
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      // onChange={(e) => radiohandling(e)}
                                      // name="inlineRadioOptions"
                                      // checked={projectType}
                                      name="Project_Type"
                                      id="inlineRadio2"
                                      value="Finished"
                                      onClick={() => projectType_finished()}
                                      // onChange={() => FinishedProjectHandle()}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Finished
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* <div>
                              {projectType ?(
                                <div className="row container">
                                  <div className=" col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>Started Working From</label>
                                      <input
                                        name="ProjectStartDate"
                                        // onChange={(e)=>formHandling(e)}
                                        // onChange={(e) => projectHandling(e)}
                                        type="date"
                                        className="form_control"
                                        placeholder="Years"
                                        value={moment(project?.ProjectStartDate).format("YYYY-MM-DD")}
                                        onChange={(e) => projectHandling(e)}
                                      />
                                    </div>
                                  </div>
                                  {/* {projectType ? *
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label>Worked Till</label>
                                        <input
                                          name="ProjectWorkTill"
                                          value="Present"
                                          // onChange={(e)=>formHandling(e)}
                                          // onChange={(e) => projectHandling(e)}
                                          type="text"
                                          className="form_control"
                                          placeholder="Years"
                                          // onChange={(e) => projectHandling(e)} 
                                          // value={project.ProjectWorkTill}
                                          disabled
                                        />
                                      </div>
                                    </div>
                                    </div>) :
                                    (
                                      
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label>Worked Till</label>
                                        <input
                                          name="ProjectWorkTill"
                                          // onChange={(e)=>formHandling(e)}
                                          // onChange={(e) => projectHandling(e)}
                                          type="date"
                                          className="form_control"
                                          placeholder="Years"
                                          onChange={(e) => projectHandling(e)} 
                                          value={moment(project?.ProjectWorkTill).format("YYYY-MM-DD")}
                                        />
                                      </div>
                                    </div>}

                                </div> */}

                              <div>
                                {projectType ? (
                                  <div className="row container">
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Started Working From</label>
                                        <input
                                          type="date"
                                          name="ProjectStartDate"
                                          className="form_control"
                                          placeholder="Years"
                                          value={moment(
                                            project?.ProjectStartDate
                                          ).format("YYYY-MM-DD")}
                                          onChange={(e) => projectHandling(e)}
                                        />
                                      </div>
                                    </div>
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Working Till</label>
                                        {/* <input
                                          type="text"
                                          name="ProjectWorkTill"
                                          value="Present"
                                          className="form_control"
                                          placeholder="Years"
                                          disabled
                                        /> */}

                                        <input
                                          type="text"
                                          className="form_control"
                                          placeholder="Years"
                                          name="ProjectWorkTill"
                                          value="Present"
                                          disabled
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="row container">
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Started Working From</label>
                                        <input
                                          name="ProjectStartDate"
                                          // onChange={(e)=>formHandling(e)}
                                          // onChange={(e) => projectHandling(e)}
                                          type="date"
                                          className="form_control"
                                          placeholder="Years"
                                          value={moment(
                                            project?.ProjectStartDate
                                          ).format("YYYY-MM-DD")}
                                          onChange={(e) => projectHandling(e)}
                                        />
                                      </div>
                                    </div>
                                    <div className=" col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label> Worked Till</label>
                                        <input
                                          name="ProjectWorkTill"
                                          value={moment(
                                            project?.ProjectWorkTill
                                          ).format("YYYY-MM-DD")}
                                          // onChange={(e)=>formHandling(e)}
                                          onChange={(e) => projectHandling(e)}
                                          type="date"
                                          className="form_control"
                                          placeholder="Years"
                                          // onChange={(e) => projectHandling(e)}
                                          // value={project.ProjectWorkTill}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Details of Project </label>
                                  <textarea
                                    name="ProjectDescription"
                                    // onChange={(e) => projectHandling(e)}
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    onChange={(e) => projectHandling(e)}
                                    value={project.ProjectDescription}
                                    placeholder="Describe here.."
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="update"
                          onClick={(e) => handleProject(e, project._id)}
                          data-dismiss="modal"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project */}

              {/* Accomplishment */}

              <div className="content" id="Accomplishment">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Accomplishment
                  </h5>
                </div>

                <div className="content_sub">
                  <div className="content_sub_1">
                    <div className="job-bx-title clearfix">
                      <h5 className=" pull-left  cp_1">Work Sample</h5>
                      <a
                        href="#"
                        className="site_button_resume  float-right"
                        data-toggle="modal"
                        data-target="#workSample"
                        onClick={() => worksampleInitialData()}
                      >
                        {" "}
                        <span>
                          <i className="fas fa-pencil-alt pencil_clearfix"></i>
                        </span>{" "}
                      </a>
                    </div>

                    {profile?.worksample
                      ? profile?.worksample?.map((worksample, aws) => {
                          return (
                            <>
                              <h5 className="junior_edit">
                                {worksample?.Work_Title}{" "}
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#workSample"
                                >
                                  {" "}
                                  <i
                                    className="fas fa-pencil-alt pencil_clearfix pencil"
                                    onClick={() => replaceworksampleItem(aws)}
                                  ></i>
                                </a>
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  onClick={() =>
                                    deleteworksample(worksample._id)
                                  }
                                >
                                  {" "}
                                  <i class="far fa-trash-alt remove"></i>
                                </a>
                              </h5>
                              <p>{worksample?.Work_URL} </p>
                              <p className="job_usa">
                                {moment(worksample?.Work_Duration_From).format(
                                  "YYYY MMMM"
                                )}{" "}
                                to{" "}
                                {moment(worksample?.Work_Duration_To).format(
                                  "YYYY MMMM"
                                ) === moment(new Date()).format("YYYY MMMM")
                                  ? moment(worksample?.Work_Duration_To).format(
                                      "YYYY MMMM"
                                    )
                                  : moment(worksample?.Work_Duration_To).format(
                                      "YYYY MMMM"
                                    )}
                              </p>
                              {worksample?.Work_Description}{" "}
                              {/* <p className="job_usa">{project?.ProjectClient}</p>
                        <p className="job_usa">
                          {moment(project?.ProjectStartDate).format('YYYY MMMM')} to {" "}
                          {
                            moment(project?.ProjectWorkTill).format('YYYY MMMM') === moment(new Date()).format('YYYY MMMM') ?
                              "Present" : moment(project?.ProjectWorkTill).format('YYYY MMMM')
                          }
                          ({
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), "years")
                          }
                          {
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), "years") === 1 ? " Year" : " Years"
                          }
                          {" "}-{" "}
                          {
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate).add(moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), 'year'), 'years'), 'months')
                          }
                          {
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate).add(moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), 'year'), 'years'), 'months') === 1 ?
                              " Month" : " Months"
                          }
                          )
                        </p>
                      
                        <p className="job_usa">{project?.ProjectDescription}</p> */}
                            </>
                          );
                        })
                      : null}

                    <div
                      className="modal fade"
                      id="workSample"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Work Sample
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p className="resume_modal_text">
                              Add link to your Projects (e.g. Github links
                              etc.).
                            </p>
                            <form action="#">
                              <div className="row my-3">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Work Title</label>
                                    <input
                                      name="Work_Title"
                                      onChange={(e) => worksampleHandling(e)}
                                      type="text"
                                      className="form_control"
                                      value={worksample.Work_Title}
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>URL</label>
                                    <input
                                      name="Work_URL"
                                      type="text"
                                      className="form_control"
                                      onChange={(e) => worksampleHandling(e)}
                                      value={worksample.Work_URL}
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Duration From</label>
                                    <input
                                      name="Work_Duration_From"
                                      type="date"
                                      className="form_control"
                                      placeholder="Year"
                                      onChange={(e) => worksampleHandling(e)}
                                      value={worksample.Work_Duration_From}
                                    />
                                  </div>
                                </div>
                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Duration To</label>
                                    <input
                                      name="Work_Duration_To"
                                      type="date"
                                      className="form_control"
                                      placeholder="Year"
                                      onChange={(e) => worksampleHandling(e)}
                                      value={worksample.Work_Duration_To}
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label> Description </label>
                                    <textarea
                                      name="Work_Description"
                                      className="form_control"
                                      cols="30"
                                      rows="5"
                                      placeholder="Describe here.."
                                      maxlength="250"
                                      onChange={(e) => worksampleHandling(e)}
                                      value={worksample.Work_Description}
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="update"
                              onClick={(e) =>
                                handleworksample(e, worksample._id)
                              }
                              data-dismiss="modal"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">
                      White Paper / Research Publication
                    </h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#whitePaper"
                      onClick={() => publicationInitialData()}
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>
                  </div>
                  {profile?.publication
                    ? profile?.publication?.map((publication, pind) => {
                        return (
                          <>
                            <h5 className="junior_edit">
                              {publication?.Publication_Title}{" "}
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#whitePaper"
                              >
                                {" "}
                                <i
                                  className="fas fa-pencil-alt pencil_clearfix pencil"
                                  onClick={() => replacepublicationItem(pind)}
                                ></i>
                              </a>
                              <a
                                href="#"
                                data-toggle="modal"
                                onClick={() =>
                                  deletepublication(publication._id)
                                }
                              >
                                {" "}
                                <i class="far fa-trash-alt remove"></i>
                              </a>
                            </h5>
                            <p className="job_usa">
                              {publication?.Publication_URL}
                            </p>
                            <p className="job_usa">
                              {publication?.Publication_Description}
                            </p>
                          </>
                        );
                      })
                    : null}

                  <div
                    className="modal fade"
                    id="whitePaper"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            White Paper / Research Publication
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="#">
                            <div className="row my-3">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Title</label>
                                  <input
                                    name="Publication_Title"
                                    onChange={(e) => publicationHandling(e)}
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Title"
                                    value={publication.Publication_Title}
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>URL</label>
                                  <input
                                    name="Publication_URL"
                                    onChange={(e) => publicationHandling(e)}
                                    type="text"
                                    className="form_control"
                                    placeholder="wwww.google.com"
                                    value={publication.Publication_URL}
                                  />
                                </div>
                              </div>

                              {/* <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Published On</label>
                                    <input
                                      name="Publication_Year"
                                      onChange={(e) => publicationHandling(e)}
                                      type="text"
                                      className="form_control"
                                      placeholder="Enter no.of Year"
                                      value={publication.Publication_Year}
                                    />
                                  </div>
                                </div> */}
                              {/* <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label> Month</label>
                                    <select
                                      className="form_control"
                                      name="Publication_Months"
                                      onChange={(e) => publicationHandling(e)}
                                      value={publication.Publication_Months}
                                    >
                                      <option hidden>Months</option>
                                      <option>01 Month</option>
                                      <option>02 Months</option>
                                      <option>03 Months</option>
                                      <option>04 Months</option>
                                      <option>05 Months</option>
                                      <option>06 Months</option>
                                      <option>07 Months</option>
                                      <option>08 Months</option>
                                      <option>09 Months</option>
                                      <option>10 Months</option>
                                      <option>11 Months</option>
                                    </select>
                                  </div>
                                </div> */}

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Description </label>
                                  <textarea
                                    name="Publication_Description"
                                    onChange={(e) => publicationHandling(e)}
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                    maxlength="250"
                                    value={publication.Publication_Description}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="update"
                            onClick={(e) =>
                              handlepublication(e, publication._id)
                            }
                            data-dismiss="modal"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <p className="job_usa">
                    Add links to your Online publications.
                  </p> */}
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">Presentation</h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#presentation"
                      onClick={() => presentationInitialData()}
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>
                  </div>

                  {/* <p className="job_usa">
                    Add links to your Online presentations (e.g. Slideshare
                    presentation links etc.).
                  </p> */}

                  {profile?.presentation
                    ? profile?.presentation?.map((presentation, pind) => {
                        return (
                          <>
                            <h5 className="junior_edit">
                              {presentation?.Presentation_Title}{" "}
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#presentation"
                              >
                                {" "}
                                <i
                                  className="fas fa-pencil-alt pencil_clearfix pencil"
                                  onClick={() => replacepresentationItem(pind)}
                                ></i>
                              </a>
                              <a
                                href="#"
                                data-toggle="modal"
                                onClick={() =>
                                  deletepresentation(presentation._id)
                                }
                              >
                                {" "}
                                <i class="far fa-trash-alt remove"></i>
                              </a>
                            </h5>
                            <p className="job_usa">
                              {presentation?.Presentation_URL}
                            </p>
                            <p className="job_usa">
                              {presentation?.Presentation_Description}
                            </p>
                          </>
                        );
                      })
                    : null}

                  <div
                    className="modal fade"
                    id="presentation"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Presentation
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="#">
                            <div className="row my-3">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Title</label>
                                  <input
                                    name="Presentation_Title"
                                    onChange={(e) => presentationHandling(e)}
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Title"
                                    value={presentation?.Presentation_Title}
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>URL</label>
                                  <input
                                    name="Presentation_URL"
                                    onChange={(e) => presentationHandling(e)}
                                    type="text"
                                    value={presentation?.Presentation_URL}
                                    className="form_control"
                                    placeholder="wwww.google.com"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Description </label>
                                  <textarea
                                    name="Presentation_Description"
                                    onChange={(e) => presentationHandling(e)}
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                    maxlength="250"
                                    value={
                                      presentation?.Presentation_Description
                                    }
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="update"
                            onClick={(e) =>
                              handlePresentation(e, presentation._id)
                            }
                            data-dismiss="modal"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">Patent</h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#Patent"
                      onClick={() => patentInitialData()}
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>
                  </div>

                  {profile?.patent
                    ? profile?.patent?.map((patent, pini) => {
                        return (
                          <>
                            <h5 className="junior_edit">
                              {patent?.Patent_Title}{" "}
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#Patent"
                              >
                                {" "}
                                <i
                                  className="fas fa-pencil-alt pencil_clearfix pencil"
                                  onClick={() => replacepatentItem(pini)}
                                ></i>
                              </a>
                              <a
                                href="#"
                                data-toggle="modal"
                                onClick={() => deletepatent(patent._id)}
                              >
                                {" "}
                                <i class="far fa-trash-alt remove"></i>
                              </a>
                            </h5>
                            {/* <p className="job_usa">{project?.ProjectClient}</p>
                        <p className="job_usa">
                          {moment(project?.ProjectStartDate).format('YYYY MMMM')} to {" "}
                          {
                            moment(project?.ProjectWorkTill).format('YYYY MMMM') === moment(new Date()).format('YYYY MMMM') ?
                              "Present" : moment(project?.ProjectWorkTill).format('YYYY MMMM')
                          }
                          ({
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), "years")
                          }
                          {
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), "years") === 1 ? " Year" : " Years"
                          }
                          {" "}-{" "}
                          {
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate).add(moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), 'year'), 'years'), 'months')
                          }
                          {
                            moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate).add(moment(project?.ProjectWorkTill).diff(moment(project?.ProjectStartDate), 'year'), 'years'), 'months') === 1 ?
                              " Month" : " Months"
                          }
                          )
                        </p> */}

                            <p className="job_usa">{patent?.Patent_URL}</p>
                            <p className="job_usa">{patent?.Patent_Office}</p>
                            <p className="job_usa">{patent?.Patent_Status}</p>
                            <p className="job_usa">
                              {patent?.Patent_Application_Number}
                            </p>
                            <p className="job_usa">
                              {patent?.Patent_Description}
                            </p>
                          </>
                        );
                      })
                    : null}

                  <div
                    className="modal fade"
                    id="Patent"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Patent
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="#">
                            <div className="row my-3">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Patent Title</label>
                                  <input
                                    name="Patent_Title"
                                    onChange={(e) => patentHandling(e)}
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Title"
                                    value={patent.Patent_Title}
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>URL</label>
                                  <input
                                    name="Patent_URL"
                                    onChange={(e) => patentHandling(e)}
                                    type="text"
                                    className="form_control"
                                    placeholder="wwww.google.com"
                                    value={patent.Patent_URL}
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Patent Office</label>
                                  <input
                                    name="Patent_Office"
                                    onChange={(e) => patentHandling(e)}
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Patent Office"
                                    value={patent.Patent_Office}
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12 ">
                                <label> Status ? </label>
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      name="Patent_Status"
                                      onChange={(e) => patentHandling(e)}
                                      className="form-check-input"
                                      type="radio"
                                      // name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="Patent Issued"
                                      //  onClick={() => patentissueButton()}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      Patent Issued
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="Patent_Status"
                                      // onChange={(e) => formHandling(e)}
                                      // name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="Patent Pending"
                                      // onClick={() => patentpendingButton()}
                                      onChange={(e) => patentHandling(e)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Patent Pending
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                {/* {patent ? ( */}
                                <div className="row container ">
                                  <div className=" col-lg-12 col-md-">
                                    <div className="form-group">
                                      <label>Application Number</label>
                                      <input
                                        name="Patent_Application_Number"
                                        onChange={(e) => patentHandling(e)}
                                        type="text"
                                        className="form_control"
                                        placeholder="Enter Application Number"
                                        value={patent.Patent_Application_Number}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* ):null}  */}
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Description </label>
                                  <textarea
                                    name="Patent_Description"
                                    onChange={(e) => patentHandling(e)}
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                    maxlength="250"
                                    value={patent.Patent_Description}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="update"
                            onClick={(e) => handlepatent(e, patent._id)}
                            data-dismiss="modal"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">Certification</h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#Certification"
                      onClick={() => certificationInitialData()}
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>

                    {profile?.certification
                      ? profile?.certification?.map((certification, cert) => {
                          return (
                            <>
                              <h5 className="junior_edit">
                                {" "}
                                {certification?.Certification_Name}{" "}
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#Certification"
                                >
                                  {" "}
                                  <i
                                    className="fas fa-pencil-alt pencil_clearfix pencil"
                                    onClick={() =>
                                      replacecertificationItem(cert)
                                    }
                                  ></i>{" "}
                                </a>{" "}
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  onClick={() =>
                                    deletecertification(certification._id)
                                  }
                                >
                                  {" "}
                                  <i class="far fa-trash-alt remove"></i>{" "}
                                </a>{" "}
                              </h5>
                              <p className="job_usa">
                                {certification?.Certification_ID}
                              </p>
                              <p className="job_usa">
                                {certification?.Certification_URL}
                              </p>
                              <p className="job_usa">
                                {" "}
                                {moment(
                                  certification?.Certification_Validity_From
                                ).format("YYYY MMMM")}{" "}
                                to{" "}
                                {moment(
                                  certification?.Certification_Validity_To
                                ).format("YYYY MMMM") ===
                                moment(new Date()).format("YYYY MMMM")
                                  ? moment(
                                      certification?.Certification_Validity_To
                                    ).format("YYYY MMMM")
                                  : moment(
                                      certification?.Certification_Validity_To
                                    ).format("YYYY MMMM")}{" "}
                              </p>

                              {/* <p className="job_usa">
                                {certification?.Certification_Validity_From} to{" "}
                                {certification?.Certification_Validity_To}
                              </p> */}
                            </>
                          );
                        })
                      : null}

                    <div
                      className="modal fade"
                      id="Certification"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Certification
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p className="resume_modal_text">
                              Add details of Certifications you have
                              achieved/completed
                            </p>
                            <form action="#">
                              <div className="row my-3">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Certification Name</label>
                                    <input
                                      name="Certification_Name"
                                      onChange={(e) => certificationHandling(e)}
                                      type="text"
                                      value={certification.Certification_Name}
                                      className="form_control"
                                      placeholder="Please Enter Certification Name"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Certification Completion ID</label>
                                    <input
                                      name="Certification_ID"
                                      onChange={(e) => certificationHandling(e)}
                                      type="text"
                                      value={certification.Certification_ID}
                                      className="form_control"
                                      placeholder="Please Enter Your Course Completion ID"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Certification URL</label>
                                    <input
                                      name="Certification_URL"
                                      onChange={(e) => certificationHandling(e)}
                                      type="text"
                                      value={certification?.Certification_URL}
                                      className="form_control"
                                      placeholder="Please Mention Completion URl"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label> Certificate Validity From</label>
                                    <input
                                      name="Certification_Validity_From"
                                      onChange={(e) => certificationHandling(e)}
                                      type="date"
                                      value={moment(
                                        certification?.Certification_Validity_From
                                      ).format("YYYY-MM-DD")}
                                      className="form_control"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>
                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label> Certificate Validity To</label>
                                    <input
                                      name="Certification_Validity_To"
                                      onChange={(e) => certificationHandling(e)}
                                      type="date"
                                      value={moment(
                                        certification?.Certification_Validity_To
                                      ).format("YYYY-MM-DD")}
                                      className="form_control"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>

                                {/* <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="defaultCheck1"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="defaultCheck1"
                                      >
                                        This Certificate Does Not Expire
                                      </label>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="update"
                              onClick={(e) =>
                                handlecertification(e, certification._id)
                              }
                              data-dismiss="modal"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <p className="job_usa" id="DesiredCareer">
                    Add details of Certification you have filed.
                  </p> */}
                </div>
              </div>

              <div className="content" id="DesiredCareer">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Desired Career Profile
                  </h5>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#careerProfile"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>
                <div className="container-fluid career_profile">
                  {/* <a
                    href="#"
                    data-toggle="modal"
                    data-target="#careerProfile"
                    className="edit_resume"
                  >
                    {" "}
                    Edit{" "}
                    <i className="fas fa-pencil-alt pencil_clearfix pencil text-white"></i>
                  </a> */}

                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      {/* <div className="career_profile_content">
                        <h5 className="industry">Industry</h5>
                        <p className="it_employees">
                          {careerprofile.career_Industry}
                        </p>
                      </div> */}

                      <div
                        className="career_profile_content"
                        id="PersonalDetails"
                      >
                        <h5 className="industry">Desired Industry</h5>
                        <p className="it_employees">
                          {profile?.careerprofile?.[0]?.Desired_Industry
                            ? profile?.careerprofile?.[0]?.Desired_Industry
                            : "No Data Found"}
                        </p>
                      </div>

                      <div
                        className="career_profile_content"
                        id="PersonalDetails"
                      >
                        <h5 className="industry">Designation</h5>
                        <p className="it_employees">
                          {profile?.careerprofile?.[0]?.Desired_Role_URL
                            ? profile?.careerprofile?.[0]?.Desired_Role_URL
                            : "No Data Found"}
                        </p>
                      </div>

                      {/* <div className="career_profile_content">
                        <h5 className="industry">Role</h5>
                        <p className="it_employees">
                          {careerprofile.Desired_Role_URL}
                        </p>
                      </div> */}

                      <div className="career_profile_content">
                        <h5 className="industry">Employement Type</h5>
                        <p className="it_employees">
                          {profile?.careerprofile?.[0]?.Desired_Employement_Type
                            ? profile?.careerprofile?.[0]
                                ?.Desired_Employement_Type
                            : "No Data Found"}
                        </p>
                      </div>

                      {/* <div className="career_profile_content">
                        <h5 className="industry">Available to Join </h5>
                        <p className="it_employees">
                          {careerprofile.Desired_AvailableJoinYears} -{" "}
                          {careerprofile.Desired_AvailableJoinMonths}
                        </p>
                      </div> */}
                      {/* <div
                        className="career_profile_content"
                        id="PersonalDetails"
                      >
                        <h5 className="industry">Desired Industry</h5>
                        <p className="it_employees">
                          {careerprofile.Desired_Industry}
                        </p>
                      </div> */}
                      <div className="career_profile_content">
                        <h5 className="industry">Prefered Location</h5>
                        <p className="it_employees">
                          {profile?.careerprofile?.[0]?.Desired_Location
                            ? profile?.careerprofile?.[0]?.Desired_Location
                            : "No Data Found"}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      {/* <div className="career_profile_content">
                        <h5 className="industry">Functional Area</h5>
                        <p className="it_employees">
                          {careerprofile.Desired_Functional_Area_Department}
                        </p>
                      </div> */}
                      <div className="career_profile_content">
                        <h5 className="industry">Job Type</h5>
                        <p className="it_employees">
                          {profile?.careerprofile?.[0]?.Desired_Job_Type
                            ? profile?.careerprofile?.[0]?.Desired_Job_Type
                            : "No Data Found"}
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Desired Shift</h5>
                        <p className="it_employees">
                          {profile?.careerprofile?.[0]?.Desired_PrefferedShift
                            ? profile?.careerprofile?.[0]
                                ?.Desired_PrefferedShift
                            : "No Data Found"}
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Expected CTC</h5>
                        <p className="it_employees">
                          {profile?.careerprofile?.[0]
                            ?.Desired_Expected_SalaryinLakhs
                            ? profile?.careerprofile?.[0]
                                ?.Desired_Expected_SalaryinLakhs
                            : "No Data Found"}

                          {/* .{careerprofile.Desired_Expected_SalaryinThousands} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="careerProfile"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Desired Career
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form action="#">
                          <div className="row my-3">
                            {/* <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Industry</label>
                                <input
                                  name="career_Industry"
                                  onChange={(e) => careerprofileHandling(e)}
                                  type="text"
                                  className="form_control"
                                  placeholder="Eg:  IT , Non-IT"
                                  value={careerprofile.career_Industry}
                                />
                              </div>
                            </div> */}

                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>Desired Industry</label>

                                <Autocomplete
                                  id="combo-box-demo"
                                  single
                                  value={
                                    profile?.careerprofile?.[0]
                                      ?.Desired_Industry
                                  }
                                  options={Categorydata.map((res) => {
                                    return res.Category;
                                  })}
                                  getOptionLabel={(option) => option}
                                  onChange={(e, value) => {
                                    setProfile({
                                      ...profile,
                                      careerprofile: [
                                        {
                                          ...profile.careerprofile?.[0],
                                          Desired_Industry: value,
                                        },
                                      ],
                                    });
                                    // setEmployment({
                                    //   ...employment,
                                    //   organization: value,
                                    // });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      name="single"
                                      label="Please Enter Desired Industry"
                                      variant="outlined"
                                      fullWidth
                                    />
                                  )}
                                />
                                {/* <input
                                  name="Desired_Industry"
                                  onChange={(e) => careerprofileHandling(e)}
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Enter Desired Industry"
                                  value={
                                    profile?.careerprofile?.[0]
                                      ?.Desired_Industry
                                  }
                                /> */}
                              </div>
                            </div>

                            {/* <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>Specialization</label>
                                <input
                                  name="Desired_Functional_Area_Department"
                                  onChange={(e) => careerprofileHandling(e)}
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Your Specialization"
                                  value={
                                    careerprofile.Desired_Functional_Area_Department
                                  }
                                />
                              </div>
                            </div> */}

                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>Designation</label>
                                <Autocomplete
                                  id="combo-box-demo"
                                  single
                                  value={
                                    profile?.careerprofile?.[0]
                                      ?.Desired_Role_URL
                                  }
                                  // value={
                                  //   employment?.designation
                                  //     ? employment?.designation
                                  //     : null
                                  // }
                                  options={Designationdata.map((res) => {
                                    return res.Designation;
                                  })}
                                  getOptionLabel={(option) => option}
                                  onChange={(e, value) => {
                                    setProfile({
                                      ...profile,
                                      careerprofile: [
                                        {
                                          ...profile?.careerprofile?.[0],
                                          Desired_Role_URL: value,
                                        },
                                      ],
                                    });

                                    // setEmployment({
                                    //   ...employment,
                                    //   designation: value,
                                    // });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      name="single"
                                      label="Enter Your Desired Designation"
                                      variant="outlined"
                                      fullWidth
                                    />
                                  )}
                                />
                                {/* <input
                                  name="Desired_Role_URL"
                                  onChange={(e) => careerprofileHandling(e)}
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Your Desired Designation"
                                  value={
                                    profile?.careerprofile?.[0]
                                      ?.Desired_Role_URL
                                  }
                                /> */}
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Job Type</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    // name="inlineRadioOptions"
                                    name="Desired_Job_Type"
                                    id="inlineRadio1"
                                    value="Permanent"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Job_Type === "Permanent"
                                    }
                                    onChange={(e) => careerprofileHandling(e)}
                                    // value={careerprofile.Desired_Job_Type}
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Permanent
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Desired_Job_Type"
                                    // name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="Contractual"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Job_Type === "Contractual"
                                    }
                                    //  value={careerprofile.Desired_Job_Type}
                                    onChange={(e) => careerprofileHandling(e)}
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Contractual
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Employement Type</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_Employement_Type"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    // name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="Full Time"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Employement_Type ===
                                      "Full Time"
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Full Time
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_Employement_Type"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    // name="inlineRadioOptions"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Employement_Type ===
                                      "Part Time"
                                    }
                                    id="inlineRadio2"
                                    value="Part Time"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Part Time
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_Employement_Type"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Employement_Type ===
                                      "Freelancer"
                                    }
                                    // name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="Freelancer"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Freelancer
                                  </label>
                                </div>

                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_Employement_Type"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Employement_Type ===
                                      "Work From Home"
                                    }
                                    // name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="Work From Home"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Work From Home
                                  </label>
                                </div>

                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_Employement_Type"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Employement_Type ===
                                      "Work Abroad"
                                    }
                                    // name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="Work Abroad"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Work Abroad
                                  </label>
                                </div>

                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_Employement_Type"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    // name="inlineRadioOptions"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_Employement_Type ===
                                      "Internships"
                                    }
                                    id="inlineRadio2"
                                    value="Internships"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Internships
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                              <label className="my-2">Preffered Shift</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_PrefferedShift"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_PrefferedShift === "Any"
                                    }
                                    // name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="Any"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Any
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_PrefferedShift"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    // name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_PrefferedShift === "Day"
                                    }
                                    value="Day"
                                    // value={careerprofile.Desired_Employement_Type}
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Day
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    name="Desired_PrefferedShift"
                                    onChange={(e) => careerprofileHandling(e)}
                                    className="form-check-input"
                                    type="radio"
                                    checked={
                                      profile?.careerprofile?.[0]
                                        ?.Desired_PrefferedShift === "Night"
                                    }
                                    // name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="Night"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Night
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>Expected CTC</label>
                                <select
                                  className="form_control"
                                  value={
                                    profile?.careerprofile?.[0]
                                      ?.Desired_Expected_SalaryinLakhs
                                      ? profile?.careerprofile?.[0]
                                          ?.Desired_Expected_SalaryinLakhs
                                      : ""
                                  }
                                  name="Desired_Expected_SalaryinLakhs"
                                  onChange={(e) => careerprofileHandling(e)}
                                >
                                  <option hidden>Expected CTC</option>
                                  <option value="0-3 LPA">0 - 3 LPA</option>
                                  <option value="3-5 LPA">3 - 5 LPA</option>
                                  <option value="5-7 LPA">5 - 7 LPA</option>
                                  <option value="7-10 LPA">7 - 10 LPA</option>
                                  <option value="10-15 LPA">10 - 15 LPA</option>
                                  <option value="15-20 LPA">15 - 20 LPA</option>
                                  <option value="10-15 LPA">20+ LPA</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                              <label>Prefered Location</label>
                              <Autocomplete
                                id="combo-box-demo"
                                single
                                value={[
                                  profile?.careerprofile?.[0]?.Desired_Location,
                                ]}
                                options={locations.map((res) => {
                                  return res.location;
                                })}
                                getOptionLabel={(option) => option}
                                onChange={(e, value) => {
                                  setProfile({
                                    ...profile,
                                    careerprofile: [
                                      {
                                        ...profile.careerprofile[0],
                                        Desired_Location: value,
                                      },
                                    ],
                                  });
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    name="single"
                                    label="Enter your Preferred location"
                                    variant="outlined"
                                    fullWidth
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="update"
                          onClick={(e) =>
                            handlecareerprofile(e, profile.careerprofile[0]._id)
                          }
                          data-dismiss="modal"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Personal Details
                  </h5>

                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#personalDetails"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>
                <div className="container-fluid career_profile">
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      <div className="career_profile_content">
                        <h5 className="industry">Date Of Birth</h5>
                        <p className="it_employees">
                          {moment(profile.personaldetails.dateofbirth).format(
                            "YYYY-MM-DD"
                          )}
                        </p>
                      </div>

                      <div className="career_profile_content">
                        <h5 className="industry">Age</h5>
                        <p className="it_employees">
                          {profile.personaldetails.age}
                        </p>
                      </div>

                      <div className="career_profile_content">
                        <h5 className="industry">Gender</h5>
                        <p className="it_employees">
                          {profile.personaldetails.gender}
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Marital Status</h5>
                        <p className="it_employees">
                          {profile.personaldetails.maritalStatus}{" "}
                        </p>
                      </div>

                      <div className="career_profile_content">
                        <h5 className="industry">Languages</h5>
                        <p className="it_employees">
                          {profile.personaldetails.languages.map(
                            (lng, index, arr) => {
                              return (
                                <>
                                  {lng}
                                  {index !== arr.length - 1 ? "," : ""}
                                </>
                              );
                            }
                          )}{" "}
                        </p>
                        {/* <div className="form-group mt-3">
                          {profile?.personaldetails?.languages.map((languagesss) => {
                            return (
                              <button className="js" id="Employment">
                                {languagesss}
                              </button>
                            );
                          })}
                        </div> */}
                      </div>

                      <div className="career_profile_content">
                        <h5 className="industry">AddressProof</h5>
                        <p className="it_employees">
                          {profile.personaldetails.AddressProof}{" "}
                        </p>
                      </div>

                      {/* <div className="career_profile_content">
                        <h5 className="industry">
                          Do you have marg accounting certification?{" "}
                        </h5>
                        <p className="it_employees">
                          {profile.personaldetails.margaccount}{" "}
                        </p>
                      </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      <div className="career_profile_content">
                        <h5 className="industry">Permanent Address</h5>
                        <p className="it_employees">
                          {profile.personaldetails.address}{" "}
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Area Pin Code</h5>
                        <p className="it_employees">
                          {profile.personaldetails.pincode}{" "}
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Home Town</h5>
                        <p className="it_employees">
                          {profile.personaldetails.hometown}{" "}
                        </p>
                      </div>

                      <div className="career_profile_content">
                        <h5 className="industry">Do You Have Passport</h5>
                        <p className="it_employees">
                          {/* {profile.personaldetails.hometown}{" "} */}
                          {profile.personaldetails.passport}{" "}
                        </p>
                      </div>

                      <div className="career_profile_content">
                        <h5 className="industry">AddressProof Number</h5>
                        <p className="it_employees">
                          {profile.personaldetails.AdressProofNumber}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="personalDetails"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Personal Details
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form action="#">
                          <div className="row my-3">
                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>Date Of birth</label>
                                <input
                                  className="form_control"
                                  type="date"
                                  name="dateofbirth"
                                  value={moment(
                                    profile?.personaldetails?.dateofbirth
                                  ).format("YYYY-MM-DD")}
                                  onChange={(e) => onchangeDetails(e)}
                                />
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>Age</label>
                                <input
                                  name="age"
                                  onChange={(e) => onchangeDetails(e)}
                                  type="number"
                                  className="form_control"
                                  placeholder="Please Enter Age"
                                  value={profile?.personaldetails?.age}
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Gender</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={(e) => onchangeDetails(e)}
                                    checked={
                                      profile.personaldetails.gender === "Male"
                                    }
                                    id="inlineRadio1"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Male
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={(e) => onchangeDetails(e)}
                                    checked={
                                      profile.personaldetails.gender ===
                                      "Female"
                                    }
                                    id="inlineRadio2"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Female
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    onChange={(e) => onchangeDetails(e)}
                                    checked={
                                      profile.personaldetails.gender === "Male"
                                    }
                                    id="inlineRadio3"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio3"
                                  >
                                    Other
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Permanent Address</label>
                                <input
                                  name="address"
                                  onChange={(e) => onchangeDetails(e)}
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Enter Your Permanent Address"
                                  value={profile.personaldetails.address}
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Hometown</label>
                                <input
                                  name="hometown"
                                  onChange={(e) => onchangeDetails(e)}
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Hometown"
                                  value={profile.personaldetails.hometown}
                                />
                              </div>
                            </div>
                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>PIN-Code</label>
                                <input
                                  name="pincode"
                                  type="number"
                                  className="form_control"
                                  placeholder="Enter PIN-Code"
                                  value={profile?.personaldetails?.pincode}
                                  onChange={(e) => onchangeDetails(e)}
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Marital Status</label>
                              <div className="form-group">
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="maritalStatus"
                                      id="inlineRadio1"
                                      value="Married"
                                      checked={
                                        profile.personaldetails
                                          .maritalStatus === "Married"
                                      }
                                      onChange={(e) => onchangeDetails(e)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      Married
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="maritalStatus"
                                      id="inlineRadio2"
                                      value="UnMarried"
                                      checked={
                                        profile.personaldetails
                                          .maritalStatus === "UnMarried"
                                      }
                                      onChange={(e) => onchangeDetails(e)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Unmarried
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      name="maritalStatus"
                                      className="form-check-input"
                                      type="radio"
                                      id="inlineRadio2"
                                      value="Others"
                                      checked={
                                        profile.personaldetails
                                          .maritalStatus === "Others"
                                      }
                                      onChange={(e) => onchangeDetails(e)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Others
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label> Address Proof</label>
                                <select
                                  className="form_control"
                                  name="AddressProof"
                                  value={profile.personaldetails.AddressProof}
                                  onChange={(e) => onchangeDetails(e)}
                                >
                                  <option hidden>Add Address Proof</option>
                                  <option value="Aadhar Card">
                                    Aadhar card
                                  </option>
                                  <option value="Driving License">
                                    Driving license
                                  </option>
                                  <option value="Pan Card">Pan card</option>
                                  <option value="Voter Card">Voter card</option>
                                </select>
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>Address Proof Number</label>
                                <input
                                  name="AdressProofNumber"
                                  onChange={(e) => onchangeDetails(e)}
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Address Proof Number"
                                  value={
                                    profile.personaldetails.AdressProofNumber
                                  }
                                />
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                              <label className="my-2">
                                Do You have Passport
                              </label>
                              <div className="form-group">
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="passport"
                                      id="passport"
                                      value="Yes"
                                      checked={
                                        profile.personaldetails.passport ===
                                        "Yes"
                                      }
                                      onChange={(e) => onchangeDetails(e)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="passport"
                                    >
                                      Yes
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="passport"
                                      id="passport1"
                                      value="No"
                                      checked={
                                        profile?.personaldetails?.passport ===
                                        "No"
                                      }
                                      onChange={(e) => onchangeDetails(e)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for="passport1"
                                    >
                                      No
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Languages</label>
                                <Autocomplete
                                  id="combo-box-demo"
                                  multiple
                                  value={profile.personaldetails.languages}
                                  options={Languages.map((res) => {
                                    return res.Language;
                                  })}
                                  getOptionLabel={(option) => option}
                                  onChange={(e, value) => {
                                    // setPost({
                                    //   ...post,
                                    //   cities: value,
                                    // });
                                    setProfile({
                                      ...profile,
                                      personaldetails: {
                                        ...profile.personaldetails,
                                        languages: value,
                                      },
                                    });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      name="multiple"
                                      label="Enter Add Languages"
                                      variant="outlined"
                                      fullWidth
                                    />
                                  )}
                                />

                                {/* <Autocomplete
                                  id="combo-box-demo"
                                  multiple
                                  value={profile?.personaldetails?.languages}
                                  options={languagedata.map((res) => {
                                    return res.Language;
                                  })}
                                  getOptionLabel={(option) => option}
                                  onChange={(e, value) => {
                                    setProfile({
                                      ...profile,
                                      personaldetails: value,
                                    });
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      name="multiple"
                                      label="Enter your Skills"
                                      variant="outlined"
                                      fullWidth
                                    />
                                  )}
                                /> */}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="update"
                          data-dismiss="modal"
                          onClick={(e) => handlePersonalDetails(e)}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
