// import React from 'react'
import React, { Component } from 'react'


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
  render() {
    return (
      <div>
        <p>This is not showing every second beacuse there is not include tick() Function</p>
        <h1>Hello Its time To ....</h1>
        <h4>What is the time {this.state.date.toLocaleTimeString()}.</h4>
        <br />
        <p>If you want your clock update every second then use Lifecycle Method...</p>
      </div>
    );
  }
}

class Clock2 extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000
        );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }


  render() {
    return (
      <div>
        <h1>Using Lifecycle Method</h1>
        <h6> Its time To Ticking Clock every second  ....</h6>
        <h4>Current Time is {this.state.date.toLocaleTimeString()}.</h4>
        <br />
      </div>
    );
  }
}


  // This is function based 
// function Clock(props) {
//   return (
//     <div>
//         <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//     </div>
//   )
// }

// export default Clock

export {Clock, Clock2};