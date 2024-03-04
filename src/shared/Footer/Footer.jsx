import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo-ochiken.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.max_width}>
        <div className={styles.brand}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.infos}>
          <span>19 Rue Théroigne de méricourt, Châlons en champagne</span>
          <br />
          <br />
          <span>09 82 35 86 50</span>
          <br />
          <span>09 82 35 49 00</span>
        </div>
        <div className={styles.footerNav}>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <p>Copyright © 2024 O'chicken All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
