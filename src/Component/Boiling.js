import React from 'react'



function Boiling(props) {
    if(props.celsius >= 100){
       return <p>Your Water is Boiling</p>
    }
  return <p>The Water would not boil</p>
}

export default Boiling