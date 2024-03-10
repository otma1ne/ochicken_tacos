import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo-ochiken.png";
import tel from "../../assets/icons/telephone.png";
import menuIcon from "../../assets/icons/Menu.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  /* const scrollTo = (id) => {
    scroll.scrollTo(id, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
    setShowMenu(false);
  }; */

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className={styles.header}>
      <div
        className={styles.overlay + " " + (showMenu ? styles.active : "")}
        onClick={() => {
          setShowMenu(false);
        }}
      ></div>
      <div className={styles.nav}>
        <div className={styles.logo_container}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.menu + " " + (showMenu ? styles.active : "")}>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={800}>
                Home
              </Link>
            </li>
            <li>
              <Link to="menu" smooth={true} duration={800}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="sales" smooth={true} duration={800}>
                Les meilleures ventes
              </Link>
            </li>
            <li>
              <Link to="wrp" smooth={true} duration={800}>
                Services
              </Link>
            </li>

            <li>
              <Link to="footer" smooth={true} duration={800}>
                Contacts
              </Link>
            </li>
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
        <div className={styles.menu_icon} onClick={handleMenuClick}>
          <img src={menuIcon} alt="menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
