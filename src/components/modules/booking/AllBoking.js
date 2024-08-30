import { useState } from "react";
import { Link } from "react-router-dom";

function AllBooking() {
  const [dropdown, setDropdown] = useState(false);
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
              <table
                className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      ID
                    </th>
                    <th style={{ display: "table-cell" }}>Hotel</th>
                    <th style={{ display: "table-cell" }}>Customer</th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Check-in{" "}
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Check-out
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Nights
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Adults
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Children
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Total
                    </th>
                    <th
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      Status
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Added on{" "}
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Updated on{" "}
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      1
                    </td>
                    <td style={{ display: "table-cell" }}></td>
                    <td style={{ display: "table-cell" }}>20230248</td>
                    <td style={{ display: "table-cell" }}>Jagan Eakambaram</td>
                    <td style={{ display: "table-cell" }}>Male</td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Approved
                      </span>
                    </td>
                    <td style={{ display: "table-cell" }}>0</td>
                    <td style={{ display: "table-cell" }}>22-02-2023</td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Active
                      </span>
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Active
                      </span>
                    </td>
                    <td style={{ display: "table-cell" }}>20230248</td>
                    <td style={{ display: "table-cell" }}>Jagan Eakambaram</td>
                    <td style={{ display: "table-cell" }}>Male</td>

                    {/* <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
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
              </table>
              <div className="aiz-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllBooking;
