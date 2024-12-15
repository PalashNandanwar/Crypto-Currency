/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Input } from '@chakra-ui/react'
import { useState } from "react";

const SearchBar = ({ search, onSearchChange }) => {

    return (
        <div className="nav w-[78%] h-fit flex justify-start items-center gap-[1.5rem] py-[1rem] px-[3rem] mx-auto border-2 border-slate-900 rounded-[4rem]">
            <IoSearch className=" w-6 h-6" />
            <Input
                variant='unstyled'
                placeholder='Search'
                className=" text-3xl bg-transparent w-full"
                value={search}
                onChange={(e) => onSearchChange(e)} />
        </div>
    )
}

export default SearchBar