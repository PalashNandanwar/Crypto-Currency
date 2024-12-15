/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const CoinInfo = ({ heading, Desc }) => {
    const shortDesc = (Desc || "No description available").slice(0, 193) + "...";
    const longDesc = Desc || "No description available";
    const [flag, setFlag] = useState(false);

    return (
        <>
            <div className="block w-[95%] rounded-[0.8rem] px-10 py-3 mx-[2.5rem] my-[1.5rem]">
                <h1 className="capitalize text-xl">{heading}</h1>
                <p className="m-[1rem]">
                    {!flag ? (
                        <span className=" " dangerouslySetInnerHTML={{ __html: shortDesc }} />
                    ) : (
                        <span dangerouslySetInnerHTML={{ __html: longDesc }} />
                    )}
                    <span
                        onClick={() => setFlag(!flag)}
                        className="cursor-pointer inline-flex items-center ml-2"
                    >
                        {flag ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                </p>
            </div>
        </>
    );
};

export default CoinInfo;
