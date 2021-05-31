import React from 'react'

const Button = ({ className, onClick, buttonText, style, type, disabled }) => {

  return (
    <div className="button-container">
			<button 
				className={className}
				onClick={onClick}
				style={style}
				type={type} 
				disabled={disabled} 	
			>
				{buttonText}
			</button>
    </div>
  )
}

export default Button