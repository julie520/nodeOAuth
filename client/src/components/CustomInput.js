import React from 'react'

const CustomInput = ({ type, id, name, placeholder,value, handleChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="form-control"
        value={value}
        onChange={e=>handleChange(e)}
      />
    </div>
  )
}

export default CustomInput
