import React from 'react'

function List(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number) =>
     <li key={number.toString()}>
     {number}
     </li> 
     );
  return (
    <div>
         <ul>{listItem}</ul>
    </div>
  )
}

export default List