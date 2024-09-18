// import React from 'react'

import Button from "../../Common/Buttons"
import phone from "../../../assets/removebg.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Main_Component = () => {
    return (
        <div className="flex-info w-[100%] flex justify-between item-start  min-[865px]:px-[70px] min-[865px]:py-[20px] px-[30px] py-[20px] max-[1024px]:flex-col ">
            <div
                className="left-component w-[70%] max-[1024px]:w-[100%] h-fit flex justify-between flex-col max-[552px]:gap-9 gap-12 max-[990px]:mt-[4%] mt-[5%]">
                <div
                    className="">
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-stroke-black tracking-wide max-[995px]:text-8xl max-[552px]:text-5xl  text-9xl font-extrabold capitalize m-0  ">track crypto
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.75, duration: 1 }}
                        className="tracking-wide max-[995px]:text-8xl max-[552px]:text-5xl  max-[990px]:mt-[10px] text-9xl font-extrabold capitalize m-0 mt-[20px] text-[#3a80e9]">real time.
                    </motion.h1>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >Track crypto through a public api in real time. Visit the dashboard to do so!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.25, duration: 0.75 }}
                    className="flex flex-row gap-7">
                    <Link to="/dashboard">
                        <Button text="dashboard" clas="w-fit max-[552px]:px[25px] px-[30px] py-[10px] rounded-full capitalize text-lg text-white bg-blue-500 hover:shadow-xl" />
                    </Link>

                    <Button text="share" clas=" max-[552px]:px-[40px] w-fit px-[50px] py-[10px] rounded-full capitalize text-lg border-2 border-[#3a80e9] hover:bg-[#3a80e9]" />
                </motion.div>
            </div>
            <motion.div
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{ type: "smooth", repeatType: "mirror", duration: 2, repeat: Infinity }}
                className="right-component max-[1024px]:w-[100%] flex justify-center items-center  mt-[30px] w-[30%]">
                <img src={phone} alt="mobile" className=" w-[110%] flex justify-center items-center" />
            </motion.div>
        </div>

    )
}

export default Main_Component