import React from 'react'
import OverviewDetails from './OverviewDetails'
import AuthenticatedLayout from '../templates/AuthenticatedLayout'

function Overview({ }) {
  return (
    <div>
        <AuthenticatedLayout>
            <OverviewDetails />
        </AuthenticatedLayout>
    </div>
  )
}

export default Overview