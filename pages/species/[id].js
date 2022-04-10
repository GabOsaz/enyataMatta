import Person from '../../organisms/Person'
import SpecieComp from '../../organisms/SpecieComp'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/species')
    const species = await res.json()
  
    // Get the paths to pre-render based on species
    const paths = species.results.map((specie) => ({
      params: { id: specie.url.split('/')[5].toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://swapi.dev/api/species/${params.id}`)
    const specie = await res.json()
  
    // Pass specie data to the page via props
    return { props: { specie } }
}

function Specie({ specie }) {

  return (
    <div>
        <AuthenticatedLayout showBack={true}>
            <SpecieComp data={ specie }/>
        </AuthenticatedLayout>
    </div>
  )
}

export default Specie