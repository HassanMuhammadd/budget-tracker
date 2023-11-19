import React from 'react'

export default function Input({name,type,onChange, value}) {
  return (
	<div className="d-flex flex-column  text-start justify-content-center">
		<label htmlFor={name} className=' fw-bold primaryText'>{name}</label>
		<input type={type} required id={name} value={value} className=' px-3 py-2 inputStyle ' onChange={(e)=>onChange(e.target.value)} />
	</div>
  )
}
