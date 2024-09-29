import React from 'react';
import { FiUser } from "react-icons/fi";
import Link from 'next/link';

const ProfileIconMobile = () => {
    return (
        <Link href={'/profile'} className='flex items-center gap-4 text-black'>

            <FiUser size={25} />

            <span className='text-xl font-medium text-black md:text-2xl'>Profile</span>

        </Link>
    )
}

export default ProfileIconMobile