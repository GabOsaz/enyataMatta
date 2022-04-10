import React from 'react'

function Button({ extraStyles, text, onClick, disabled }) {
  return (
    <button 
      onClick={onClick}
      className={`border font-bold ${disabled && 'bg-disabled-main cursor-not-allowed bg-blue-400'} transition-colors duration-150 ease-in-out px-6 py-2 mr-3 text-center rounded ${extraStyles}`}
      disabled={disabled}
    > 
        {text} 
    </button>

  )
}

export default Button