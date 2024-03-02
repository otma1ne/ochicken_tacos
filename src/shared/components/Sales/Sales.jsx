import React from 'react'
import styles from "./Sales.module.scss"
import pizza from "../../../assets/images/Pizza/oritentale.png"
function Sales() {
  return (
    <section className={styles.sale_container}>
      <div className='max-width'>
        <div className={styles.sale_title}>Hot Sales</div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={pizza} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>

          <div className={styles.card}>
            <img src={pizza} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</div>
            <div className={styles.prix}>12£</div>
          </div>
          <div className={styles.card}>
            <img src={pizza} alt="" />
            <div className={styles.title}>Pepporoni</div>
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