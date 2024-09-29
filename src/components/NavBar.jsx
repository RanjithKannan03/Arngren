'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import { AnimatePresence, motion } from 'framer-motion';
import WishListIconMobile from './WishListIconMobile';
import CartMobileIcon from './CartMobileIcon';
import ProfileIconMobile from './ProfileIconMobile';

const firstDivVariant = {
    close: {
        rotate: 0
    },
    open: {
        rotate: 45
    }
}

const secondDivVariant = {
    close: {
        opacity: 1
    },
    open: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    },
}

const thirdDivVariant = {
    close: {
        rotate: 0
    },
    open: {
        rotate: -45
    }
}

const mobileNavVariant = {
    close: {
        x: '-100vh'
    },
    open: {
        x: 0,
        transition: {
            ease: "linear",
            staggerChildren: 0.2,
            delayChildren: 0.05
        }
    },
}

const mobileNavLinksVariant = {
    close: {
        x: '-100vh'
    },
    open: {
        x: 0
    }
}


const mobileNavLinks = [
    {
        name: 'wishlist',
        icon: <WishListIconMobile />
    },
    {
        name: 'cart',
        icon: <CartMobileIcon />
    },
    {
        name: 'profile',
        icon: <ProfileIconMobile />
    }
]

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex items-center justify-between w-full h-full px-4 border-b-2 border-gray-300 md:px-8 lg:px-20 xl:px-48 font-montserrat'>

            <div className='justify-start hidden lg:flex lg:w-1/4'>
                <Link href={'/'} className='text-2xl font-semibold cursor-pointer lg:text-3xl xl:text-4xl'>Arngren</Link>
            </div>


            <div className='hidden w-1/2 lg:flex'>
                <SearchBar />
            </div>


            <div className='hidden text-black lg:w-1/4 lg:flex'>

                <NavLinks />

            </div>

            <div className='flex flex-col justify-center w-full h-full gap-2 pt-4 lg:hidden'>

                {/* Menu Button */}
                <div className='flex items-center justify-between w-full'>
                    <button className='relative z-50 flex flex-col items-center justify-between w-10 h-8 p-1' type='button' onClick={() => { setIsOpen((prev) => !prev) }}>

                        <motion.div variants={firstDivVariant} initial="close" animate={isOpen ? "open" : null} className='w-full h-[2px] origin-left bg-black rounded' />
                        <motion.div variants={secondDivVariant} initial="close" animate={isOpen ? "open" : null} className='w-full h-[2px] origin-left bg-black rounded' />
                        <motion.div variants={thirdDivVariant} initial="close" animate={isOpen ? "open" : null} className='w-full h-[2px] origin-left bg-black rounded' />

                    </button>
                    <div className='justify-start'>
                        <Link href={'/'} className='text-2xl font-semibold text-black cursor-pointer'>Arngren</Link>
                    </div>
                </div>

                <div className='w-full'>
                    <SearchBar />
                </div>


            </div>

            <AnimatePresence mode='wait'>
                {isOpen ?
                    (
                        <motion.div variants={mobileNavVariant} initial="close" animate="open" exit="close" className='absolute top-0 left-0 z-30 w-screen h-screen bg-white'>

                            <div className='flex flex-col items-center justify-center w-full h-full gap-8'>
                                {
                                    mobileNavLinks.map((item, index) => {
                                        return (
                                            <div key={item.name} className='flex items-center justify-center w-full'>
                                                {
                                                    item.icon
                                                }
                                            </div>
                                        )
                                    })

                                }
                            </div>



                        </motion.div>
                    )
                    : null
                }
            </AnimatePresence>





        </div>
    )
}

export default NavBar