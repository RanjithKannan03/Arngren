import React from 'react';
import data from '@/utils/data';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import AddToCartButton from '@/components/AddToCartButton';

const page = ({ params }) => {
    const id = params.slug;
    const item = data.find((i) => i.uniq_id === id);
    const images = item.images.split('~');
    return (
        <div className='flex flex-col gap-6 px-4 py-4 lg:flex-row lg:h-full lg:py-8 md:px-8 lg:px-20 xl:px-48 font-montserrat'>



            <div className='relative w-[90%] lg:w-1/2 aspect-square'>

                <Image src={images[0]} fill alt='cover' className='object-contain' sizes='300' priority />

            </div>

            <div className='flex flex-col justify-center w-full h-full gap-4 lg:w-1/2'>

                <div className='w-full'>

                    <span className='p-2 rounded-full bg-[#DB4444] text-white font-medium'>{item.category}</span>

                </div>

                <h1 className='text-lg font-bold text-black md:text-xl lg:text-2xl xl:text-3xl'>{item.title}</h1>

                <div className='text-sm text-black lg:text-base xl:text-lg' dangerouslySetInnerHTML={{ __html: item.description }} />

                <div className='flex items-center w-full gap-4'>

                    <span className='font-medium text-red-500 lg:text-lg'>$ {item.price}</span>

                    <div className='flex items-center gap-2'>

                        <span className='hidden text-yellow-400 lg:flex'><FaStar size={30} /></span>
                        <span className='text-yellow-400 lg:hidden'><FaStar size={25} /></span>

                        <span className='text-sm lg:text-base'>{Math.round(item.average_rating * 100) / 100}</span>

                    </div>

                </div>

                <div className='w-full px-2'>

                    <AddToCartButton item={item} />
                </div>


            </div>

        </div>
    )
}

export default page