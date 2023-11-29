// import React from 'react'
import React, { Component } from 'react'

// function Welcome(props) {
//   return (
//     <div>
//         <h1>Hello,{props.name}</h1>
//     </div>
//   )
// }
  
   class Welcome extends Component {
    render(props) {
      return (
        <div>
          <h1>Hello,{this.props.name}</h1>
        </div>
      )
    }
  }
  

export default Welcome