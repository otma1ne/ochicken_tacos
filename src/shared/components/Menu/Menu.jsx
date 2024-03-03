import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from "./Menu.module.scss";
import Pizza from "../../../pages/Pizza/Pizza.jsx"
import { purple, amber } from '@mui/material/colors';
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.tabsContainer}>
            <Box sx={{ width: '100%' }}>
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
            </Box>
        </div>
    );
}
