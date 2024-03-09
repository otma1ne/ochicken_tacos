import React from 'react'
import styles from "./Sales.module.scss"
import pizza from "../../../assets/images/Pizza/4fromages.png"
import triple from "../../../assets/images/burgers/triple cheese.png"
import mixte from "../../../assets/images/asiettes/mixte.png"


function Sales() {
  return (
    <section className={styles.sale_container} id='sales'>
      <div className='max-width'>
        <div className={styles.sale_title}>Les meilleures ventes</div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img_container}>
              <img src={pizza} alt="" />
            </div>
            <div className={styles.title}>4 Fromages</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>

          
          <div className={styles.card}>
            <img src={triple} alt="" />
            <div className={styles.title}>Triple cheese</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={mixte} alt="" />
            <div className={styles.title}>Mixte</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
        </div>
      </div>

    </section>
  )
}
export default Sales;