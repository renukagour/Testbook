/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const AddressCard = ({address}) => {

  console.log("addess", address);
  return (
    <div  className='space-y-3'>
      <p className='font-semibold'>{address?.firstName+ " "+ address?.lastName}</p>
      <p>{address?.state},{address?.streetAddress},{address?.zipCode}</p>
      <div className='space-y-1'>
        <p className='font-semibold'>Phone Number</p>
        <p>{address?.mobile}</p>
      </div>
    </div>
  )
}

export default AddressCard