import React from 'react'
import { Table } from 'react-bootstrap'
import { MdDelete, MdEdit } from 'react-icons/md'
import hotel1 from '../../../assets/img/modalImg/h1.jpg'
import { FaHome } from 'react-icons/fa'
import DestinationZoom from './DestinationZoom'

function DestinationList() {
    return (
        <>

            <div className="card">
                <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                        <h5 className="mb-md-0 h6">All Destination List</h5>
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
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr className="footable-header">
                                <th className="footable-first-visible" >
                                    <div className='d-flex align-items-center'><input type="checkbox" aria-label="Checkbox for following text input" />
                                        Select All</div></th>
                                <th >
                                    ID</th>
                                <th data-breakpoints="md" >Name </th>
                                <th >Image</th>
                                <th >Main Text</th>
                                <th >Home</th>
                                <th >Status</th>
                                <th data-breakpoints="md" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td  >
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
                                    <picture >
                                        <img src={hotel1} alt='image' className="img-fluid img-thumbnail" width={"100px"} />
                                    </picture>
                                </td>
                                <td >
                                    Air conditioning
                                </td>
                                <td >
                                    <span className='badge badge-inline badge-success fs-4'><FaHome /></span>
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
                <DestinationZoom hotel1={hotel1}/>
            </div>
        </>
    )
}

export default DestinationList
