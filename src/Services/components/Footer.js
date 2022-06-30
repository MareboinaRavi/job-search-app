import React from 'react'

const Footer = () => {
  return (
    <div className='footer_body'>
    <div className='container-fluid '>
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12 footer_one'>
                <ul>
                    <li><i className='fab fa-facebook'></i>Facebook</li>
                    <li><i className='fab fa-twitter'></i>Twitter</li>
                    <li><i className='fab fa-linkedin'></i>LinkedIn</li>
                </ul>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 footer_one'>
                <ul>
                    <li><i className='fas fa-phone'></i>+91 9988775566</li>
                    <li><i className='fas fa-phone'></i>+91 6677441234</li>
                    <li><i className='fab fa-google'></i>hr@pabjobs.com</li>
                </ul>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 footer_one'>
                <ul>
                    <li><i className=' '></i>Hyderabad - Madhapur</li>
                    <li><i className=' '></i>Andhra - vijayawada</li>
                    <li><i className=' '></i>Chennai - Nungambakkam</li>
                </ul>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Footer