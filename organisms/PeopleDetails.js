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
          <div className="px-4"> {toTitleCase('Birth Year')} </div>
          <div className="px-4"> {toTitleCase('gender')} </div>
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
          const { name, birth_year, gender, hair_color, height, created, url } = result
            return (
              <div onClick={() => router.push(`/people/${url.split('/')[5]}`)} class="grid grid-flow-col grid-cols-6 cursor-pointer items-center px-8 py-6 align-middle text-left text-base text-[#434854] font-medium border-b border-border-color w-full">
                <div class="flex items-center">
                  <Checkbox />
                  <div className="ml-6"> {toTitleCase(name)} </div>
                </div>
                <div className="px-4"> {birth_year} </div>
                <div className="px-4"> {toTitleCase(gender)} </div>
                <div className="px-4"> {hair_color} </div>
                <div className="px-4 truncate"> {height} </div>
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

      <h2 className="text-[#A4A7B7] font-normal text-base inline-block"> People </h2>

      <div className="mt-8 table border border-[#A4A7B766] rounded w-full">
        <TableHead />
        <TableBody />
      </div>
    </div>
  )
}

export default PeopleDetails