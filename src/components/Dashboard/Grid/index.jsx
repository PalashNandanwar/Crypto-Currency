/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../functions/formatNumbers";

const GridComponent = ({ coin }) => {

    // const formatNumber = (num) => {
    //     if (num >= 1_000_000_000) {
    //         return (num / 1_000_000_000).toFixed(2) + 'B';
    //     } else if (num >= 1_000_000) {
    //         return (num / 1_000_000).toFixed(2) + 'M';
    //     } else if (num >= 1_000) {
    //         return (num / 1_000).toFixed(2) + 'K';
    //     } else {
    //         return num.toFixed(2);
    //     }
    // };

    return (
        <>
            <Link to={`/coins/${coin.id}`}>
                {
                    coin.price_change_percentage_24h > 0 ? 
                    <div className="w-[300px] border-2 rounded-[0.75rem] hover:border-2 hover:border-green-600">
                        <div className="flex justify-start items-center gap-4 mx-[2.5rem] my-[1.5rem]">
                            <img src={coin.image} className="h-14 w-14 " alt="" />
                            <div className=" flex flex-col gap-[0.5rem] ">
                                <p className=" uppercase font-semibold text-[1.2 rem] m-0 ">{coin.symbol}</p>
                                <p className=" text-slate-700 capitalize font-normal text-[1rem] m-0 ">{coin.name}</p>
                            </div>
                        </div>

                        <div className="mx-[2.5rem] my-[1.5rem]">
                            {
                                coin.price_change_percentage_24h > 0 ?
                                    <div className=" chip flex justify-start gap-4 items-center">
                                        <div className="price border-2 border-green-600 rounded-full px-[1.5rem] py-[0.5rem] text-center text-[1.2rem] font-semibold text-green-600 hover:bg-green-600 hover:text-white">
                                            {coin.price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                        <div className=" w-[45px] h-[45px] border-green-600 border-2 text-2xl flex justify-center items-center rounded-full text-green-600 hover:bg-green-600 hover:text-white">
                                            <FaArrowTrendUp />
                                        </div>
                                    </div>
                                    :
                                    <div className=" chip flex justify-start gap-4 items-center">
                                        <div className="price border-2 border-red-600 rounded-full px-[1.5rem] py-[0.5rem] text-center text-[1.2rem] font-semibold text-red-600 hover:bg-red-600 hover:text-white">
                                            {coin.price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                        <div className=" w-[45px] h-[45px] border-red-600 border-2 text-2xl flex justify-center items-center rounded-full text-red-600 hover:bg-red-600 hover:text-white">
                                            <FaArrowTrendDown />
                                        </div>
                                    </div>
                            }
                        </div>

                        <div className="mx-[2.5rem] my-[1.5rem]">
                            {
                                coin.price_change_percentage_24h > 0 ?
                                    <h3 className=" text-xl text-green-600 font-semibold"> $ {coin.current_price}</h3> :
                                    <h3 className=" text-xl text-red-600 font-semibold"> $ {coin.current_price}</h3>
                            }
                        </div>

                        <div className="mx-[2.5rem] my-[1.5rem]">
                            <p className=" capitalize ">Total Volume :- ${formatNumber(coin.total_volume)}</p>
                            <p className="capitalize ">Market Cap :- ${formatNumber(coin.market_cap)}</p>
                        </div>


                    </div> :
                        <div className="w-[300px] border-2  rounded-[0.75rem] hover:border-red-600">
                            <div className="flex justify-start items-center gap-4 mx-[2.5rem] my-[1.5rem]">
                                <img src={coin.image} className="h-14 w-14 " alt="" />
                                <div className=" flex flex-col gap-[0.5rem] ">
                                    <p className=" uppercase font-semibold text-[1.2 rem] m-0 ">{coin.symbol}</p>
                                    <p className=" text-slate-700 capitalize font-normal text-[1rem] m-0 ">{coin.name}</p>
                                </div>
                            </div>

                            <div className="mx-[2.5rem] my-[1.5rem]">
                                {
                                    coin.price_change_percentage_24h > 0 ? <div className=" chip flex justify-start gap-4 items-center">
                                        <div className="price border-2 border-green-600 rounded-full px-[1.5rem] py-[0.5rem] text-center text-[1.2rem] font-semibold text-green-600 hover:bg-green-600 hover:text-white">
                                            {coin.price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                        <div className=" w-[45px] h-[45px] border-green-600 border-2 text-2xl flex justify-center items-center rounded-full text-green-600 hover:bg-green-600 hover:text-white">
                                            <FaArrowTrendUp />
                                        </div>
                                    </div>
                                        :
                                        <div className=" chip flex justify-start gap-4 items-center">
                                            <div className="price border-2 border-red-600 rounded-full px-[1.5rem] py-[0.5rem] text-center text-[1.2rem] font-semibold text-red-600 hover:bg-red-600 hover:text-white">
                                                {coin.price_change_percentage_24h.toFixed(2)}%
                                            </div>
                                            <div className=" w-[45px] h-[45px] border-red-600 border-2 text-2xl flex justify-center items-center rounded-full text-red-600 hover:bg-red-600 hover:text-white">
                                                <FaArrowTrendDown />
                                            </div>
                                        </div>
                                }
                            </div>

                            <div className="mx-[2.5rem] my-[1.5rem]">
                                {
                                    coin.price_change_percentage_24h > 0 ? <h3 className=" text-xl text-green-600 font-semibold"> $ {coin.current_price}</h3> : <h3 className=" text-xl text-red-600 font-semibold"> $ {coin.current_price}</h3>
                                }
                            </div>

                            <div className="mx-[2.5rem] my-[1.5rem]">
                                <p className=" capitalize ">Total Volume :- ${formatNumber(coin.total_volume)}</p>
                                <p className="capitalize ">Market Cap :- ${formatNumber(coin.market_cap)}</p>
                            </div>


                        </div>
                }
            </Link>
        </>
    )
}

export default GridComponent