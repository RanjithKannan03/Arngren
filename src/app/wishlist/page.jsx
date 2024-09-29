'use client';

import WishlistCard from '@/components/WishlistCard';
import { wishlistStore } from '@/zustand/store';
import React from 'react';
import { HiOutlineEmojiSad } from "react-icons/hi";

const page = () => {
    const wishlist = wishlistStore((sate) => sate.wishlist);
    return (

        <div className='flex flex-col w-full gap-8 px-4 py-4 lg:h-full lg:py-8 md:px-8 lg:px-20 xl:px-48 font-montserrat'>

            <div className='text-center'>
                <h1 className='text-2xl font-medium text-black lg:text-4xl'>Wishlist</h1>
            </div>

            {
                wishlist.length > 0 ?

                    <div>
                        {wishlist.map((item, index) => {
                            return (
                                <WishlistCard key={index} item={item} />
                            )
                        })}
                    </div>
                    :
                    <div className='flex items-center justify-center flex-1'>
                        <div className='flex flex-col items-center gap-10 text-gray-400'>
                            <HiOutlineEmojiSad size={100} />
                            <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Your Wishlist is Empty</span>
                        </div>
                    </div>
            }

        </div>
    )
}

export default page