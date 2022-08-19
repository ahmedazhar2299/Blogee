import './input.css'
import React, { useEffect } from 'react'
export default function Input({nType,nPlaceholder,required,refr,error}) {


  const handleChange = (e)=>{
    e.preventDefault()
    if(!error)
    if (e.target.value.length===0) 
     e.target.style.borderColor = "#B0B0B0" 
      else e.target.style.borderColor = "#56CC6A"
    }
    
  
  return (
    <input className='customInput' style={ error? {borderColor : "red"} : {}} onInput={handleChange} type={nType} placeholder={nPlaceholder} required={required} ref = {refr}/>
  )
}
