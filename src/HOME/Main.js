import React from 'react'

 const Main = () => {
    return (
        <div>
            
        <section>
        <div id="sec1" className="container-fluid">
            <div className="container hm1">
                <div className="home1">
                    {/* <Link id="am1" className="main_text "
                        to="/browsefilterlist">Find Jobs, Employment
                        &amp; Career
                        Opportunities</Link>
                    <h2 className="am2">Search Between More Than <br /> <span className="num_text">50,000</span> Open Jobs.
                    </h2> */}
                </div>
                <div className="hm2">
                    <form className="form-control">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    {/* <label>
                                    </label> */}
                                    <div className="input-group">
                                        <input type="text" className="form-control home_input"
                                            placeholder="Job Title, Keywords, or Phrase" />
                                        <div className="input-group-append">
                                            <span className="input-group-text home_input_group">
                                                <i className="fas fa-search" id="fa1"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group">
                                    <label></label>
                                    <div className="input-group">
                                        <input type="text" className="form-control home_input" placeholder="Location" />
                                        <div className="input-group-append">
                                            <span className="input-group-text home_input_group">
                                                <i className="fas fa-map-marker-alt" id="fa2"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 job_btn">
                                <label for=""></label>
                                <Link
                                to="/browsefilterlist"
                                className="text-white"> <button id="fa3" type="submit" className=" btn-primary  btn-block">Find Job</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Main