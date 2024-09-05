import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { MdReply } from "react-icons/md";
import "react-quill/dist/quill.snow.css";

function AddNewLocation({ title }) {
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
                  <h5 className="mb-md-0 h6">Add New Currency</h5>
                </div>
                <div className="col-md-3">
                  <div className="input-group input-group-sm justify-content-end">
                    <Link
                      to="/admin/currencies"
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
                        Currency Code
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Currency sign "
                        placeholder="Currency sign "
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Currency sign
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Currency sign "
                        placeholder="Currency sign "
                      />
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

export default AddNewLocation;
