/* eslint-disable no-unused-vars */
// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { settingCoinObject } from "../functions/settingCoinObject";
import ListComponent from "../components/Dashboard/List";
import Header from "../components/Common/Header";
import CoinInfo from "../components/Coins/CoinInfo/CoinInfo";
import { getCoindata } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";

const PageCoin = () => {
    const [coindata, setCoindata] = useState(null); // Initialize with null
    const [chart, setChart] = useState([]);
    const [days, setDays] = useState(7);
    const { id } = useParams(); // Extract ID from URL parameters

    useEffect(() => {
        if (id) {
            getData(id); // Pass ID explicitly
        }
    }, [id]);

    const getData = async (id) => {
        try {
            const coinData = await getCoindata(id);
            if (coinData) {
                setCoindata(coinData);
                settingCoinObject(coinData, setCoindata); // Corrected to use coinData
            }

            const coinPrice = await getCoinPrices(id, days);
            if (coinPrice) {
                setChart(coinPrice);
                console.log("Prices Data", coinPrice.prices);
                console.log("Market Cap  Data", coinPrice.market_caps);
                console.log("Total Volumes Data", coinPrice.total_volumes);
            }
        } catch (error) {
            console.error("Error fetching coin data:", error);
        }
    };

    return (
        <div>
            <Header />
            <div>
                {/* Safely render ListComponent */}
                {coindata ? <ListComponent coin={coindata} /> : <p>Loading coin data...</p>}
            </div>
            {/* Safely render CoinInfo */}
            {coindata ? (
                <CoinInfo heading={coindata.id} Desc={coindata.desc} />
            ) : (
                <p>Loading coin info...</p>
            )}
        </div>
    );
};

export default PageCoin;
