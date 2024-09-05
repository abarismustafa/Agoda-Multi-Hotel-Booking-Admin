import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import { MdReply } from "react-icons/md";
import "react-quill/dist/quill.snow.css";

function EditNewLocation({ title }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // सभी फॉर्मेटिंग टूल्स को अनलॉक करने के लिए
    height: 400,
    uploader: {
      insertImageAsBase64URI: true, // इमेज को बेस64 में अपलोड करें
    },
    toolbar: true,
  };

  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header row gutters-5">
                <div className="col text-center text-md-left">
                  <h5 className="mb-md-0 h6">Edit New Location</h5>
                </div>
                <div className="col-md-3">
                  <div className="input-group input-group-sm justify-content-end">
                    <Link
                      to="/admin/location"
                      className="back_btn bg-info text-white py-1 px-2 rounded-sm fw-light fs-6"
                    >
                      <MdReply className="mb-1" /> Back
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Name
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Name"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Address
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Address"
                        placeholder="Address"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Latitude
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Latitude"
                        placeholder="Latitude"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Longtitude
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Longtitude"
                        placeholder="Longtitude"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        <b className="fs-6">Release</b>
                      </label>
                      <div className="d-flex">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Release"
                            id="Release1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Release1"
                          >
                            Published
                          </label>
                        </div>
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Release"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Not Published
                          </label>
                        </div>

                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Release"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Awaiting
                          </label>
                        </div>

                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Release"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Archived
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3 mt-4">
                  <button className="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNewLocation;
