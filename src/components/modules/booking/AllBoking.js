import { useState } from "react"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function AllBooking() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col text-center text-md-left">
                                <h5 className="mb-md-0 h6">All Bookings</h5>
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
                                        <th className="footable-first-visible" >ID</th>
                                        <th >
                                            Hotel</th>
                                        <th >Customer</th>
                                        <th data-breakpoints="md" >Check-in </th>
                                        <th data-breakpoints="md" >Check-out</th>
                                        <th data-breakpoints="md" >Nights</th>
                                        <th data-breakpoints="md" >Adults</th>
                                        <th data-breakpoints="md" >Children</th>
                                        <th data-breakpoints="md" >Total</th>
                                        <th className="text-right footable-last-visible" >Status</th>
                                        <th data-breakpoints="md" >Added on </th>
                                        <th data-breakpoints="md" >Updated on </th>
                                        <th data-breakpoints="md" >Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" >1</td>
                                        <td >

                                        </td>
                                        <td >20230248</td>
                                        <td >Jagan Eakambaram</td>
                                        <td >Male</td>
                                        <td >
                                            <span className="badge badge-inline badge-success">Approved</span>
                                        </td>
                                        <td >
                                            0
                                        </td>
                                        <td >22-02-2023</td>
                                        <td >
                                            <span className="badge badge-inline badge-success">Active</span>
                                        </td>
                                        <td >
                                            <span className="badge badge-inline badge-success">Active</span>
                                        </td>
                                        <td >20230248</td>
                                        <td >Jagan Eakambaram</td>
                                        <td >Male</td>



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
export default AllBooking