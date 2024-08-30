import React from 'react'
import { Table } from 'react-bootstrap'
import { MdDelete, MdEdit } from 'react-icons/md'

function FacilitiesList() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">All Facilities List</h5>
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
                        <Table className=""striped bordered hover size="sm">
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" >
                                        <div className='d-flex align-items-center'><input type="checkbox" aria-label="Checkbox for following text input" />
                                            <small>Select All</small></div></th>
                                    <th >
                                        ID</th>
                                    <th >Image</th>
                                    <th data-breakpoints="md" >Name </th>
                                    <th data-breakpoints="md" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" >
                                        <div className='d-flex align-items-center'>
                                            <input type="checkbox" aria-label="Checkbox for following text input" />

                                        </div>

                                    </td>
                                    <td >
                                        1
                                    </td>
                                    <td >
                                        Air conditioning
                                    </td>
                                    <td >
                                        IMAGE
                                    </td>

                                    <td >
                                        <button className='btn btn-outline-primary btn-sm m-2'>
                                            <MdEdit />
                                        </button>
                                        <button className='btn btn-outline-primary btn-sm m-2'>
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FacilitiesList
