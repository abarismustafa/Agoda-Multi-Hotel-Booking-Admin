import React from 'react'
import { FaCheck } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { IoIosArchive } from 'react-icons/io';
import { IoBanSharp, IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function MenusList() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header row gutters-5">
            <div className="col text-center text-md-left">
              <h5 className="mb-md-0 h6">Menus </h5>
            </div>
          </div>
          <div className="card-body">
            <table
              className="table aiz-table mb-0 footable footable-1 breakpoint-xl table-cell"
              style={{}}
            >
              <thead>
                <tr className="footable-header">
                  <th className="footable-first-visible">#</th>
                  <th className="footable-first-visible">ID</th>
                  <th>Name</th>

                  <th data-breakpoints="md">Item type</th>
                  <th data-breakpoints="md">Item ID</th>
                  <th data-breakpoints="md">URL</th>
                  <th data-breakpoints="md">Parent Item</th>
                  <th data-breakpoints="md">Main</th>
                  <th data-breakpoints="md">Footer</th>
                  <th data-breakpoints="md">Status</th>
                  <th data-breakpoints="md" className="text-center">
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
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    1
                  </td>

                  <td style={{ display: "table-cell" }}>Home</td>
                  <td style={{ display: "table-cell" }}>Page</td>
                  <td style={{ display: "table-cell" }}>1</td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}>1</td>
                  <td style={{ display: "table-cell" }}>0</td>

                  <td style={{ display: "table-cell" }}>
                    <span className="badge badge-inline badge-success">
                      Published
                    </span>
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <FaCheck className="fs-5 text-muted" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoBanSharp className="fs-5" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="" className="action_icon">
                          <IoIosArchive className="fs-5 text-warning" />
                        </a>
                      </div>
                      <div className="me-1">
                        <Link
                          to="/admin/taxes/addnewTax"
                          className="action_icon"
                        >
                          <FiEdit className="fs-5 text-info" />
                        </Link>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoTrashOutline className="fs-5" />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    2
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    2
                  </td>

                  <td style={{ display: "table-cell" }}>Destination</td>
                  <td style={{ display: "table-cell" }}>Page</td>
                  <td style={{ display: "table-cell" }}>120</td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}>1</td>
                  <td style={{ display: "table-cell" }}>0</td>

                  <td style={{ display: "table-cell" }}>
                    <span className="badge badge-inline badge-success">
                      Published
                    </span>
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <FaCheck className="fs-5 text-muted" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoBanSharp className="fs-5" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="" className="action_icon">
                          <IoIosArchive className="fs-5 text-warning" />
                        </a>
                      </div>
                      <div className="me-1">
                        <Link
                          to="/admin/taxes/addnewTax"
                          className="action_icon"
                        >
                          <FiEdit className="fs-5 text-info" />
                        </Link>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoTrashOutline className="fs-5" />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    3
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    3
                  </td>

                  <td style={{ display: "table-cell" }}>Booking</td>
                  <td style={{ display: "table-cell" }}>Page</td>
                  <td style={{ display: "table-cell" }}>10</td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}>1</td>
                  <td style={{ display: "table-cell" }}>0</td>

                  <td style={{ display: "table-cell" }}>
                    <span className="badge badge-inline badge-success">
                      Published
                    </span>
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <FaCheck className="fs-5 text-muted" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoBanSharp className="fs-5" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="" className="action_icon">
                          <IoIosArchive className="fs-5 text-warning" />
                        </a>
                      </div>
                      <div className="me-1">
                        <Link
                          to="/admin/taxes/addnewTax"
                          className="action_icon"
                        >
                          <FiEdit className="fs-5 text-info" />
                        </Link>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoTrashOutline className="fs-5" />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    4
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    4
                  </td>

                  <td style={{ display: "table-cell" }}>Hotel Listing</td>
                  <td style={{ display: "table-cell" }}>None</td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}></td>
                  <td style={{ display: "table-cell" }}>1</td>
                  <td style={{ display: "table-cell" }}>0</td>

                  <td style={{ display: "table-cell" }}>
                    <span className="badge badge-inline badge-success">
                      Published
                    </span>
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <FaCheck className="fs-5 text-muted" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoBanSharp className="fs-5" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="" className="action_icon">
                          <IoIosArchive className="fs-5 text-warning" />
                        </a>
                      </div>
                      <div className="me-1">
                        <Link
                          to="/admin/taxes/addnewTax"
                          className="action_icon"
                        >
                          <FiEdit className="fs-5 text-info" />
                        </Link>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoTrashOutline className="fs-5" />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    5
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    5
                  </td>

                  <td style={{ display: "table-cell" }}>Hotel On Map</td>
                  <td style={{ display: "table-cell" }}>Page</td>
                  <td style={{ display: "table-cell" }}>21</td>
                  <td style={{ display: "table-cell" }}>Hotels</td>
                  <td style={{ display: "table-cell" }}>1</td>
                  <td style={{ display: "table-cell" }}>1</td>
                  <td style={{ display: "table-cell" }}>0</td>

                  <td style={{ display: "table-cell" }}>
                    <span className="badge badge-inline badge-success">
                      Published
                    </span>
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <FaCheck className="fs-5 text-muted" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoBanSharp className="fs-5" />
                        </a>
                      </div>
                      <div className="me-1">
                        <a href="" className="action_icon">
                          <IoIosArchive className="fs-5 text-warning" />
                        </a>
                      </div>
                      <div className="me-1">
                        <Link
                          to="/admin/taxes/addnewTax"
                          className="action_icon"
                        >
                          <FiEdit className="fs-5 text-info" />
                        </Link>
                      </div>
                      <div className="me-1">
                        <a href="#" className="action_icon">
                          <IoTrashOutline className="fs-5" />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="aiz-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenusList
