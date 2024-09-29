'use client';

import React from 'react';
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { cartStore } from '@/zustand/store';

const AddToCartButton = ({ item }) => {
    const cart = cartStore((state) => state.cart);
    const addItem = cartStore((state) => state.addItem);
    const removeItem = cartStore((store) => store.removeItem);
    return (
        <div className='p-4 text-lg font-medium text-black transition-all bg-white hover:bg-black hover:text-white ring-2 ring-black'>

            {
                cart.find((i) => i.uniq_id === item.uniq_id) ?
                    <button className='flex items-center justify-center w-full h-full gap-2' onClick={() => { removeItem(item) }}><IoCartSharp size={30} /> Remove From Cart</button>
                    :
                    <button className='flex items-center justify-center w-full h-full gap-2' onClick={() => { addItem(item) }}><IoCartOutline size={30} /> Add To Cart</button>
            }

        </div>
    )
}

export default AddToCartButton