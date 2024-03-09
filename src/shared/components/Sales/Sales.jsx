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
            <div className={styles.ingre}>(Chèvre, Reblochon, Bleu, Mozzarella )</div>
            <div className={styles.prix}>12€</div>
          </div>


          <div className={styles.card}>
            <img src={triple} alt="" />
            <div className={styles.title}>Triple cheese</div>
            <div className={styles.ingre}>3 Steak 45gr , 3 cheddar sauce ,crudités</div>
            <div className={styles.prix}>7.5€</div>
          </div>
          <div className={styles.card}>
            <img src={mixte} alt="" />
            <div className={styles.title}>Mixte</div>
            <div className={styles.ingre}>Assiette avec 2 viandes au choix </div>
            <div className={styles.prix}>11€</div>
          </div>
          <div className={styles.card}>
            <img src={pizza} alt="" />
            <div className={styles.title}>Pepporoni</div>
            <div className={styles.ingre}>fromage mozzarella râpé repperoni tranché</div>
            <div className={styles.prix}>12€</div>
          </div>
        </div>
      </div>

    </section>
  )
}
export default Sales;