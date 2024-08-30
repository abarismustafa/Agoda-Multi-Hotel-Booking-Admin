import React from 'react'
import { Link } from 'react-router-dom'
import ServicesFilter from './ServicesFilter'
import ServicesList from './ServicesList'
import Languages from './Languages'

function Services() {
    return (
        <>

            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Services</h1>
                            </div>
                            <div className="col-md-6 text-right">
                                <Link to="/admin/add_services" className="btn btn-circle btn-primary">Add Services</Link>
                            </div>
                        </div>
                    </div>
                    <ServicesFilter />
                    <ServicesList />
                    <Languages />
                </div>
            </div>
        </>
    )
}

export default Services
