import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
    
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled} >
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    isDisabled: false,
    type: "button"
}

Button.propTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
