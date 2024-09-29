'use client'

import React from 'react';
import WishListIcon from './WishListIcon';
import CartIcon from './CartIcon';
import ProfileIcon from './ProfileIcon';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
    {
        name: 'wishlist',
        icon: <WishListIcon />,
        url: '/wishlist'
    },
    {
        name: 'cart',
        icon: <CartIcon />,
        url: '/cart'
    },
    {
        name: 'profile',
        icon: <ProfileIcon />,
        url: '/profile'
    }
]

const NavLinks = () => {
    const path = usePathname();
    return (
        <div className='flex items-center justify-center w-full gap-10'>

            {
                links.map((link) => {
                    return (
                        <div key={link.name} className='flex flex-col items-center gap-1'>
                            {link.icon}

                            {
                                path == link.url && <motion.div layoutId='activePill' transition={{ type: 'tween' }} className='w-4 h-[2px] bg-black rounded-full' />
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default NavLinks