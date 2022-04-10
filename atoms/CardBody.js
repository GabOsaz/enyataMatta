import React from 'react'

function CardBody({ count, details }) {
  return (
    <>
        <h1 className='font-bold text-base text-[#434854] inline-block'> { count } </h1>
        <p className='text-[#00992B] text-[9px] font-normal leading-0'> { details } </p>
    </>
  )
}

export default CardBody