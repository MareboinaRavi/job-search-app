import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedCities from '../../HOME/FeaturedCities'
import CategoryJobs from './CategoryJobs'
import CompanyJobs from './CompanyJobs'
import DesignationJobs from './DesignationJobs'
import LocationalJobs from './LocationalJobs'
import SearchFilter from './SearchFilter'
import SkillJobs from './SkillJobs'
import Subfilter from './subfilter'

 const AllJobs = () => {
    return (
        <div>
        <div className="jobs_alljobs">
        <div className="heading_pic_alljobs w-100 text-white  h-100">
            <div className="container">
            <SearchFilter />
               <Subfilter />
            </div>
        </div>
    </div>
    <FeaturedCities />
    {/* <LocationalJobs /> */}
    <CompanyJobs />
 <CategoryJobs />
 <DesignationJobs />
 <SkillJobs />
 
    


  
  

        </div>
    )
}

export default AllJobs