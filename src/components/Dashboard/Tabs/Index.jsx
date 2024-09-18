// import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";

const TabsComponents = () => {
    const [activeTab, setActiveTab] = useState("grid"); 

    const handleChangeTab = (newValue) => {
        setActiveTab(newValue); 
    };

    return (
        <Tabs value={activeTab}>
            <TabsHeader>
                <Tab
                    value="grid"
                    onClick={() => handleChangeTab("grid")}
                    className={`w-full font-bold text-2xl ${activeTab === "grid" ? "border-b-4 border-blue-500 text-blue-500" : ""
                        }`}
                >
                    Grid
                </Tab>
                <Tab
                    value="list"
                    onClick={() => handleChangeTab("list")}
                    className={`w-full font-bold text-2xl ${activeTab === "list" ? "border-b-4 border-blue-500 text-blue-500" : ""
                        }`}
                >
                    List
                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="grid">
                    Grid Tab
                </TabPanel>
                <TabPanel value="list">
                    List Tab
                </TabPanel>
            </TabsBody>
        </Tabs>
    );
};

export default TabsComponents;
