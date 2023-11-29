import React from 'react'

function formateDate(date) {
    return date.toLocaleDateString();
}

// props are read only you can't change 
function Comment(props) {

  return (
    <div className='Comment'>
        <div className="UserInfo">
          <img src={props.author.avatarUrl} 
          alt={props.author.name} 
          className="Avatar" />
          <div className="UserInfo-name">
            <h1>{props.author.name}</h1>
          </div>
        </div>
        <div className="Comment-text">
            <h3>{props.text}</h3>
        </div>
        <div className="Comment-date">
            <h6>{formateDate(props.date)}</h6>
        </div>
    </div>
  )
}

export default Comment