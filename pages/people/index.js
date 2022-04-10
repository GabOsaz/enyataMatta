import React from 'react'
import PeopleDetails from '../../organisms/PeopleDetails'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

function People({ people }) {
  return (
    <div>
        <AuthenticatedLayout>
            <PeopleDetails data={people}/>
        </AuthenticatedLayout>
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch(`https://swapi.dev/api/people/`)
    const people = await res.json()
  
    // Pass film data to the page via props
    return { props: { people } }
}

export default People