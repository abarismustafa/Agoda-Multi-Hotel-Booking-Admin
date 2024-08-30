import React from 'react'
import { Link } from 'react-router-dom'
import DestinationsFilter from './DestinationsFilter'
import DestinationList from './DestinationList'
import AllLanguages from '../../commonComponents/allCompLanguage/AllLanguages'

function Destinations() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3"> Destinations </h1>
              </div>
              <div className="col-md-6 text-right">
                <Link to="/admin/add_destinations" className="btn btn-circle btn-primary">Add Destinations</Link>
              </div>
            </div>
          </div>
          <DestinationsFilter />
          <DestinationList />
          <AllLanguages/>
        </div>
      </div>
    </>
  )
}

export default Destinations
