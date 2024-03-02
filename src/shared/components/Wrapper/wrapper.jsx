import React from 'react'
import styles from "./Wrapper.module.scss";
import ico1 from "../../../assets/icons/icon_1.png";
import ico2 from "../../../assets/icons/icon_2.png";
import ico3 from "../../../assets/icons/icon_3.png";


function wrapper() {
  return (
  
    <div className={styles.wrp}>
      <div className={styles.img_container}>
        <div className={styles.wrp_container}>
          <div className={styles.item}>
            <img src={ico1} alt="" />
            <div className={styles.title}>Service de qualité</div>
            <div className={styles.desc}>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</div>
          </div>
          <div className={styles.item}>
            <img src={ico3} alt="" />
            <div className={styles.title}>Menus divers et variés</div>
            <div className={styles.desc}>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</div>
          </div>
          <div className={styles.item}>
            <img src={ico2} alt="" />
            <div className={styles.title}>Goût exeptionnel </div>
            <div className={styles.desc}>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default wrapper
