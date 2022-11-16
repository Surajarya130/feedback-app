import React from 'react'

function Card({children, color}) {
  return (
    <div className='card' style={color}>
        {children}
    </div>
  )
}

export default Card