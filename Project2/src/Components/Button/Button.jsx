import React from 'react'

import styles from "./Button.module.css";
function  Button  ({outline,icon,text}) {
  return (
    <button className={ outline? styles.outline_btn:styles.primary_btn} >
        {icon}
        {text}
        
    </button>
  )
}



export default Button