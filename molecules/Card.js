import React from 'react'
import CardBody from '../atoms/CardBody'
import CardLeading from '../atoms/CardLeading'

function Card({ text, color, count, details }) {
  return (
    <div className='w-[208px] px-[18px] py-6 bg-white rounded-[10px] cardShadow'>
        <div className='flex justify-between items-center'>
            <span>
                <CardLeading text={text} />
            </span>
            <span className='w-[27px] h-[26px] rounded-[5px]' style={{backgroundColor: color}} />
        </div>
        <div className='mt-[22px]'>
            <CardBody count={count} details={details} />
        </div>
    </div>
  )
}

export default Card