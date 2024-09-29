import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';

const SearchCard = ({ item }) => {
    return (
        <div className='flex items-center w-full gap-4 p-2 bg-white'>

            <div className='relative h-20 md:h-24 lg:h-32 xl:h-40 aspect-square'>

                <Image src={item.images.split('~')[0]} fill alt='cover' sizes='56' className='object-contain' />

            </div>

            <Link href={`/product/${item.uniq_id}`} className='flex flex-col w-1/2 gap-2 lg:w-1/3'>

                <h1 className='text-xl font-medium truncate'>{item.title}</h1>

                <div className='flex items-center w-full gap-4'>

                    <span className='font-medium text-red-500 lg:text-lg'>$ {item.price}</span>

                    <div className='flex items-center gap-2'>

                        <span className='hidden text-yellow-400 lg:flex'><FaStar size={30} /></span>
                        <span className='text-yellow-400 lg:hidden'><FaStar size={25} /></span>

                        <span className='text-sm lg:text-base'>{Math.round(item.average_rating * 100) / 100}</span>

                    </div>

                </div>

            </Link>


        </div>
    )
}

export default SearchCard