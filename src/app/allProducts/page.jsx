'use client';

import React, { useEffect, useState } from 'react';
import data from '@/utils/data';
import Card from '@/components/Card';
import categories from '@/utils/categories';

const Page = () => {
    const [items, setItems] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setItems(data);
    }, []);

    // useEffect(() => {
    // if (selectedCategories.length > 0) {
    //     const filterdItems = data.filter((item) => selectedCategories.includes(item.category));
    //     setItems(filterdItems);
    // }
    // else {
    //     setItems(data);
    // }
    // }, [selectedCategories])

    function applyFilter() {
        if (selectedCategories.length > 0) {
            const filterdItems = data.filter((item) => selectedCategories.includes(item.category));
            setItems(filterdItems);
        }
        else {
            setItems(data);
        }
        setIsOpen(false)
    }

    return (
        <div className='flex flex-col gap-10 px-4 py-4 lg:py-8 md:px-8 lg:px-20 xl:px-48'>


            <div className='relative'>
                <button className='bg-[#DB4444] text-center  text-white font-montserrat lg:text-xl p-2 rounded' onClick={() => { setIsOpen((prev) => !prev) }}>Filter</button>

                {
                    isOpen &&

                    <div className='w-[40rem] h-[40rem] bg-white absolute z-30 top-0 ring-1 ring-gray-200 shadow-2xl drop-shadow-xl rounded-lg'>

                        <div className='flex flex-col gap-4 p-4 font-montserrat'>

                            <h1 className='self-center text-2xl font-medium'>Categories</h1>

                            <div className='w-full h-[30rem] overflow-y-scroll p-4'>
                                <div className='grid w-full grid-cols-5 gap-4'>

                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <div key={index} onClick={() => {
                                                    setSelectedCategories((prev) => {
                                                        if (prev.includes(category)) {
                                                            return prev.filter((item) => item !== category)
                                                        }
                                                        else {
                                                            return [...prev, category]
                                                        }
                                                    })
                                                }} className={`p-2 cursor-pointer rounded ring-2 ${selectedCategories.includes(category) ? 'ring-red-400 text-red-400' : 'ring-black'}`}>
                                                    <span className='text-sm'>{category}</span>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>

                            <div className='flex items-center justify-center w-full cursor-pointer' onClick={applyFilter}>
                                <button className='bg-[#DB4444] text-center text-white font-montserrat p-2 rounded'>Apply</button>

                            </div>

                        </div>

                    </div>
                }
            </div>

            <div className='grid grid-cols-5 gap-10'>

                {
                    items.map((item) => {
                        return (
                            <Card item={item} key={item.uniq_id} />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Page