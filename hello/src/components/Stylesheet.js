import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className =props.primary ? 'primary' : ''
  return (
    <div className={className}>Stylesheet</div>
  )
}

export default Stylesheet