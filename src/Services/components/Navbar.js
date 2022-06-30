import React from 'react'

const Navbar = () => {
  return (
    <div> 
     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
 <div className='container-fluid'>  
  <h1 className='logo_name'>PAB JOBS</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
   
      
      <li className="nav-item dropdown navbar_item">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Train & Hire
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">What is Train & Hire</a>
      
          <a className="dropdown-item" href="#">Who We Are</a>
 
          <a className="dropdown-item" href="#"> About the Job</a>
         
          <a className="dropdown-item" href="#"> Eligibility</a>
          <a className="dropdown-item" href="#"> Selection Process</a>
          <a className="dropdown-item" href="#"> Train & Hire Benefits</a>
          <a className="dropdown-item" href="#"> Job Guanrantee</a>
        </div>
      </li>
      <li className="nav-item navbar_item">
        <a className="nav-link " href="#">Clients</a>
      </li>
       
      <li className="nav-item navbar_item">
        <a className="nav-link " href="#">Testimonial</a>
      </li>
       
      
      
      <li className="nav-item navbar_item">
        <a className="nav-link navbar_enrolement " href="#"> <button>Enrolement</button></a>
      </li>
    </ul>
     
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar