import styles from "./Navigation.module.css";

const Navigation = ()=>{
    console.log(styles)
    return <nav className={`${styles.navbar} container`}>
       <img src="/images/logo.png" ></img>
       <ul >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
       </ul>


    </nav>
}

export default Navigation