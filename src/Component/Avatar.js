import React from 'react'

function Avatar(props) {
  return (
    <div>
        <img className='Avatar'
        src={props.user.avatarUrl} 
        alt={props.user.name}
        height={250}
        width={150}/>
    </div>
  );
}

export default Avatar