import React from 'react'
import StarshipsDetails from '../../organisms/StarshipsDetails'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

function Starships({ starships }) {
  return (
    <div>
        <AuthenticatedLayout>
            <StarshipsDetails data={starships}/>
        </AuthenticatedLayout>
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch(`https://swapi.dev/api/starships/`)
    const starships = await res.json()
  
    // Pass film data to the page via props
    return { props: { starships } }
}

export default Starships