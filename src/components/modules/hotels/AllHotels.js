import { useState } from "react";
import { FaHouse, FaCheck } from "react-icons/fa6";

import { IoTrashOutline, IoBanSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { IoIosArchive } from "react-icons/io";

import img1 from "../../../assets/img/hotels/img1.jpg";
import img2 from "../../../assets/img/hotels/img2.jpg";
import img3 from "../../../assets/img/hotels/img3.jpg";
import img4 from "../../../assets/img/hotels/img4.jpg";
import img5 from "../../../assets/img/hotels/img5.jpg";
import { Link } from "react-router-dom";

function AllHotels() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col text-center text-md-left">
                <h5 className="mb-md-0 h6">All Hotels</h5>
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
                className="table aiz-table mb-0 footable footable-1 breakpoint-xl table-cell"
                style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th className="footable-first-visible">ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th data-breakpoints="md">SubTitle</th>
                    <th data-breakpoints="md">Class</th>
                    <th data-breakpoints="md">Destination</th>
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
                      <Link to="" className="image-link">
                        <img src={img1} alt="" />
                      </Link>
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
                      <span className="badge badge-inline badge-success">
                        <FaHouse />
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
                          <Link to="#" className="action_icon">
                            <FaCheck className="fs-5 text-muted" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoBanSharp className="fs-5" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <IoIosArchive className="fs-5 text-warning" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link
                            to="/admin/Hotels/Edit-hotel"
                            className="action_icon"
                          >
                            <FiEdit className="fs-5 text-info" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoTrashOutline className="fs-5" />
                          </Link>
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
                      <Link to="" className="image-link">
                        <img src={img2} alt="" />
                      </Link>
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
                      <span className="badge badge-inline badge-success">
                        <FaHouse />
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
                          <Link to="#" className="action_icon">
                            <FaCheck className="fs-5 text-muted" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoBanSharp className="fs-5" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <IoIosArchive className="fs-5 text-warning" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <FiEdit className="fs-5 text-info" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoTrashOutline className="fs-5" />
                          </Link>
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
                      <Link to="" className="image-link">
                        <img src={img3} alt="" />
                      </Link>
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
                      <span className="badge badge-inline badge-success">
                        <FaHouse />
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
                          <Link to="#" className="action_icon">
                            <FaCheck className="fs-5 text-muted" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoBanSharp className="fs-5" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <IoIosArchive className="fs-5 text-warning" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <FiEdit className="fs-5 text-info" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoTrashOutline className="fs-5" />
                          </Link>
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
                      <Link to="" className="image-link">
                        <img src={img4} alt="" />
                      </Link>
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
                      <span className="badge badge-inline badge-success">
                        <FaHouse />
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
                          <Link to="#" className="action_icon">
                            <FaCheck className="fs-5 text-muted" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoBanSharp className="fs-5" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <IoIosArchive className="fs-5 text-warning" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <FiEdit className="fs-5 text-info" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoTrashOutline className="fs-5" />
                          </Link>
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
                      <Link to="" className="image-link">
                        <img src={img5} alt="" />
                      </Link>
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
                      <span className="badge badge-inline badge-success">
                        <FaHouse />
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
                          <Link to="#" className="action_icon">
                            <FaCheck className="fs-5 text-muted" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoBanSharp className="fs-5" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <IoIosArchive className="fs-5 text-warning" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="" className="action_icon">
                            <FiEdit className="fs-5 text-info" />
                          </Link>
                        </div>
                        <div className="me-1">
                          <Link to="#" className="action_icon">
                            <IoTrashOutline className="fs-5" />
                          </Link>
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
export default AllHotels;
