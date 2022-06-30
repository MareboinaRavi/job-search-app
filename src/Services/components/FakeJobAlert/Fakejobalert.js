import React from 'react'
import '../FakeJobAlert/Fakejobalert.css'

const Fakejobalert = () => {
    return (
        <div>
        <div className="container-fluid fake_job_top">

{/* <!-- Content here --> */}

<div className="row p-3">
   <div className="col-lg-6">
       <h3>PabJobs.com</h3>
   </div>
   <div className="col-lg-6 row-style justify-content-end">
       {/* <!-- <button className="btn btn-outline-dark topButton">
 Take the quiz and find out
</button> --> */}
   </div>

   {/* <!-- Content here --> */}
   <div className="col-lg-5  first-content">
       <h4>Welcome to Pabjobs.com Security Centre</h4>
       <p>
           Job scams are unfortunately a frequent reality in the recruitment
           market. The rapid rise in the online job search has only fueled the
           situation and resulted in a spike in the number of frauds.
           <a className="btn text-primary" data-toggle="modal" data-target="#alert">Readmore</a>
       </p>

       {/* <!--first Modal --> */}

       <div className="modal modal_fake fade modalBox" id="alert" tabindex="-1" role="dialog"
           aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div className="modal-dialog modal-dialog-centered modal-lg " role="document">
               <div className="modal-content ">
                   <div className="modal-header fake_modal-header">
                       <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                       </button>
                   </div>
                   <div className="modal-body  fake_modal-body bg-white text-dark">
                       <h4 className="modal-title">Welcome to Pabjob Security Centre</h4>
                       <p>
                           Job scams are a common feature in the recruitment market.
                           The rapid rise in the online job search has only fueled the
                           situation and resulted in a spike in the number of frauds.
                           The primary motive behind such job-frauds is to dupe the
                           candidates of their hard-earned money.
                       </p>
                       <div className="mt-1">
                           <p>
                               In the wake of an increasing number of instances of fake
                               appointment letters and deferred job offers, we raise the
                               common RED FLAGS which would help you SPOT THE SCAM.
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>

{/* <!-- content --> */}

<div className="container-fulid">
   <div className="row row-color text-white p-5">
       <div className="col-lg-5 information">
           <p>
               <strong>Do not Pay any money or provide personal / financial
                   information</strong>
               (Credit/ debit card number, CVV number, OTP, etc.) to anyone.
               Fraudsters may ask you to pay in the pretext of registration fee,
               Refundable Fee, Document Processing fee or any other excuse.
               Before your respond to any email / call, we suggest you to do a
               discreet enquiry and be sure to verify the authenticity of the
               person with whom you are interacting
           </p>
           <p>You can also write to us at Pabjobs.com</p>
       </div>
       <div className="col-lg-7">

           {/* <!-- card-1 --> */}

          

           <div className="row row-style fake_job_card">
           <div className='card col-sm-4 card-animation card_display'>
           <div className=' fakejob_card_width'>
               <a className="button" href="#popup1" data-toggle="modal" data-target="#card1">
                   <div className=" card-position">
                       <div className="text-dark text-center ">
                           <div className="content-height">
                               <img className="img-fluid imgsize pt-5" alt="img"
                                   src="https://cdn-icons-png.flaticon.com/512/1255/1255445.png" />
                               <h4 className="pt-5">FAKE RECURITMENT ALERT TREND</h4>
                               <div className="card-text pt-3">
                                   <h6>
                                       How can you determine if a recruitment offer is scam?
                                   </h6>
                               </div>
                               <div className="">
                                   <a className="link" href="#popup1" data-toggle="modal" data-target="#card1"><i
                                           className="fas fa-angle-right pt-4 "></i></a>
                               </div>
                           </div>
                       </div>
                   </div>
               </a>
               </div>
</div>
               {/* <!-- card-2 --> */}
               <div className='card col-sm-4 card-animation card_display'>
               <a className="button" href="#popup1" data-toggle="modal" data-target="#card2">
                   <div className="card-position1">
                       <div className=" text-dark text-center ">
                           <div className=" content-height">
                               <img className="img-fluid imgsize pt-5" alt="img"
                                   src="https://cdn-icons-png.flaticon.com/512/1188/1188471.png" />
                               <h4 className="pt-5">HOW SCAMSTER TRICK</h4>
                               <div className="card-text pt-5">
                                   <h6>Gullible job seekers</h6>
                               </div>
                               <div className="">
                                   <a className="link" href="#popup1" data-toggle="modal" data-target="#card2"><i
                                           className="fas fa-angle-right pt-5"></i></a>
                               </div>
                           </div>
                       </div>
                   </div>
               </a>
               </div>

               {/* <!-- card-3 --> */}

               <div className='card col-sm-4 card-animation card_display'>
               <div className="card-position2">
                   <a href="#" className="link" data-toggle="modal" data-target="#card3">
                       <div className="text-dark text-center">
                           <div className="content-height">
                               <img className="img-fluid imgsize pt-5" alt="img"
                                   src="https://cdn-icons-png.flaticon.com/512/0/315.png" />
                               <h4 className="pt-5">HOW TO PROTECT YOURSELF?</h4>
                               <div className="card-text pt-5">
                                   <h6>Know the signs of a Job Scam</h6>
                               </div>
                               <a href="#" className="link" data-toggle="modal" data-target="#card3">
                                   <i className="fas fa-angle-right pt-5"></i>
                               </a>
                           </div>
                       </div>
                   </a>
               </div>
               </div>
           </div>
       </div>



       {/* <!-- ---------carousel media screens-------- --> */}

       <div className="row">
           <div className="col-md-12">
               <div id="carouselExampleControls" className="carousel slide slide2" data-ride="carousel"
                   data-interval="3000">
                   <div className="carousel-inner">
                       <div className="row carousel-row">

                           <div className="carousel-item active">
                               <a className="button" href="#" data-toggle="modal" data-target="#card1">
                                   <div className="card">

                                       <div className="carousel-height text-center">
                                           <div className="bg-white text-dark text-center card-height fakejob_card_content">
                                               <img className="img-fluid  m-auto imgsize pt-3" alt="img"
                                                   src="https://cdn-icons-png.flaticon.com/512/1255/1255445.png" />
                                               <h4 className="pt-5 mx-3">FAKE RECURITMENT ALERT TREND</h4>
                                               <div className="card-text pt-2">
                                                   <h6 className="mx-5">
                                                       How can you determine if a recruitment offer is scam?
                                                   </h6>
                                               </div>
                                               <div className="">
                                                   <a className="button" href="#" data-toggle="modal"
                                                       data-target="#card1"><i
                                                           className="fas fa-angle-right pb-1"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </a>

                           </div>


                           <div className="carousel-item">
                               <a className="button" href="#popup1" data-toggle="modal" data-target="#card2">
                                   <div className="card">
                                       <div className="carousel-height text-center">
                                           <div className="bg-white text-dark text-center card-height fakejob_card_content">
                                               <img className="img-fluid m-auto imgsize pt-5" alt="img"
                                                   src="https://cdn-icons-png.flaticon.com/512/1188/1188471.png" />
                                               <h4 className="pt-5">HOW SCAMSTER TRICK</h4>
                                               <div className="card-text pt-2">
                                                   <h6>Gullible job seekers</h6>
                                               </div>
                                               <div className="">
                                                   <a className="button" href="#popup1" data-toggle="modal"
                                                       data-target="#card2"><i
                                                           className="fas fa-angle-right pb-3  m-2"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </a>
                           </div>


                           <div className="carousel-item carousel-item-3">
                               <a className="button" href="#" data-toggle="modal" data-target="#card3">
                                   <div className="card">
                                       <div className="carousel-height text-center">
                                           <div className="bg-white  text-dark text-center card-height fakejob_card_content">
                                               <img className="img-fluid m-auto imgsize pt-5" alt="img"
                                                   src="https://cdn-icons-png.flaticon.com/512/0/315.png" />
                                               <h4 className="pt-5 mx-3">HOW TO PROTECT YOURSELF?</h4>
                                               <div className="card-text pt-3">
                                                   <h6>Know the signs of a Job Scam</h6>
                                               </div>
                                               <div className="">
                                                   <a href="#" className="link" data-toggle="modal"
                                                       data-target="#card3">
                                                       <i className="fas fa-angle-right pb-3"></i>
                                                   </a>
                                               </div>
                                           </div>
                                       </div>

                                   </div>
                               </a>
                           </div>
                       </div>
                       {/* <!-- <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
       </a>
       <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="sr-only">Next</span>
       </a> --> */}
                   </div>
               </div>
           </div>
           <div className="col-md-12 alertcontent">
               <p>
                   <strong>do not Pay any money or provide personal / financial
                       information</strong>
                   (Credit/ debit card number, CVV number, OTP, etc.) to anyone.
                   Fraudsters may ask you to pay in the pretext of registration fee,
                   Refundable Fee, Document Processing fee or any other excuse.
                   Before your respond to any email / call, we suggest you to do a
                   discreet enquiry and be sure to verify the authenticity of the
                   person with whom you are interacting
               </p>
               <p>You can also write to us at Pabjobs.com</p>
               {/* <!-- <div className="btn btn-block btn-outline-dark bottomButton">Take the quiz and find out</div> --> */}
               {/* <div className="col-md-6 mt-5">
                   <a href="#" className="text-dark border-right pr-2">Terms and Conditions</a>
                   <a href="#" className="text-dark ">Privacy Policy</a>
               </div>
               <div className="col-md-6">
                   <a href="#" className="text-dark pr-2 ">All rights reserved @ 2018 Info PabJobs.com</a>
               </div> */}
           </div>

       </div>
       {/* <div className="col-md-6 mt-5">
           <a href="#" className="text-white pr-2 border-right">Terms and Conditions</a>
           <a href="#" className="text-white pl-1">Privacy Policy</a>
       </div>
       <div className="col-md-6 mt-5 text-right">
           <a href="#" className="text-white pr-2 ">All rights reserved @ 2018 Info PabJobs.com</a>
       </div> */}
   </div>
</div>

{/* <!--------------------------- modals----------------------------->

<!-- --------card-1  Modal ----------> */}

<div className=" modal modal_fake fade " id="card1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
   aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
       <div className="modal-content">
           <div className="modal-header fake_modal-header border-0">
               <div className="row first-modal-row">
                   <div className="col-sm-3 text-center">
                       {/* <!-- <img className="img-fluid bg-white w-50 h-100 " alt="img"
         src="https://cdn-icons-png.flaticon.com/512/1255/1255445.png" /> --> */}
                       <i className="fas fa-solid fas fa-bell m-auto"></i>
                   </div>
                   <div className="col-9">
                       <h3>FAKE RECRUITMENT ALERT!</h3>
                       <p>
                           How can you determine if a recruitment offer is
                           scam?
                       </p>
                   </div>
               </div>
               <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
               </button>
           </div>
           <div className="modal-body fake_modal-body">

               {/* <!-- media screen for modal header --> */}
               <div className="row first-modal-row2">
                   <div className="col-sm-3 m-auto text-center">
                       <img className="img-fluid bg-white w-50 h-100 " alt="img"
                           src="https://cdn-icons-png.flaticon.com/512/1255/1255445.png" />
                   </div>
                   <div className="col-sm-9 m-auto text-center">
                       <h3>FAKE RECRUITMENT ALERT!</h3>
                       <p>
                           How can you determine if a recruitment offer is
                           scam?
                       </p>
                   </div>
               </div>
               {/* <!-- ----end---- --> */}

               <div className="row">
                   <div className="col-2 text-center mt-3">
                       {/* <!-- <img className="img-fluid bg-dark" alt="img"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/No_experience.svg" /> --> */}
                       <div className="m-auto">
                           <i className="fas fa-briefcase m-auto" id="icon"></i>
                       </div>
                   </div>
                   <div className="col-10 mt-3">
                       <h5>No experience required</h5>
                       <p>
                           Be cautious of the ads that say “anyone can do the
                           job!”
                       </p>
                   </div>
                   <div className="col-2 mt-3">
                       {/* <!-- <img className="img-fluid  " alt="img"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/On_the_spot_hiring.svg" /> --> */}
                       <div className="m-auto text-center">
                           <i className="fas fa-solid fa-file-signature m-auto" id="icon"></i>
                       </div>
                   </div>
                   <div className="col-10  mt-3">
                       <h5>On the spot hiring/tele interview</h5>
                       <p>
                           Reliable companies conduct thorough research to
                           analyse their potential employee before issuing an
                           offer letter
                       </p>
                   </div>
                   <div className="col-2  mt-3">
                       {/* <!-- <img className="img-fluid  " alt="img"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/Demands_you.svg" /> --> */}
                       <div className="m-auto text-center">
                           {/* <i className="fas fa-solid fas fa-indian-rupee-sign m-auto" id="icon"></i> */}
                           <i className=" fas fa-rupee-sign m-auto" id="icon"></i>

                       </div>
                   </div>
                   <div className="col-10  mt-3">
                       <h5>Demands you to pay money</h5>
                       <p>
                           NEVER PAY MONEY TO GET A JOB!!!No legitimate company
                           will ever ask you to pay for the job!
                       </p>
                   </div>
                   <div className="col-2  mt-3">
                       {/* <!-- <img className="img-fluid w-100 h-100"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/Salary_beyond.svg" /> --> */}
                       <div className="m-auto text-center">
                           {/* <i className="fa-solid fa-money-check-dollar m-auto" id="icon"></i> */}
                           {/* <i className="fas fa-solid fas fa-rupee-sign m-auto" id="icon"></i> */}
                           <i className="fas fa-dollar-sign m-auto" id="icon"></i>
                       </div>
                   </div>
                   <div className="col-10  mt-3">
                       <h5>Salary beyond expectations</h5>
                       <p>
                           Spammers often lure desperate job seekers with high
                           salary packages!
                       </p>
                   </div>
                   <div className="col-2  mt-3">
                       {/* <!-- <img className="img-fluid w-100 h-100"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/bank_details.svg" /> --> */}
                       <div className="m-auto text-center">
                           <i className="fas fa-solid fas fa-user-lock m-auto" id="icon"></i>
                       </div>
                   </div>
                   <div className="col-10  mt-3">
                       <h5>
                           You are asked to reveal personal information/ bank
                           details
                       </h5>
                       <p>
                           Please do not share pesmonal information or credit
                           card/ debit card number, OTP, CVV number.
                       </p>
                   </div>
                   <div className="col-2  mt-3">
                       {/* <!-- <img className="img-fluid w-100 h-100"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/Poorly_written_job.svg" /> --> */}
                       <div className="m-auto text-center">
                           <i className="fas fa-solid fas fa-newspaper m-auto" id="icon"></i>
                       </div>
                   </div>
                   <div className="col-10  mt-3">
                       <h5>Poorly written job ads</h5>
                       <p>
                           Poor writing skills, incorrect grammar and unclear
                           job descriptions bespeak a dubious job offer.
                       </p>
                   </div>
                   <div className="col-2  mt-3">
                       {/* <!-- <img className="img-fluid w-100 h-100"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/Personal_email.svg" /> --> */}
                       <div className="m-auto text-center">
                           <i className="fas fa-solid fas fa-at m-auto" id="icon"></i>
                       </div>
                   </div>
                   <div className="col-10  mt-3">
                       <h5>Personal email accounts</h5>
                       <p>
                           Genuine companies always display their web presence.
                           In case of consultants, apply due diligence for whom
                           they are hiring.
                       </p>
                   </div>
                   <div className="col-2 mt-3">
                       {/* <!-- <img className="img-fluid"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/popup_icon/No_knowledge.svg" /> --> */}
                       <div className="m-auto text-center">
                           <i className="fas fa-solid fas fa-graduation-cap m-auto" id="icon"></i>
                       </div>
                   </div>
                   <div className="col-10 mt-3">
                       <h5>
                           No knowledge about the hiring company and job role.
                       </h5>
                       <p>
                           Be alert! Legitimate companies do have some web
                           presence and require at least some qualification and
                           skill for all job roles.
                       </p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
{/* <!-- --------end card-1  Modal ---------->


<!-- -----card-2 modal -------> */}

<div className="modal fade modal_fake " id="card2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
   aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
       <div className="modal-content">
           <div className="modal-header fake_modal-header border-0">
               <div className="row first-modal-row">
                   <div className="col-sm-3">
                       <img className="img-fluid bg-white w-100 h-100 rounded-circle" alt="img"
                           src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/hat.svg" />
                   </div>
                   <div className="col-sm-9">
                       <h3>HOW SCAMSTER TRICK</h3>
                       <p>
                           Gullible job seekers
                       </p>
                   </div>
               </div>
               <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
               </button>
           </div>
           <div className="modal-body fake_modal-body">

               {/* <!-- media screen for modal header --> */}
               <div className="row first-modal-row2">
                   <div className="col-sm-3 m-auto text-center">
                       <img className="img-fluid bg-white w-50 h-100" alt="img"
                           src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/hat.svg" />
                   </div>
                   <div className="col-sm-9 m-auto  text-center">
                       <h3>HOW SCAMSTER TRICK</h3>
                       <p>
                           Gullible job seekers
                       </p>
                   </div>
               </div>
               {/* <!-- ----end---- --> */}

               <div className="row">
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/business-brainstorming-graph-chart-report-data-concept_53876-31213.jpg?w=740" />
                           </div>
                           <div className="mt-2">
                               <h6>Create a fraudulent company</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/closeup-two-business-men-shaking-hands_1262-3740.jpg?w=740" />
                           </div>
                           <div className="mt-2">
                               <h6>Post fake jobs in the name of big brands</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?w=740" />
                           </div>
                           <div className="mt-2">
                               <h6>Contact and conduct fake interview to build confidence</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100" alt="img"
                                   src="https://img.freepik.com/free-photo/business-man-using-credit-card-buy-online-items-coffee-shop_1150-6421.jpg?w=740" />
                           </div>
                           <div className="mt-2">
                               <h6>Offer easy hiring and good money</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/job-application-interview_28283-210.jpg?w=740" />
                           </div>
                           <div className="mt-2">
                               <h6>Demand registration amount of Rs 500 – Rs 1,000 or more for the job</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/high-angle-closeup-shot-person-putting-some-cash-leather-wallet_181624-10157.jpg?w=740" />
                           </div>
                           <div className="mt-2">
                               <h6>Disappear after the payment is received</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/hacker-man-laptop_144627-25524.jpg?w=740" />
                           </div>
                           <div className="mt-1">
                               <h6>Staggered payment trap (payment on the name of registration/ verification/
                                   document
                                   update/ etc.)</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/mature-male-freelance-web-designer-sitting-co-working-space-working-laptop-computer-writing-down-tasks-notebook_176420-7919.jpg?w=740" />
                           </div>
                           <div className="mt-1">
                               <h6>Poor writing skills, incorrect grammar and unclear job descriptions bespeak
                                   a dubious job offer</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-4  mt-2">
                       <div className="border-none">
                           <div className="card-img border border-info">
                               <img className="img-fluid w-100 h-100 " alt="img"
                                   src="https://img.freepik.com/free-photo/business-woman-working-laptop_1388-67.jpg?w=740" />
                           </div>
                           <div className="mt-1">
                               <h6>Genuine companies always display their web presence. In case of consultants,
                                   apply due diligence for whom they are hiring</h6>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
{/* <!-- --------end card-2  Modal ---------->


<!------- card-3 Modal --------> */}


<div className="modal fade modal_fake modalBox" id="card3" tabindex="-1" role="dialog"
   aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
       <div className="modal-content text-white">
           <div className="modal-header fake_modal-header border-0">
               <div className="row first-modal-row">
                   <div className="col-sm-3 text-center">
                       {/* <!-- <img className="img-fluid bg-white w-100 h-100 " alt="img"
         src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/protect.svg" /> --> */}
                       <i className="fa-solid fa-shield m-auto" id="RealIcon"></i>
                   </div>
                   <div className="col-sm-9">
                       <h4 className="m-auto fakejob_acc-mainhead">HOW TO PROTECT YOURSELF?</h4>
                       <p>Know the signs of a Job Scam</p>
                   </div>
               </div>
               <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
               </button>
           </div>
           <div className="modal-body fake_modal-body">
               {/* <!-- media screen for modal header --> */}

               <div className="row first-modal-row2">
                   <div className="col-sm-3 m-auto text-center">
                       <img className="img-fluid text-center bg-white w-50 h-50 " alt="img"
                           src="https://company.naukri.com/landing-page/fakejobtrend/new/svg_icon/protect.svg" />
                   </div>
                   <div className="col-sm-9 m-auto text-center">
                       <h4 className="text-center">HOW TO PROTECT YOURSELF?</h4>
                       <p>Know the signs of a Job Scam</p>
                   </div>
               </div>
               {/* <!-- ----end---- --> */}

               <div className="row">
                   <div className="col-sm-12 ">
                   <div className="sticky-top">
                    <div id="accordion">
                       <div className="fake_acc lastBg">
                           <div className="card-header collapsed " id="headingTwo" data-toggle="collapse"
                                       data-target="#collapseTwo" aria-expanded="false"
                                       aria-controls="collapseTwo">
                               <h5 className="mb-0">
                                   <button className="btn btn-link text-white" >
                                       <h6 className='fakejon_acc_heads'>Hints that Scammers throw</h6>
                                   </button>
                               </h5>
                           </div>
                           <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                               data-parent="#accordion">
                               <div className="fakejob_content bg-white text-dark fakejob_acc-list">
                                   <ul className='fakejob_lists'>
                                       <li>
                                           Job with a lucrative salary requiring minimum experience
                                       </li>
                                       <li>Job is the “Best fit for all”</li>
                                       <li>Job is across multiple locations</li>
                                       <li>Poorly written job description</li>
                                       <li>Confirmed/immediate job offer without interview</li>
                                       <li>
                                           Jobs involving reputed company names with public email
                                           domains
                                       </li>
                                       <li>Little to no web presence</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       </div>
                       </div>
                   </div>
               </div>

               <div className="fake_acc lastBg text-white">
                   <div className="card-header collapsed" id="headingThree"  data-toggle="collapse"
                               data-target="#collapseThree" aria-expanded="false"
                               aria-controls="collapseThree">
                       <h5 className="mb-0">
                           <button className="btn btn-link  text-white">
                               <h6 className='fakejon_acc_heads'>Watch out for these red flags</h6>
                           </button>
                       </h5>
                   </div>
                   <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                       data-parent="#accordion">
                       <div className="fakejob_content bg-white text-dark fakejob_acc-list">
                           <ul  className='fakejob_lists'>
                               <li>Pay money to get the job</li>
                               <li>Ask for credit Card/ debit card details/ CVV/ OTP</li>
                               <li>Registration charges</li>
                               <li>No job description</li>
                               <li>No experience or skill required</li>
                               <li>No interview</li>
                               <li>No web presence</li>
                               <li>
                                   Job or offer letter without interview for which you are
                                   asked to pay
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>

               <div className="fake_acc lastBg text-white fake_accodian_3">
                   <div className="card-header collapsed" id="headingThree" data-toggle="collapse"
                               data-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                       <h5 className="mb-0">
                           <button className="btn btn-link  text-white" >
                               <h6 className='fakejon_acc_heads'>Top 5 Ways to avoid job scams</h6>
                           </button>
                       </h5>
                   </div>
                   <div id="collapsefour" className="collapse" aria-labelledby="headingThree"
                       data-parent="#accordion">
                       <div className="fakejob_content bg-white text-dark fakejob_acc-list">
                           <ul  className='fakejob_lists'>
                               <li>Do not share personal information</li>
                               <li>
                                   Do not share credit/debit card details, CVV number, OTP
                               </li>
                               <li>Do not disburse any payment</li>
                               <li>Conduct thorough research of the company</li>
                               <li>Check online reviews</li>
                           </ul>
                       </div>
                   </div>
               </div>
               <div className="fake_acc lastBg text-white fake_accodian_4">
                   <div className="card-header collapsed" id="headingThree"  data-toggle="collapse"
                               data-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                       <h5 className="mb-0">
                           <button className="btn btn-link  text-white">
                               <h6 className='fakejon_acc_heads'>What should you do?</h6>
                           </button>
                       </h5>
                   </div>
                   <div id="collapsefive" className="collapse" aria-labelledby="headingThree"
                       data-parent="#accordion">
                       <div className="fakejob_content bg-white text-dark fakejob_acc-list">
                           <ul className='fakejob_lists'>
                               <li>
                                   Please do not provide your credit card or debit card
                                   details, bank information, CVV number or OTP number over
                                   phone, email or on their website. Before your respond to
                                   any email/ call, we suggest you to do a discreet enquiry
                                   and be sure to verify the authenticity of the person
                                   with whom you are interacting. You can also write to us
                                   at example@gmail.com
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   {/* <!-- --------end card-3  Modal ----------> */}
</div>
       </div>
       </div>
    )
}

export default Fakejobalert
