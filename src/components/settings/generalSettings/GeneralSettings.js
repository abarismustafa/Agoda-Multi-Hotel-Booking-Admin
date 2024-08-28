import { useState } from "react";
import { Modal } from "react-bootstrap";
import Activation from "./activation/Activation";

function GeneralSettings() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h1 className="mb-0 h6">General Settings</h1>
                </div>
                <div className="card-body">
                  <form
                    action="https://weddemoadmin.abaris.in/admin/settings/update"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="V3eUAFlZ4RZMMqWQoLNyu8KJ5Be77CCNc7fweveP"
                    />{" "}
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        System Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="hidden"
                          name="types[]"
                          defaultValue="site_name"
                        />
                        <input
                          type="text"
                          name="site_name"
                          className="form-control"
                          defaultValue="testing"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        System Logo
                      </label>
                      <div className="col-sm-9">
                        <div
                          className="input-group"
                          data-toggle="aizuploader"
                          data-type="image"
                        >
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary">
                              Browse
                            </div>
                          </div>
                          <div
                            className="form-control file-amount"
                            onClick={handleShow}
                          >
                            1 File selected
                          </div>
                          <input
                            type="hidden"
                            name="types[]"
                            defaultValue="system_logo"
                          />
                          <input
                            type="hidden"
                            name="system_logo"
                            defaultValue={294}
                            className="selected-files"
                          />
                        </div>
                        <div className="file-preview box sm">
                          <div
                            className="d-flex justify-content-between align-items-center mt-2 file-preview-item"
                            data-id={294}
                            title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png"
                          >
                            <div className="align-items-center align-self-stretch d-flex justify-content-center thumb">
                              <img
                                src="//weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png"
                                className="img-fit"
                              />
                            </div>
                            <div className="col body">
                              <h6 className="d-flex">
                                <span className="text-truncate title">
                                  2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro
                                </span>
                                <span className="ext">.png</span>
                              </h6>
                              <p>19 KB</p>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-link remove-attachment"
                                type="button"
                              >
                                <i className="la la-close" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        dialogClassName="happy-modle"
                      >
                        <Modal.Header closeButton>
                          <div className="uppy-modal-nav">
                            <ul className="nav nav-tabs border-0">
                              <li className="nav-item">
                                <a
                                  className="nav-link font-weight-medium text-dark active"
                                  data-toggle="tab"
                                  href="#aiz-select-file"
                                >
                                  Select File
                                </a>
                              </li>
                              <li className="nav-item">
                                <div class="input-group">
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </Modal.Header>
                        <Modal.Body>
                          {/* <div className="modal-body"> */}
                          <div className="tab-content h-100">
                            <div
                              className="tab-pane active h-100"
                              id="aiz-select-file"
                            >
                              <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                                <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                                  <div className="col-xl-2 col-md-3 col-5">
                                    <div className>
                                      {/* Input */}
                                      <select
                                        className="form-control form-control-xs aiz-selectpicker"
                                        name="aiz-uploader-sort"
                                        fdprocessedid="q0h7pa"
                                      >
                                        <option value="newest">
                                          Sort by newest
                                        </option>
                                        <option value="oldest">
                                          Sort by oldest
                                        </option>
                                        <option value="smallest">
                                          Sort by smallest
                                        </option>
                                        <option value="largest">
                                          Sort by largest
                                        </option>
                                      </select>
                                      {/* End Input */}
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-5">
                                    <div className="custom-control custom-radio">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        name="aiz-show-selected"
                                        id="aiz-show-selected"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="aiz-show-selected"
                                      >
                                        Selected Only
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xl-3 ml-auto mr-0 col-2 position-static">
                                    <div className="aiz-uploader-search text-right">
                                      <input
                                        type="text"
                                        className="form-control form-control-xs"
                                        name="aiz-uploader-search"
                                        placeholder="Search your files"
                                        fdprocessedid="e4ta"
                                      />
                                      <i className="search-icon d-md-none">
                                        <span />
                                      </i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="aiz-uploader-all clearfix c-scrollbar-light">
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-1.png"
                                      data-value={313}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-1
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>57 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="1.png"
                                      data-value={312}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/uBDARQfJpAEFuUlutaNEZbg6cIU3QabJo32hTh01.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            1
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>781 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-2.png"
                                      data-value={311}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/V8ascFa3sAFZSw3wfZ0iQwdUrT5sJ7XPINsN9eo0.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-2
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>70 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="2.png"
                                      data-value={310}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/NbGjsZSmGSEOm25ZAG9RCJv9dYeP94Z2z0Dunwwj.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            2
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 MB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-3.png"
                                      data-value={309}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/XhymxhSGSS55vMDaba0QcX6T1ABHK8O3Q9rgQZE9.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-3
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>60 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="3.png"
                                      data-value={308}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/ChVoOrArnZDuuTsd6VUkR7P8L15D4pKMzuiL9TQ0.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            3
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>832 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-4.png"
                                      data-value={307}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/mwGP4G1aqF5DtDxEI111bPP0QGE1xqFkiCkQbDMO.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-4
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>74 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="4.png"
                                      data-value={306}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            4
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 MB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-5.png"
                                      data-value={305}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/rxGUYkry7DQzWegMZ9VfYy6UjPiu2gWB7PKpX1P9.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-5
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>69 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="5.png"
                                      data-value={304}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            5
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1010 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="6.png"
                                      data-value={303}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            6
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 MB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress.jpg"
                                      data-value={302}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Ha3BoiWkO6b4vENPPTM7D5SeEMP6uImAsu5MBayW.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>411 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="groom-bride-wedding-day.jpg"
                                      data-value={301}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/FZtTEKkOiKg6DkHwSnDDhN783QKS3HJgQW2qzZsb.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            groom-bride-wedding-day
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>781 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg"
                                      data-value={300}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>315 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="wedding.jpg"
                                      data-value={299}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/WmTlHsgN9QazTwnPoAfUlkmqlJEE29i6GZMYyk6H.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            wedding
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>316 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="gorgeous-bride-handsome-groom-touching-by-faces-each-other.jpg"
                                      data-value={298}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Ge17HtrhIa4YTojwUa1LGDyJgYLZP1CpNlrDn3av.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            gorgeous-bride-handsome-groom-touching-by-faces-each-other
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>533 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit.jpg"
                                      data-value={297}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Z1N1XQGvZUU1BlpprntVmmiMdo80sIy638rnMQLD.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>295 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="wedding-shot-bride-groom-park-romantic-scene-park.jpg"
                                      data-value={296}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            wedding-shot-bride-groom-park-romantic-scene-park
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>234 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg"
                                      data-value={295}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>313 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png"
                                      data-value={294}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>19 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png"
                                      data-value={287}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="nicolas-horn-MTZTGvDsHFY-unsplash.jpg"
                                      data-value={286}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            nicolas-horn-MTZTGvDsHFY-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>105 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="medicalert-uk-uXB-7la5vqA-unsplash.jpg"
                                      data-value={278}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            medicalert-uk-uXB-7la5vqA-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>112 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="crop-elegant-newlyweds-near-lake.jpg"
                                      data-value={277}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            crop-elegant-newlyweds-near-lake
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>230 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg"
                                      data-value={276}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>195 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8070.png"
                                      data-value={274}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8070
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>324 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg"
                                      data-value={273}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>130 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg"
                                      data-value={272}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>130 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk.jpg"
                                      data-value={271}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>158 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="18.png"
                                      data-value={265}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            18
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>898 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8176.png"
                                      data-value={256}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8176
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>6 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="christiana-rivers-3_mQjo4Vb6A-unsplash.jpg"
                                      data-value={238}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/BvZIgmLAshq3ZyDe12xoIKYTNq1TbdxJyrjgGLin.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            christiana-rivers-3_mQjo4Vb6A-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>348 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="sina-rezakhani-oaMLLJ02_D8-unsplash.jpg"
                                      data-value={229}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/sirm6XabTxY94S2TGIeocRNys8abWbBB0ad9FDc1.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            sina-rezakhani-oaMLLJ02_D8-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>137 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="alexandru-zdrobau--djRG1vB1pw-unsplash.jpg"
                                      data-value={228}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Yy47gZu8En7TUvRYra3zKpFJ1GMCJr08LWYUkPB6.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            alexandru-zdrobau--djRG1vB1pw-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>401 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="tamara-bellis-2Tv7-O13hgk-unsplash.jpg"
                                      data-value={227}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/j1HdWFnVQIla2KMy8GOiXFi6XZ9tO7S8rx7bhKCQ.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            tamara-bellis-2Tv7-O13hgk-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>259 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="freestocks-8a95EVm0ovQ-unsplash.jpg"
                                      data-value={226}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/kraX7i8EY934OpDokvwUqokiZZZKupmY9Jc89npf.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            freestocks-8a95EVm0ovQ-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>266 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="austin-distel-7uoMmzPd2JA-unsplash.jpg"
                                      data-value={225}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Jfwa5H7XVPI6A2r5oZdVPkxLJIq8kCM5WMB7JPUZ.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            austin-distel-7uoMmzPd2JA-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>273 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="nick-karvounis-JyO_szjGvUw-unsplash.jpg"
                                      data-value={224}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            nick-karvounis-JyO_szjGvUw-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>151 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg"
                                      data-value={223}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/ozTCQz5ogBXJa4PMDevIkOcGWGmqhhhwPE7zwR0M.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            jonas-kakaroto-mjRwhvqEC0U-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>206 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8177.png"
                                      data-value={184}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/N3IeDw37QUFOxBUc8g96V7ya7Z4Rg1WJDLAD1BRO.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8177
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8176.png"
                                      data-value={183}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/1dD4w1xIQIViixofGwsq8LdKysEx4BDug5hdpys6.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8176
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8175.png"
                                      data-value={182}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8175
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8178.png"
                                      data-value={181}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/zzOHNo1lfGayWCnT9xK1xHB8VjkAzOSnb14ibeup.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8178
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8174.png"
                                      data-value={180}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/UIOcsIe8TMVx6Rp7Wbx9ig5kw6X2g2rSxKUNsPNQ.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8174
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>5 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8174.png"
                                      data-value={179}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/eVmkovaQ5fdbstdKsvLjZrVjYdT4Jem2O3nzQslQ.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8174
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>5 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8173.png"
                                      data-value={178}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/uYGlmDARpbT2sjJ4x3YTm1GsFQ5I78GOa8lWgMQq.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8173
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 967.png"
                                      data-value={150}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/a1RdLfMfXtNqskauoZwEC94F8xAmbH16mhaGVHWh.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 967
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>3 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 961.png"
                                      data-value={151}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/vr2RFTrdbxEawbPyG8suCNyMVEvr05lGIQ6MX1Nz.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 961
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8005.png"
                                      data-value={147}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Zk2lj7FFjeGGYOhch3vtEAkxnnom4zPcWq1bV0tr.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8005
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>401 Bytes</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Page-1.png"
                                      data-value={148}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/54adYPz3OC2PKzpgZF0rpnvR3qKeDMTikwOqNsMW.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Page-1
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>516 Bytes</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8006.png"
                                      data-value={149}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/5HxbGcXOowGkctJOQHm5CYETk4wIPutWs5eb3dlL.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8006
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>250 Bytes</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8168.png"
                                      data-value={144}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/bB4GZnLSrquYOKA3lbH0JI5WKWEwznwXNvjbAEEU.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8168
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>3 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8002.png"
                                      data-value={145}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/D8IvIuVZ1XgBEbW8WNygx6JM0G6AVPKohVaHyj7X.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8002
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>3 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8169.png"
                                      data-value={146}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/zxhwmcnXiCd5WUb8V4GBLb7VkvXuEl2DHFUUD2sk.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8169
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>6 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8170.png"
                                      data-value={143}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/UgoHnTw7QRHMYhzI9MaeSRNvcIP8FxR1FaGNyY32.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8170
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>181 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8169.png"
                                      data-value={142}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/MKeWioNRNyyZSPAJoi6Cy99Jk7kJn8gJabqjEBQW.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8169
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>185 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8168.png"
                                      data-value={141}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/SHlh3Cwc7RaNiiSyvNGmexFDLSYoHkRXlMQqvYwo.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8168
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>144 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="bannon-morrissy-RxiAV5LC-ww-unsplash.jpg"
                                      data-value={140}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            bannon-morrissy-RxiAV5LC-ww-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>133 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="radu-florin-YLr8qZeu6d4-unsplash.jpg"
                                      data-value={139}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            radu-florin-YLr8qZeu6d4-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>166 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="everton-vila-AsahNlC0VhQ-unsplash.png"
                                      data-value={138}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Zo4yekKwhDtasX6uEl3cKZFei63iYAAvi2550jOr.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            everton-vila-AsahNlC0VhQ-unsplash
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>957 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane h-100" id="aiz-upload-new">
                              <div id="aiz-upload-files" className="h-100">
                                <div
                                  className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible"
                                  aria-hidden="false"
                                  aria-label="File Uploader"
                                >
                                  <div
                                    className="uppy-Dashboard-overlay"
                                    tabIndex={-1}
                                  />
                                  <div
                                    className="uppy-Dashboard-inner"
                                    style={{ width: 750, height: 550 }}
                                  >
                                    <div className="uppy-Dashboard-innerWrap">
                                      <div className="uppy-Dashboard-dropFilesHereHint">
                                        Drop your files here
                                      </div>
                                      <div className="uppy-DashboardAddFiles">
                                        <input
                                          className="uppy-Dashboard-input"
                                          hidden
                                          aria-hidden="true"
                                          tabIndex={-1}
                                          type="file"
                                          name="files[]"
                                          multiple
                                        />
                                        <div className="uppy-DashboardTabs">
                                          <div className="uppy-Dashboard-dropFilesTitle">
                                            Drop files here, paste or{" "}
                                            <button
                                              type="button"
                                              className="uppy-u-reset uppy-Dashboard-browse"
                                            >
                                              browse
                                            </button>
                                          </div>
                                        </div>
                                        <div className="uppy-DashboardAddFiles-info" />
                                      </div>
                                      <span />
                                      <span />
                                      <span />
                                      <div className="uppy-Dashboard-progressindicators">
                                        <div
                                          className="uppy-StatusBar is-waiting"
                                          aria-hidden="true"
                                        >
                                          <div
                                            className="uppy-StatusBar-progress
                     "
                                            role="progressbar"
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valuenow={0}
                                            style={{ width: "0%" }}
                                          />
                                          <div className="uppy-StatusBar-actions" />
                                        </div>
                                        <div
                                          className="uppy uppy-Informer"
                                          aria-hidden="true"
                                        >
                                          <p role="alert"> </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* </div> */}
                        </Modal.Body>
                        <Modal.Footer className="modal-footer justify-content-between bg-light">
                          {/* <div className="modal-footer justify-content-between bg-light"> */}
                          <div className="flex-grow-1 overflow-hidden d-flex">
                            <div className>
                              <div className="aiz-uploader-selected">
                                1 File selected
                              </div>
                              <button
                                type="button"
                                className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear"
                                fdprocessedid="rw2oth"
                              >
                                Clear
                              </button>
                            </div>
                            <div className="mb-0 ml-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary mr-2"
                                id="uploader_prev_btn"
                                disabled="disabled"
                              >
                                Prev
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                                id="uploader_next_btn"
                                fdprocessedid="2oxviv"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                            data-toggle="aizUploaderAddSelected"
                            fdprocessedid="cohrl"
                          >
                            Add Files
                          </button>
                          {/* </div> */}

                          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        System Timezone
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="hidden"
                          name="types[]"
                          defaultValue="timezone"
                        />
                        <select className="form-select form-control aiz-selectpicker" aria-label="Default select example">
                          <option value="Pacific/Kwajalein">
                            (GMT-12:00) International Date Line West
                          </option>
                          <option value="Pacific/Midway">
                            (GMT-11:00) Midway Island
                          </option>
                          <option value="Pacific/Apia">
                            (GMT-11:00) Samoa
                          </option>
                          <option value="Pacific/Honolulu">
                            (GMT-10:00) Hawaii
                          </option>
                          <option value="America/Anchorage">
                            (GMT-09:00) Alaska
                          </option>
                          <option value="America/Los_Angeles">
                            (GMT-08:00) Pacific Time (US &amp; Canada)
                          </option>
                          <option value="America/Tijuana">
                            (GMT-08:00) Tijuana
                          </option>
                          <option value="America/Phoenix">
                            (GMT-07:00) Arizona
                          </option>
                          <option value="America/Denver">
                            (GMT-07:00) Mountain Time (US &amp; Canada)
                          </option>
                          <option value="America/Chihuahua">
                            (GMT-07:00) Chihuahua
                          </option>
                          <option value="America/Chihuahua">
                            (GMT-07:00) La Paz
                          </option>
                          <option value="America/Mazatlan">
                            (GMT-07:00) Mazatlan
                          </option>
                          <option value="America/Chicago">
                            (GMT-06:00) Central Time (US &amp; Canada)
                          </option>
                          <option value="America/Managua">
                            (GMT-06:00) Central America
                          </option>
                          <option value="America/Mexico_City">
                            (GMT-06:00) Guadalajara
                          </option>
                          <option value="America/Mexico_City">
                            (GMT-06:00) Mexico City
                          </option>
                          <option value="America/Monterrey">
                            (GMT-06:00) Monterrey
                          </option>
                          <option value="America/Regina">
                            (GMT-06:00) Saskatchewan
                          </option>
                          <option value="America/New_York">
                            (GMT-05:00) Eastern Time (US &amp; Canada)
                          </option>
                          <option value="America/Indiana/Indianapolis">
                            (GMT-05:00) Indiana (East)
                          </option>
                          <option value="America/Bogota">
                            (GMT-05:00) Bogota
                          </option>
                          <option value="America/Lima">
                            (GMT-05:00) Lima
                          </option>
                          <option value="America/Bogota">
                            (GMT-05:00) Quito
                          </option>
                          <option value="America/Halifax">
                            (GMT-04:00) Atlantic Time (Canada)
                          </option>
                          <option value="America/Caracas">
                            (GMT-04:00) Caracas
                          </option>
                          <option value="America/La_Paz">
                            (GMT-04:00) La Paz
                          </option>
                          <option value="America/Santiago">
                            (GMT-04:00) Santiago
                          </option>
                          <option value="America/St_Johns">
                            (GMT-03:30) Newfoundland
                          </option>
                          <option value="America/Sao_Paulo">
                            (GMT-03:00) Brasilia
                          </option>
                          <option value="America/Argentina/Buenos_Aires">
                            (GMT-03:00) Buenos Aires
                          </option>
                          <option value="America/Argentina/Buenos_Aires">
                            (GMT-03:00) Georgetown
                          </option>
                          <option value="America/Godthab">
                            (GMT-03:00) Greenland
                          </option>
                          <option value="America/Noronha">
                            (GMT-02:00) Mid-Atlantic
                          </option>
                          <option value="Atlantic/Azores">
                            (GMT-01:00) Azores
                          </option>
                          <option value="Atlantic/Cape_Verde">
                            (GMT-01:00) Cape Verde Is.
                          </option>
                          <option value="Africa/Casablanca">
                            (GMT) Casablanca
                          </option>
                          <option value="Europe/London">(GMT) Dublin</option>
                          <option value="Europe/London">
                            (GMT) Edinburgh
                          </option>
                          <option value="Europe/Lisbon">(GMT) Lisbon</option>
                          <option value="Europe/London">(GMT) London</option>
                          <option value="UTC">(GMT) UTC</option>
                          <option value="Africa/Monrovia">
                            (GMT) Monrovia
                          </option>
                          <option value="Europe/Amsterdam">
                            (GMT+01:00) Amsterdam
                          </option>
                          <option value="Europe/Belgrade">
                            (GMT+01:00) Belgrade
                          </option>
                          <option value="Europe/Berlin">
                            (GMT+01:00) Berlin
                          </option>
                          <option value="Europe/Berlin">
                            (GMT+01:00) Bern
                          </option>
                          <option value="Europe/Bratislava">
                            (GMT+01:00) Bratislava
                          </option>
                          <option value="Europe/Brussels">
                            (GMT+01:00) Brussels
                          </option>
                          <option value="Europe/Budapest">
                            (GMT+01:00) Budapest
                          </option>
                          <option value="Europe/Copenhagen">
                            (GMT+01:00) Copenhagen
                          </option>
                          <option value="Europe/Ljubljana">
                            (GMT+01:00) Ljubljana
                          </option>
                          <option value="Europe/Madrid">
                            (GMT+01:00) Madrid
                          </option>
                          <option value="Europe/Paris">
                            (GMT+01:00) Paris
                          </option>
                          <option value="Europe/Prague">
                            (GMT+01:00) Prague
                          </option>
                          <option value="Europe/Rome">
                            (GMT+01:00) Rome
                          </option>
                          <option value="Europe/Sarajevo">
                            (GMT+01:00) Sarajevo
                          </option>
                          <option value="Europe/Skopje">
                            (GMT+01:00) Skopje
                          </option>
                          <option value="Europe/Stockholm">
                            (GMT+01:00) Stockholm
                          </option>
                          <option value="Europe/Vienna">
                            (GMT+01:00) Vienna
                          </option>
                          <option value="Europe/Warsaw">
                            (GMT+01:00) Warsaw
                          </option>
                          <option value="Africa/Lagos">
                            (GMT+01:00) West Central Africa
                          </option>
                          <option value="Europe/Zagreb">
                            (GMT+01:00) Zagreb
                          </option>
                          <option value="Europe/Athens">
                            (GMT+02:00) Athens
                          </option>
                          <option value="Europe/Bucharest">
                            (GMT+02:00) Bucharest
                          </option>
                          <option value="Africa/Cairo">
                            (GMT+02:00) Cairo
                          </option>
                          <option value="Africa/Harare">
                            (GMT+02:00) Harare
                          </option>
                          <option value="Europe/Helsinki">
                            (GMT+02:00) Helsinki
                          </option>
                          <option value="Europe/Istanbul">
                            (GMT+02:00) Istanbul
                          </option>
                          <option value="Asia/Jerusalem">
                            (GMT+02:00) Jerusalem
                          </option>
                          <option value="Europe/Kiev">
                            (GMT+02:00) Kyev
                          </option>
                          <option value="Europe/Minsk">
                            (GMT+02:00) Minsk
                          </option>
                          <option value="Africa/Johannesburg">
                            (GMT+02:00) Pretoria
                          </option>
                          <option value="Europe/Riga">
                            (GMT+02:00) Riga
                          </option>
                          <option value="Europe/Sofia">
                            (GMT+02:00) Sofia
                          </option>
                          <option value="Europe/Tallinn">
                            (GMT+02:00) Tallinn
                          </option>
                          <option value="Europe/Vilnius">
                            (GMT+02:00) Vilnius
                          </option>
                          <option value="Asia/Baghdad">
                            (GMT+03:00) Baghdad
                          </option>
                          <option value="Asia/Kuwait">
                            (GMT+03:00) Kuwait
                          </option>
                          <option value="Europe/Moscow">
                            (GMT+03:00) Moscow
                          </option>
                          <option value="Africa/Nairobi">
                            (GMT+03:00) Nairobi
                          </option>
                          <option value="Asia/Riyadh">
                            (GMT+03:00) Riyadh
                          </option>
                          <option value="Europe/Moscow">
                            (GMT+03:00) St. Petersburg
                          </option>
                          <option value="Europe/Volgograd">
                            (GMT+03:00) Volgograd
                          </option>
                          <option value="Asia/Tehran">
                            (GMT+03:30) Tehran
                          </option>
                          <option value="Asia/Muscat">
                            (GMT+04:00) Abu Dhabi
                          </option>
                          <option value="Asia/Baku">(GMT+04:00) Baku</option>
                          <option value="Asia/Muscat">
                            (GMT+04:00) Muscat
                          </option>
                          <option value="Asia/Tbilisi">
                            (GMT+04:00) Tbilisi
                          </option>
                          <option value="Asia/Yerevan">
                            (GMT+04:00) Yerevan
                          </option>
                          <option value="Asia/Kabul">
                            (GMT+04:30) Kabul
                          </option>
                          <option value="Asia/Yekaterinburg">
                            (GMT+05:00) Ekaterinburg
                          </option>
                          <option value="Asia/Karachi">
                            (GMT+05:00) Islamabad
                          </option>
                          <option value="Asia/Karachi">
                            (GMT+05:00) Karachi
                          </option>
                          <option value="Asia/Tashkent">
                            (GMT+05:00) Tashkent
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) Chennai
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) Kolkata
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) Mumbai
                          </option>
                          <option value="Asia/Kolkata" selected>
                            (GMT+05:30) New Delhi
                          </option>
                          <option value="Asia/Kathmandu">
                            (GMT+05:45) Kathmandu
                          </option>
                          <option value="Asia/Almaty">
                            (GMT+06:00) Almaty
                          </option>
                          <option value="Asia/Dhaka">
                            (GMT+06:00) Astana
                          </option>
                          <option value="Asia/Dhaka">
                            (GMT+06:00) Dhaka
                          </option>
                          <option value="Asia/Novosibirsk">
                            (GMT+06:00) Novosibirsk
                          </option>
                          <option value="Asia/Colombo">
                            (GMT+06:00) Sri Jayawardenepura
                          </option>
                          <option value="Asia/Rangoon">
                            (GMT+06:30) Rangoon
                          </option>
                          <option value="Asia/Bangkok">
                            (GMT+07:00) Bangkok
                          </option>
                          <option value="Asia/Bangkok">
                            (GMT+07:00) Hanoi
                          </option>
                          <option value="Asia/Jakarta">
                            (GMT+07:00) Jakarta
                          </option>
                          <option value="Asia/Krasnoyarsk">
                            (GMT+07:00) Krasnoyarsk
                          </option>
                          <option value="Asia/Hong_Kong">
                            (GMT+08:00) Beijing
                          </option>
                          <option value="Asia/Chongqing">
                            (GMT+08:00) Chongqing
                          </option>
                          <option value="Asia/Hong_Kong">
                            (GMT+08:00) Hong Kong
                          </option>
                          <option value="Asia/Irkutsk">
                            (GMT+08:00) Irkutsk
                          </option>
                          <option value="Asia/Kuala_Lumpur">
                            (GMT+08:00) Kuala Lumpur
                          </option>
                          <option value="Australia/Perth">
                            (GMT+08:00) Perth
                          </option>
                          <option value="Asia/Singapore">
                            (GMT+08:00) Singapore
                          </option>
                          <option value="Asia/Taipei">
                            (GMT+08:00) Taipei
                          </option>
                          <option value="Asia/Irkutsk">
                            (GMT+08:00) Ulaan Bataar
                          </option>
                          <option value="Asia/Urumqi">
                            (GMT+08:00) Urumqi
                          </option>
                          <option value="Asia/Tokyo">
                            (GMT+09:00) Osaka
                          </option>
                          <option value="Asia/Tokyo">
                            (GMT+09:00) Sapporo
                          </option>
                          <option value="Asia/Seoul">
                            (GMT+09:00) Seoul
                          </option>
                          <option value="Asia/Tokyo">
                            (GMT+09:00) Tokyo
                          </option>
                          <option value="Asia/Yakutsk">
                            (GMT+09:00) Yakutsk
                          </option>
                          <option value="Australia/Adelaide">
                            (GMT+09:30) Adelaide
                          </option>
                          <option value="Australia/Darwin">
                            (GMT+09:30) Darwin
                          </option>
                          <option value="Australia/Brisbane">
                            (GMT+10:00) Brisbane
                          </option>
                          <option value="Australia/Sydney">
                            (GMT+10:00) Canberra
                          </option>
                          <option value="Pacific/Guam">
                            (GMT+10:00) Guam
                          </option>
                          <option value="Australia/Hobart">
                            (GMT+10:00) Hobart
                          </option>
                          <option value="Australia/Melbourne">
                            (GMT+10:00) Melbourne
                          </option>
                          <option value="Pacific/Port_Moresby">
                            (GMT+10:00) Port Moresby
                          </option>
                          <option value="Australia/Sydney">
                            (GMT+10:00) Sydney
                          </option>
                          <option value="Asia/Vladivostok">
                            (GMT+10:00) Vladivostok
                          </option>
                          <option value="Asia/Magadan">
                            (GMT+11:00) Magadan
                          </option>
                          <option value="Asia/Magadan">
                            (GMT+11:00) New Caledonia
                          </option>
                          <option value="Asia/Magadan">
                            (GMT+11:00) Solomon Is.
                          </option>
                          <option value="Pacific/Auckland">
                            (GMT+12:00) Auckland
                          </option>
                          <option value="Pacific/Fiji">
                            (GMT+12:00) Fiji
                          </option>
                          <option value="Asia/Kamchatka">
                            (GMT+12:00) Kamchatka
                          </option>
                          <option value="Pacific/Fiji">
                            (GMT+12:00) Marshall Is.
                          </option>
                          <option value="Pacific/Auckland">
                            (GMT+12:00) Wellington
                          </option>
                          <option value="Pacific/Tongatapu">
                            (GMT+13:00) Nuku'alofa
                          </option>
                        </select>
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            name="timezone"
                            className="form-control aiz-selectpicker"
                            data-live-search="true"
                            tabIndex={-98}
                          >
                            <option value="Pacific/Kwajalein">
                              (GMT-12:00) International Date Line West
                            </option>
                            <option value="Pacific/Midway">
                              (GMT-11:00) Midway Island
                            </option>
                            <option value="Pacific/Apia">
                              (GMT-11:00) Samoa
                            </option>
                            <option value="Pacific/Honolulu">
                              (GMT-10:00) Hawaii
                            </option>
                            <option value="America/Anchorage">
                              (GMT-09:00) Alaska
                            </option>
                            <option value="America/Los_Angeles">
                              (GMT-08:00) Pacific Time (US &amp; Canada)
                            </option>
                            <option value="America/Tijuana">
                              (GMT-08:00) Tijuana
                            </option>
                            <option value="America/Phoenix">
                              (GMT-07:00) Arizona
                            </option>
                            <option value="America/Denver">
                              (GMT-07:00) Mountain Time (US &amp; Canada)
                            </option>
                            <option value="America/Chihuahua">
                              (GMT-07:00) Chihuahua
                            </option>
                            <option value="America/Chihuahua">
                              (GMT-07:00) La Paz
                            </option>
                            <option value="America/Mazatlan">
                              (GMT-07:00) Mazatlan
                            </option>
                            <option value="America/Chicago">
                              (GMT-06:00) Central Time (US &amp; Canada)
                            </option>
                            <option value="America/Managua">
                              (GMT-06:00) Central America
                            </option>
                            <option value="America/Mexico_City">
                              (GMT-06:00) Guadalajara
                            </option>
                            <option value="America/Mexico_City">
                              (GMT-06:00) Mexico City
                            </option>
                            <option value="America/Monterrey">
                              (GMT-06:00) Monterrey
                            </option>
                            <option value="America/Regina">
                              (GMT-06:00) Saskatchewan
                            </option>
                            <option value="America/New_York">
                              (GMT-05:00) Eastern Time (US &amp; Canada)
                            </option>
                            <option value="America/Indiana/Indianapolis">
                              (GMT-05:00) Indiana (East)
                            </option>
                            <option value="America/Bogota">
                              (GMT-05:00) Bogota
                            </option>
                            <option value="America/Lima">
                              (GMT-05:00) Lima
                            </option>
                            <option value="America/Bogota">
                              (GMT-05:00) Quito
                            </option>
                            <option value="America/Halifax">
                              (GMT-04:00) Atlantic Time (Canada)
                            </option>
                            <option value="America/Caracas">
                              (GMT-04:00) Caracas
                            </option>
                            <option value="America/La_Paz">
                              (GMT-04:00) La Paz
                            </option>
                            <option value="America/Santiago">
                              (GMT-04:00) Santiago
                            </option>
                            <option value="America/St_Johns">
                              (GMT-03:30) Newfoundland
                            </option>
                            <option value="America/Sao_Paulo">
                              (GMT-03:00) Brasilia
                            </option>
                            <option value="America/Argentina/Buenos_Aires">
                              (GMT-03:00) Buenos Aires
                            </option>
                            <option value="America/Argentina/Buenos_Aires">
                              (GMT-03:00) Georgetown
                            </option>
                            <option value="America/Godthab">
                              (GMT-03:00) Greenland
                            </option>
                            <option value="America/Noronha">
                              (GMT-02:00) Mid-Atlantic
                            </option>
                            <option value="Atlantic/Azores">
                              (GMT-01:00) Azores
                            </option>
                            <option value="Atlantic/Cape_Verde">
                              (GMT-01:00) Cape Verde Is.
                            </option>
                            <option value="Africa/Casablanca">
                              (GMT) Casablanca
                            </option>
                            <option value="Europe/London">(GMT) Dublin</option>
                            <option value="Europe/London">
                              (GMT) Edinburgh
                            </option>
                            <option value="Europe/Lisbon">(GMT) Lisbon</option>
                            <option value="Europe/London">(GMT) London</option>
                            <option value="UTC">(GMT) UTC</option>
                            <option value="Africa/Monrovia">
                              (GMT) Monrovia
                            </option>
                            <option value="Europe/Amsterdam">
                              (GMT+01:00) Amsterdam
                            </option>
                            <option value="Europe/Belgrade">
                              (GMT+01:00) Belgrade
                            </option>
                            <option value="Europe/Berlin">
                              (GMT+01:00) Berlin
                            </option>
                            <option value="Europe/Berlin">
                              (GMT+01:00) Bern
                            </option>
                            <option value="Europe/Bratislava">
                              (GMT+01:00) Bratislava
                            </option>
                            <option value="Europe/Brussels">
                              (GMT+01:00) Brussels
                            </option>
                            <option value="Europe/Budapest">
                              (GMT+01:00) Budapest
                            </option>
                            <option value="Europe/Copenhagen">
                              (GMT+01:00) Copenhagen
                            </option>
                            <option value="Europe/Ljubljana">
                              (GMT+01:00) Ljubljana
                            </option>
                            <option value="Europe/Madrid">
                              (GMT+01:00) Madrid
                            </option>
                            <option value="Europe/Paris">
                              (GMT+01:00) Paris
                            </option>
                            <option value="Europe/Prague">
                              (GMT+01:00) Prague
                            </option>
                            <option value="Europe/Rome">
                              (GMT+01:00) Rome
                            </option>
                            <option value="Europe/Sarajevo">
                              (GMT+01:00) Sarajevo
                            </option>
                            <option value="Europe/Skopje">
                              (GMT+01:00) Skopje
                            </option>
                            <option value="Europe/Stockholm">
                              (GMT+01:00) Stockholm
                            </option>
                            <option value="Europe/Vienna">
                              (GMT+01:00) Vienna
                            </option>
                            <option value="Europe/Warsaw">
                              (GMT+01:00) Warsaw
                            </option>
                            <option value="Africa/Lagos">
                              (GMT+01:00) West Central Africa
                            </option>
                            <option value="Europe/Zagreb">
                              (GMT+01:00) Zagreb
                            </option>
                            <option value="Europe/Athens">
                              (GMT+02:00) Athens
                            </option>
                            <option value="Europe/Bucharest">
                              (GMT+02:00) Bucharest
                            </option>
                            <option value="Africa/Cairo">
                              (GMT+02:00) Cairo
                            </option>
                            <option value="Africa/Harare">
                              (GMT+02:00) Harare
                            </option>
                            <option value="Europe/Helsinki">
                              (GMT+02:00) Helsinki
                            </option>
                            <option value="Europe/Istanbul">
                              (GMT+02:00) Istanbul
                            </option>
                            <option value="Asia/Jerusalem">
                              (GMT+02:00) Jerusalem
                            </option>
                            <option value="Europe/Kiev">
                              (GMT+02:00) Kyev
                            </option>
                            <option value="Europe/Minsk">
                              (GMT+02:00) Minsk
                            </option>
                            <option value="Africa/Johannesburg">
                              (GMT+02:00) Pretoria
                            </option>
                            <option value="Europe/Riga">
                              (GMT+02:00) Riga
                            </option>
                            <option value="Europe/Sofia">
                              (GMT+02:00) Sofia
                            </option>
                            <option value="Europe/Tallinn">
                              (GMT+02:00) Tallinn
                            </option>
                            <option value="Europe/Vilnius">
                              (GMT+02:00) Vilnius
                            </option>
                            <option value="Asia/Baghdad">
                              (GMT+03:00) Baghdad
                            </option>
                            <option value="Asia/Kuwait">
                              (GMT+03:00) Kuwait
                            </option>
                            <option value="Europe/Moscow">
                              (GMT+03:00) Moscow
                            </option>
                            <option value="Africa/Nairobi">
                              (GMT+03:00) Nairobi
                            </option>
                            <option value="Asia/Riyadh">
                              (GMT+03:00) Riyadh
                            </option>
                            <option value="Europe/Moscow">
                              (GMT+03:00) St. Petersburg
                            </option>
                            <option value="Europe/Volgograd">
                              (GMT+03:00) Volgograd
                            </option>
                            <option value="Asia/Tehran">
                              (GMT+03:30) Tehran
                            </option>
                            <option value="Asia/Muscat">
                              (GMT+04:00) Abu Dhabi
                            </option>
                            <option value="Asia/Baku">(GMT+04:00) Baku</option>
                            <option value="Asia/Muscat">
                              (GMT+04:00) Muscat
                            </option>
                            <option value="Asia/Tbilisi">
                              (GMT+04:00) Tbilisi
                            </option>
                            <option value="Asia/Yerevan">
                              (GMT+04:00) Yerevan
                            </option>
                            <option value="Asia/Kabul">
                              (GMT+04:30) Kabul
                            </option>
                            <option value="Asia/Yekaterinburg">
                              (GMT+05:00) Ekaterinburg
                            </option>
                            <option value="Asia/Karachi">
                              (GMT+05:00) Islamabad
                            </option>
                            <option value="Asia/Karachi">
                              (GMT+05:00) Karachi
                            </option>
                            <option value="Asia/Tashkent">
                              (GMT+05:00) Tashkent
                            </option>
                            <option value="Asia/Kolkata" selected>
                              (GMT+05:30) Chennai
                            </option>
                            <option value="Asia/Kolkata" selected>
                              (GMT+05:30) Kolkata
                            </option>
                            <option value="Asia/Kolkata" selected>
                              (GMT+05:30) Mumbai
                            </option>
                            <option value="Asia/Kolkata" selected>
                              (GMT+05:30) New Delhi
                            </option>
                            <option value="Asia/Kathmandu">
                              (GMT+05:45) Kathmandu
                            </option>
                            <option value="Asia/Almaty">
                              (GMT+06:00) Almaty
                            </option>
                            <option value="Asia/Dhaka">
                              (GMT+06:00) Astana
                            </option>
                            <option value="Asia/Dhaka">
                              (GMT+06:00) Dhaka
                            </option>
                            <option value="Asia/Novosibirsk">
                              (GMT+06:00) Novosibirsk
                            </option>
                            <option value="Asia/Colombo">
                              (GMT+06:00) Sri Jayawardenepura
                            </option>
                            <option value="Asia/Rangoon">
                              (GMT+06:30) Rangoon
                            </option>
                            <option value="Asia/Bangkok">
                              (GMT+07:00) Bangkok
                            </option>
                            <option value="Asia/Bangkok">
                              (GMT+07:00) Hanoi
                            </option>
                            <option value="Asia/Jakarta">
                              (GMT+07:00) Jakarta
                            </option>
                            <option value="Asia/Krasnoyarsk">
                              (GMT+07:00) Krasnoyarsk
                            </option>
                            <option value="Asia/Hong_Kong">
                              (GMT+08:00) Beijing
                            </option>
                            <option value="Asia/Chongqing">
                              (GMT+08:00) Chongqing
                            </option>
                            <option value="Asia/Hong_Kong">
                              (GMT+08:00) Hong Kong
                            </option>
                            <option value="Asia/Irkutsk">
                              (GMT+08:00) Irkutsk
                            </option>
                            <option value="Asia/Kuala_Lumpur">
                              (GMT+08:00) Kuala Lumpur
                            </option>
                            <option value="Australia/Perth">
                              (GMT+08:00) Perth
                            </option>
                            <option value="Asia/Singapore">
                              (GMT+08:00) Singapore
                            </option>
                            <option value="Asia/Taipei">
                              (GMT+08:00) Taipei
                            </option>
                            <option value="Asia/Irkutsk">
                              (GMT+08:00) Ulaan Bataar
                            </option>
                            <option value="Asia/Urumqi">
                              (GMT+08:00) Urumqi
                            </option>
                            <option value="Asia/Tokyo">
                              (GMT+09:00) Osaka
                            </option>
                            <option value="Asia/Tokyo">
                              (GMT+09:00) Sapporo
                            </option>
                            <option value="Asia/Seoul">
                              (GMT+09:00) Seoul
                            </option>
                            <option value="Asia/Tokyo">
                              (GMT+09:00) Tokyo
                            </option>
                            <option value="Asia/Yakutsk">
                              (GMT+09:00) Yakutsk
                            </option>
                            <option value="Australia/Adelaide">
                              (GMT+09:30) Adelaide
                            </option>
                            <option value="Australia/Darwin">
                              (GMT+09:30) Darwin
                            </option>
                            <option value="Australia/Brisbane">
                              (GMT+10:00) Brisbane
                            </option>
                            <option value="Australia/Sydney">
                              (GMT+10:00) Canberra
                            </option>
                            <option value="Pacific/Guam">
                              (GMT+10:00) Guam
                            </option>
                            <option value="Australia/Hobart">
                              (GMT+10:00) Hobart
                            </option>
                            <option value="Australia/Melbourne">
                              (GMT+10:00) Melbourne
                            </option>
                            <option value="Pacific/Port_Moresby">
                              (GMT+10:00) Port Moresby
                            </option>
                            <option value="Australia/Sydney">
                              (GMT+10:00) Sydney
                            </option>
                            <option value="Asia/Vladivostok">
                              (GMT+10:00) Vladivostok
                            </option>
                            <option value="Asia/Magadan">
                              (GMT+11:00) Magadan
                            </option>
                            <option value="Asia/Magadan">
                              (GMT+11:00) New Caledonia
                            </option>
                            <option value="Asia/Magadan">
                              (GMT+11:00) Solomon Is.
                            </option>
                            <option value="Pacific/Auckland">
                              (GMT+12:00) Auckland
                            </option>
                            <option value="Pacific/Fiji">
                              (GMT+12:00) Fiji
                            </option>
                            <option value="Asia/Kamchatka">
                              (GMT+12:00) Kamchatka
                            </option>
                            <option value="Pacific/Fiji">
                              (GMT+12:00) Marshall Is.
                            </option>
                            <option value="Pacific/Auckland">
                              (GMT+12:00) Wellington
                            </option>
                            <option value="Pacific/Tongatapu">
                              (GMT+13:00) Nuku'alofa
                            </option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="(GMT+05:30) New Delhi"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  (GMT+05:30) New Delhi
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div className="bs-searchbox">
                              <input
                                type="search"
                                className="form-control"
                                autoComplete="off"
                                role="combobox"
                                aria-label="Search"
                                aria-controls="bs-select-1"
                                aria-autocomplete="list"
                              />
                            </div>
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Admin login page background
                      </label>
                      <div className="col-sm-9">
                        <div
                          className="input-group"
                          data-toggle="aizuploader"
                          data-type="image"
                        >
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary">
                              Browse
                            </div>
                          </div>
                          <div
                            className="form-control file-amount"
                            onClick={handleShow2}
                          >
                            1 File selected
                          </div>
                          <input
                            type="hidden"
                            name="types[]"
                            defaultValue="admin_login_background"
                          />
                          <input
                            type="hidden"
                            name="admin_login_background"
                            defaultValue={296}
                            className="selected-files"
                          />
                        </div>
                        <div className="file-preview box sm">
                          <div
                            className="d-flex justify-content-between align-items-center mt-2 file-preview-item"
                            data-id={296}
                            title="wedding-shot-bride-groom-park-romantic-scene-park.jpg"
                          >
                            <div className="align-items-center align-self-stretch d-flex justify-content-center thumb">
                              <img
                                src="//weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg"
                                className="img-fit"
                              />
                            </div>
                            <div className="col body">
                              <h6 className="d-flex">
                                <span className="text-truncate title">
                                  wedding-shot-bride-groom-park-romantic-scene-park
                                </span>
                                <span className="ext">.jpg</span>
                              </h6>
                              <p>234 KB</p>
                            </div>
                            <div className="remove">
                              <button
                                className="btn btn-sm btn-link remove-attachment"
                                type="button"
                              >
                                <i className="la la-close" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Modal
                        show={show2}
                        onHide={handleClose2}
                        dialogClassName="happy-modle"
                      >
                        <Modal.Header closeButton>
                          <div className="uppy-modal-nav">
                            <ul className="nav nav-tabs border-0">
                              <li className="nav-item">
                                <a
                                  className="nav-link font-weight-medium text-dark active"
                                  data-toggle="tab"
                                  href="#aiz-select-file"
                                >
                                  Select File
                                </a>
                              </li>
                              <li className="nav-item">
                                <div class="input-group">
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </Modal.Header>
                        <Modal.Body>
                          {/* <div className="modal-body"> */}
                          <div className="tab-content h-100">
                            <div
                              className="tab-pane active h-100"
                              id="aiz-select-file"
                            >
                              <div className="aiz-uploader-filter pt-1 pb-3 border-bottom mb-4">
                                <div className="row align-items-center gutters-5 gutters-md-10 position-relative">
                                  <div className="col-xl-2 col-md-3 col-5">
                                    <div className>
                                      {/* Input */}
                                      <select
                                        className="form-control form-control-xs aiz-selectpicker"
                                        name="aiz-uploader-sort"
                                        fdprocessedid="q0h7pa"
                                        defaultValue={'#'}
                                      >
                                        <option value="newest">
                                          Sort by newest
                                        </option>
                                        <option value="oldest">
                                          Sort by oldest
                                        </option>
                                        <option value="smallest">
                                          Sort by smallest
                                        </option>
                                        <option value="largest">
                                          Sort by largest
                                        </option>
                                      </select>
                                      {/* End Input */}
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-5">
                                    <div className="custom-control custom-radio">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        name="aiz-show-selected"
                                        id="aiz-show-selected"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="aiz-show-selected"
                                      >
                                        Selected Only
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xl-3 ml-auto mr-0 col-2 position-static">
                                    <div className="aiz-uploader-search text-right">
                                      <input
                                        type="text"
                                        className="form-control form-control-xs"
                                        name="aiz-uploader-search"
                                        placeholder="Search your files"
                                        fdprocessedid="e4ta"
                                      />
                                      <i className="search-icon d-md-none">
                                        <span />
                                      </i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="aiz-uploader-all clearfix c-scrollbar-light">
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-1.png"
                                      data-value={313}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/0xjA6CAGcczj5XM17pripJwBsGoH9ayiPV0huWf5.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-1
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>57 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="1.png"
                                      data-value={312}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/uBDARQfJpAEFuUlutaNEZbg6cIU3QabJo32hTh01.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            1
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>781 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-2.png"
                                      data-value={311}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/V8ascFa3sAFZSw3wfZ0iQwdUrT5sJ7XPINsN9eo0.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-2
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>70 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="2.png"
                                      data-value={310}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/NbGjsZSmGSEOm25ZAG9RCJv9dYeP94Z2z0Dunwwj.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            2
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 MB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-3.png"
                                      data-value={309}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/XhymxhSGSS55vMDaba0QcX6T1ABHK8O3Q9rgQZE9.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-3
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>60 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="3.png"
                                      data-value={308}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/ChVoOrArnZDuuTsd6VUkR7P8L15D4pKMzuiL9TQ0.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            3
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>832 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-4.png"
                                      data-value={307}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/mwGP4G1aqF5DtDxEI111bPP0QGE1xqFkiCkQbDMO.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-4
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>74 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="4.png"
                                      data-value={306}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            4
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 MB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="M-5.png"
                                      data-value={305}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/rxGUYkry7DQzWegMZ9VfYy6UjPiu2gWB7PKpX1P9.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            M-5
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>69 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="5.png"
                                      data-value={304}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            5
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1010 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="6.png"
                                      data-value={303}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            6
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 MB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress.jpg"
                                      data-value={302}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Ha3BoiWkO6b4vENPPTM7D5SeEMP6uImAsu5MBayW.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            love-story-woman-man-loving-couple-embraces-beautiful-oriental-couple-man-jacket-woman-long-luxurious-light-dress
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>411 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="groom-bride-wedding-day.jpg"
                                      data-value={301}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/FZtTEKkOiKg6DkHwSnDDhN783QKS3HJgQW2qzZsb.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            groom-bride-wedding-day
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>781 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day.jpg"
                                      data-value={300}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/xV2jN72ErCdpYe6aZ5vysEUmBqm2qiouz13Ut0MA.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-wedding-couple-is-kissing-top-mountain-autumn-warm-day
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>315 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="wedding.jpg"
                                      data-value={299}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/WmTlHsgN9QazTwnPoAfUlkmqlJEE29i6GZMYyk6H.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            wedding
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>316 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="gorgeous-bride-handsome-groom-touching-by-faces-each-other.jpg"
                                      data-value={298}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Ge17HtrhIa4YTojwUa1LGDyJgYLZP1CpNlrDn3av.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            gorgeous-bride-handsome-groom-touching-by-faces-each-other
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>533 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit.jpg"
                                      data-value={297}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Z1N1XQGvZUU1BlpprntVmmiMdo80sIy638rnMQLD.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            hands-with-wedding-rings-modish-groom-putting-golden-ring-bride-s-finger-during-wedding-ceremony-loving-couple-woman-wedding-dress-handsome-man-stylish-blue-suit
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>295 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="wedding-shot-bride-groom-park-romantic-scene-park.jpg"
                                      data-value={296}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/yYDTNN7ctub8KHPGXJcOuNM5LpP3xVLeTEEejyZS.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            wedding-shot-bride-groom-park-romantic-scene-park
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>234 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg"
                                      data-value={295}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/kfLiYSgqrdD5t8KYrg9HJNZyERclSnbpyZXxJjb5.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>313 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png"
                                      data-value={294}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/9xXI1UVwcgC0jB4s8WeAZQM0BHh55jAEfkL6wkkZ.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>19 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png"
                                      data-value={287}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/HKb4dap327ArsZtb12KXUNeFVCfbA7mZBqQIGrCw.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>1 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="nicolas-horn-MTZTGvDsHFY-unsplash.jpg"
                                      data-value={286}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/NiLOYq4Y5Lap1Ek7QrZcpgXq6UGwcOGpd5RQoOMA.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            nicolas-horn-MTZTGvDsHFY-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>105 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="medicalert-uk-uXB-7la5vqA-unsplash.jpg"
                                      data-value={278}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/KA9rZPh3DxXFiKIAWpBqEF35ycIsbF3DLboW2wvI.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            medicalert-uk-uXB-7la5vqA-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>112 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="crop-elegant-newlyweds-near-lake.jpg"
                                      data-value={277}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/cEOhVAwkzGE51HebB3Ky9CwQU3vLyKnW4DRMQ1mt.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            crop-elegant-newlyweds-near-lake
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>230 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation.jpg"
                                      data-value={276}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/OkwfK3lo8BgrCkMuOA4NGeORw7g9ldcOp6ykrIeU.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-guy-girl-bride-white-wedding-dress-groom-classic-blue-suit-against-nature-background-wedding-family-creation
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>195 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8070.png"
                                      data-value={274}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8070
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>324 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg"
                                      data-value={273}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/M1QyKHaRWLrZa7h2EjTBsAdTLxzefYPRk6FyDbdq.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>130 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other.jpg"
                                      data-value={272}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Qo4cAGtMHA9feO1ikM81J6pIz0377AgLMUKz5Vx4.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            dusk-with-beautiful-scenery-wedding-couple-is-holding-hands-together-looking-each-other
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>130 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk.jpg"
                                      data-value={271}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/TrEw2nVHuYzHWsE4OWgLxThJNYn3jHCjtswqUdf8.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            beautiful-wedding-couple-is-kisssing-hill-with-view-picturesque-landscape-dusk
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>158 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="18.png"
                                      data-value={265}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            18
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>898 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8176.png"
                                      data-value={256}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8176
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>6 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="christiana-rivers-3_mQjo4Vb6A-unsplash.jpg"
                                      data-value={238}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/BvZIgmLAshq3ZyDe12xoIKYTNq1TbdxJyrjgGLin.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            christiana-rivers-3_mQjo4Vb6A-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>348 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="sina-rezakhani-oaMLLJ02_D8-unsplash.jpg"
                                      data-value={229}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/sirm6XabTxY94S2TGIeocRNys8abWbBB0ad9FDc1.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            sina-rezakhani-oaMLLJ02_D8-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>137 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="alexandru-zdrobau--djRG1vB1pw-unsplash.jpg"
                                      data-value={228}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Yy47gZu8En7TUvRYra3zKpFJ1GMCJr08LWYUkPB6.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            alexandru-zdrobau--djRG1vB1pw-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>401 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="tamara-bellis-2Tv7-O13hgk-unsplash.jpg"
                                      data-value={227}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/j1HdWFnVQIla2KMy8GOiXFi6XZ9tO7S8rx7bhKCQ.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            tamara-bellis-2Tv7-O13hgk-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>259 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="freestocks-8a95EVm0ovQ-unsplash.jpg"
                                      data-value={226}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/kraX7i8EY934OpDokvwUqokiZZZKupmY9Jc89npf.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            freestocks-8a95EVm0ovQ-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>266 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="austin-distel-7uoMmzPd2JA-unsplash.jpg"
                                      data-value={225}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Jfwa5H7XVPI6A2r5oZdVPkxLJIq8kCM5WMB7JPUZ.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            austin-distel-7uoMmzPd2JA-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>273 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="nick-karvounis-JyO_szjGvUw-unsplash.jpg"
                                      data-value={224}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            nick-karvounis-JyO_szjGvUw-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>151 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg"
                                      data-value={223}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/ozTCQz5ogBXJa4PMDevIkOcGWGmqhhhwPE7zwR0M.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            jonas-kakaroto-mjRwhvqEC0U-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>206 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8177.png"
                                      data-value={184}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/N3IeDw37QUFOxBUc8g96V7ya7Z4Rg1WJDLAD1BRO.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8177
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8176.png"
                                      data-value={183}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/1dD4w1xIQIViixofGwsq8LdKysEx4BDug5hdpys6.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8176
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8175.png"
                                      data-value={182}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8175
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8178.png"
                                      data-value={181}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/zzOHNo1lfGayWCnT9xK1xHB8VjkAzOSnb14ibeup.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8178
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8174.png"
                                      data-value={180}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/UIOcsIe8TMVx6Rp7Wbx9ig5kw6X2g2rSxKUNsPNQ.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8174
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>5 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8174.png"
                                      data-value={179}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/eVmkovaQ5fdbstdKsvLjZrVjYdT4Jem2O3nzQslQ.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8174
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>5 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8173.png"
                                      data-value={178}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/uYGlmDARpbT2sjJ4x3YTm1GsFQ5I78GOa8lWgMQq.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8173
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 967.png"
                                      data-value={150}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/a1RdLfMfXtNqskauoZwEC94F8xAmbH16mhaGVHWh.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 967
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>3 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 961.png"
                                      data-value={151}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/vr2RFTrdbxEawbPyG8suCNyMVEvr05lGIQ6MX1Nz.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 961
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>4 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8005.png"
                                      data-value={147}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Zk2lj7FFjeGGYOhch3vtEAkxnnom4zPcWq1bV0tr.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8005
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>401 Bytes</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Page-1.png"
                                      data-value={148}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/54adYPz3OC2PKzpgZF0rpnvR3qKeDMTikwOqNsMW.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Page-1
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>516 Bytes</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8006.png"
                                      data-value={149}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/5HxbGcXOowGkctJOQHm5CYETk4wIPutWs5eb3dlL.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8006
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>250 Bytes</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8168.png"
                                      data-value={144}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/bB4GZnLSrquYOKA3lbH0JI5WKWEwznwXNvjbAEEU.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8168
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>3 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8002.png"
                                      data-value={145}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/D8IvIuVZ1XgBEbW8WNygx6JM0G6AVPKohVaHyj7X.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8002
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>3 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8169.png"
                                      data-value={146}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/zxhwmcnXiCd5WUb8V4GBLb7VkvXuEl2DHFUUD2sk.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8169
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>6 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8170.png"
                                      data-value={143}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/UgoHnTw7QRHMYhzI9MaeSRNvcIP8FxR1FaGNyY32.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8170
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>181 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8169.png"
                                      data-value={142}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/MKeWioNRNyyZSPAJoi6Cy99Jk7kJn8gJabqjEBQW.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8169
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>185 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="Group 8168.png"
                                      data-value={141}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/SHlh3Cwc7RaNiiSyvNGmexFDLSYoHkRXlMQqvYwo.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            Group 8168
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>144 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="bannon-morrissy-RxiAV5LC-ww-unsplash.jpg"
                                      data-value={140}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            bannon-morrissy-RxiAV5LC-ww-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>133 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="radu-florin-YLr8qZeu6d4-unsplash.jpg"
                                      data-value={139}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            radu-florin-YLr8qZeu6d4-unsplash
                                          </span>
                                          <span className="ext">.jpg</span>
                                        </h6>
                                        <p>166 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="aiz-file-box-wrap"
                                  aria-hidden="false"
                                  data-selected="false"
                                >
                                  <div className="aiz-file-box">
                                    <div
                                      className="card card-file aiz-uploader-select"
                                      title="everton-vila-AsahNlC0VhQ-unsplash.png"
                                      data-value={138}
                                    >
                                      <div className="card-file-thumb">
                                        <img
                                          src="//weddemoadmin.abaris.in/public/uploads/all/Zo4yekKwhDtasX6uEl3cKZFei63iYAAvi2550jOr.png"
                                          className="img-fit"
                                        />
                                      </div>
                                      <div className="card-body">
                                        <h6 className="d-flex">
                                          <span className="text-truncate title">
                                            everton-vila-AsahNlC0VhQ-unsplash
                                          </span>
                                          <span className="ext">.png</span>
                                        </h6>
                                        <p>957 KB</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane h-100" id="aiz-upload-new">
                              <div id="aiz-upload-files" className="h-100">
                                <div
                                  className="uppy-Root uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible"
                                  aria-hidden="false"
                                  aria-label="File Uploader"
                                >
                                  <div
                                    className="uppy-Dashboard-overlay"
                                    tabIndex={-1}
                                  />
                                  <div
                                    className="uppy-Dashboard-inner"
                                    style={{ width: 750, height: 550 }}
                                  >
                                    <div className="uppy-Dashboard-innerWrap">
                                      <div className="uppy-Dashboard-dropFilesHereHint">
                                        Drop your files here
                                      </div>
                                      <div className="uppy-DashboardAddFiles">
                                        <input
                                          className="uppy-Dashboard-input"
                                          hidden
                                          aria-hidden="true"
                                          tabIndex={-1}
                                          type="file"
                                          name="files[]"
                                          multiple
                                        />
                                        <div className="uppy-DashboardTabs">
                                          <div className="uppy-Dashboard-dropFilesTitle">
                                            Drop files here, paste or{" "}
                                            <button
                                              type="button"
                                              className="uppy-u-reset uppy-Dashboard-browse"
                                            >
                                              browse
                                            </button>
                                          </div>
                                        </div>
                                        <div className="uppy-DashboardAddFiles-info" />
                                      </div>
                                      <span />
                                      <span />
                                      <span />
                                      <div className="uppy-Dashboard-progressindicators">
                                        <div
                                          className="uppy-StatusBar is-waiting"
                                          aria-hidden="true"
                                        >
                                          <div
                                            className="uppy-StatusBar-progress
                     "
                                            role="progressbar"
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valuenow={0}
                                            style={{ width: "0%" }}
                                          />
                                          <div className="uppy-StatusBar-actions" />
                                        </div>
                                        <div
                                          className="uppy uppy-Informer"
                                          aria-hidden="true"
                                        >
                                          <p role="alert"> </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* </div> */}
                        </Modal.Body>
                        <Modal.Footer className="modal-footer justify-content-between bg-light">
                          {/* <div className="modal-footer justify-content-between bg-light"> */}
                          <div className="flex-grow-1 overflow-hidden d-flex">
                            <div className>
                              <div className="aiz-uploader-selected">
                                1 File selected
                              </div>
                              <button
                                type="button"
                                className="btn-link btn btn-sm p-0 aiz-uploader-selected-clear"
                                fdprocessedid="rw2oth"
                              >
                                Clear
                              </button>
                            </div>
                            <div className="mb-0 ml-3">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary mr-2"
                                id="uploader_prev_btn"
                                disabled="disabled"
                              >
                                Prev
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                                id="uploader_next_btn"
                                fdprocessedid="2oxviv"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                            data-toggle="aizUploaderAddSelected"
                            fdprocessedid="cohrl"
                          >
                            Add Files
                          </button>
                          {/* </div> */}

                          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Code Prefix
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="hidden"
                          name="types[]"
                          defaultValue="member_code_prifix"
                        />
                        <input
                          type="text"
                          name="member_code_prifix"
                          className="form-control"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Minimum Age
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="hidden"
                          name="types[]"
                          defaultValue="member_min_age"
                        />
                        <input
                          type="number"
                          name="member_min_age"
                          step={1}
                          className="form-control"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Profile Picture Privacy
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="hidden"
                          name="types[]"
                          defaultValue="profile_picture_privacy"
                        />
                        <select className="form-select form-control aiz-selectpicker" aria-label="Default select example" defaultValue={'#'}>
                          <option>All</option>
                          <option value={1}>Only Me</option>
                          <option value={2}>Premium Members</option>
                        </select>
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            data-live-search="true"
                            name="profile_picture_privacy"
                            required
                            tabIndex={-98}
                          >
                            <option value="all" selected>
                              All
                            </option>
                            <option value="only_me">Only Me</option>
                            <option value="premium_members">
                              Premium Members
                            </option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-2"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="All"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  All
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div className="bs-searchbox">
                              <input
                                type="search"
                                className="form-control"
                                autoComplete="off"
                                role="combobox"
                                aria-label="Search"
                                aria-controls="bs-select-2"
                                aria-autocomplete="list"
                              />
                            </div>
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-2"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}


                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-from-label">
                        Member Gallery Image Privacy
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="hidden"
                          name="types[]"
                          defaultValue="gallery_image_privacy"
                        />
                        <select className="form-select form-control aiz-selectpicker" aria-label="Default select example" defaultValue={'#'}>
                          <option>All</option>
                          <option value={1}>Only Me</option>
                          <option value={2}>Premium Members</option>
                        </select>
                        {/* <div className="dropdown bootstrap-select form-control aiz-">
                          <select
                            className="form-control aiz-selectpicker"
                            data-live-search="true"
                            name="gallery_image_privacy"
                            required
                            tabIndex={-98}
                          >
                            <option value="all" selected>
                              All
                            </option>
                            <option value="only_me">Only Me</option>
                            <option value="premium_members">
                              Premium Members
                            </option>
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-3"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="All"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  All
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div className="bs-searchbox">
                              <input
                                type="search"
                                className="form-control"
                                autoComplete="off"
                                role="combobox"
                                aria-label="Search"
                                aria-controls="bs-select-3"
                                aria-autocomplete="list"
                              />
                            </div>
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-3"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div> */}

                      </div>
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Activation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GeneralSettings;
