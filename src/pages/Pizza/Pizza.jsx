import React from "react";
import styles from "./Pizza.module.scss";
import pizza1 from "../../assets/images/Pizza/3jambons.png"
function Menu() {
  return (
    <div className={styles.menu_container}>
      <div className="max-width">
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza1} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Menu;
