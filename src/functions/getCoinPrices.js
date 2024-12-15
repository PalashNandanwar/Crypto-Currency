import axios from "axios";

export const getCoinPrices = (id, days) => {
    const coinPrice = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=10`)
        .then((res) => {
            console.log(res.data);
            // setChart(res.data)
            // settingCoinObject(res.data, setCoindata);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })

    return coinPrice;
}