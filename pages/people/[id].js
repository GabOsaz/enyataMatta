import Person from '../../organisms/Person'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

export async function getStaticPaths() {
    const res = await fetch('https://swapi.dev/api/people')
    const people = await res.json()
  
    // Get the paths to pre-render based on people
    const paths = people.results.map((person) => ({
      params: { id: person.url.split('/')[5].toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://swapi.dev/api/people/${params.id}`)
    const person = await res.json()
  
    // Pass person data to the page via props
    return { props: { person } }
}

function People({ person }) {

  return (
    <div>
        <AuthenticatedLayout showBack={true}>
            <Person data={ person }/>
        </AuthenticatedLayout>
    </div>
  )
}

export default People