// import React from 'react'
import { Link } from "react-router-dom";
import ColorModeSwitcher from "../../../../ColorModeSwitcher";
import Button from "../Buttons";
import Hamburger from "./Hamburger";
import "./style.css";

const Header = () => {
    return (
        <>
            <div className="nav w-full h-fit flex justify-between items-center min-[865px]:px-[70px] min-[865px]:py-[20px] px-[30px] py-[20px]">

                <h1 className=" logo text-2xl md:text-4xl font-bold capitalize">Crypto Tracker <span className="text-[#ffb400]">.</span></h1>

                <ul className=" items flex justify-between items-center gap-[30px] hidden min-[865px]:flex">
                    <ColorModeSwitcher />
                    <Link to='/'>
                        <li className="text-lg font-semibold capitalize cursor-pointer">home</li>
                    </Link>
                    <li className="text-lg font-semibold capitalize cursor-pointer">compare</li>
                    <Link to="/dashboard">
                        <Button clas="px-[30px] py-[10px] rounded-full capitalize text-lg text-white bg-blue-500 hover:shadow-xl cursor-pointer" text="dashboard" onClick={() => {
                            console.log("HEllo");
                        }} />
                    </Link>

                </ul>

                <div className="block min-[865px]:hidden">
                    <div className="transition-transform duration-300 ease-in-out">
                        <Hamburger />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header