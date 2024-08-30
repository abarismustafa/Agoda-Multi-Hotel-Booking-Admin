import React from 'react'
import { Link } from 'react-router-dom'
import FacilitiesFilter from './FacilitiesFilter'
import FacilitiesList from './FacilitiesList'
import AllLanguages from '../../commonComponents/allCompLanguage/AllLanguages'

function Facilities() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3"> Facilities </h1>
                            </div>
                            <div className="col-md-6 text-right">
                                <Link to="/admin/add_facilities" className="btn btn-circle btn-primary">Add Facilities</Link>
                            </div>
                        </div>
                    </div>
                    <FacilitiesFilter />
                    <FacilitiesList />
                    <AllLanguages />
                    
                </div>
            </div>
        </>
    )
}

export default Facilities
