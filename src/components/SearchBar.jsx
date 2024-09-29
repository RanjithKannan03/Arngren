'use client';

import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import data from '@/utils/data';
import { AnimatePresence, motion } from 'framer-motion';
import SearchCard from './SearchCard';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [items, setItems] = useState([])

    useEffect(() => {
        if (searchTerm) {
            setItems(data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())));
        }
        else {
            setItems(data);
        }
    }, [searchTerm])

    return (
        <div className='w-full relative h-10 lg:h-full flex items-center bg-[#e6e4e4] placeholder:text-[#6b6e71] rounded p-2'>

            <span className='hidden lg:flex'><CiSearch size={30} /></span>

            <span className='lg:hidden'><CiSearch size={25} /></span>

            <input value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} className='flex flex-1 p-2 text-base bg-transparent lg:text-lg focus:outline-none' placeholder='Search' type='text' />

            <AnimatePresence mode='wait'>
                {
                    searchTerm && items.length > 0 &&
                    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} className='w-full origin-top h-[20rem] bg-[#e6e4e4] absolute top-full left-0 z-30 rounded overflow-y-scroll'>
                        <div className='flex flex-col w-full gap-4 p-4'>
                            {
                                items.map((item) => {
                                    return (
                                        <SearchCard key={item.uniq_id} item={item} />
                                    )
                                })
                            }
                        </div>
                    </motion.div>

                }
            </AnimatePresence>

        </div>
    )
}

export default SearchBar