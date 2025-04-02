import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js"

const PayPalButton =({amount,onSuccess,onError})=>{
  return (
        <PayPalScriptProvider options={{"client-id":"AaN8-j08ff-H_YdzTZmj2kvHMLL8qTzkyv75EnDsk_DOb4RMyA3qFfGtY9dqZkDApQ8JftJhIE1KzFty"}}>
        
        <PayPalButtons style={{layout:"vertical"}}
        createOrder={(data,actions)=>{
            return actions.order.create({
                purchase_units: [{amount: {value:amount}}]
            })
        }}
        onApprove={(data,actions)=>{
            return actions.order.capture().then(onSuccess)
        }}
        onError={onError}/>

        </PayPalScriptProvider>
  )
}

export default PayPalButton;