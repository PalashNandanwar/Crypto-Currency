/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { settingCoinObject } from "../functions/settingCoinObject";
import ListComponent from "../components/Dashboard/List";
import Header from "../components/Common/Header";
import CoinInfo from "../components/Coins/CoinInfo/CoinInfo";
import { getCoindata } from "../functions/geyCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coins/LineChart/LineChartComponent";
import { div } from "framer-motion/client";
import { convertDate } from "../functions/convertDate";
import { formatNumber } from "chart.js/helpers";

const PageCoin = () => {
    const [coindata, setCoindata] = useState(null);
    const [chart, setChart] = useState([]);
    const [days, setDays] = useState(30);
    const { id } = useParams();
    const [charData, setChartData] = useState(null); // Start with null

    useEffect(() => {
        if (id) {
            getData(id);
        }
    }, [id]);

    const getData = async (id) => {
        try {
            const coinData = await getCoindata(id);
            if (coinData) {
                setCoindata(coinData);
                settingCoinObject(coinData, setCoindata);
            }

            const coinPrice = await getCoinPrices(id, days);
            console.log("Raw Coin Price Data:", coinPrice);

            if (coinPrice && typeof coinPrice === "object") {
                const prices = coinPrice.prices || [];
                if (Array.isArray(prices)) {
                    setChart(prices);
                    setChartData({
                        labels: prices.map((price) => convertDate(price[0])),
                        datasets: [
                            {
                                data: prices.map((price) => price[1]),
                                fill: false,
                                borderColor: "#3a80e9",
                                backgroundColor: "transparent",
                            },
                        ],
                    });
                } else {
                    console.error("Prices data is not an array:", prices);
                }
            } else {
                console.error("coinPrice is not an object or valid format:", coinPrice);
            }
        } catch (error) {
            console.error("Error fetching coin data:", error);
        }
    };

    return (
        <div>
            <Header />
            <div>
                {coindata ? (
                    <ListComponent coin={coindata} />
                ) : (
                    <p>Loading coin data...</p>
                )}
            </div>
            <div>
                {charData ? (
                    <div className="px-10 max-[680px]:px-2 py-3">
                        <LineChart chartData={charData} multiAxis={true} />
                    </div>
                ) : (
                    <p>Loading chart...</p>
                )}
            </div>
            {coindata ? (
                <CoinInfo heading={coindata.id} Desc={coindata.desc} />
            ) : (
                <p>Loading coin info...</p>
            )}
        </div>
    );
};

export default PageCoin;
