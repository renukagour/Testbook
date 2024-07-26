import React, { useState } from 'react'

const CounterFunction = () => {
    const[count,setCount]=useState(0);
  return (
   <>

   <p>{count}</p>
   <button onClick={()=>setCount(count+1)}>Counter</button>
   </>
  )
}

export default CounterFunction