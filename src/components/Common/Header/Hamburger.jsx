/* eslint-disable no-unused-vars */
// import React from 'react'
'use client'

import { useState } from "react"
import Hamburger from "hamburger-react"

import ColorModeSwitcher from "../../../../ColorModeSwitcher";
import Button from "../Buttons";
import { Link } from "react-router-dom";

const HamburgerConponent = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Hamburger
                size={20}
                toggled={open}
                toggle={setOpen}
            />
            {
                open &&
                <div
                    className="fixed absolute top-0 right-0 w-1/2 h-screen px-[40px] py-[45px] text-black bg-white dark:bg-slate-900 dark:text-white">
                    <header className=" flex justify-end items-end">
                        <div className="">
                            <Hamburger
                                size={20}
                                toggled={open}
                                toggle={setOpen}
                            />
                        </div>
                    </header>
                    <div className="flex flex-col items-start gap-[30px]">
                        <Link to='/'>
                            <p className="text-lg font-semibold capitalize">home</p>
                        </Link>
                        <p className="text-lg font-semibold capitalize">compare</p>
                        <Link to='/dashboard'>
                            <Button clas="px-[30px] py-[10px] rounded-full capitalize text-lg text-white bg-blue-500" text="dashboard" onClick={() => {
                                console.log("Hello");
                            }} />
                        </Link>
                        <ColorModeSwitcher />
                    </div>
                </div>
            }
        </div>
    )
}

export default HamburgerConponent