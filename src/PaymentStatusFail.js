import React, { useEffect, useState } from 'react'
//use useParams 
import { Link, useParams } from 'react-router-dom';

const PaymentStatusFail = ({result}) => {
    const params = useParams()
    console.log(params)
    console.log(result)
    return (
        <div className='payment_fail'>
          <h1>Payment Failed</h1>
          {/* <Link to="/payment" >BACK TO HOME</Link> */}
        </div>
    )
}

export default PaymentStatusFail
