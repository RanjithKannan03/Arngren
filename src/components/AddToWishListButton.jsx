'use client';

import React from 'react';
import { wishlistStore } from '@/zustand/store';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const AddToWishListButton = ({ item }) => {
    const wishlist = wishlistStore((state) => state.wishlist);
    const addItem = wishlistStore((state) => state.addItem);
    const removeItem = wishlistStore((state) => state.removeItem);

    return (
        <div>
            {
                wishlist.find((i) => i.uniq_id === item.uniq_id) ?
                    <button className='p-2 text-red-500' onClick={() => { removeItem(item) }}>
                        <IoIosHeart size={30} />
                    </button>
                    :
                    <button className='p-2 text-red-500' onClick={() => { addItem(item) }}>
                        <IoIosHeartEmpty size={30} />
                    </button>
            }
        </div>
    )
}

export default AddToWishListButton