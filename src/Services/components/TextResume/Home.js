import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import apiList from "../../../lib/apiList";
import axios from "axios";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
const Home = () => {
  const result = useSelector(state => state.data)
  const [modalShow, setModalShow] = React.useState(false);
  const [totalAmount,setTotalamount] = useState()
  const [user,setUser] = useState()
  const [priceDetails,setPriceDetails] = useState({
    value:"",
    gst:""
  })
  const onHide = () => setModalShow(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const modalDynamic = (e)=>{
    setPriceDetails({
      ...priceDetails,
      value:e.value,
      gst:e.gst
    })
    setTotalamount(Number(e.value)+Number(e.gst))
    setModalShow(true)
  }
  
  useEffect(() => {
    getUser();
  },[]);

  const getUser = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };


  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }
  function isObj(val) {
    return typeof val === 'object'
  }
   function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }
  
  function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)
  
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })
  
    return form
  }
  
   function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }

const getData=(data)=>
{
return fetch(`${apiList.paytmpayment}`,{
    method:"POST",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}).then(response=>response.json()).catch(err=>console.log(err))
}

const makePayment=()=>
{
if(result){
  getData({
    name:user.name,
    email:user.email,
    phone:JSON.stringify(user.contactNumber),
    amount:JSON.stringify(totalAmount)
  }).then(response=>{
      var information={
          action:"https://securegw.paytm.in/theia/processTransaction",
          params:response
      }
    post(information)
  })
}else{
  toast.error("You Must Login First")
}

}

  return (<>
    <div className="bg">
      <div className=" row">
        
        <div className="col-md-12 text-center">
          <div className="data">
            Enhance your Resume to <b>Impress Recruiters</b>
          </div>
          <div className="data-1">
            Showcase your job readiness with a professionally written resume
          </div>
        </div>
    
      </div>
      <div className="container">
        <div className="row mt-3 mx-auto">
          



          
          <div className="textresume_box  col-lg-3 col-md-3 col-sm-6 experince" 
          onClick={() => modalDynamic({
            value:"199",
            gst:"35"
          })}>
            <b >ENTRY-LEVEL - {" "} &#8377;199 </b>
            <ul classname="exp">(Exp:0 to 3 years)</ul>
            *Applicable taxes may apply
          </div>



          
          <div className="textresume_box  col-lg-3 col-md-3 col-sm-6 experince" onClick={() => modalDynamic({
            value:"499",
            gst:"89"
          })}>
            <b>MID-LEVEL -{"   "} &#8377;499</b>
            <ul classname="exp">(exp:3 to 8 years)</ul>
            *Applicable taxes may apply
          </div>
          <div className="textresume_box  col-lg-3 col-md-3 col-sm-6 experince" onClick={() => modalDynamic({
            value:"799",
            gst:"143"
          })}>
            <b>SENIOR-LEVEL -{"   "} &#8377;799</b>
            <ul classname="exp">(exp:8 to 15 years</ul>
            *Applicable taxes may apply
          </div>
          <div className="textresume_box  col-lg-3 col-md-3 col-sm-6 experince" onClick={() => modalDynamic({
            value:"1999",
            gst:"359"
          })}>
            <b>EXECUTIVE-LEVEL -{"   "} &#8377;1999</b>
            <ul classname="exp">(exp:15years to above</ul>
            *Applicable taxes may apply
          </div>
          
        </div>
      </div>
      <div className="code">
        <p>
        </p>
        <span></span>
      </div>
    </div>

    <Modal 
      isOpen={modalShow}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>setModalShow(false)}
      style={customStyles}
      ariaHideApp={false}
      >
        <div className="payment_modal">

        
        <div className="close_modal_btn" >
        <a className="close_modal" onClick={()=>setModalShow(false)}><i className="fas fa-times"></i></a>
        </div>
        <div className="payment_details_heading ">
          <h5>Payment Details</h5>
        </div>

        <div className="payment_details">
          <p><span className="payment_1">Total </span> :<span className="payment_2"> &#8377; {priceDetails.value}</span> </p>
          <p><span className="payment_1">Estimated GST </span> :<span className="payment_2"> &#8377; {priceDetails.gst}</span> </p>
        </div>
        <hr className="hr_divider"/>
        </div>
      <div className="payment_details">
        <p> <span className="payment_1">Total Payable Amount</span> : <span className="payment_2"> &#8377; {totalAmount}</span></p>
      </div>
      <div className="buynow_payment">
        <button className="buynow_here" onClick={makePayment}>Proceed</button>
      </div>
      </Modal>     

  </>);
};

export default Home;
