import Image from 'next/image'
import { toTitleCase } from '../atoms/utilities/titleCase';

function SpecieComp({ data }) {
  const {name, designation, language, eye_colors, average_lifespan } = data;
  
  return (
    <div className='flex space-x-7'>
        <Image src={'/specieDefaultImg.png'} width='318' height='450' />
        <div className='mt-4'>
            <h1 className='font-bold text-5xl'> {toTitleCase((name))} </h1>
            <div className='mt-7 font-medium text-[#434854] text-base space-y-1'>
                <p> Designation: {toTitleCase(designation)} </p>
                <p> Language: {toTitleCase(language)} </p>
                <p> Eye Colors: {toTitleCase(eye_colors)} </p>
                <p> Average Lifespan: {average_lifespan} </p>
            </div>
        </div>
    </div>
  )
}

export default SpecieComp