/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const steps = ['Placed', 'Order Confirmed', 'Shipped',"Out For Delivery", 'Delivered'];
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
 <Stepper activeStep={activeStep} alternativeLabel>
{
  steps.map((label) => 
   
      <Step >
        <StepLabel sx={{color:"#9155FF", fontSize:"40px"}}>{label}</StepLabel>
      </Step>
    
  )
}
 </Stepper>
    </div>
  )
}

export default OrderTracker