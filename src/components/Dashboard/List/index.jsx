/* eslint-disable react/prop-types */
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const ListComponent = ({ coin }) => {

    const formatNumber = (num) => {
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(2) + 'B';
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(2) + 'M';
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(2) + 'K';
        } else {
            return num.toFixed(2);
        }
    };


    return (
        <tr
            className={`list-row px-10 max-[680px]:px-2 py-3 hover:border-2 border-transparent flex justify-between items-center  ${coin.price_change_percentage_24h >= 0
                ? "hover:border-green-600"
                : "hover:border-red-600"
                } mx-[2.5rem] my-[1.5rem] max-[864px]:mx-[1.5rem] max-[864px]:my-[1rem] rounded-lg`}
        >
            <td className="td-img flex gap-7 max-[1196px]:gap-4 max-[650px]:gap-[10px] max-[1196px]:w-[10rem] w-[15rem] max-[864px]:gap-2 max-[864px]:w-[8rem] max-[650px]:w-[100px]  items-center max-[600px]:justify-between">
                <img src={coin.image} alt={coin.name} className="h-14 w-14 max-[1196px]:w-12 max-[1196px]:h-12 max-[864px]:w-10 max-[864px]:h-10 max-[650px]:w-8  max-[650px]:h-8 max-[600px]:w-6 max-[600px]:h-6" />
                <div className="td-info w-36 flex flex-col gap-1">
                    <p className="uppercase font-semibold text-lg max-[1196px]:text-base max-[864px]:text-sm max-[650px]:text-[13px] max-[600px]:text-[10px]">{coin.symbol}-usd</p>
                    <p className="capitalize font-normal text-base max-[1196px]:text-sm max-[864px]:text-[13px] max-[650px]:text-[12px]max-[600px]:text-[9px]">{coin.name}</p>
                </div>
            </td>

            <td>
                {coin.price_change_percentage_24h >= 0 ? (
                    <div className="chip-flex flex gap-4 items-center max-[1196px]:gap-2">
                        <div className="price-chip border-2 border-green-600 rounded-full px-4 py-1 text-center text-green-600 text-2xl max-[1196px]:text-base font-semibold hover:bg-green-600 hover:text-white max-[864px]:text-sm max-[650px]:px-2 max-[650px]:text-[12px] max-[600px]:text-[10px]">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <FaArrowTrendUp className="flex justify-center items-center text-green-600 w-9 h-9 max-[1196px]:w-7 max-[1196px]:h-7 hover:bg-green-600 hover:text-white border-2 border-green-600 rounded-full p-1 max-[650px]:text-[12px] max-[600px]:text-[10px] max-[864px]:hidden" />
                    </div>
                ) : (
                    <div className="chip-flex flex gap-4 items-center">
                        <div className="price-chip border-2 text-2xl max-[1196px]:gap-2 max-[1196px]:text-base border-red-600 rounded-full px-4 py-1 text-center text-red-600 font-semibold hover:bg-red-600 hover:text-white max-[864px]:text-sm max-[600px]:text-[10px]">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <FaArrowTrendDown className="flex justify-center items-center text-red-600 w-9 h-9 hover:bg-red-600 hover:text-white border-2 border-red-600 rounded-full p-1 max-[1196px]:w-7 max-[1196px]:h-7 max-[600px]:text-[10px] max-[864px]:hidden" />
                    </div>
                )}
            </td>

            <td className="td-current-price text-lg font-semibold">
                {coin.price_change_percentage_24h >= 0 ? (
                    <span className="text-green-600 text-xl max-[1196px]:text-base max-[864px]:text-sm max-[650px]:text-[12px] max-[600px]:text-[10px]">
                        ${formatNumber(coin.total_volume)}
                    </span>
                ) : (
                    <span className="text-red-600 text-xl max-[1196px]:text-base max-[864px]:text-sm max-[650px]:text-[12px] max-[600px]:text-[10px]">
                        ${formatNumber(coin.total_volume)}
                    </span>
                )}
            </td>

            <td className="td-totalVolume capitalize text-xl max-[1196px]:text-base max-[864px]:hidden">
                ${formatNumber(coin.total_volume)}
            </td>

            <td className="td-marketCap capitalize text-xl max-[1196px]:text-base max-[864px]:text-sm max-[650px]:text-[12px] max-[600px]:text-[10px]">
                ${formatNumber(coin.market_cap)}
            </td>
        </tr>
    );
};

export default ListComponent;
