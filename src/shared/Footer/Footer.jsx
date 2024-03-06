import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo-ochiken.png"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="max-width">
        <div className={styles.brand}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.info}>
          <span>00339293993</span> <span>5 rue champagne chalons</span>
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
