import React, { useState } from 'react';
import styles from './Menu.module.scss';
import data from "../../../assets/data/data.js"


export default function MyTabs() {
    const [activeCategory, setActiveCategory] = useState('pizza')
    return (
        <div className='max-width'>
            <div className={styles.tabsContainer} style={{ color: "white" }}>
                <div className={styles.filter}>
                    <div className={styles.filter_items}>
                        <div className={`${styles.filter_item} ${activeCategory === 'pizza' ? styles.active : ''}`} onClick={() => { setActiveCategory('pizza') }}>Pizza</div>
                        <div className={`${styles.filter_item} ${activeCategory === 'burger' ? styles.active : ''}`} onClick={() => { setActiveCategory('burger') }}>Burger</div>
                        <div className={`${styles.filter_item} ${activeCategory === 'sandwiche' ? styles.active : ''}`} onClick={() => { setActiveCategory('sandwiche') }}>Assiets</div>
                        <div className={`${styles.filter_item} ${activeCategory === 'sandwiche' ? styles.active : ''}`} onClick={() => { setActiveCategory('sandwiche') }}>Sandwiche</div>
                        <div className={`${styles.filter_item} ${activeCategory === 'sandwiche' ? styles.active : ''}`} onClick={() => { setActiveCategory('sandwiche') }}>Bucket</div>
                        <div className={`${styles.filter_item} ${activeCategory === 'sandwiche' ? styles.active : ''}`} onClick={() => { setActiveCategory('sandwiche') }}>boisson</div>
                    </div>
                </div>

                <div className={styles.cards__container}>
                    {data.filter((item) => item.category === activeCategory).map((item) => {
                        return <div className={styles.card}>
                            <div className={styles.img}><img src={item.imageUrl} alt="" /></div>
                            <div className={styles.title}>{item.name}</div>
                            <div className={styles.ingre}>{item.ingredient}</div>
                            <div className={styles.prix}>{item.price}</div>
                        </div>
                    })}
                </div>
            </div >

        </div>

    );
}
