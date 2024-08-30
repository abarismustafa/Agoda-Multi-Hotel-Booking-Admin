import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import { MdReply } from "react-icons/md";
import "react-quill/dist/quill.snow.css";

function AddHotel({ title }) {
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
                  <h5 className="mb-md-0 h6">{title}</h5>
                </div>
                <div className="col-md-3">
                  <div className="input-group input-group-sm justify-content-end">
                    <Link
                      to="/admin/Hotels"
                      className="back_btn bg-info text-white py-1 px-2 rounded-sm fw-light fs-6"
                    >
                      <MdReply className="mb-1" /> Back
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3">
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

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Subtitle
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Subtitle"
                        placeholder="Subtitle"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Alias
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Alias "
                        placeholder="Alias "
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Destination
                      </label>
                      <select
                        className="form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>
                        <option value={1}>London, United kingdom</option>
                        <option value={2}>Paris, Frans</option>
                        <option value={3}>New York, United States</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Phone
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Phone "
                        placeholder="Phone "
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        E-mail
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="E-mail "
                        placeholder="E-mail "
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Web
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Web "
                        placeholder="Web "
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
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

                  <div className="col-lg-3">
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

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Longitude
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Longitude"
                        placeholder="Longitude"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        PayPal email
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="PayPal email"
                        placeholder="PayPal email"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Chose File
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Chose a File"
                      />
                    </div>
                  </div>

                  <div className="col-12">
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
                  <div className="col-lg-6">
                    <div className="mb-3 mt-4">
                      <button className="btn btn-success">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHotel;
