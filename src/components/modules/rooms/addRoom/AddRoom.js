import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import { MdReply } from "react-icons/md";
import "react-quill/dist/quill.snow.css";

function AddRoom({ title }) {
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
                  <h5 className="mb-md-0 h6">Rooms</h5>
                </div>
                <div className="col-md-3">
                  <div className="input-group input-group-sm justify-content-end">
                    <Link
                      to="/admin/rooms"
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
                        Hotel
                      </label>
                      <select
                        className="form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>
                        <option value={1}>Royal Hotel</option>
                        <option value={2}>Island Resort</option>
                        <option value={3}>Paradise Hotel</option>
                      </select>
                    </div>
                  </div>

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
                        Number of rooms
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Number of rooms "
                        placeholder="Number of rooms "
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Price / night
                      </label>
                      <input
                        type="test"
                        className="form-control"
                        id="Price / night  "
                        placeholder="Price / night  "
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="col-lg-2">
                      <div className="mb-3">
                        <label htmlFor="Search" className="form-label">
                          Max children
                        </label>
                        <select
                          className="form-control form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="col-lg-2">
                      <div className="mb-3">
                        <label htmlFor="Search" className="form-label">
                          Max adults
                        </label>
                        <select
                          className="form-control form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="col-lg-2">
                      <div className="mb-3">
                        <label htmlFor="Search" className="form-label">
                          Max people
                        </label>
                        <select
                          className="form-control form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="col-lg-2">
                      <div className="mb-3">
                        <label htmlFor="Search" className="form-label">
                          Min people
                        </label>
                        <select
                          className="form-control form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label htmlFor="Search" className="form-label">
                        Description
                      </label>
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

export default AddRoom;
