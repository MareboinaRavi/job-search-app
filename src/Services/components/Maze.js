import React from 'react'
 
import Eligibility from './Eligibility';
import JobDetails from './JobDetails';
import Selection from './Selection';
import Train from './Train';
import Benefits from './Benefits';
import JobGuarantee from './JobGuarantee';
import Program from './Program';
import Home from './Home';
// import Navbar from './Navbar';
// import Footer from './Footer';
import Testimonials from './Testimonials';

const Maze = () => {
  return (
    <div>
      <div className='hire_train_main'>
    {/* <Navbar /> */}
    <Home />
    {/* <JobDetails /> */}
    
    {/* <Eligibility /> */}
    <Selection />
    <Benefits />
    <JobGuarantee />
    <Program />
     <Testimonials />
     {/* <Footer /> */}
    </div>
    </div>
  )
}

export default Maze