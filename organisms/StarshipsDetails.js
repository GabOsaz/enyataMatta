import Checkbox from "../atoms/svgs/Checkbox"
import { toTitleCase } from "../atoms/utilities/titleCase";
import { useRouter } from 'next/router';

function StarshipsDetails({ data }) {
  const router = useRouter();

  const TableHead = () => {
    return (
      <div className="">
        <div class="grid grid-flow-col grid-cols-6 items-center px-8 py-6 align-middle tableShadow text-left text-base text-[#A4A7B7] font-medium border-border-color w-full">
          <div class="flex items-center">
            <Checkbox />
            <div className="ml-6"> {toTitleCase('Name')} </div>
          </div>
          <div className="px-4"> {toTitleCase('model')} </div>
          <div className="px-4"> {toTitleCase('class')} </div>
          <div className="px-4"> {toTitleCase('passenger')} </div>
          <div className="px-4"> {toTitleCase('length')} </div>
          <div className="px-4"> {toTitleCase('character')} </div>
        </div>
      </div>
    )
  };
  
  const TableBody = () => {
    const { results } = data;
    return (
      <>
        {results.map((result, index, array) => {
          const { name, model, starship_class, passengers, length, films, url } = result
            return (
              <div index={name} onClick={() => router.push(`/starships/${url.split('/')[5]}`)} class={`grid grid-flow-col grid-cols-6 cursor-pointer items-center px-8 py-6 align-middle text-left text-base text-[#434854] font-medium ${index === array.length -1 ? '' : 'border-b'} border-border-color w-full`}>
                <div class="flex items-center">
                  <Checkbox />
                  <div className="ml-6"> {toTitleCase(name)} </div>
                </div>
                <div className="px-4"> {model} </div>
                <div className="px-4"> {toTitleCase(starship_class)} </div>
                <div className="px-4"> {passengers} </div>
                <div className="px-4 truncate"> {length} </div>
                <div className="px-4 truncate"> {films[0]} </div>
              </div>
            )
          })
        }
      </>
    )
  };

  return (
    <div className="pb-8">

      <h2 className="text-[#A4A7B7] font-normal text-base inline-block"> Starships </h2>

      <div className="mt-8 table border border-[#A4A7B766] rounded w-full">
        <TableHead />
        <TableBody />
      </div>
    </div>
  )
}

export default StarshipsDetails