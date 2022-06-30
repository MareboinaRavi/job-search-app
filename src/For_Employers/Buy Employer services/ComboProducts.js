import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
// import apiList from "../../../lib/apiList";
import apiList from "../../lib/apiList";
import axios from "axios";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
const ComboProducts = () => {

  //   const result = useSelector(state => state.data)
  //   const [modalShow, setModalShow] = React.useState(false);
  //   const [totalAmount,setTotalamount] = useState()
  //   const [user,setUser] = useState()
  //   const [priceDetails,setPriceDetails] = useState({
  //     value:"",
  //     gst:""
  //   })
  //   const onHide = () => setModalShow(false)

  //   const customStyles = {
  //     content: {
  //       top: '50%',
  //       left: '50%',
  //       right: 'auto',
  //       bottom: 'auto',
  //       marginRight: '-50%',
  //       transform: 'translate(-50%, -50%)',
  //     },
  //   };
  //   const modalDynamic = (e)=>{
  //     setPriceDetails({
  //       ...priceDetails,
  //       value:e.value,
  //       gst:e.gst
  //     })
  //     setTotalamount(Number(e.value)+Number(e.gst))
  //     setModalShow(true)
  //   }

  //   useEffect(() => {
  //     getUser();
  //   },[]);

  //   const getUser = () => {
  //     axios
  //       .get(apiList.user, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //         setUser(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data);
  //       });
  //   };


  //   function isDate(val) {
  //     // Cross realm comptatible
  //     return Object.prototype.toString.call(val) === '[object Date]'
  //   }
  //   function isObj(val) {
  //     return typeof val === 'object'
  //   }
  //    function stringifyValue(val) {
  //     if (isObj(val) && !isDate(val)) {
  //       return JSON.stringify(val)
  //     } else {
  //       return val
  //     }
  //   }

  //   function buildForm({ action, params }) {
  //     const form = document.createElement('form')
  //     form.setAttribute('method', 'post')
  //     form.setAttribute('action', action)

  //     Object.keys(params).forEach(key => {
  //       const input = document.createElement('input')
  //       input.setAttribute('type', 'hidden')
  //       input.setAttribute('name', key)
  //       input.setAttribute('value', stringifyValue(params[key]))
  //       form.appendChild(input)
  //     })

  //     return form
  //   }

  //    function post(details) {
  //     const form = buildForm(details)
  //     document.body.appendChild(form)
  //     form.submit()
  //     form.remove()
  //   }

  // const getData=(data)=>
  // {
  // return fetch(`${apiList.paytmpayment}`,{
  //     method:"POST",
  //     headers:{
  //         Accept:"application/json",
  //         "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify(data)
  // }).then(response=>response.json()).catch(err=>console.log(err))
  // }

  // const makePayment=()=>
  // {
  // if(result){
  //   getData({
  //     name:user.name,
  //     email:user.email,
  //     phone:JSON.stringify(user.contactNumber),
  //     amount:JSON.stringify(totalAmount)
  //   }).then(response=>{
  //       var information={
  //           action:"https://securegw.paytm.in/theia/processTransaction",
  //           params:response
  //       }
  //     post(information)
  //   })
  // }else{
  //   toast.error("You Must Login First")
  // }

  // }
  return (
    //     <>


    // <div className="container">
    //         <div className="cards">
    //           <div className="row ">
    //             <div className="col-md-4 mt-3">
    //               <div className="card">
    //                 <span className="close"></span>
    //                 <span className="arrow"></span>
    //                 <article>
    //                   <h2>Monthly</h2>
    //                   <div className="title"><i class="fas fa-rupee-sign"></i> 10000</div>
    //                   <div className="pic">
    //                     <img src="images/MonthlyNew.png" />
    //                   </div>
    //                   <div className="desc ">
    //                     <label  className="font-weight-bold new_Job_lists"> Description :</label>
    //                     <div className="combo_payment">
    //                   <p>
    //                     <span className="combo1 text-left">Resume Views</span>{" "}
    //                     <span className="combo2 ">RS.12000.0</span>
    //                   </p>
    //                   <p>
    //                     <span className="combo1 text-left">Resume Downloads</span>{" "}
    //                     <span className="combo2 ">RS.12000.0</span>
    //                   </p>
    //                   <p>
    //                     <span className="combo1 text-left">
    //                       Emails (50% EXTRA){" "}
    //                     </span>{" "}
    //                     <span className="combo2 ">RS.112000.0</span>
    //                     <sub>(for limited Period)</sub>
    //                   </p>
    //                 </div>
    //                   </div>
    //                 </article>
    //                 <div className="actions" onClick={() => modalDynamic({
    //             value:"199",
    //             gst:"35"
    //           })}>
    //                   <button className="btn">
    //                     <span>Buy Now</span>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 mt-3">
    //               <div className="card">
    //                 <span className="close"></span>
    //                 <span className="arrow"></span>
    //                 <article>
    //                   <h2>3 Months</h2>
    //                   <div className="title"><i class="fas fa-rupee-sign"></i> 15000</div>
    //                   <div className="pic">
    //                     <img src="images/3 MonthsNew.png" />
    //                   </div>
    //                   <div className="desc">
    //                   <label  className="font-weight-bold"> Description :</label>
    //                   <div className="combo_payment">
    //                   <p>
    //                     <span className="combo1 text-left">Resume Views</span>{" "}
    //                     <span className="combo2 ">RS.12000.0</span>
    //                   </p>
    //                   <p>
    //                     <span className="combo1 text-left">Resume Downloads</span>{" "}
    //                     <span className="combo2 ">RS.12000.0</span>
    //                   </p>
    //                   <p>
    //                     <span className="combo1 text-left">
    //                       Emails (50% EXTRA){" "}
    //                     </span>{" "}
    //                     <span className="combo2 ">RS.112000.0</span>
    //                     <sub>(for limited Period)</sub>
    //                   </p>
    //                 </div>
    //                   </div>
    //                 </article>
    //                 <div className="actions">
    //                   <button className="btn">
    //                   <span>Buy Now</span>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 mt-3">
    //               <div className="card">
    //                 <span className="close"></span>
    //                 <span className="arrow"></span>
    //                 <article>
    //                   <h2>6 Months</h2>
    //                   <div className="title"><i class="fas fa-rupee-sign"></i> 25000</div>
    //                   <div className="pic">
    //                     <img src="images/6 MonthsNew.png" />
    //                   </div>
    //                   <div className="desc">
    //                   <label className="font-weight-bold "> Description :</label>
    //                   <div className="combo_payment">
    //                   <p>
    //                     <span className="combo1 text-left">Resume Views</span>{" "}
    //                     <span className="combo2 ">RS.12000.0</span>
    //                   </p>
    //                   <p>
    //                     <span className="combo1 text-left">Resume Downloads</span>{" "}
    //                     <span className="combo2 ">RS.12000.0</span>
    //                   </p>
    //                   <p>
    //                     <span className="combo1 text-left">
    //                       Emails (50% EXTRA){" "}
    //                     </span>{" "}
    //                     <span className="combo2 ">RS.112000.0</span>
    //                     <sub>(for limited Period)</sub>
    //                   </p>
    //                 </div>
    //                   </div>
    //                 </article>
    //                 <div className="actions">
    //                   <button className="btn">
    //                     <span>Buy Now</span>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <Modal 
    //       isOpen={modalShow}
    //       shouldCloseOnOverlayClick={true}
    //       onRequestClose={()=>setModalShow(false)}
    //       style={customStyles}
    //       ariaHideApp={false}
    //       >
    //         <div className="payment_modal">


    //         <div className="close_modal_btn" >
    //         <a className="close_modal" onClick={()=>setModalShow(false)}><i className="fas fa-times"></i></a>
    //         </div>
    //         <div className="payment_details_heading ">
    //           <h5>Payment Details</h5>
    //         </div>

    //         <div className="payment_details">
    //           <p><span className="payment_1">Total </span> :<span className="payment_2"> &#8377; {priceDetails.value}</span> </p>
    //           <p><span className="payment_1">Estimated GST </span> :<span className="payment_2"> &#8377; {priceDetails.gst}</span> </p>
    //         </div>
    //         <hr className="hr_divider"/>
    //         </div>
    //       <div className="payment_details">
    //         <p> <span className="payment_1">Total Payable Amount</span> : <span className="payment_2"> &#8377; {totalAmount}</span></p>
    //       </div>
    //       <div className="buynow_payment">
    //         <button className="buynow_here" onClick={makePayment}>Proceed</button>
    //       </div>
    //       </Modal>    
    //     </>




    <div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <article class="card__content1 grid">
              <div class="card__pricing">
                <div class="card__pricing-number">
                  <span class="card__pricing-symbol">₹ </span>24999
                </div>
                <span class="card__pricing-month">+ GST</span>
              </div>

              <header class="card__header">
                <div class="card__header-circle grid">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/free-coin.png" alt="" class="card__header-img" />
                </div>

                <span class="card__header-subtitle"></span>
                <h1 class="card__header-title">3 Months Plan</h1>
              </header>

              <ul class="card__list grid">
                {/* <li class="card__list-item"> */}
                {/* <i class="fas fa-check card__list-icon"></i> */}
                <p class="card__list-description"><h4>Daily Limit</h4></p>
                {/* </li> */}
                <div className="combo_product_list">
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">250 Excel Downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">1000 Profile views</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">50 SMS</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">10 Job Posts</p>
                  </li>
                </div>

                <p class="card__list-description"><h4>Monthly Limit</h4></p>
                <div className="combo_product_list">
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">3000 Excel Downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">1500 Profile views</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">150 SMS</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">10 Job Posts</p>
                  </li>
                </div>
              </ul>

              <button class="card__button">Buy Now</button>
            </article>
          </div>

          {/* <!--==================== CARD 2 ====================--> */}
          <div className="col-md-4">
            <article class="card__content1 grid">
              <div class="card__pricing">
                <div class="card__pricing-number">
                  <span class="card__pricing-symbol">₹</span>44999
                </div>
                <span class="card__pricing-month">+ GST</span>
              </div>

              <header class="card__header">
                <div class="card__header-circle grid">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/pro-coin.png" alt="" class="card__header-img" />
                </div>

                {/* <span class="card__header-subtitle">6 Months Plan</span> */}
                <h1 class="card__header-title">6 Months Plan</h1>
              </header>

              {/* <ul class="card__list grid">
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">100 user request</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Unlimited downloads</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Unlock all features from our site</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Daily content updates</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Fully editable files</p>
                </li>
              </ul> */}

              <ul class="card__list grid">
                {/* <li class="card__list-item"> */}
                {/* <i class="fas fa-check card__list-icon"></i> */}
                <p class="card__list-description"><h4>Daily Limit</h4></p>
                {/* </li> */}
                <div className="combo_product_list">
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">250 Excel Downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">1000 Profile views</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">50 SMS</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">10 Job Posts</p>
                  </li>
                </div>

                <p class="card__list-description"><h4>Monthly Limit</h4></p>

                <div className="combo_product_list">
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">3000 Excel Downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">1500 Profile views</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">150 SMS</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">10 Job Posts</p>
                  </li>
                </div>
              </ul>

              <button class="card__button">Buy Now</button>
            </article>
          </div>

          {/* <!--==================== CARD 3 ====================--> */}
          <div className="col-md-4">
            <article class="card__content1 grid">
              <div class="card__pricing">
                <div class="card__pricing-number">
                  <span class="card__pricing-symbol">₹</span>79999
                </div>
                <span class="card__pricing-month">+ GST</span>
              </div>

              <header class="card__header">
                <div class="card__header-circle grid">
                  <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/enterprise-coin.png" alt="" class="card__header-img" />
                </div>

                {/* <span class="card__header-subtitle">1 Year Plan</span> */}
                <h1 class="card__header-title">1 Year Plan</h1>
              </header>

              {/* <ul class="card__list grid">
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Unlimited  user request</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Unlimited downloads</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Unlock all features from our site</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Daily content updates</p>
                </li>
                <li class="card__list-item">
                  <i class="fas fa-check card__list-icon"></i>
                  <p class="card__list-description">Fully editable files</p>
                </li>
              </ul> */}

              <ul class="card__list grid">
                {/* <li class="card__list-item"> */}
                {/* <i class="fas fa-check card__list-icon"></i> */}
                <p class="card__list-description"><h4>Daily Limit</h4></p>
                {/* </li> */}
                <div className="combo_product_list">
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">250 Excel Downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">1000 Profile views</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">50 SMS</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">10 Job Posts</p>
                  </li>
                </div>

                <p class="card__list-description"><h4>Monthly Limit</h4></p>
                <div className="combo_product_list">
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">3000 Excel Downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">1500 Profile views</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">150 SMS</p>
                  </li>
                  <li class="card__list-item">
                    <i class="fas fa-check card__list-icon"></i>
                    <p class="card__list-description">10 Job Posts</p>
                  </li>
                </div>
              </ul>

              <button class="card__button">Buy Now</button>
            </article>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ComboProducts;
