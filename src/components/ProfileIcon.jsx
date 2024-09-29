import React from 'react';
import { FiUser } from "react-icons/fi";
import Link from 'next/link';

const ProfileIcon = () => {
    return (
        <Link href={'/profile'} className='flex items-center gap-2 text-black'>

            <FiUser size={30} />

        </Link>
    )
}

export default ProfileIcon