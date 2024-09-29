'use client';

import React from 'react';
import { wishlistStore } from '@/zustand/store';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Link from 'next/link';

const WishListIcon = () => {
    const wishlist = wishlistStore((state) => state.wishlist)
    return (
        <Link href={'/wishlist'} className='relative flex items-center gap-2 text-red-500'>
            {
                wishlist.length > 0 ? <IoIosHeart size={30} /> : <IoIosHeartEmpty size={30} />
            }

            {
                wishlist.length > 0 && <span className='text-lg text-black'>{wishlist.length}</span>
            }


        </Link>
    )
}

export default WishListIcon