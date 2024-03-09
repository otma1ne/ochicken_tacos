import React from 'react'
import styles from "./Wrapper.module.scss";
import ico1 from "../../../assets/icons/icon_1.png";
import ico2 from "../../../assets/icons/icon_2.png";
import ico3 from "../../../assets/icons/icon_3.png";


function wrapper() {
  return (

    <div className={styles.wrp} id='wrp'>

      <div className={styles.img_container}>
        <div className={styles.wrp_container}>
          <div className={styles.item}>
            <div className={styles.images}>
              <img src={ico1} alt="" />
            </div>
            <div className={styles.title}>Service de qualité</div>
            <div className={styles.desc}>Un service de qualité. Vous pouvez compter sur nous pour vous fournir un service fiable et de haut niveau, répondant à vos besoins avec professionnalisme et efficacité.</div>
          </div>
          <div className={styles.item}>
            <div className={styles.images}>
              <img src={ico3} alt="" />
            </div>
            <div className={styles.title}>Menus divers</div>
            <div className={styles.desc}>Une gamme de menus variés, avec des plats diversifiés comprenant des options végétariennes, des plats principaux, des entrées et des desserts savoureux, pour répondre à une diversité de goûts culinaires.</div>
          </div>
          <div className={styles.item}>
            <div className={styles.images}>
              <img src={ico2} alt="" />
            </div>
            <div className={styles.title}>Goût exeptionnel </div>
            <div className={styles.desc}>Des menus offrant une expérience culinaire exceptionnelle, avec des plats savoureux et raffinés pour satisfaire tous les palais.</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default wrapper
