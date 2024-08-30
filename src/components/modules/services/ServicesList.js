import React from 'react'
import { Form, Table } from 'react-bootstrap'
import { MdDelete, MdEdit } from 'react-icons/md'
function ServicesList() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col text-center text-md-left">
                                <h5 className="mb-md-0 h6">All Services List</h5>
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
                                                #</div></th>
                                        <th >
                                            ID</th>
                                        <th >Title</th>
                                        <th data-breakpoints="md" >Package </th>
                                        <th data-breakpoints="md" >Price</th>
                                        <th data-breakpoints="md" >Status</th>
                                        <th data-breakpoints="md" >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" >
                                            <div className='d-flex align-items-center'>
                                                <input type="checkbox" aria-label="Checkbox for following text input" />
                                                <span className="ms-2">1</span>
                                            </div>

                                        </td>
                                        <td >

                                        </td>
                                        <td >Heating</td>
                                        <td >Adult Night</td>
                                        <td >₹ 1000</td>
                                        <td >
                                            <span className="badge badge-inline badge-success">Approved</span>
                                        </td>
                                        <td >
                                            <span className='btn btn-outline-primary ms-1'>
                                                <MdEdit />
                                            </span>
                                            <button className='btn btn-outline-primary ms-1'>
                                                <MdDelete />
                                            </button>
                                        </td>




                                        {/* <td className="text-right footable-last-visible" >
                                            <div className="btn-group mb-2">
                                                <div className="btn-group">
                                                    <button type="button" className="btn py-0" aria-expanded="false" onClick={() => { setDropdown(!dropdown) }}>
                                                        <i className="las la-ellipsis-v" />
                                                    </button>
                                                    <div className={`dropdown-menu dropdown-menu-right ${dropdown ? "mm-show" : "extra"}`}>
                                                        <Link to="/admin/members/members-detail" className="dropdown-item">View</Link>
                                                        <Link className="dropdown-item" to="/admin/members/members-edit">Edit</Link>
                                                        <Link to="#" className="dropdown-item">Block</Link>
                                                        <a className="dropdown-item" onClick="package_info(48)" href="#;">Package</a>
                                                        <a className="dropdown-item" onClick="wallet_balance_update(48,0)" href="#">Wallet Balance</a>
                                                        <a href="#" className="dropdown-item">Log in as this Member</a>
                                                        <a className="dropdown-item confirm-delete" data-href="">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td> */}
                                    </tr>

                                </tbody>
                            </Table>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesList
