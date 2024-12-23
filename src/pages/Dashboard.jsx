import { useEffect, useState } from "react"
import Header from "../components/Common/Header"
import TabsComponents from "../components/Dashboard/Tabs/Index"
import axios from "axios"
import SearchBar from "../components/Dashboard/Search"

const Dashboard = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    var filterCoin = coins.filter((items) => {
        return items.name.toLowerCase().includes(search.toLowerCase()) || items.symbol.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_des&per_page=200&page=0&locale=en")
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
            <SearchBar search={search} onSearchChange={onSearchChange} />
            <TabsComponents coin={filterCoin} />
        </>
    )
}

export default Dashboard