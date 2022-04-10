import Film from '../../organisms/Film'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/films')
    const films = await res.json()
  
    // Get the paths to pre-render based on films
    const paths = films.results.map((film) => ({
      params: { id: film.episode_id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://swapi.dev/api/films/${params.id}`)
    const film = await res.json()
  
    // Pass film data to the page via props
    return { props: { film } }
}

function OverviewDet({ film }) {

  return (
    <div>
        <AuthenticatedLayout showBack={true}>
            <Film data={ film }/>
        </AuthenticatedLayout>
    </div>
  )
}

export default OverviewDet