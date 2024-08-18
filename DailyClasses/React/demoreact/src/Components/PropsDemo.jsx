import React from 'react'
import PropTypes from 'prop-types';

const PropsDemo = (props) => {


    let fname='Peter';
    // props.lname="bndvnbdvd" //error 
  return (
   <>
   <h1>Function Component</h1>
   <p>The name is {fname} {props.lname}</p>
   <p>The course is {props.course}</p>
   <p>The marks are {props.marks+10}</p>
   <p>The message is {props.message}</p>
    <p>The compound rate is {props.compundInterest}</p>
   </>
  )
}

export default PropsDemo

//if not messeage found it will show blank ss use below default props
PropsDemo.defaultProps={
    message:"This is message"
}

//if marks is in string it will show error also
PropsDemo.propTypes={
    marks:PropTypes.number.isRequired
}



// import React from 'react'

// const PropsDemo = ({lname,marks,course,compundInterest}) => {

//     let fname='Peter';
//      lname="snvdnbsvd"
//   return (
//    <>
//    <h1>Function Component Without Props</h1>
//    <p>The name is {fname} {lname}</p>
//    <p>The course is {course}</p>
//    <p>The marks are {marks}</p>
//     <p>The compound rate is {compundInterest}</p>
//    </>
//   )
// }

// export default PropsDemo