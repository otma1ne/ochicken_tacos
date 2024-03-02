import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/images/logo-ochiken.png"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="max-width">
        <div className="brand"><img src={logo} alt="" /></div>
        <div className="infos">
          <span>00339293993</span> <span>5 rue champagne chalons</span>
        </div>
        <div className="footerNav">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <p>Copyright stuff</p>
      </div>
    </footer>
  );
}

export default Footer;
