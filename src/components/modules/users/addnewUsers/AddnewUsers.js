import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import { MdReply } from "react-icons/md";
import "react-quill/dist/quill.snow.css";

function AddnewUsers({ title }) {
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
                  <h5 className="mb-md-0 h6">Add New Location</h5>
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
                        Firstname
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Firstname"
                        placeholder="Firstname"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Lastname
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Lastname"
                        placeholder="Lastname"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        E-mail
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="E-mail"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Login
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Login"
                        placeholder="Login"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Password
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Password"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Type
                      </label>
                      <select
                        className="form-control"
                        aria-label="Default select example"
                      >
                        <option selected>select Type</option>
                        <option value={1}>Administator</option>
                        <option value={2}>Manager</option>
                        <option value={3}>Editor </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="textarea1" class="">
                      Address
                    </label>
                    <textarea
                      id="textarea1"
                      class="form-control  text-white"
                      rows="4"
                      placeholder="Address..."
                    ></textarea>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Postcode
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Postcode"
                        placeholder="Postcode"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        City
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="City"
                        placeholder="City"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Company
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Company"
                        placeholder="Company"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Country
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Country"
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Mobile
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Mobile"
                        placeholder="Mobile"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Phone
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Phone"
                        placeholder="Phone"
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

export default AddnewUsers;
