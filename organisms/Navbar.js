import { useRouter } from 'next/router';
import React, { useState } from 'react'
import BackSvg from '../atoms/svgs/BackSvg';
import BellSvg from '../atoms/svgs/BellSvg'
import DividerSvg from '../atoms/svgs/DividerSvg'
import ElipsesSvg from '../atoms/svgs/ElipsesSvg';
import PersonSvg from '../atoms/svgs/PersonSvg'
import { toTitleCase } from '../atoms/utilities/titleCase';

function Navbar({ showBack }) {
    const router = useRouter();

    const [ username ] = useState('John Doe');
    return (
        <div className={`h-16 navShadow flex ${showBack ? 'justify-between' : 'justify-end'} items-center px-5 w-full`}>
            {showBack &&
            <div className='flex space-x-2 items-center cursor-pointer'>
                <span> <BackSvg /> </span>
                <div onClick={() => router.back()} className=''> Back </div>
            </div>
            }
            <div className='flex items-center'>
                <span className='mr-8 cursor-pointer'>
                    <BellSvg />
                </span>
                <span className='mr-8'>
                    <DividerSvg />
                </span>
                <span className='mr-6'>
                    <PersonSvg />
                </span>
                <span className='text-[15px] font-normal text-[#303B54] mr-10'> 
                    {toTitleCase(username)} 
                </span>
                <span className='cursor-pointer'>
                    <ElipsesSvg />
                </span>
            </div>
        </div>
    )
}

export default Navbar