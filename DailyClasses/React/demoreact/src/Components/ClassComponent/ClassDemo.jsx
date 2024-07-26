import React, { Component } from "react";

export default class ClassDemo extends Component {
  // name="peter" //this is not any output use constructor
  constructor() {
    super(); //calling parent class i.e. Component must be included
    this.state = {
      fname: "peter",
      name:"",
      count: 0,
      names:['Peter parker','Thor Odinson','Dr. Strange','Iron Man','Thanos','Loki','captain America','Hulk','Batman','Superman'],
      like:0,
      show: function () {
        console.log("this is show function");
      },
    };
  }
  fname = "ppp";
  handleCount() {
    this.setState((state) => ({
      count: state.count + 2,
    }));
  }

  handleLikes(){
      
    this.setState(state=>({
        
        name:this.state.names[this.state.like],
        like:state.like+1
    }))
    console.log(this.state.like);
}


  render() {
    return (
      <>
        <h1>ClassDemo Component</h1>
        <p>the name is {this.fname}</p>
        <p>the name is {this.state.fname}</p>
        <p>{this.state.show()}</p>
        <p>{this.state.count}</p>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>counter</button> */}
        <button onClick={() => this.handleCount()}>counter</button>

        <hr />
        <p>
          Indian festivals are a vibrant tapestry of cultural and religious
          celebrations that reflect the country's rich heritage and diversity.
          From the lights and joy of Diwali, symbolizing the triumph of good
          over evil, to the colorful exuberance of Holi, marking the arrival of
          spring, each festival is steeped in traditions and rituals. Eid,
          Christmas, and Guru Nanak Jayanti highlight India's secular spirit,
          bringing communities together in unity and harmony. Festivals like
          Durga Puja, Navratri, and Pongal showcase regional uniqueness,
          offering a glimpse into the varied customs and practices across
          states. These celebrations, filled with music, dance, feasts, and
          prayers, create an atmosphere of joy and togetherness, strengthening
          the bonds among family and friends while preserving the cultural
          essence of India.
        </p>
        <p>Number of people liked this content:{this.state.like}</p>
        <p>Recently liked by {this.state.name}</p>
        <button onClick={() => this.handleLikes()}>Like</button>

        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Counter</button> */}
      </>
    );
  }
}
