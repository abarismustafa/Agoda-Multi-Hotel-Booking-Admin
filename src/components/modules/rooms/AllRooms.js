import { useState } from "react";
import { FaHouse, FaCheck } from "react-icons/fa6";

import { IoTrashOutline, IoBanSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { IoIosArchive } from "react-icons/io";

import r1 from "../../../assets/img/rooms/r1.jpg";
import r2 from "../../../assets/img/rooms/r2.jpg";
import r3 from "../../../assets/img/rooms/r3.jpg";
import r4 from "../../../assets/img/rooms/r4.jpg";
import r5 from "../../../assets/img/rooms/r5.jpg";
import r6 from "../../../assets/img/rooms/r6.jpg";
import { Link } from "react-router-dom";

function AllRooms() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col text-center text-md-left">
                <h5 className="mb-md-0 h6">All Rooms List</h5>
              </div>
            </div>
            <div className="card-body">
              <table
                className="table aiz-table mb-0 footable footable-1 breakpoint-xl table-cell"
                style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th className="footable-first-visible">ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th data-breakpoints="md">SubTitle</th>
                    <th data-breakpoints="md">Hotel</th>
                    <th data-breakpoints="md">Max People</th>
                    <th data-breakpoints="md">Home</th>
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
                    <td style={{ display: "table-cell" }}>
                      <a href="" className="image-link">
                        <img src={r1} alt="" />
                      </a>
                    </td>
                    <td style={{ display: "table-cell" }}>Luxury bunlagow</td>
                    <td style={{ display: "table-cell" }}>
                      Victorial Chic Hotel
                    </td>
                    <td style={{ display: "table-cell" }}>3</td>
                    <td style={{ display: "table-cell" }}>
                      London United Kingdom
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline ">
                        <a href="">
                          <FaHouse className="text-muted fs-5" />
                        </a>
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Published
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <div className="d-flex action-row">
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
                            to="/admin/rooms/addroom"
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
                      1
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <a href="" className="image-link">
                        <img src={r2} alt="" />
                      </a>
                    </td>
                    <td style={{ display: "table-cell" }}>St James Hotel</td>
                    <td style={{ display: "table-cell" }}>
                      Victorial Chic Hotel
                    </td>
                    <td style={{ display: "table-cell" }}>3</td>
                    <td style={{ display: "table-cell" }}>
                      London United Kingdom
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline ">
                        <a href="">
                          <FaHouse className="text-muted fs-5" />
                        </a>
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Published
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <div className="d-flex action-row">
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
                            to="/admin/rooms/addroom"
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
                      1
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <a href="" className="image-link">
                        <img src={r3} alt="" />
                      </a>
                    </td>
                    <td style={{ display: "table-cell" }}>St James Hotel</td>
                    <td style={{ display: "table-cell" }}>
                      Victorial Chic Hotel
                    </td>
                    <td style={{ display: "table-cell" }}>3</td>
                    <td style={{ display: "table-cell" }}>
                      London United Kingdom
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline">
                        <a href="">
                          <FaHouse className="text-muted fs-5" />
                        </a>
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Published
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <div className="d-flex action-row">
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
                            to="/admin/rooms/addroom"
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
                      1
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <a href="" className="image-link">
                        <img src={r4} alt="" />
                      </a>
                    </td>
                    <td style={{ display: "table-cell" }}>St James Hotel</td>
                    <td style={{ display: "table-cell" }}>
                      Victorial Chic Hotel
                    </td>
                    <td style={{ display: "table-cell" }}>3</td>
                    <td style={{ display: "table-cell" }}>
                      London United Kingdom
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline ">
                        <a href="">
                          <FaHouse className="text-muted fs-5" />
                        </a>
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Published
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <div className="d-flex action-row">
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
                            to="/admin/rooms/addroom"
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
                      1
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <a href="" className="image-link">
                        <img src={r5} alt="" />
                      </a>
                    </td>
                    <td style={{ display: "table-cell" }}>St James Hotel</td>
                    <td style={{ display: "table-cell" }}>
                      Victorial Chic Hotel
                    </td>
                    <td style={{ display: "table-cell" }}>3</td>
                    <td style={{ display: "table-cell" }}>
                      London United Kingdom
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline">
                        <a href="">
                          <FaHouse className="text-muted fs-5" />
                        </a>
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Published
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <div className="d-flex action-row">
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
                            to="/admin/rooms/addroom"
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
                      1
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <a href="" className="image-link">
                        <img src={r6} alt="" />
                      </a>
                    </td>
                    <td style={{ display: "table-cell" }}>St James Hotel</td>
                    <td style={{ display: "table-cell" }}>
                      Victorial Chic Hotel
                    </td>
                    <td style={{ display: "table-cell" }}>3</td>
                    <td style={{ display: "table-cell" }}>
                      London United Kingdom
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline ">
                        <FaHouse className="text-muted fs-5" />
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <span className="badge badge-inline badge-success">
                        Published
                      </span>
                    </td>

                    <td style={{ display: "table-cell" }}>
                      <div className="d-flex action-row">
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
                            to="/admin/rooms/addroom"
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
    </>
  );
}
export default AllRooms;
