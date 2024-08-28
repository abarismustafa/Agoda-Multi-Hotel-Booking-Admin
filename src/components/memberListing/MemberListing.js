import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import InsideHeader from "../common/insideHeader/InsideHeader";

function MembersListing() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [smShow, setSmShow] = useState(false);
  return (
    <>
      <InsideHeader />
      <section className="py-4 py-lg-5 bg-white ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-xl-3">
                  <div className="aiz-filter-sidebar collapse-sidebar-wrap sidebar-xl z-1035">
                    <div
                      className="overlay overlay-fixed dark c-pointer"
                      data-toggle="class-toggle"
                      data-target=".aiz-filter-sidebar"
                      data-same=".filter-sidebar-thumb"
                    />
                    <div className="card collapse-sidebar c-scrollbar-light shadow-none">
                      <div className="card-header pr-1 pl-3">
                        <h5 className="mb-0 h6">ADVANCED SEARCH</h5>
                        <button
                          className="btn btn-sm p-2 d-xl-none filter-sidebar-thumb"
                          data-toggle="class-toggle"
                          data-target=".aiz-filter-sidebar"
                          type="button"
                        >
                          <i className="las la-times la-2x" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="pb-4">
                          <form
                            action="https://demo.activeitzone.com/matrimonial/member-listing"
                            method="get"
                          >
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    age_from
                                  </label>
                                  <input
                                    type="number"
                                    name="age_from"
                                    defaultValue
                                    className="form-control"
                                    fdprocessedid="g39fv5"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    to
                                  </label>
                                  <input
                                    type="number"
                                    name="age_to"
                                    defaultValue
                                    className="form-control"
                                    fdprocessedid="uex4i"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Member ID
                                  </label>
                                  <input
                                    type="text"
                                    name="member_code"
                                    defaultValue
                                    className="form-control"
                                    fdprocessedid="z2rtrc"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Maritial Status
                                  </label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="selec"
                                  >
                                    <option>Select one</option>
                                    <option value="1">Never Married</option>
                                    <option value="2">married</option>
                                    <option value="3">Divorced</option>
                                    <option value="3">Separated</option>
                                  </Form.Select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Religion
                                  </label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="selec"
                                  >
                                    <option>Choose one</option>
                                    <option value="1"> Islam </option>
                                    <option value="2"> Judaismm </option>
                                    <option value="3"> Hinduism </option>
                                    <option value="4"> Christianity </option>
                                    <option value="5"> Buddhism </option>
                                    <option value="6"> Jainism </option>
                                    <option value="7"> Baha'i </option>
                                    <option value="8"> Sikhism </option>
                                    <option value="9"> Confucianism </option>
                                    <option value="10"> Atheism </option>
                                    <option value="16"> ertt </option>
                                  </Form.Select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Caste
                                  </label>
                                  <input
                                    type="number"
                                    name="min_height"
                                    defaultValue
                                    className="form-control"
                                    min={0}
                                    step="0.01"
                                    fdprocessedid="s2owxh"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Sub Caste
                                  </label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="selec"
                                  >
                                    <option>Choose one</option>
                                  </Form.Select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    mother_tongue
                                  </label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="selec"
                                  >
                                    <option>Choose one</option>
                                    <option value="1">English </option>
                                    <option value="2"> German </option>
                                    <option value="3"> Hindi </option>
                                    <option value="4">Urdu</option>
                                  </Form.Select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-grohp mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Profession
                                  </label>
                                  <input
                                    type="text"
                                    name="profession"
                                    defaultValue
                                    className="form-control"
                                    fdprocessedid="tud6f"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Country
                                  </label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="selec"
                                  >
                                    <option>Choose one</option>
                                    <option value="1"> Afganistan </option>
                                    <option value="2"> Albania</option>
                                    <option value="3">Algeria</option>
                                    <option value="4">American samoa</option>
                                  </Form.Select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    State
                                  </label>
                                  <input
                                    type="text"
                                    name="profession"
                                    defaultValue
                                    className="form-control"
                                    fdprocessedid="tud6f"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    name="profession"
                                    defaultValue
                                    className="form-control"
                                    fdprocessedid="tud6f"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Min Height
                                  </label>
                                  <input
                                    type="number"
                                    name="min_height"
                                    defaultValue
                                    className="form-control"
                                    min={0}
                                    step="0.01"
                                    fdprocessedid="s2owxh"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="name">
                                    Max Height
                                  </label>
                                  <input
                                    type="number"
                                    name="max_height"
                                    defaultValue
                                    className="form-control"
                                    min={0}
                                    step="0.01"
                                    fdprocessedid="2wew2r"
                                  />
                                </div>
                              </div>
                            </div>
                            <h6 className="separator text-left mb-3 fs-12 text-uppercase text-secondary">
                              <span className="bg-white pr-3">Member Type</span>
                            </h6>
                            <div className="aiz-radio-list">
                              <label className="aiz-radio">
                                <input
                                  type="radio"
                                  name="member_type"
                                  defaultValue={2}
                                  onchange="applyFilter()"
                                />{" "}
                                Premium Member
                                <span className="aiz-rounded-check" />
                              </label>
                              <label className="aiz-radio">
                                <input
                                  type="radio"
                                  name="member_type"
                                  defaultValue={1}
                                  onchange="applyFilter()"
                                />{" "}
                                Free member
                                <span className="aiz-rounded-check" />
                              </label>
                              <label className="aiz-radio">
                                <input
                                  type="radio"
                                  name="member_type"
                                  defaultValue={0}
                                  defaultChecked
                                />{" "}
                                All Member
                                <span className="aiz-rounded-check" />
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-block btn-primary mt-4"
                              fdprocessedid="mj3fai"
                            >
                              Search
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="d-flex">
                    <h1 className="h4 fw-600 mb-3 text-body">
                      All Active Members
                    </h1>
                    <div className="d-xl-none ml-auto mb-1 ml-xl-3 mr-0 align-self-end">
                      <button
                        type="button"
                        className="btn btn-icon p-0"
                        data-toggle="class-toggle"
                        data-target=".aiz-filter-sidebar"
                      >
                        <i className="la la-list la-2x" />
                      </button>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div
                      className="row no-gutters border border-gray-300 rounded hov-shadow-md mb-4 has-transition position-relative"
                      id="block_id_44"
                    >
                      <div className="col-md-auto">
                        <div className="text-center text-md-left pt-3 pt-md-0">
                          <img
                            src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png"
                            onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                            className="img-fit mw-100 size-150px size-md-250px rounded-circle md-rounded-0"
                          />
                        </div>
                      </div>
                      <div className="col-md position-static d-flex align-items-center">
                        <span className="absolute-top-right px-4 py-3">
                          <span className="badge badge-inline badge-success">
                            Preminum
                          </span>
                        </span>
                        <div className="px-md-4 p-3 flex-grow-1">
                          <h2 className="h6 fw-600 fs-18 text-truncate mb-1">
                            Alex Reynolds
                          </h2>
                          <div className="mb-2 fs-12">
                            <span className="opacity-60">Member ID: </span>
                            <span className="ml-4 text-primary">BA5D7EEC</span>
                          </div>
                          <table className="w-100 opacity-70 mb-2 fs-12">
                            <tbody>
                              <tr>
                                <td className="py-1 w-25">
                                  <span>age</span>
                                </td>
                                <td className="py-1 w-25 fw-400">30</td>
                                <td className="py-1 w-25">
                                  <span>Height</span>
                                </td>
                                <td className="py-1 w-25 fw-400">6</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>Religion</span>
                                </td>
                                <td className="py-1 fw-400">Judaismm</td>
                                <td className="py-1">
                                  <span>Caste</span>
                                </td>
                                <td className="py-1 fw-400">
                                  Israelites (Yisraelim)
                                </td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>First Language</span>
                                </td>
                                <td className="py-1 fw-400">English</td>
                                <td className="py-1">
                                  <span>marital_status</span>
                                </td>
                                <td className="py-1 fw-400">Never Married</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>location</span>
                                </td>
                                <td className="py-1 fw-400">American Samoa</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row gutters-5 text-center">
                            <div className="col">
                              <Link
                                to="/member-profile"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-user fs-20 text-primary" />
                                <span className="d-block fs-10 opacity-60">
                                  Full Profile
                                </span>
                              </Link>
                            </div>
                            <div className="col">
                              <a
                                id="interest_a_id_44"
                                onclick="express_interest(44)"
                                className="text-reset c-pointer"
                              >
                                <i className="la la-heart-o fs-20 text-primary" />
                                <span
                                  id="interest_id_44"
                                  className="d-block fs-10 opacity-60 text-dark"
                                >
                                  Interest
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="shortlist_a_id_44"
                                onclick="do_shortlist(44)"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-list fs-20 text-primary" />
                                <span
                                  id="shortlist_id_44"
                                  className="d-block fs-10 opacity-60 text-dark"
                                >
                                  Shortlist
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                onClick={() => setSmShow(true)}
                                className="text-reset c-pointer"
                              >
                                <span className="text-dark">
                                  <i className="las la-ban fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Ignore
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="report_a_id_44"
                                onclick="report_member(44)"
                                className="text-reset c-pointer"
                                onClick={handleShow}
                              >
                                <span id="report_id_44" className="text-dark">
                                  <i className="las la-info-circle fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Report
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row no-gutters border border-gray-300 rounded hov-shadow-md mb-4 has-transition position-relative"
                      id="block_id_43"
                    >
                      <div className="col-md-auto">
                        <div className="text-center text-md-left pt-3 pt-md-0">
                          <img
                            src="https://demo.activeitzone.com/matrimonial/public/uploads/all/kimX2PnqPaTQt1YJWqudR6ipTmWfhxMrfCb4uTf0.png"
                            onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                            className="img-fit mw-100 size-150px size-md-250px rounded-circle md-rounded-0"
                          />
                        </div>
                      </div>
                      <div className="col-md position-static d-flex align-items-center">
                        <span className="absolute-top-right px-4 py-3">
                          <span className="badge badge-inline badge-success">
                            Preminum
                          </span>
                        </span>
                        <div className="px-md-4 p-3 flex-grow-1">
                          <h2 className="h6 fw-600 fs-18 text-truncate mb-1">
                            Derrick L. Lavender
                          </h2>
                          <div className="mb-2 fs-12">
                            <span className="opacity-60">Member ID: </span>
                            <span className="ml-4 text-primary">8E09C136</span>
                          </div>
                          <table className="w-100 opacity-70 mb-2 fs-12">
                            <tbody>
                              <tr>
                                <td className="py-1 w-25">
                                  <span>age</span>
                                </td>
                                <td className="py-1 w-25 fw-400">30</td>
                                <td className="py-1 w-25">
                                  <span>Height</span>
                                </td>
                                <td className="py-1 w-25 fw-400">5</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>Religion</span>
                                </td>
                                <td className="py-1 fw-400">Judaismm</td>
                                <td className="py-1">
                                  <span>Caste</span>
                                </td>
                                <td className="py-1 fw-400">
                                  Israelites (Yisraelim)
                                </td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>First Language</span>
                                </td>
                                <td className="py-1 fw-400">English</td>
                                <td className="py-1">
                                  <span>marital_status</span>
                                </td>
                                <td className="py-1 fw-400">Never Married</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>location</span>
                                </td>
                                <td className="py-1 fw-400">American Samoa</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row gutters-5 text-center">
                            <div className="col">
                              <a
                                href="https://demo.activeitzone.com/matrimonial/member-profile/43"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-user fs-20 text-primary" />
                                <span className="d-block fs-10 opacity-60">
                                  Full Profile
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="interest_a_id_43"
                                href="https://demo.activeitzone.com/matrimonial/interest/requests"
                                className="text-reset c-pointer"
                              >
                                <i className="la la-heart-o fs-20 text-primary" />
                                <span
                                  id="interest_id_43"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Interest Expressed
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="shortlist_a_id_43"
                                onclick="do_shortlist(43)"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-list fs-20 text-primary" />
                                <span
                                  id="shortlist_id_43"
                                  className="d-block fs-10 opacity-60 text-dark"
                                >
                                  Shortlist
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                onClick={() => setSmShow(true)}
                                className="text-reset c-pointer"
                              >
                                <span className="text-dark">
                                  <i className="las la-ban fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Ignore
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="report_a_id_43"
                                onclick="report_member(43)"
                                className="text-reset c-pointer"
                                onClick={handleShow}
                              >
                                <span id="report_id_43" className="text-dark">
                                  <i className="las la-info-circle fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Report
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row no-gutters border border-gray-300 rounded hov-shadow-md mb-4 has-transition position-relative"
                      id="block_id_37"
                    >
                      <div className="col-md-auto">
                        <div className="text-center text-md-left pt-3 pt-md-0">
                          <img
                            src="https://demo.activeitzone.com/matrimonial/public/uploads/all/d60ho8ezrvYMxYH7SaU0mF4UmWttV321vSMrZ8yz.png"
                            onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                            className="img-fit mw-100 size-150px size-md-250px rounded-circle md-rounded-0"
                          />
                        </div>
                      </div>
                      <div className="col-md position-static d-flex align-items-center">
                        <span className="absolute-top-right px-4 py-3">
                          <span className="badge badge-inline badge-success">
                            Preminum
                          </span>
                        </span>
                        <div className="px-md-4 p-3 flex-grow-1">
                          <h2 className="h6 fw-600 fs-18 text-truncate mb-1">
                            Robert L. Gardner
                          </h2>
                          <div className="mb-2 fs-12">
                            <span className="opacity-60">Member ID: </span>
                            <span className="ml-4 text-primary">7223505B</span>
                          </div>
                          <table className="w-100 opacity-70 mb-2 fs-12">
                            <tbody>
                              <tr>
                                <td className="py-1 w-25">
                                  <span>age</span>
                                </td>
                                <td className="py-1 w-25 fw-400">30</td>
                                <td className="py-1 w-25">
                                  <span>Height</span>
                                </td>
                                <td className="py-1 w-25 fw-400">5</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>Religion</span>
                                </td>
                                <td className="py-1 fw-400">Judaismm</td>
                                <td className="py-1">
                                  <span>Caste</span>
                                </td>
                                <td className="py-1 fw-400">
                                  Israelites (Yisraelim)
                                </td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>First Language</span>
                                </td>
                                <td className="py-1 fw-400">English</td>
                                <td className="py-1">
                                  <span>marital_status</span>
                                </td>
                                <td className="py-1 fw-400">Never Married</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>location</span>
                                </td>
                                <td className="py-1 fw-400">American Samoa</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row gutters-5 text-center">
                            <div className="col">
                              <a
                                href="https://demo.activeitzone.com/matrimonial/member-profile/37"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-user fs-20 text-primary" />
                                <span className="d-block fs-10 opacity-60">
                                  Full Profile
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="interest_a_id_37"
                                onclick="express_interest(37)"
                                className="text-reset c-pointer"
                              >
                                <i className="la la-heart-o fs-20 text-primary" />
                                <span
                                  id="interest_id_37"
                                  className="d-block fs-10 opacity-60 text-dark"
                                >
                                  Interest
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="shortlist_a_id_37"
                                onclick="remove_shortlist(37)"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-list fs-20 text-primary" />
                                <span
                                  id="shortlist_id_37"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Shortlisted
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                onClick={() => setSmShow(true)}
                                className="text-reset c-pointer"
                              >
                                <span className="text-dark">
                                  <i className="las la-ban fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Ignore
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="report_a_id_37"
                                className="text-reset c-pointer"
                              >
                                <span
                                  id="report_id_37"
                                  className="text-primary"
                                >
                                  <i className="las la-info-circle fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Reported
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row no-gutters border border-gray-300 rounded hov-shadow-md mb-4 has-transition position-relative"
                      id="block_id_35"
                    >
                      <div className="col-md-auto">
                        <div className="text-center text-md-left pt-3 pt-md-0">
                          <img
                            src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png"
                            onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                            className="img-fit mw-100 size-150px size-md-250px rounded-circle md-rounded-0"
                          />
                        </div>
                      </div>
                      <div className="col-md position-static d-flex align-items-center">
                        <span className="absolute-top-right px-4 py-3">
                          <span className="badge badge-inline badge-success">
                            Preminum
                          </span>
                        </span>
                        <div className="px-md-4 p-3 flex-grow-1">
                          <h2 className="h6 fw-600 fs-18 text-truncate mb-1">
                            Mitchell Johnson
                          </h2>
                          <div className="mb-2 fs-12">
                            <span className="opacity-60">Member ID: </span>
                            <span className="ml-4 text-primary">6AD6E375</span>
                          </div>
                          <table className="w-100 opacity-70 mb-2 fs-12">
                            <tbody>
                              <tr>
                                <td className="py-1 w-25">
                                  <span>age</span>
                                </td>
                                <td className="py-1 w-25 fw-400">32</td>
                                <td className="py-1 w-25">
                                  <span>Height</span>
                                </td>
                                <td className="py-1 w-25 fw-400">5</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>Religion</span>
                                </td>
                                <td className="py-1 fw-400">Judaismm</td>
                                <td className="py-1">
                                  <span>Caste</span>
                                </td>
                                <td className="py-1 fw-400">
                                  Israelites (Yisraelim)
                                </td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>First Language</span>
                                </td>
                                <td className="py-1 fw-400">English</td>
                                <td className="py-1">
                                  <span>marital_status</span>
                                </td>
                                <td className="py-1 fw-400">Never Married</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>location</span>
                                </td>
                                <td className="py-1 fw-400">American Samoa</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row gutters-5 text-center">
                            <div className="col">
                              <a
                                href="https://demo.activeitzone.com/matrimonial/member-profile/35"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-user fs-20 text-primary" />
                                <span className="d-block fs-10 opacity-60">
                                  Full Profile
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="interest_a_id_35"
                                href="https://demo.activeitzone.com/matrimonial/interest/requests"
                                className="text-reset c-pointer"
                              >
                                <i className="la la-heart-o fs-20 text-primary" />
                                <span
                                  id="interest_id_35"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Interest Accepted
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="shortlist_a_id_35"
                                onclick="remove_shortlist(35)"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-list fs-20 text-primary" />
                                <span
                                  id="shortlist_id_35"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Shortlisted
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                onClick={() => setSmShow(true)}
                                className="text-reset c-pointer"
                              >
                                <span className="text-dark">
                                  <i className="las la-ban fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Ignore
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="report_a_id_35"
                                onClick={handleShow}
                                className="text-reset c-pointer"
                              >
                                <span id="report_id_35" className="text-dark">
                                  <i className="las la-info-circle fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Report
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row no-gutters border border-gray-300 rounded hov-shadow-md mb-4 has-transition position-relative"
                      id="block_id_34"
                    >
                      <div className="col-md-auto">
                        <div className="text-center text-md-left pt-3 pt-md-0">
                          <img
                            src="https://demo.activeitzone.com/matrimonial/public/uploads/all/JC54t9SJmTsyJnU7ZSj3AKE0WIHfZj9lZqIyuA4a.png"
                            onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                            className="img-fit mw-100 size-150px size-md-250px rounded-circle md-rounded-0"
                          />
                        </div>
                      </div>
                      <div className="col-md position-static d-flex align-items-center">
                        <span className="absolute-top-right px-4 py-3">
                          <span className="badge badge-inline badge-success">
                            Preminum
                          </span>
                        </span>
                        <div className="px-md-4 p-3 flex-grow-1">
                          <h2 className="h6 fw-600 fs-18 text-truncate mb-1">
                            Mark Henry
                          </h2>
                          <div className="mb-2 fs-12">
                            <span className="opacity-60">Member ID: </span>
                            <span className="ml-4 text-primary">8D6813CB</span>
                          </div>
                          <table className="w-100 opacity-70 mb-2 fs-12">
                            <tbody>
                              <tr>
                                <td className="py-1 w-25">
                                  <span>age</span>
                                </td>
                                <td className="py-1 w-25 fw-400">30</td>
                                <td className="py-1 w-25">
                                  <span>Height</span>
                                </td>
                                <td className="py-1 w-25 fw-400">5</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>Religion</span>
                                </td>
                                <td className="py-1 fw-400">Islam</td>
                                <td className="py-1">
                                  <span>Caste</span>
                                </td>
                                <td className="py-1 fw-400">Shia</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>First Language</span>
                                </td>
                                <td className="py-1 fw-400">English</td>
                                <td className="py-1">
                                  <span>marital_status</span>
                                </td>
                                <td className="py-1 fw-400">Never Married</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>location</span>
                                </td>
                                <td className="py-1 fw-400">American Samoa</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row gutters-5 text-center">
                            <div className="col">
                              <a
                                href="https://demo.activeitzone.com/matrimonial/member-profile/34"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-user fs-20 text-primary" />
                                <span className="d-block fs-10 opacity-60">
                                  Full Profile
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="interest_a_id_34"
                                onclick="express_interest(34)"
                                className="text-reset c-pointer"
                              >
                                <i className="la la-heart-o fs-20 text-primary" />
                                <span
                                  id="interest_id_34"
                                  className="d-block fs-10 opacity-60 text-dark"
                                >
                                  Interest
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="shortlist_a_id_34"
                                onclick="do_shortlist(34)"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-list fs-20 text-primary" />
                                <span
                                  id="shortlist_id_34"
                                  className="d-block fs-10 opacity-60 text-dark"
                                >
                                  Shortlist
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                onClick={() => setSmShow(true)}
                                className="text-reset c-pointer"
                              >
                                <span className="text-dark">
                                  <i className="las la-ban fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Ignore
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="report_a_id_34"
                                onClick={handleShow}
                                className="text-reset c-pointer"
                              >
                                <span id="report_id_34" className="text-dark">
                                  <i className="las la-info-circle fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Report
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row no-gutters border border-gray-300 rounded hov-shadow-md mb-4 has-transition position-relative"
                      id="block_id_28"
                    >
                      <div className="col-md-auto">
                        <div className="text-center text-md-left pt-3 pt-md-0">
                          <img
                            src="https://demo.activeitzone.com/matrimonial/public/uploads/all/9uC6PPkpVpfOu5FuhF2enDj3Com30pgwnLjWZlR1.png"
                            onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                            className="img-fit mw-100 size-150px size-md-250px rounded-circle md-rounded-0"
                          />
                        </div>
                      </div>
                      <div className="col-md position-static d-flex align-items-center">
                        <span className="absolute-top-right px-4 py-3">
                          <span className="badge badge-inline badge-success">
                            Preminum
                          </span>
                        </span>
                        <div className="px-md-4 p-3 flex-grow-1">
                          <h2 className="h6 fw-600 fs-18 text-truncate mb-1">
                            Liam Noah
                          </h2>
                          <div className="mb-2 fs-12">
                            <span className="opacity-60">Member ID: </span>
                            <span className="ml-4 text-primary">B3977C6E</span>
                          </div>
                          <table className="w-100 opacity-70 mb-2 fs-12">
                            <tbody>
                              <tr>
                                <td className="py-1 w-25">
                                  <span>age</span>
                                </td>
                                <td className="py-1 w-25 fw-400">32</td>
                                <td className="py-1 w-25">
                                  <span>Height</span>
                                </td>
                                <td className="py-1 w-25 fw-400">5</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>Religion</span>
                                </td>
                                <td className="py-1 fw-400">Hinduism</td>
                                <td className="py-1">
                                  <span>Caste</span>
                                </td>
                                <td className="py-1 fw-400">Brahmin</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>First Language</span>
                                </td>
                                <td className="py-1 fw-400">English</td>
                                <td className="py-1">
                                  <span>marital_status</span>
                                </td>
                                <td className="py-1 fw-400">Married</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>location</span>
                                </td>
                                <td className="py-1 fw-400">Brazil</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row gutters-5 text-center">
                            <div className="col">
                              <a
                                href="https://demo.activeitzone.com/matrimonial/member-profile/28"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-user fs-20 text-primary" />
                                <span className="d-block fs-10 opacity-60">
                                  Full Profile
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="interest_a_id_28"
                                href="https://demo.activeitzone.com/matrimonial/interest/requests"
                                className="text-reset c-pointer"
                              >
                                <i className="la la-heart-o fs-20 text-primary" />
                                <span
                                  id="interest_id_28"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Interest Expressed
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="shortlist_a_id_28"
                                onclick="remove_shortlist(28)"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-list fs-20 text-primary" />
                                <span
                                  id="shortlist_id_28"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Shortlisted
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                onClick={() => setSmShow(true)}
                                className="text-reset c-pointer"
                              >
                                <span className="text-dark">
                                  <i className="las la-ban fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Ignore
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="report_a_id_28"
                                onClick={handleShow}
                                className="text-reset c-pointer"
                              >
                                <span id="report_id_28" className="text-dark">
                                  <i className="las la-info-circle fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Report
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row no-gutters border border-gray-300 rounded hov-shadow-md mb-4 has-transition position-relative"
                      id="block_id_27"
                    >
                      <div className="col-md-auto">
                        <div className="text-center text-md-left pt-3 pt-md-0">
                          <img
                            src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png"
                            onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                            className="img-fit mw-100 size-150px size-md-250px rounded-circle md-rounded-0"
                          />
                        </div>
                      </div>
                      <div className="col-md position-static d-flex align-items-center">
                        <span className="absolute-top-right px-4 py-3">
                          <span className="badge badge-inline badge-success">
                            Preminum
                          </span>
                        </span>
                        <div className="px-md-4 p-3 flex-grow-1">
                          <h2 className="h6 fw-600 fs-18 text-truncate mb-1">
                            Matthew Ryan
                          </h2>
                          <div className="mb-2 fs-12">
                            <span className="opacity-60">Member ID: </span>
                            <span className="ml-4 text-primary">765AA707</span>
                          </div>
                          <table className="w-100 opacity-70 mb-2 fs-12">
                            <tbody>
                              <tr>
                                <td className="py-1 w-25">
                                  <span>age</span>
                                </td>
                                <td className="py-1 w-25 fw-400">32</td>
                                <td className="py-1 w-25">
                                  <span>Height</span>
                                </td>
                                <td className="py-1 w-25 fw-400">5</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>Religion</span>
                                </td>
                                <td className="py-1 fw-400">Islam</td>
                                <td className="py-1">
                                  <span>Caste</span>
                                </td>
                                <td className="py-1 fw-400">Shia</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>First Language</span>
                                </td>
                                <td className="py-1 fw-400">English</td>
                                <td className="py-1">
                                  <span>marital_status</span>
                                </td>
                                <td className="py-1 fw-400">Never Married</td>
                              </tr>
                              <tr>
                                <td className="py-1">
                                  <span>location</span>
                                </td>
                                <td className="py-1 fw-400">American Samoa</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row gutters-5 text-center">
                            <div className="col">
                              <a
                                href="https://demo.activeitzone.com/matrimonial/member-profile/27"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-user fs-20 text-primary" />
                                <span className="d-block fs-10 opacity-60">
                                  Full Profile
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="interest_a_id_27"
                                href="https://demo.activeitzone.com/matrimonial/interest/requests"
                                className="text-reset c-pointer"
                              >
                                <i className="la la-heart-o fs-20 text-primary" />
                                <span
                                  id="interest_id_27"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Interest Expressed
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="shortlist_a_id_27"
                                onclick="remove_shortlist(27)"
                                className="text-reset c-pointer"
                              >
                                <i className="las la-list fs-20 text-primary" />
                                <span
                                  id="shortlist_id_27"
                                  className="d-block fs-10 opacity-60 text-primary"
                                >
                                  Shortlisted
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                onClick={() => setSmShow(true)}
                                className="text-reset c-pointer"
                              >
                                <span className="text-dark">
                                  <i className="las la-ban fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Ignore
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col">
                              <a
                                id="report_a_id_27"
                                onClick={handleShow}
                                className="text-reset c-pointer"
                              >
                                <span id="report_id_27" className="text-dark">
                                  <i className="las la-info-circle fs-20 text-primary" />
                                  <span className="d-block fs-10 opacity-60">
                                    Report
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="aiz-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Report Member!</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">
              Report Reason
              <span className="text-danger">*</span>
            </label>
            <div className="col-md-9">
              <textarea
                name="reason"
                rows={4}
                className="form-control"
                placeholder="Report Reason"
                required
                defaultValue={""}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Report
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
            <h6>Ignore Member!</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h7>Are you sure that you want to ignore this member?</h7>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ignore
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MembersListing;
