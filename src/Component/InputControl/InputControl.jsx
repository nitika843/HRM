import React from 'react'
import Styles from '../InputControl/InputControl.module.css'

function InputControl (props){
  return (
    <div className={Styles.container}>
    {
        props.label && <label>{props.label}</label>
    }
    <input type="text" {...props } />
     
    </div>
  )
}

export default InputControl
