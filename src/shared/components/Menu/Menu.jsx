import React, { useState } from 'react';
import styles from './Menu.module.scss';
import data from "../../../assets/data/data.js";

export default function MyTabs() {
    const [activeCategory, setActiveCategory] = useState('pizza');
    const [activeSubCategory, setActiveSubCategory] = useState('');

    // Filtrer les données en fonction de la catégorie et de la sous-catégorie actives
    const filteredData = data.filter((item) => {
        if (activeCategory === 'pizza' || activeCategory === 'deserts') {
            return activeSubCategory ? item.category === activeCategory && item.subCategory === activeSubCategory : item.category === activeCategory;
        } else {
            return item.category === activeCategory;
        }
    });

    const pizzaSubCategories = ['sauce tomate', 'sauce blanche'];

    const desertsSubCategories = ['gateau', 'haagen'];

    return (
        <div className='max-width'>
            <div className={styles.tabsContainer} style={{ color: "white" }}>
                <div className={styles.filter_items}>
                    <div className={`${styles.filter_item} ${activeCategory === 'pizza' ? styles.active : ''}`} onClick={() => { setActiveCategory('pizza'); setActiveSubCategory(''); }}>Pizza</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'burger' ? styles.active : ''}`} onClick={() => { setActiveCategory('burger'); }}>Burger</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'sandwiche' ? styles.active : ''}`} onClick={() => { setActiveCategory('sandwiche'); }}>Assiets</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'assiets' ? styles.active : ''}`} onClick={() => { setActiveCategory('assiets'); }}>Sandwiche</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'deserts' ? styles.active : ''}`} onClick={() => { setActiveCategory('deserts'); }}>Deserts</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'Supliments' ? styles.active : ''}`} onClick={() => { setActiveCategory('Supliments'); }}>Boisson</div>
                </div>
            </div>

            {activeCategory === 'pizza' && (
                <div className={styles.tabsContainer} style={{ color: "white" }}>
                    <div className={styles.filter_items}>
                        {pizzaSubCategories.map((subCategory) => (
                            <div key={subCategory} className={`${styles.filter_item} ${activeSubCategory === subCategory ? styles.active : ''}`} onClick={() => { setActiveSubCategory(subCategory); }}>
                                {subCategory}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeCategory === 'deserts' && (
                <div className={styles.tabsContainer} style={{ color: "white" }}>
                    <div className={styles.filter_items}>
                        {desertsSubCategories.map((subCategory) => (
                            <div key={subCategory} className={`${styles.filter_item} ${activeSubCategory === subCategory ? styles.active : ''}`} onClick={() => { setActiveSubCategory(subCategory); }}>
                                {subCategory}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className={styles.cards__container}>
                {filteredData.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardContent}>
                            <img src={item.imageUrl} alt="image produit" />
                            <div className={styles.title}>{item.name}</div>
                            <div className={styles.ingre}>{item.ingredient}</div>
                            <div className={styles.prix}>{item.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

