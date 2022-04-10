import { useState } from "react";

function Input({ extraStyles, value, onChange, readonly, name, error, type, placeholder, label }) {
  const [ moveLabel, setMoveLabel ] = useState(false);

  const onFocus = () => setMoveLabel(true);

  const onBlur = () => {setMoveLabel(false); console.log(moveLabel)};

  return (
    <div className="relative w-full">
      <input 
        name={name}
        className={`appearance-none rounded text-sm font-normal ${error && 'border border-red-500'} ${value && 'border border-primaryBlue'} ${extraStyles} ${moveLabel && 'placeholder-transparent'} $ transition-colors duration-200 ease-in-out focus:border-primaryBlue border border-border-color focus:outline-none text-text-color-1 p-4 w-full`}
        placeholder={label ? label : placeholder}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        readOnly={readonly}
      />
      <label 
        className={`${(moveLabel || value) ? 'absolute top-[-8px] z-0 bg-white px-1 text-xs left-3' : 'hidden'} text-text-color-3`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input