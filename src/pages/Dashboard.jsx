import { useEffect, useState } from "react"
import Header from "../components/Common/Header"
import TabsComponents from "../components/Dashboard/Tabs/Index"
import axios from "axios"

const Dashboard = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_des&per_page=100&page=0&locale=en")
            .then((res) => {
                console.log(res.data);
                setCoins(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Header />
            <TabsComponents coin={coins} />
        </>
    )
}

export default Dashboard