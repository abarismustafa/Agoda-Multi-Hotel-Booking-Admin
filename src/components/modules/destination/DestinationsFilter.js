import React from 'react'

function DestinationsFilter() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Filter</h5>
                        </div>
                        <div className="col-md-3">
                            {/* <form id="sort_members" >
                <div className="input-group input-group-sm">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Type first name / last name / ID & Enter" fdprocessedid="hh7lxk" />
                </div>
            </form> */}
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <input type="search" className="form-control" id="Search" placeholder="Search" />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <button className="btn btn-success">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationsFilter
