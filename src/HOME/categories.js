import React from 'react'
import CountUp from 'react-countup';
import {RiBankLine} from 'react-icons/ri'
import {FaHeadset,FaChartPie,FaLaptopCode} from 'react-icons/fa'
// import {HiChartPie} from 'react-icons/hi'
export const Categories = () => {
   
  const [loading, setLoading] = React.useState(false);
  const onStart = () => {setLoading(true)};
  const onEnd = () => {setLoading(false)};
  const containerProps = {
    'aria-busy': loading
  };
    return (
        
        <div>

<section id="categories">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-12 pc">
                <h2>Popular Categories</h2>
                <h6 className="fw3 ">20+ Categories work wating for you</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 text-left">
                <h2 className=" counter d-inline" > <CountUp end={5000} duration="10" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /></h2>
                <h2 className="d-inline pl-1">+</h2>
                <h6>Recruiters</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 text-center">
                <h2 className=" counter d-inline"> <CountUp end={500000} duration="10" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /></h2>
                <h2 className="d-inline pl-1">+</h2>
                <h6>Students</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 text-right">
                <h2 className=" counter d-inline"> <CountUp end={20000} duration="10" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /></h2>
                <h2 className="d-inline pl-1">+</h2>
                <h6>Freelancers</h6>
            </div>
        </div>

    </div>
</section>


<section>
<div className="pt-2 pb-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-one"><i className="fas fa-paint-brush"></i></span>
                    <h6>Design & MultiMedia Jobs</h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-two"><span><FaLaptopCode /></span></span>

                    <h6>IT Industry Jobs</h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-three"><span><FaChartPie /></span></span>
                    <h6> Marketing Jobs</h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-four"><span><FaHeadset/></span></span>
                    <h6>BPO Jobs</h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-five"><i className="fas fa-chart-bar"></i></span>
                    <h6>Business Analyst Jobs</h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-six">
                        {/* <span><MdRealEstateAgent/></span> */}
                        <img src="/images/Construction.png" style={{height: "100px",marginTop: "-20px"}}/>
                        </span>
                    <h6>Counstruction Jobs  </h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item" >
                    <span className="icon feature-box-col-six"><span className='svg_icons'><RiBankLine size='lg'/></span></span>
                    <h6>Bank Jobs</h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item" >
                    <span className="icon feature-box-col-six"><i className="fa fa-industry"></i></span>
                    <h6 id='company'>Industrial Jobs</h6>
                    {/* <p>198 Open Positions</p> */}
                </div>
            </div>
        </div>
    </div>
</div>
</section>


</div>


      
    )
}
export default Categories;