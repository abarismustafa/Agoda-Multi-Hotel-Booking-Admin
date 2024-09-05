


import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdReply } from "react-icons/md";
import "react-quill/dist/quill.snow.css";
import JoditEditor from "jodit-react";

function AddnewPopup() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // सभी फॉर्मेटिंग टूल्स को अनलॉक करने के लिए
    height: 300,
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
                  <h5 className="mb-md-0 h6"> Popup</h5>
                </div>
                <div className="col-md-3">
                  <div className="input-group input-group-sm justify-content-end">
                    <Link
                      to="/admin/popup"
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
                        Title
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Title"
                        placeholder="Title"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Background color
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Background color"
                        placeholder="Background color"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Publish date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="Publish date"
                        placeholder="Publish date"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Unpublish date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="Unpublish date"
                        placeholder="Unpublish date"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <div>
                        <JoditEditor
                          ref={editor}
                          value={content}
                          config={config}
                          onBlur={(newContent) => setContent(newContent)} // जब एडिटर से बाहर क्लिक करें तो कंटेंट अपडेट हो जाए
                          onChange={(newContent) => {}}
                        />
                        <div style={{ marginTop: "20px" }}>
                          <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        <b className="fs-6">All Pages</b>
                      </label>
                      <div className="d-flex">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Allpage"
                            id="allpage"
                          />
                          <label className="form-check-label" htmlFor="allpage">
                            Yes
                          </label>
                        </div>
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Allpage"
                            id="allpage1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="allpage1"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
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

export default AddnewPopup;
