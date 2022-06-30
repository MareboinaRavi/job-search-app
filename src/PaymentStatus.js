import React, { useEffect, useState } from 'react'
//use useParams 
import { useParams } from 'react-router-dom';

const PaymentStatusSuccess = ({result}) => {
    const params = useParams()
    console.log(params)
    console.log(result)
    return (
        <div className='payment_fail'>
          <h1>Payment Succesfull</h1>
        </div>
    )
}

export default PaymentStatusSuccess
