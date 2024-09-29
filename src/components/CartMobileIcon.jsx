'use client';

import React from 'react';
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { cartStore } from '@/zustand/store';
import Link from 'next/link';

const CartMobileIcon = () => {
    const cart = cartStore((state) => state.cart)
    return (
        <Link href={'/cart'} className='flex items-center gap-4 text-black'>

            {
                cart.length > 0 ? <IoCartSharp size={25} /> : <IoCartOutline size={25} />
            }

            <span className='text-xl font-medium text-black md:text-2xl'>Cart</span>

        </Link>
    )
}

export default CartMobileIcon