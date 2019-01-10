import React from 'react';

const displayStyle = {
  height: '5em',
  width: '80vw',
  backgroundColor: 'purple',
  borderRadius: '5px'
}

const headerStyle = {
  color: 'white'
}

const Display = (props) => {
  return(
    <div style={displayStyle}>
      <h1 style={headerStyle}>{props.name}</h1>
    </div>
  )
}

export default Display;