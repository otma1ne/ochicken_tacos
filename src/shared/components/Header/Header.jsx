import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo-ochiken.png"
import tel from "../../../assets/icons/telephone.png"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.menu}>
          <ul >
            <li>Home</li>
            <li>About</li>
            <li>Featured</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className={styles.tel_container}>
            <div className={styles.left}>
              <img src={tel} alt="tel" className={styles.tel} />
            </div>
            <div className={styles.right}>
              <div className={styles.info}>09 82 35 86 50</div>
              <div className={styles.info}>09 82 35 49 00</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
