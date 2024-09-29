import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className='w-full h-10 lg:h-full flex items-center bg-[#e6e4e4] placeholder:text-[#6b6e71] rounded p-2'>

            <span className='hidden lg:flex'><CiSearch size={30} /></span>

            <span className='lg:hidden'><CiSearch size={25} /></span>

            <input className='flex flex-1 p-2 text-base bg-transparent lg:text-lg focus:outline-none' placeholder='Search' type='text' />

        </div>
    )
}

export default SearchBar