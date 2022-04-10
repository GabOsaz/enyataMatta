import Checkbox from "../atoms/svgs/Checkbox"
import { toTitleCase } from "../atoms/utilities/titleCase";
import Card from "../molecules/Card"
import { useRouter } from 'next/router';

const cardData = [
  {
    text: 'Films',
    color: '#A9FFE0',
    count: '200',
    details: '20 More than yesterday'
  },
  {
    text: 'Starship',
    color: '#A9C1FF',
    count: '200',
    details: '20 More than yesterday'
  },
  {
    text: 'People',
    color: '#FFA9EC',
    count: '200',
    details: '20 More than yesterday'
  },
  {
    text: 'Species',
    color: '#FDFFA9',
    count: '200',
    details: '20 More than yesterday'
  }
]

function OverviewDetails({ data }) {
  const router = useRouter();

  const TableHead = () => {
    return (
      <div className="">
        <div class="grid grid-flow-col grid-cols-6 items-center px-8 py-6 align-middle tableShadow text-left text-base text-[#A4A7B7] font-medium border-border-color w-full">
          <div class="flex items-center">
            <Checkbox />
            <div className="ml-6"> {toTitleCase('Film title')} </div>
          </div>
          <div className="px-4"> {toTitleCase('Release Date')} </div>
          <div className="px-4"> {toTitleCase('Director')} </div>
          <div className="px-4"> {toTitleCase('producer')} </div>
          <div className="px-4"> {toTitleCase('Episode ID')} </div>
          <div className="px-4"> {toTitleCase('character')} </div>
        </div>
      </div>
    )
  };
  const TableBody = () => {
    const { results } = data;
    return (
      <>
        {results.map(result => {
          const { title, release_date, director, producer, episode_id, characters } = result
            return (
              <div onClick={() => router.push(`/overview/${episode_id}`)} class="grid grid-flow-col grid-cols-6 cursor-pointer items-center px-8 py-6 align-middle text-left text-base text-[#434854] font-medium border-b border-border-color w-full">
                <div class="flex items-center">
                  <Checkbox />
                  <div className="ml-6"> {toTitleCase(title)} </div>
                </div>
                <div className="px-4"> {release_date} </div>
                <div className="px-4"> {toTitleCase(director)} </div>
                <div className="px-4"> {toTitleCase(producer)} </div>
                <div className="px-4"> {episode_id} </div>
                <div className="px-4 truncate"> {characters[0]} </div>
              </div>
            )
          })
        }
      </>
    )
  };

  return (
    <div className="pb-8">
      <div className="flex justify-between items-center">
        {cardData.map((each, i) => (
          <Card index={i} text={each.text} color={each.color} count={each.count} details={each.details} />
        ))}
      </div>

      <h2 className="text-[#A4A7B7] font-normal text-base inline-block mt-[75px]"> Films </h2>

      <div className="mt-8 table border border-[#A4A7B766] rounded w-full">
        <TableHead />
        <TableBody />
      </div>
    </div>
  )
}

export default OverviewDetails