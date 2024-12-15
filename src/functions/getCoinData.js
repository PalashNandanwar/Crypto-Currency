import axios from "axios";

export const getCoindata = (id) => {
    const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res) => {
            console.log(res.data);
            // setCoindata(res.data)
            return res.data;
            // settingCoinObject(res.data, setCoindata);
        })
        .catch((err) => {
            console.log(err);
        })

    return myData;
}