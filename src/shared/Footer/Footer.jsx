import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo-ochiken.png"
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="max-width">
        <div className={styles.brand}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.info}>
        <div className={styles.tel}>
          <BsFillTelephoneFill />
          <span>00339293993</span>
        </div>
        <div className={styles.loc}>
          <IoLocationSharp />
          <span>5 rue champagne chalons</span>
        </div>

        </div>
        
        {/* <div className="footerNav">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div> */}
        <p className={styles.copy}>© 2024 Tous droits réservés par O'chic N'tacos </p>
      </div>
    </footer>
  );
}

export default Footer;
