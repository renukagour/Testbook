import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
       
    }
    counterData=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <>
      <h3>{this.state.count}</h3>
      <button onClick={()=>this.counterData()}>Counter</button>
      </>
    )
  }
}
