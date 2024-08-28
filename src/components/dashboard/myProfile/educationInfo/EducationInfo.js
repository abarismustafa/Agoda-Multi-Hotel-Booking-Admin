import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EducationInfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [smShow, setSmShow] = useState(false);
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Education Info</h5>
          <div className="text-right">
            <a
              onclick="education_add_modal('42');"
              href="javascript:void(0);"
              className="btn btn-sm btn-primary "
            >
              <i className="las mr-1 la-plus" />
              Add New
            </a>
          </div>
        </div>
        <div className="card-body">
          <table
            className="table aiz-table footable footable-1 breakpoint-xl"
            style={{}}
          >
            <thead />
            <tbody>
              <tr className="footable-header">
                <th
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Degree
                </th>
                <th style={{ display: "table-cell" }}>Institution</th>
                <th data-breakpoints="md" style={{ display: "table-cell" }}>
                  Start
                </th>
                <th data-breakpoints="md" style={{ display: "table-cell" }}>
                  End
                </th>
                <th data-breakpoints="md" style={{ display: "table-cell" }}>
                  Status
                </th>
                <th
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Options
                </th>
              </tr>
              <tr>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Doctorate
                </td>
                <td style={{ display: "table-cell" }}>University Of Texus</td>
                <td style={{ display: "table-cell" }}>2014</td>
                <td style={{ display: "table-cell" }}>2020</td>
                <td style={{ display: "table-cell" }}>
                  <label className="aiz-switch aiz-switch-success mb-0">
                    <input
                      type="checkbox"
                      id="status.0"
                      onchange="update_education_present_status(this)"
                      defaultValue={11}
                      defaultChecked
                      data-switch="success"
                    />
                    <span />
                  </label>
                </td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                    onclick="education_edit_modal('11');"
                    title="Edit"
                    onClick={handleShow}
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://demo.activeitzone.com/matrimonial/education/destroy/11"
                    title="Delete"
                    onClick={() => setSmShow(true)}
                  >
                    <i className="las la-trash" />
                  </a>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <h5 className="modal-title h6">Edit Education Info</h5>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">
                          Degree
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="degree"
                            defaultValue="M.B.B.S"
                            className="form-control"
                            placeholder="Degree"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">
                          Institution
                        </label>
                        <div className="col-md-9">
                          <input
                            type="text"
                            name="institution"
                            defaultValue="Imperial Medical College"
                            placeholder="Institution"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">Start</label>
                        <div className="col-md-9">
                          <input
                            type="number"
                            name="education_start"
                            defaultValue={2010}
                            className="form-control"
                            placeholder="Start"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">End</label>
                        <div className="col-md-9">
                          <input
                            type="number"
                            name="education_end"
                            defaultValue={2015}
                            placeholder="End"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Update Education Info
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-sm">
                        <h6>Delete Confirmation</h6>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p className="mt-1">Are you sure to delete this?</p>
                      <button
                        type="button"
                        className="btn btn-light mt-2"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <a
                        id="delete-link"
                        className="btn btn-primary mt-2"
                        href="https://demo.activeitzone.com/matrimonial/education/destroy/2"
                      >
                        Delete
                      </a>
                    </Modal.Body>
                  </Modal>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default EducationInfo;
