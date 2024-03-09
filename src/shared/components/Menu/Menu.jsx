import React, { useState } from 'react';
import styles from './Menu.module.scss';
import data from "../../../assets/data/data.js";

export default function MyTabs() {
    const [activeCategory, setActiveCategory] = useState('pizza');
    const [activeSubCategory, setActiveSubCategory] = useState('');

    const filteredData = data.filter((item) => {
        if (activeCategory === 'pizza' || activeCategory === 'deserts' || activeCategory === 'offres') {
            return activeSubCategory ? item.category === activeCategory && item.subCategory === activeSubCategory : item.category === activeCategory;
        } else {
            return item.category === activeCategory;
        }
    });

    const pizzaSubCategories = ['Base tomate', 'Base crème fraîche'];

    const desertsSubCategories = ['Gateaux', 'Häagen Dazs'];
    const offresSubCategories = ['Bucket', 'Menu_tenders', 'Menu_enfant', 'Menu_family'];

    return (
        <div className='max-width' id='menu'>
            <div className={styles.tabsContainer} style={{ color: "white" }}>
                <div className={styles.filter_items}>
                    <div className={`${styles.filter_item} ${activeCategory === 'pizza' ? styles.active : ''}`} onClick={() => { setActiveCategory('pizza'); setActiveSubCategory(''); }}>Pizzas</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'burger' ? styles.active : ''}`} onClick={() => { setActiveCategory('burger'); }}>Burgers</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'sandwich' ? styles.active : ''}`} onClick={() => { setActiveCategory('sandwich'); }}>Sandwichs</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'assiets' ? styles.active : ''}`} onClick={() => { setActiveCategory('assiets'); }}>Assiets</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'deserts' ? styles.active : ''}`} onClick={() => { setActiveCategory('deserts'); setActiveSubCategory(''); }}>Desserts</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'salade' ? styles.active : ''}`} onClick={() => { setActiveCategory('salade'); }}>Salades</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'tex-mex' ? styles.active : ''}`} onClick={() => { setActiveCategory('tex-mex'); }}>Tex-Mex</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'paninis' ? styles.active : ''}`} onClick={() => { setActiveCategory('paninis'); }}>Paninis</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'poli' ? styles.active : ''}`} onClick={() => { setActiveCategory('poli'); }}>Poulet rôti</div>
                    <div className={`${styles.filter_item} ${activeCategory === 'offres' ? styles.active : ''}`} onClick={() => { setActiveCategory('offres'); setActiveSubCategory(''); }}>Offres groupées</div>
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
            {activeCategory === 'offres' && (
                <div className={styles.tabsContainer} style={{ color: "white" }}>
                    <div className={styles.filter_items}>
                        {offresSubCategories.map((subCategory) => (
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

