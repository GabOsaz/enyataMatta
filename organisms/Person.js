import Image from 'next/image'
import { toTitleCase } from '../atoms/utilities/titleCase';

function Person({ data }) {
  const { name, gender, birth_year, skin_color, height } = data;
  
  return (
    <div className='flex space-x-7'>
        <Image src={'/personDefaultImg.png'} width='318' height='450' />
        <div className='mt-4'>
            <h1 className='font-bold text-5xl'> {toTitleCase(name)} </h1>
            <div className='mt-7 font-medium text-[#434854] text-base space-y-1'>
                <p> Gender: {toTitleCase(gender)} </p>
                <p> Year of Birth: {birth_year} </p>
                <p> Skin Color: {toTitleCase(skin_color)} </p>
                <p> Height: {height} </p>
            </div>
        </div>
    </div>
  )
}

export default Person