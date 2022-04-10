import React from 'react'
import OverviewDetails from '../../organisms/OverviewDetails'
import AuthenticatedLayout from '../../templates/AuthenticatedLayout'

function Overview({ films }) {
  return (
    <div>
        <AuthenticatedLayout >
            <OverviewDetails data={films}/>
        </AuthenticatedLayout>
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch(`https://swapi.dev/api/films/`)
    const films = await res.json()
  
    // Pass film data to the page via props
    return { props: { films } }
}

export default Overview