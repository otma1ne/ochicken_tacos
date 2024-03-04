import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from "./Menu.module.scss";
import Pizza from "../../../pages/Pizza/Pizza.jsx"
import { purple, amber } from '@mui/material/colors';
import data from "../../../assets/data/data.js"
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function MyTabs() {
    const [value, setValue] = useState(0);
    const [activeCategory, setactiveCategory] = useState('pizza')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.tabsContainer} style={{ color: "white" }}>
            {/* <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered indicatorColor="sc">
                    <Tab label="Pizza" sx={{ color: 'white', '&.Mui-selected': { color: '#FEBC4F' } }} />
                    <Tab label="Burger" sx={{ color: 'white', '&.Mui-selected': { color: '#FEBC4F' } }} />
                    <Tab label="Sandwich" sx={{ color: 'white', '&.Mui-selected': { color: '#FEBC4F' } }} />
                    <Tab label="Tacos" sx={{ color: 'white', '&.Mui-selected': { color: '#FEBC4F' } }} />
                    <Tab label="Assiets" sx={{ color: 'white', '&.Mui-selected': { color: '#FEBC4F' } }} />
                    <Tab label="Suppliments" sx={{ color: 'white', '&.Mui-selected': { color: '#FEBC4F' } }} />

                </Tabs>
                <TabPanel value={value} index={0}>
                    <Pizza />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Content for Tab 2
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Content for Tab 3
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Content for Tab 4
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Content for Tab 5
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Content for Tab 6
                </TabPanel>
            </Box> */}

            <div className={styles.filter}>
                <div className={styles.filter_items}>
                    <div className={styles.filter_item} onClick={() => { setactiveCategory('pizza') }}>Pizza</div>
                    <div className={styles.filter_item} onClick={() => { setactiveCategory('burger') }}>Burger</div>
                </div>
            </div>

            <div className={styles.menu__container}>
                {data.filter((item) => item.category === activeCategory).map((item) => {

                    return <div>
                    <div>{item.name}</div>
                    <img src={item.imageUrl} />
                  </div>
                })}
            </div>

        </div >
    );
}
