import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import apiList from './lib/apiList';
const Paytm = () => {
    const [user,setUser] = useState({
        name:"",
        email:" ",
        phone:"",
        amount:""
    });
    const changeUserData = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
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
const {name,email,phone,amount} = user

    const makePayment=()=>
    {
getData(user).then(response=>{
    if(!name||!email||!phone||!amount){
        toast.error("Please fill all Fields")
    }else{
        var information={
            action:"https://securegw.paytm.in/theia/processTransaction",
            params:response
        }
      post(information)
    }
})
    }
    return (
        // <div className='mt-5 pt-5'>
            
        //     <button onClick={makePayment}>PAY USING PAYTM</button>
        // </div>
        <div className="container" style={{marginTop:"150px"}}>
        <div className="row payment_paytm">
          <div className="col-md-12">
          <div className="payment_heading text-center">
            <h2>Payment Request</h2>
          </div>
           </div>
          
          <div className="col-md-6 payment_form" order-lg-1 order-sm-2>
            <form className='payment_main'>
              <div className="form-group hire_group my-3">
                <label>Name :</label>
                <label className="input mt-1 mb-2">
                  <input
                    className="input__field form_control form_hire"
                    type="text"
                    name="name"
                    placeholder=" "
                    onChange={(e)=>changeUserData(e)}
                  />
                  <span className="input__label">Enter Your Name</span>
                </label>
              </div>

              <div className="form-group hire_group my-3">
                <label>Email :</label>
                <label className="input mt-1 mb-2">
                  <input
                    className="input__field form_control form_hire"
                    type="email"
                    name="email"
                    placeholder=" "
                    onChange={(e)=>changeUserData(e)}
                  />
                  <span className="input__label">Enter Your Mail</span>
                </label>
              </div>

              <div className="form-group hire_group my-3">
                <label>Phone :</label>
                <label className="input mt-1 mb-2">
                  <input
                    className="input__field form_control form_hire"
                    type="text"
                    name="phone"
                    placeholder=" "
                    onChange={(e)=>changeUserData(e)}
                  />
                  <span className="input__label">
                    Enter Your mobile Number{" "}
                  </span>
                </label>
              </div>

              <div className="form-group hire_group my-3">
                <label>Amount :</label>
                <label className="input mt-1 mb-2">
                  <input
                    className="input__field form_control form_hire"
                    type="text"
                    name="amount"
                    placeholder=" "
                    onChange={(e)=>changeUserData(e)}
                  />
                  <span className="input__label">Enter amount in rupees</span>
                </label>
              </div>

              <div className="text-center">
                <button type="button" className="btn payment_submit mb-2" onClick={makePayment}>
                  PayNow
                </button>
              </div>
            </form>
          </div>
 
 

          <div className="col-md-6 m-auto paytm_img" order-lg-2 order-sm-1 >
            <img src='images/Payments (1).png' alt='dinesh' className='img-fluid' style={{width:'90%'}} />
          </div>
        </div>
      </div>
    )
}

export default Paytm
