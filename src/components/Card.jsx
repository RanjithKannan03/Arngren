'use client';

import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa6";
import { wishlistStore } from '@/zustand/store';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Link from 'next/link';

const Card = ({ item }) => {
    const wishlist = wishlistStore((state) => state.wishlist);
    const addItem = wishlistStore((state) => state.addItem);
    const removeItem = wishlistStore((state) => state.removeItem);
    return (
        <div className='relative z-0 flex flex-col w-32 gap-4 md:w-40 lg:w-52 xl:w-60 font-montserrat'>

            <div className='relative w-32 md:w-40 lg:w-52 xl:w-60 aspect-square'>

                <Image src={item.images.split('~')[0]} fill sizes='240' className='object-contain' alt='image' priority />

            </div>

            <Link href={`/product/${item.uniq_id}`} className='flex flex-col w-full'>

                <h1 className='w-full font-medium text-black truncate lg:text-xl'>{item.title}</h1>

                <span className='text-red-500 lg:text-lg'>$ {item.price}</span>

                <div className='flex items-center w-full gap-2'>

                    <span className='hidden text-yellow-400 lg:flex'><FaStar size={30} /></span>
                    <span className='text-yellow-400 lg:hidden'><FaStar size={25} /></span>

                    <span className='text-sm lg:text-base'>{Math.round(item.average_rating * 100) / 100}</span>

                </div>

            </Link>

            <div className='absolute top-0 right-0 p-1 text-red-500 bg-gray-100 rounded-full lg:p-2'>

                {
                    wishlist.find((i) => i.uniq_id === item.uniq_id) ?
                        <div className='cursor-pointer' onClick={() => { removeItem(item) }}>
                            <span className='hidden lg:flex'><IoIosHeart size={30} /></span>
                            <span className='lg:hidden'><IoIosHeart size={25} /></span>
                        </div>
                        :
                        <div className='cursor-pointer' onClick={() => { addItem(item) }}>
                            <span className='hidden lg:flex'><IoIosHeartEmpty size={30} /></span>
                            <span className='lg:hidden'><IoIosHeartEmpty size={30} /></span>
                        </div>
                }

            </div>



        </div>
    )
}

export default Card