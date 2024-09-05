import React from "react";

import { FiEdit } from "react-icons/fi";

import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function TextList() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header row gutters-5">
            <div className="col text-center text-md-left">
              <h5 className="mb-md-0 h6">Texts </h5>
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

                  <th data-breakpoints="md">Value</th>
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
                    <input type="checkbox" className="" />
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    189
                  </td>

                  <td style={{ display: "table-cell" }}>YO</td>
                  <td style={{ display: "table-cell" }}>y.o.</td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/location/EditnewLocation"
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
                    <input type="checkbox" className="" />
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    188
                  </td>

                  <td style={{ display: "table-cell" }}>
                    PAYMENT_RAZORPAY_NOTICE
                  </td>
                  <td style={{ display: "table-cell" }}>
                    Click on "Check Out", then fill in the form with...
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/location/EditnewLocation"
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
                    <input type="checkbox" className="" />
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    187
                  </td>

                  <td style={{ display: "table-cell" }}>COUPON_CODE_FAILURE</td>
                  <td style={{ display: "table-cell" }}>
                    Error: this code is invalid or already used
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/location/EditnewLocation"
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
                    <input type="checkbox" className="" />
                  </td>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    186
                  </td>

                  <td style={{ display: "table-cell" }}>DISCOVER_ALSO</td>
                  <td style={{ display: "table-cell" }}>Discover also</td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/location/EditnewLocation"
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

export default TextList;
