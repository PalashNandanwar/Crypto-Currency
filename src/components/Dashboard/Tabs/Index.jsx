/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";
import GridComponent from "../Grid";
import ListComponent from "../List";

const TabsComponents = ({ coin }) => {
    const [activeTab, setActiveTab] = useState("grid");

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="flex mt-10">
                <button
                    onClick={() => handleChangeTab("grid")}
                    className={`w-full p-2 font-bold text-2xl ${activeTab === "grid" ? "border-b-4 border-blue-500 text-blue-500" : ""}`}
                >
                    Grid
                </button>
                <button
                    onClick={() => handleChangeTab("list")}
                    className={`w-full p-2 font-bold text-2xl ${activeTab === "list" ? "border-b-4 border-blue-500 text-blue-500" : ""}`}
                >
                    List
                </button>
            </div>

            <div className="">
                {activeTab === "grid" && (
                    <div className=" flex justify-center items-center flex-wrap gap-4 mx-6 my-12">
                        {coin.map((item, i) => (
                            <GridComponent coin={item} key={i} />
                        ))}
                    </div>
                )}

                {activeTab === "list" && (
                    <table className="w-full flex gap-4 flex-col max-[864px]:px-[1rem] max-[864px]:py-[1rem] px-[2.5rem] py-[1.5rem] mt-[1.5rem] max-[864px]:gap-1">
                        {coin.map((item, i) => (
                            <ListComponent coin={item} key={i} />
                        ))}
                    </table>
                )}
            </div>
        </div>
    );
};

export default TabsComponents;
