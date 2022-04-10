import Image from 'next/image'
import { toTitleCase } from '../atoms/utilities/titleCase';

function StarshipComp({ data }) {
  const { name, model, passengers, pilots } = data;
  return (
    <div className='flex space-x-7'>
        <Image src={'/starshipDefaultImg.png'} width='318' height='450' />
        <div className='mt-4'>
            <h1 className='font-bold text-5xl'> {toTitleCase(name)} </h1>
            <div className='mt-7 font-medium text-[#434854] text-base space-y-1'>
                <p> Model: {toTitleCase(model)} </p>
                <p> Lassengers: {toTitleCase(passengers)} </p>
                <p className='truncate'> Pilots: {pilots.length > 0 ? pilots[0] : 'Not available'} </p>
            </div>
        </div>
    </div>
  )
}

export default StarshipComp