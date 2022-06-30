import React from 'react'
import { NavLink } from 'react-router-dom'

const Subfilter = ()=>{

return(<>
                <div className="alljob_buttons text-left ">
                     <div className='Job_link'>   
                    <NavLink to="/alljobs" className="jobs_jobs">
                            All Jobs
                           
                    </NavLink>
                    </div>
                    <div className='Job_link'>    
                    <NavLink
                            to="/companyjobs" className="jobs_jobs">
                                Jobs By
                            Company
                    </NavLink></div>
               
          <div className='Job_link'>
                    <NavLink
                            to="/categoryjobs" className="jobs_jobs">
                   Jobs By
                            Category
                            </NavLink></div>
               
          <div className='Job_link'>
                            <NavLink
                            to="/locationaljobs" className="jobs_jobs">
                             Jobs By
                            Location</NavLink></div>
               
          <div className='Job_link'>
                            <NavLink
                            to="/designationjobs" className="jobs_jobs">
                                    Jobs By Designation
                            </NavLink></div>
               
          <div className='Job_link'>
                            <NavLink
                            to="/skilljobs" className="jobs_jobs">
                   Jobs By Skill
                    </NavLink></div>
               
                </div>

</>)

}
export default Subfilter