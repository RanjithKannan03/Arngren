'use client'

import React from 'react';
import { wishlistStore } from '@/zustand/store';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Link from 'next/link';

const WishListIconMobile = () => {
    const wishlist = wishlistStore((state) => state.wishlist)
    return (
        <Link href={'/wishlist'} className='relative flex items-center gap-4 text-red-500'>
            {
                wishlist.length > 0 ? <IoIosHeart size={25} /> : <IoIosHeartEmpty size={25} />
            }

            <span className='text-xl font-medium text-black md:text-2xl'>Wishlist</span>

        </Link>
    )
}

export default WishListIconMobile