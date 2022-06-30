import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactGA from "react-ga";
import "react-toastify/dist/ReactToastify.css";
// import Categories from './HOME/categories';
// import Foot from './HOME/footer/foot';
// import Clients from './Clients';
// import Testimonials from './testimonials';
// import MembershipPlans from './Membership Plans';
import COMPANY_PROFILE from "./For_Employers/COMPANY_PROFILE";
import POST_A_JOB from "./For_Employers/POST_A_JOB";
import Manage_Jobs from "./For_Employers/Manage_Jobs";
import Companies from "./Pages/Companies";
import BrowseFilterGrid from "./Pages/Browse_Jobs/BrowseFilterGrid";
import BrowseFilterList from "./Pages/Browse_Jobs/BrowseFilterList";
import Navbar from "./NavBar/NavBar";
import Home from "./HOME/Home";
import MyProfile from "./Students/MyProfile";
import MyResume from "./Students/Resume/MyResume";
import AppliedJobs from "./Students/AppliedJobs";
import JobAlerts from "./Students/JobAlerts";
import SavedJobs from "./Students/SavedJobs";
import ChangePassword from "./Students/ChangePassword";
import AllJobs from "./Pages/jobs/AllJobs";
import CompanyJobs from "./Pages/jobs/CompanyJobs";
import DesignationJobs from "./Pages/jobs/DesignationJobs";
import CategoryJobs from "./Pages/jobs/CategoryJobs";
import SkillJobs from "./Pages/jobs/SkillJobs";
import LocationalJobs from "./Pages/jobs/LocationalJobs";
import Footer from "./HOME/Footer";
import Applications from "./For_Employers/Applications";
import ScrollToTop from "./ScrollToTop";
import Jobdetailes from "./Pages/Jobdetailes";
import Password from "../src/For_Employers/Password";
import Updatepost from "./For_Employers/updatepost";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Terms from "./Terms&Conditions/Terms";
import Privacypolicy from "./Terms&Conditions/Privacypolicy";
import Auth from "./auth/Auth";
// import HireAndTrain from './NavBar/Services/HireAndTrain';
import { useDispatch, useSelector } from "react-redux";
import Maze from "./Services/components/Maze";
import FraudAlert from "./FraudAlert/FraudAlert";
import Error from "./404Error/Error";
import Textresume from "./Services/components/TextResume/Textresume";
import Fakejobalert from "./Services/components/FakeJobAlert/Fakejobalert";
import MainTest from "./Services/components/OnlineExam/MainTest";
import Paytm from "./Paytm";
import PaymentStatusSuccess from "./PaymentStatus";
import PaymentStatusFail from "./PaymentStatusFail";
import BuyTabs from "./For_Employers/Buy Employer services/BuyTabs";
import Calculator from "./Services/components/OnlineExam/Calculator/Calculator";
import GettingStuList from "./GettingList/GettingStuList";
import StudentList from "./For_Employers/StudentList";
import HomeBanners from "./HOME/HomeBanners/HomeBanners";
import HomeBanner2 from "./HOME/HomeBanners/HomeBanner2";
import HomeBanner3 from "./HOME/HomeBanners/HomeBanner3";
import HomeBanner4 from "./HOME/HomeBanners/HomeBanner4";
import CareerServices from "../src/HOME/career/CareerServices";
import SellSkill from "./Services/SellYourSkill/SellSkill";
import Searchcandidates from "./For_Employers/SearchCandidates/Searchcandidates";
import ScrollButton from "./Back to top/ScrollButton";
import Dashboard1 from "./For_Employers/Dashboard/Dashboard1";
// import Searchcandidates from "../src/Pages/Searchcandidates/Searchcandidates";
// import Searchcandidates from '../../PAB_Jobs_Client/src/For_Employers/SearchCandidates/Searchcandidates'
export const App = (props) => {
  // const setGA = () => {
  // ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS, {
  //   // debug: true,
  // });
  //   // console.log('Yeeeeeeee', process.env.REACT_APP_GOOGLE_ANALYTICS);
  // };

  const result = useSelector((state) => state.data);
  console.log(process.env.REACT_APP_SECRET_NAME, "secret");
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route exact path="/stulist" element={<GettingStuList />} />
          <Route path="/auth" exact element={<Auth />} />
          {/* <Route exact path="/signin" element={<SignIn />} />
   <Route exact path="/signup" element={<SignUp />} /> */}
          <Route exact path="/payment" element={<Paytm />} />
          <Route exact path="/dashboard1" element={<Dashboard1/>}/>
          <Route
            exact
            path="/success/:orderId"
            element={<PaymentStatusSuccess />}
          />
          <Route
            exact
            path="/failed/:orderId"
            element={<PaymentStatusFail />}
          />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/studentlist" element={<StudentList />} />
          <Route exact path="/searchcandidate" element={<Searchcandidates />} />
          <Route exact path="/homebanners" element={<HomeBanners />} />
          <Route exact path="/homebanner1" element={<HomeBanner2 />} />
          <Route exact path="/homebanner3" element={<HomeBanner3 />} />
          <Route exact path="/homebanners4" element={<HomeBanner4 />} />
          <Route exact path="/careers" element={<CareerServices />} />

          {result?.type === "recruiter" ? (
            <>
              <Route exact path="/Buytabs" element={<BuyTabs />} />
              <Route
                exact
                path="/company_profile"
                element={<COMPANY_PROFILE />}
              />
              <Route exact path="/post_jobs" element={<POST_A_JOB />} />
              <Route exact path="/Manage_jobs" element={<Manage_Jobs />} />
              <Route exact path="/password" element={<Password />} />
              <Route
                exact
                path="/Applications/:id"
                element={<Applications />}
              />
              <Route exact path="/updatepost/:id" element={<Updatepost />} />
            </>
          ) : result?.type === "applicant" ? (
            <>
              <Route exact path="/myprofile" element={<MyProfile />} />
              categoryjobs
              <Route exact path="/myresume" element={<MyResume />} />
              <Route exact path="/appliedjobs" element={<AppliedJobs />} />
              <Route exact path="/jobalerts" element={<JobAlerts />} />
              <Route exact path="/savedjobs" element={<SavedJobs />} />
              <Route
                exact
                path="/changepassword"
                element={<ChangePassword />}
              />
              <Route exact path="/onlinetest" element={<MainTest />} />
            </>
          ) : (
            <Route path="*" element={<Auth />} />
          )}
          <Route exact path="/jobdetailes/:id" element={<Jobdetailes />} />
          {/* <Route exact path="/companies" element={<Companies />} /> */}
          <Route
            exact
            path="/browsefilterlist"
            element={<BrowseFilterList />}
          />
          <Route
            exact
            path="/browsefiltergrid"
            element={<BrowseFilterGrid />}
          />
          <Route exact path="/alljobs" element={<AllJobs />} />
          <Route exact path="/companyjobs" element={<CompanyJobs />} />
          <Route exact path="/designationjobs" element={<DesignationJobs />} />
          <Route exact path="/categoryjobs" element={<CategoryJobs />} />
          <Route exact path="/skilljobs" element={<SkillJobs />} />
          <Route exact path="/hireandtrain" element={<Maze />} />
          <Route exact path="/locationaljobs" element={<LocationalJobs />} />
          <Route exact path="/termsandconditions" element={<Terms />} />
          <Route exact path="/Privacypolicy" element={<Privacypolicy />} />
          <Route exact path="/fraudalert" element={<FraudAlert />} />
          <Route exact path="/textresume" element={<Textresume />} />
          <Route exact path="/fakejobalert" element={<Fakejobalert />} />
          <Route exact path="/sellskill" element={<SellSkill />} />

          <Route path="*" exact={true} element={<Error />} />
        </Routes>
        <ScrollButton/>
        <Footer />

        <ToastContainer autoClose={1500} />
      </BrowserRouter>
    </div>
  );
};
export default App;
