import Checkbox from "../atoms/svgs/Checkbox"
import { toTitleCase } from "../atoms/utilities/titleCase";
import { useRouter } from 'next/router';

function PeopleDetails({ data }) {
  const router = useRouter();

  const TableHead = () => {
    return (
      <div className="">
        <div class="grid grid-flow-col grid-cols-6 items-center px-8 py-6 align-middle tableShadow text-left text-base text-[#A4A7B7] font-medium border-border-color w-full">
          <div class="flex items-center">
            <Checkbox />
            <div className="ml-6"> {toTitleCase('Name')} </div>
          </div>
          <div className="px-4"> {toTitleCase('Classification')} </div>
          <div className="px-4"> {toTitleCase('eye colors')} </div>
          <div className="px-4"> {toTitleCase('hair color')} </div>
          <div className="px-4"> {toTitleCase('height')} </div>
          <div className="px-4"> {toTitleCase('created')} </div>
        </div>
      </div>
    )
  };
  
  const TableBody = () => {
    const { results } = data;
    return (
      <>
        {results.map(result => {
          const { name, classification, eye_colors, hair_colors, average_height, created, url } = result
            return (
              <div onClick={() => router.push(`/species/${url.split('/')[5]}`)} class="grid grid-flow-col grid-cols-6 cursor-pointer items-center px-8 py-6 align-middle text-left text-base text-[#434854] font-medium border-b border-border-color w-full">
                <div class="flex items-center">
                  <Checkbox />
                  <div className="ml-6"> {toTitleCase(name)} </div>
                </div>
                <div className="px-4"> {classification} </div>
                <div className="px-4"> {toTitleCase(eye_colors)} </div>
                <div className="px-4"> {hair_colors} </div>
                <div className="px-4 truncate"> {average_height} </div>
                <div className="px-4 truncate"> {created} </div>
              </div>
            )
          })
        }
      </>
    )
  };

  return (
    <div className="pb-8">

      <h2 className="text-[#A4A7B7] font-normal text-base inline-block"> Species </h2>

      <div className="mt-8 table border border-[#A4A7B766] rounded w-full">
        <TableHead />
        <TableBody />
      </div>
    </div>
  )
}

export default PeopleDetails