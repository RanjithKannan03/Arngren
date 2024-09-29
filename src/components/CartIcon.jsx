'use client';

import { cartStore } from '@/zustand/store';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

const CartIcon = () => {
    const cart = cartStore((state) => state.cart)
    return (
        <Link href={'/cart'} className='flex items-center gap-2 text-black'>

            {
                cart.length > 0 ? <IoCartSharp size={30} /> : <IoCartOutline size={30} />
            }

            {
                cart.length > 0 && <span className='text-lg'>{cart.length}</span>
            }

        </Link>
    )
}

export default CartIcon