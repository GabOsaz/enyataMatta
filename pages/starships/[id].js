import StarshipComp from '../../organisms/StarshipComp'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/starships')
    const starships = await res.json()
  
    // Get the paths to pre-render based on starships
    const paths = starships.results.map((starships) => ({
      params: { id: starships.url.split('/')[5].toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://swapi.dev/api/starships/${params.id}`)
    const starships = await res.json()
  
    // Pass starships data to the page via props
    return { props: { starships } }
}

function Starship({ starships }) {

  return (
    <div>
        <AuthenticatedLayout showBack={true}>
            <StarshipComp data={ starships }/>
        </AuthenticatedLayout>
    </div>
  )
}

export default Starship