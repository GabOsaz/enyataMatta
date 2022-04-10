import React from 'react'
import SpeciesDetails from '../../organisms/SpeciesDetails'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

function Specie({ species }) {
  return (
    <div>
        <AuthenticatedLayout>
            <SpeciesDetails data={species}/>
        </AuthenticatedLayout>
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch(`https://swapi.dev/api/species/`)
    const species = await res.json()
  
    // Pass film data to the page via props
    return { props: { species } }
}

export default Specie