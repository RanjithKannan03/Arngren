import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { FaStar } from "react-icons/fa6";

const WishlistCard = ({ item }) => {
  return (
    <div className='flex items-center w-full gap-4 shadow-2xl drop-shadow-2xl'>

      <div className='relative w-24 lg:w-32 aspect-square'>

        <Image src={item.images.split('~')[0]} fill sizes='96' className='object-contain' alt='cover' />

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

export default WishlistCard