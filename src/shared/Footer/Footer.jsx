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
            <a href="tel:=09 82 35 86 50 " className={styles.tel}>
              <BsFillTelephoneFill />
              <span>09 82 35 86 50 </span>
            </a>
            <a href="tel:=09 82 35 49 00" className={styles.tel}>
              <BsFillTelephoneFill />
              <span>09 82 35 49 00</span>
            </a>

          </div>
        </div>
        <div className={styles.loc}>
            <IoLocationSharp />
            <span>19 Rue Théroigne de Méricourt, Châlons en Champagne <br /> (en face de brico-marché)</span>
          </div>
        <p className={styles.copy}>© 2024 Tous droits réservés par O'chic N'tacos </p>
      </div>
    </footer>
  );
}

export default Footer;