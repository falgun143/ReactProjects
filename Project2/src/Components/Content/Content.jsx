import React from 'react';
import Button from '../Button/Button';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import styles from "./Content.module.css";
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contactform}>

     
      <div className={styles.top_btns}>
       <Button text="VIA SUPPORT CHAT" icon={<MdMessage style={{fontSize:'21px'}}></MdMessage>}></Button>
       <Button text="VIA CALL" icon={<FaPhoneAlt style={{fontSize:'19px',color:"white"}}></FaPhoneAlt>}></Button>
      </div>
      <div>
        <Button  outline={true} text="VIA EMAIL FORM" icon={<MdEmail style={{fontSize:'20px'}}></MdEmail>}></Button>
      </div> 
      <form className={styles.form}>
        <div className={styles.inputdiv}>
        <label htmlFor="Name">Name</label>
        <input type="text" name="Name" ></input>
        </div>
      
        <div className={styles.inputdiv} >
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" ></input>
        </div>

        <div className={styles.inputdiv} >
        <label htmlFor="text">TEXT</label>
       <textarea name="text" rows="8" ></textarea>
        </div>
        <div className={styles.buttondiv}>
        <Button text="SUBMIT"></Button>
        </div>
        
      </form>
      </div>
      <div>
       <img src="/public/images/lady.svg"></img>
      </div>
      
    </div>
  )
}

export default Content