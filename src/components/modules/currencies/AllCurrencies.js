import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoIosArchive } from "react-icons/io";
import { IoBanSharp, IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function AllCurrencies() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header row gutters-5">
            <div className="col text-center text-md-left">
              <h5 className="mb-md-0 h6">Currencies </h5>
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
                  <th>Currency Code</th>

                  <th data-breakpoints="md"> Currency Sign</th>
                  <th data-breakpoints="md">Main</th>

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
                    1
                  </td>

                  <td style={{ display: "table-cell" }}>USD</td>
                  <td style={{ display: "table-cell" }}>$</td>
                  <td style={{ display: "table-cell" }}>
                    <FaStar className="fs-5 text-info" />
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/currencies/EditCurrencies"
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
                    1
                  </td>

                  <td style={{ display: "table-cell" }}>USD</td>
                  <td style={{ display: "table-cell" }}>$</td>
                  <td style={{ display: "table-cell" }}>
                    <FaStar className="fs-5 text-secondary" />
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/currencies/EditCurrencies"
                          className="action_icon"
                        >
                          <FiEdit className="fssecondary fs-5 text-info" />
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
                    1
                  </td>

                  <td style={{ display: "table-cell" }}>USD</td>
                  <td style={{ display: "table-cell" }}>$</td>
                  <td style={{ display: "table-cell" }}>
                    <FaStar className="fssecondary fs-5 text-secondary" />
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/currencies/EditCurrencies"
                          className="action_icon"
                        >
                          <FiEdit className="fssecondary fs-5 text-info" />
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
                    1
                  </td>

                  <td style={{ display: "table-cell" }}>USD</td>
                  <td style={{ display: "table-cell" }}>$</td>
                  <td style={{ display: "table-cell" }}>
                    <FaStar className="fssecondary fs-5 text-secondary" />
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/currencies/EditCurrencies"
                          className="action_icon"
                        >
                          <FiEdit className="fssecondary fs-5 text-info" />
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
                    1
                  </td>

                  <td style={{ display: "table-cell" }}>USD</td>
                  <td style={{ display: "table-cell" }}>$</td>
                  <td style={{ display: "table-cell" }}>
                    <FaStar className="fssecondary fs-5 text-secondary" />
                  </td>

                  <td style={{ display: "table-cell" }}>
                    <div className="d-flex action-row justify-content-center">
                      <div className="me-1">
                        <Link
                          to="/admin/currencies/EditCurrencies"
                          className="action_icon"
                        >
                          <FiEdit className="fssecondary fs-5 text-info" />
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

export default AllCurrencies;
