import Image from 'next/image'
import React from 'react'

function Film({ data }) {
    console.log(data)
    const { title, director, producer, release_date } = data;
  return (
    <div className='flex space-x-7'>
        <Image src={'/filmDefaultImg.png'} width='318' height='450' />
        <div className='mt-4'>
            <h1 className='font-bold text-5xl'> {title} </h1>
            <div className='mt-7 font-medium text-[#434854] text-base space-y-1'>
                <p> Director: {director} </p>
                <p> Producer: {producer} </p>
                <p> Release date: {release_date} </p>
            </div>
        </div>
    </div>
  )
}

export default Film