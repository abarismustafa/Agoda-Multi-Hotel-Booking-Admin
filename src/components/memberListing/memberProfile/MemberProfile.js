import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom";


function MemberProfile() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
    return (
        <>
        <section className="pt-6 bg-primary-grad text-white py-lg-5-2">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 offset-xl-4">
        <div className="px-3 row align-items-center">
          <div className="col-md-8 col-xxl-9">
            <h1 className="fs-24 fw-600">
              Alex Reynolds
              <span className="fs-20 fw-600">
              </span>
            </h1>
            <div className="fs-12">
              <span className="opacity-60">Member ID: </span>
              <span className="ml-2">BA5D7EEC</span>
            </div>
            <hr className="border-gray-500" />
            <table className="w-100">
              <tbody>
                <tr>
                  <td width="50%">
                    30
                    yrs
                    , 6
                  </td>
                  <td width="50%">
                    Never Married
                  </td>
                </tr>
                <tr>
                  <td>
                    Judaismm
                    , Israelites (Yisraelim)
                  </td>
                  <td>
                    Lives in
                    American Samoa
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 col-xxl-3">
            <div className="py-4 text-center border-md-left border-gray-600">
              <div className="fs-18 fw-500">Like this Profile ?</div>
              <a onclick="express_interest(44)" className="btn btn-block text-white">
                <i className="la la-heart-o la-2x border rounded-circle p-2 border-width-2 mb-2" />
                <span id="interest_id_44" className="d-block fs-13 opacity-60 text-dark">
                  Express Interest
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="nav nav-tabs aiz-nav-tabs bottom-bordered active-white border-0">
            <a className="text-black-50 d-inline-block fw-600 fs-15 px-3 py-2 active" data-toggle="tab" href="#profile">Detailed Profile</a>
            <a className="text-black-50 d-inline-block fw-600 fs-15 px-3 py-2" data-toggle="tab" href="#preference">Partner Preference</a>
            <a className="text-black-50 d-inline-block fw-600 fs-15 px-3 py-2" data-toggle="tab" href="#gallery">Photo Gallery</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-5 bg-white">
  <div className="container">
    <div className="row">
      <div className="col-xl-4 col-xxl-3 order-1 order-xl-0">
        <div className="aiz-profile-sidebar">
          <div className="overflow-hidden position-relative rounded shadow-lg mb-4 bg-white d-none d-xl-block">
            <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';" className="img-fluid w-100" />
          </div>
          <div className="mb-4 p-4 border rounded border-gray-200 d-none d-xl-block">
            <div className="fs-12">
              <span className="opacity-60">Member ID: </span>
              <span className="ml-1 text-primary">BA5D7EEC</span>
            </div>
            <h2 className="fs-20 fw-500">Alex Reynolds</h2>
            <div className="mb-2 mt-4">
              <a href="avascript:void(0);" id="shortlist_a_id_44" onclick="remove_shortlist(44)" className="btn btn-block btn-primary text-left">
                <i className="las la-list d-block la-2x" />
                <span id="shortlist_id_44">Shortlisted</span>
              </a>
            </div>
            <div className="row gutters-5">
              <div className="col">
                <Link to="avascript:void(0);" onClick={handleShow} className="btn btn-block btn-primary text-left">
                  <i className="las la-ban d-block la-2x" />
                  Ignore
                </Link>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ignore Member!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to ignore this member?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ignore
          </Button>
        </Modal.Footer>
      </Modal>
              </div>
              <div className="col">
                <Link to="avascript:void(0);" id="report_a_id_44" onClick={handleShow2} className="btn btn-block btn-primary text-left">
                  <i className="las la-info-circle d-block la-2x" />
                  <span id="report_id_44">Report
                  </span>
                  
                  </Link>
                  <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Report Member!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <form action="https://demo.activeitzone.com/matrimonial/reportusers" id="report-modal-form" method="POST">
  <input type="hidden" name="_token" defaultValue="9yGGvEgsVS6x2Gwq4GixAWGPovH5qxhKBSM61Ntc" />                        <input type="hidden" name="member_id" id="member_id" defaultValue={44} />
  <div className="form-group row">
    <label className="col-md-3 col-form-label">Report Reason<span className="text-danger">*</span></label>
    <div className="col-md-9">
      <textarea name="reason" rows={4} className="form-control" placeholder="Report Reason" required defaultValue={""} />
    </div>
  </div>
</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Report
          </Button>
        </Modal.Footer>
      </Modal>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <h3 className="fs-18 mb-3">Similar Profiles</h3>
            </div>
            <div>
              <a href="https://demo.activeitzone.com/matrimonial/member-profile/27" className="text-reset border rounded row no-gutters align-items-center mb-3">
                <div className="col-auto w-120px">
                  <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';" className="img-fit w-100 size-120px" />
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5 className="fs-16 text-body text-truncate">
                      Matthew Ryan
                    </h5>
                    <div className="fs-12 text-truncate-3">
                      <span className="mr-1 d-inline-block">
                        32
                        yrs,
                      </span>
                      <span className="mr-1 d-inline-block">
                        5
                        Feet,
                      </span>
                      <span className="mr-1 d-inline-block">
                        Never Married,
                      </span>
                      <span className="mr-1 d-inline-block">
                        Islam, 
                      </span>
                      <span className="mr-1 d-inline-block">
                        Shia, 
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://demo.activeitzone.com/matrimonial/member-profile/28" className="text-reset border rounded row no-gutters align-items-center mb-3">
                <div className="col-auto w-120px">
                  <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/9uC6PPkpVpfOu5FuhF2enDj3Com30pgwnLjWZlR1.png" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';" className="img-fit w-100 size-120px" />
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5 className="fs-16 text-body text-truncate">
                      Liam Noah
                    </h5>
                    <div className="fs-12 text-truncate-3">
                      <span className="mr-1 d-inline-block">
                        32
                        yrs,
                      </span>
                      <span className="mr-1 d-inline-block">
                        5
                        Feet,
                      </span>
                      <span className="mr-1 d-inline-block">
                        Married,
                      </span>
                      <span className="mr-1 d-inline-block">
                        Hinduism, 
                      </span>
                      <span className="mr-1 d-inline-block">
                        Brahmin, 
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://demo.activeitzone.com/matrimonial/member-profile/36" className="text-reset border rounded row no-gutters align-items-center mb-3">
                <div className="col-auto w-120px">
                  <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';" className="img-fit w-100 size-120px" />
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5 className="fs-16 text-body text-truncate">
                      Wilson Arnold
                    </h5>
                    <div className="fs-12 text-truncate-3">
                      <span className="mr-1 d-inline-block">
                        30
                        yrs,
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://demo.activeitzone.com/matrimonial/member-profile/37" className="text-reset border rounded row no-gutters align-items-center mb-3">
                <div className="col-auto w-120px">
                  <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/d60ho8ezrvYMxYH7SaU0mF4UmWttV321vSMrZ8yz.png" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';" className="img-fit w-100 size-120px" />
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5 className="fs-16 text-body text-truncate">
                      Robert L. Gardner
                    </h5>
                    <div className="fs-12 text-truncate-3">
                      <span className="mr-1 d-inline-block">
                        30
                        yrs,
                      </span>
                      <span className="mr-1 d-inline-block">
                        5
                        Feet,
                      </span>
                      <span className="mr-1 d-inline-block">
                        Never Married,
                      </span>
                      <span className="mr-1 d-inline-block">
                        Judaismm, 
                      </span>
                      <span className="mr-1 d-inline-block">
                        Israelites (Yisraelim), 
                      </span>
                      <span className="mr-1 d-inline-block">
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="border rounded">
            <a href="https://demo.activeitzone.com/matrimonial/" className="text-reset">
              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/mGjZwnY7801CUnPA31gqWcH9FUisUPHpMSlFDXBi.png" className="img-fluid w-100" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-8 offset-xxl-1">
        <div className="overflow-hidden rounded shadow-lg mb-4 bg-white d-xl-none position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ftplN2fgKnlYgX6qMTj8bYldFN50VZd1wDsuoW4I.png" onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';" className="img-fluid w-100" />
        </div>
        <div className="mb-4 p-4 border rounded border-gray-200 d-xl-none">
          <div className="fs-12">
            <span className="opacity-60">Member ID: </span>
            <span className="ml-1 text-primary">BA5D7EEC</span>
          </div>
          <h2 className="fs-20 fw-500 mb-4">Alex Reynolds</h2>
          <div className="mb-2">
            <a href="avascript:void(0);" id="shortlist_a_id_44" onclick="remove_shortlist(44)" className="btn btn-block btn-primary text-left">
              <i className="las la-list d-block la-2x" />
              <span id="shortlist_id_44">Shortlisted</span>
            </a>
          </div>
          <div className="row gutters-5">
            <div className="col">
              <a href="avascript:void(0);" onclick="ignore_member(44)" className="btn btn-block btn-primary text-left">
                <i className="las la-ban d-block la-2x" />
                Ignore
              </a>
            </div>
            <div className="col">
              <a href="avascript:void(0);" id="report_a_id_44" onclick="report_member(44)" className="btn btn-block btn-primary text-left">
                <i className="las la-info-circle d-block la-2x" />
                <span id="report_id_44">Report
                </span></a>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="profile">
            <svg style={{height: 0, width: 0, opacity: 0, visibility: 'hidden'}}>
              <defs>
                <linearGradient id="primary-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                  <stop offset={0} stopColor="#FD655B" />
                  <stop offset={1} stopColor="#FD2C79" />
                </linearGradient>
              </defs>
            </svg>
            <div className="accordion aiz-timeline-accordion" id="profile-accordion">
              {/* about */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#about" aria-expanded="true">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22.034" height="16.525" viewBox="0 0 22.034 16.525" className="fill-primary-grad">
                      <path className="fill-dark" d="M28.263,16.525V8.263H22.754a5.514,5.514,0,0,1,5.508-5.508V0A8.272,8.272,0,0,0,20,8.263v8.263Z" transform="translate(-6.229)" />
                      <path fill="url(#primary-gradient)" d="M8.263,16.525V8.263H2.754A5.514,5.514,0,0,1,8.263,2.754V0A8.272,8.272,0,0,0,0,8.263v8.263Z" />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">About Alex Reynolds</span>
                    <span className="fs-11 fw-400">
                      <span>Member ID:  BA5D7EEC</span>
                      <span className="mx-2">|</span>
                      <span>On Behalf
                        Selfs</span>
                    </span>
                  </div>
                </div>
                <div id="about" className="collapse show accordion-body ml-3 ml-md-5 pl-25px lh-1-8" data-parent="#profile-accordion">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </div>
              </div>
              {/* basic information */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#basic-info">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22.936" height="27.722" viewBox="0 0 22.936 27.722" className="fill-primary-grad">
                      <g transform="translate(-40.061 0)">
                        <path d="M88.314,328.008h-4.3l-2.39,2.39-2.39-2.39h-4.3a2.868,2.868,0,0,0-2.868,2.868v5.258H91.181v-5.258A2.868,2.868,0,0,0,88.314,328.008Z" transform="translate(-30.09 -308.411)" className="fill-dark" />
                        <path d="M6.14,25.333H3.824a1.91,1.91,0,0,1-1.912-1.912v-.968a2.015,2.015,0,0,1-.929-.289,1.757,1.757,0,0,1-.589-.634,2.924,2.924,0,0,1-.308-.9A5.794,5.794,0,0,1,0,19.551a2.856,2.856,0,0,1,2.858-2.822h.488l-.079,0a1.434,1.434,0,0,1-1.355-1.509,1.488,1.488,0,0,1,1.482-1.357h.43V7.648c0-.121,0-.245.009-.37a7.611,7.611,0,0,1,1.433-4.1A7.674,7.674,0,0,1,8.59.562,7.6,7.6,0,0,1,11.465,0c.125,0,.251,0,.376.009a7.347,7.347,0,0,1,2.873.73,7.573,7.573,0,0,1,1.238.755,7.8,7.8,0,0,1,1.071.971,8,8,0,0,1,2.1,5.4v6h.43a1.488,1.488,0,0,1,1.482,1.357c0,.024,0,.05,0,.079A1.434,1.434,0,0,1,19.6,16.729h.423a2.934,2.934,0,0,1,2.867,2.305,3.028,3.028,0,0,1,.043.312c0,.048,0,.1,0,.148a2.04,2.04,0,0,1-2.041,2.015h-.031a2.873,2.873,0,0,0-2.7-1.912h-4.3V16.151a5.231,5.231,0,0,0,2.868-4.679V8.6h-.419a1.911,1.911,0,0,1-1.854-1.448L13.383,3.346,12.4,6.794A2.389,2.389,0,0,1,10.085,8.6H6.214v2.868a5.23,5.23,0,0,0,2.868,4.679V19.6H6.3a2.866,2.866,0,0,1,2.778,2.955,2.947,2.947,0,0,1-2.941,2.78Z" transform="translate(40.061 0)" fill="url(#primary-gradient)" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Basic Information</span>
                  </div>
                </div>
                <div id="basic-info" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-sm-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <td className="py-1 fw-600">First Name
                              </td>
                              <td className="py-1">Alex</td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Gender</td>
                              <td className="py-1">
                                Male
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">age</td>
                              <td className="py-1">
                                30
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1 fw-600">Religion</th>
                              <td className="py-1">
                                Judaismm
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">First Language
                              </td>
                              <td className="py-1">
                                English
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">
                                No. of  Children
                              </td>
                              <td className="py-1">0
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <td className="py-1 fw-600">Last Name</td>
                              <td className="py-1">Reynolds</td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Height</td>
                              <td className="py-1">
                                6
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Date Of Birth
                              </td>
                              <td className="py-1">
                                23/09/1992
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1 fw-600">Caste</th>
                              <td className="py-1">
                                Israelites (Yisraelim)
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">
                                marital_status
                              </td>
                              <td className="py-1">
                                Never Married
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Present Address */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#present-address">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24.017" height="24.064" viewBox="0 0 24.017 24.064" className="fill-primary-grad">
                      <g transform="translate(-1078.993 -1084.468)">
                        <path d="M5.629,9.617A3.992,3.992,0,0,0,9.617,13.6a.938.938,0,0,1,0,1.876A5.864,5.864,0,1,1,15.48,9.617a.938.938,0,0,1-1.876,0,3.987,3.987,0,1,0-7.975,0Zm.737,8.3C3.959,15.279,1.88,13,1.877,9.608a7.74,7.74,0,0,1,15.48,0,.938.938,0,0,0,.938.937h0a.938.938,0,0,0,.937-.939A9.616,9.616,0,0,0,2.821,2.813,9.555,9.555,0,0,0,0,9.607,10.047,10.047,0,0,0,1.588,14.97a28.549,28.549,0,0,0,3.393,4.21,32.029,32.029,0,0,1,3.561,4.4.938.938,0,1,0,1.586-1,33.476,33.476,0,0,0-3.762-4.664Zm17.405.45a.938.938,0,0,1-1.325.059l-.118-.107v3.1a2.645,2.645,0,0,1-2.641,2.643H14.416a2.645,2.645,0,0,1-2.641-2.643V18.36l-.071.064a.938.938,0,1,1-1.266-1.385l4.842-4.427a2.647,2.647,0,0,1,3.59,0l3.1,2.837a.938.938,0,0,1,.1.088l1.643,1.5a.938.938,0,0,1,.059,1.325ZM20.453,16.6,17.6,14a.78.78,0,0,0-1.058,0l-2.9,2.647v4.777a.767.767,0,0,0,.765.767h5.272a.767.767,0,0,0,.765-.767Zm0,0" transform="translate(1078.992 1084.467)" className="fill-dark" />
                        <path d="M5.629,9.617A3.992,3.992,0,0,0,9.617,13.6a.938.938,0,0,1,0,1.876A5.864,5.864,0,1,1,15.48,9.617a.938.938,0,0,1-1.876,0,3.987,3.987,0,1,0-7.975,0Zm.737,8.3C3.959,15.279,1.88,13,1.877,9.608a7.74,7.74,0,0,1,15.48,0,.938.938,0,0,0,.938.937h0a.938.938,0,0,0,.937-.939A9.616,9.616,0,0,0,2.821,2.813,9.555,9.555,0,0,0,0,9.607,10.047,10.047,0,0,0,1.588,14.97a28.549,28.549,0,0,0,3.393,4.21,32.029,32.029,0,0,1,3.561,4.4.938.938,0,1,0,1.586-1,33.476,33.476,0,0,0-3.762-4.664Z" transform="translate(1078.992 1084.467)" fill="url(#primary-gradient)" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Present Address</span>
                  </div>
                </div>
                <div id="present-address" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="border p-3">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <td className="py-1 fw-600">
                                <i className="las text-primary mr-2 la-flag" />
                                <span>Country</span>
                              </td>
                              <td className="py-1">
                                American Samoa
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">
                                <i className="las text-primary mr-2 la-map-marker" />
                                <span>State</span>
                              </td>
                              <td className="py-1">
                                Eastern
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">
                                <i className="las text-primary mr-2 la-building" />
                                <span>City</span>
                              </td>
                              <td className="py-1">
                                Amouli
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">
                                <i className="las text-primary mr-2 la-envelope" />
                                <span>Postal Code</span>
                              </td>
                              <td className="py-1">
                                2280
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Details */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#contact-details">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19.988" height="19.927" viewBox="0 0 19.988 19.927" className="fill-primary-grad">
                      <g transform="translate(-1080 -807.536)">
                        <path d="M19.41,13a3.147,3.147,0,0,1-.67-.12,9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a2.99,2.99,0,0,0-2.97,3.4A19.008,19.008,0,0,0,18.44,21.92a2.56,2.56,0,0,0,.39,0,2.993,2.993,0,0,0,3-3v-3A3,3,0,0,0,19.41,13Zm.49,6a1.005,1.005,0,0,1-1.15.99,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25,1.005,1.005,0,0,1,5,4.1H8a1,1,0,0,1,1,.78,3.935,3.935,0,0,0,.15.82,11,11,0,0,0,.46,1.54l-1.4.66a1.042,1.042,0,0,0-.52,1.32,14.49,14.49,0,0,0,7,7,1.042,1.042,0,0,0,1.32-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2h-.7a1,1,0,1,0,.17,2H14a6,6,0,0,1,6,6v.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91V10A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z" transform="translate(1077.998 805.536)" className="fill-dark" />
                        <path d="M19.41,13a3.147,3.147,0,0,1-.67-.12,9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a2.99,2.99,0,0,0-2.97,3.4A19.008,19.008,0,0,0,18.44,21.92a2.56,2.56,0,0,0,.39,0,2.993,2.993,0,0,0,3-3v-3A3,3,0,0,0,19.41,13Zm.49,6a1.005,1.005,0,0,1-1.15.99,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25,1.005,1.005,0,0,1,5,4.1H8a1,1,0,0,1,1,.78,3.935,3.935,0,0,0,.15.82,11,11,0,0,0,.46,1.54l-1.4.66a1.042,1.042,0,0,0-.52,1.32,14.49,14.49,0,0,0,7,7,1.042,1.042,0,0,0,1.32-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1Z" transform="translate(1077.998 805.536)" fill="url(#primary-gradient)" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Contact Details</span>
                  </div>
                </div>
                <div id="contact-details" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="border p-3">
                        <div className="d-flex mb-3">
                          <i className="las la-phone text-primary la-2x mr-3" />
                          <div>
                            <div className="fs-15 fw-600 mb-1">
                              Contact Number
                            </div>
                            <div className="fw-400">+xx xxx xxx xxx</div>
                          </div>
                        </div>
                        <div className="d-flex">
                          <i className="las la-envelope text-primary la-2x mr-3" />
                          <div>
                            <div className="fs-15 fw-600 mb-1">
                              Email ID</div>
                            <div className="fw-400">xxxxx@xxx.xx</div>
                          </div>
                        </div>
                        <a onclick="view_contact(44)" className="btn btn-block bg-primary text-white mt-2 view_contact">
                          <i className="las la-phone" />
                          View Contact Info
                        </a>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#education">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24.971" height="20.838" viewBox="0 0 24.971 20.838" className="fill-primary-grad">
                      <g transform="translate(-2.499 -3.917)">
                        <path d="M5.565,15.1V18.46a2.4,2.4,0,0,0,1.242,2.1l5.972,3.261a2.371,2.371,0,0,0,2.293,0l5.972-3.261a2.4,2.4,0,0,0,1.242-2.1V15.1l-7.214,3.941a2.371,2.371,0,0,1-2.293,0ZM12.779,3.567,2.711,9.061a1.2,1.2,0,0,0,0,2.1l10.068,5.494a2.371,2.371,0,0,0,2.293,0l9.6-5.243v7.059a1.194,1.194,0,0,0,2.389,0V10.816a1.2,1.2,0,0,0-.621-1.051l-11.37-6.2a2.436,2.436,0,0,0-2.293,0Z" transform="translate(0.407 0.637)" fill="url(#primary-gradient)" />
                        <path d="M5.565,15.1V18.46a2.4,2.4,0,0,0,1.242,2.1l5.972,3.261a2.371,2.371,0,0,0,2.293,0l5.972-3.261a2.4,2.4,0,0,0,1.242-2.1V15.1l-7.214,3.941C14.355,19.439,13.5,19.439,5.565,15.1Z" transform="translate(0.407 0.637)" className="fill-dark" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Education</span>
                  </div>
                </div>
                <div id="education" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <table className="table table-borderless border">
                    <tbody>
                      <tr>
                        <th>Degree</th>
                        <th>Institution</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Status</th>
                      </tr>
                      <tr>
                        <td>Bachelor's degree</td>
                        <td>University Of Texus</td>
                        <td>2006</td>
                        <td>2012</td>
                        <td>
                          <span className="badge badge-inline badge-success">Running</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Career */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#career">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.094" height="20.532" viewBox="0 0 23.094 20.532" className="fill-primary-grad">
                      <path d="M23.094,15.794v4a3.467,3.467,0,0,1-.983,1.7A3.755,3.755,0,0,1,19.5,22.534H13.277V21.317a.938.938,0,0,0-.935-.935H10.752a.938.938,0,0,0-.935.935v1.217H3.6A3.756,3.756,0,0,1,.983,21.5,3.46,3.46,0,0,1,0,19.792v-4a1.572,1.572,0,0,1,1.567-1.567h19.96A1.572,1.572,0,0,1,23.094,15.794ZM12.342,24.686a.153.153,0,0,0,.151-.151V21.317a.153.153,0,0,0-.151-.151H10.752a.154.154,0,0,0-.151.151v3.218a.153.153,0,0,0,.151.151Zm10.312-2.625A4.536,4.536,0,0,1,19.5,23.318H13.277v1.217a.938.938,0,0,1-.935.935H10.752a.938.938,0,0,1-.935-.935V23.318H3.6A4.536,4.536,0,0,1,.44,22.061,4.446,4.446,0,0,1,0,21.571v8.486a1.572,1.572,0,0,0,1.567,1.567h19.96a1.572,1.572,0,0,0,1.567-1.567V21.571A4.435,4.435,0,0,1,22.654,22.061ZM15.161,11.551a1.563,1.563,0,0,0-1.108-.459H9.042a1.567,1.567,0,0,0-1.568,1.567v.784H8.807v-.784a.236.236,0,0,1,.236-.235h5.01a.236.236,0,0,1,.235.235v.784H15.62v-.784A1.564,1.564,0,0,0,15.161,11.551Z" transform="translate(0 -11.092)" fill="url(#primary-gradient)" />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Career</span>
                  </div>
                </div>
                <div id="career" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <table className="table table-borderless border table-responsive">
                    <tbody>
                      <tr>
                        <th>designation</th>
                        <th>company</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Status</th>
                      </tr>
                      <tr>
                        <td>Physical Therapist Assistant</td>
                        <td>Mansmann</td>
                        <td>2013</td>
                        <td>2024</td>
                        <td>
                          <span className="badge badge-inline badge-success">Active</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Physical Attributes */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#physical-attributes">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20.998" height="21.121" viewBox="0 0 20.998 21.121" className="fill-primary-grad">
                      <g transform="translate(-1082.003 -1774.616)">
                        <g transform="translate(1055.402 1769.616)">
                          <circle cx="2.142" cy="2.142" r="2.142" transform="translate(36.031 5)" fill="url(#primary-gradient)" />
                          <path d="M40.373,25.972h-4.4A1.375,1.375,0,0,0,34.6,27.347v4.968a1.376,1.376,0,0,0,1.375,1.376h.334v7.244a1.06,1.06,0,0,0,1.06,1.06h1.612a1.06,1.06,0,0,0,1.06-1.06V33.691h.334a1.376,1.376,0,0,0,1.375-1.376V27.347A1.375,1.375,0,0,0,40.373,25.972Z" transform="translate(0 -16.104)" fill="url(#primary-gradient)" />
                        </g>
                        <path d="M-15510,17.738l.549-.549,2.444,2.444V18.415h0V1.487l-2.44,2.444-.549-.549,3.379-3.383,3.382,3.383-.549.549-2.444-2.444V19.634l2.444-2.444.549.549-3.382,3.383Z" transform="translate(16592 1774.616)" className="fill-dark" />
                        <rect width={3} height={21} transform="translate(1100.001 1774.616)" className="fill-dark" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Physical Attributes</span>
                  </div>
                </div>
                <div id="physical-attributes" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-sm-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <td className="py-1 fw-600">Height
                              </td>
                              <td className="py-1">
                                6
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Eye color
                              </td>
                              <td className="py-1">
                                Brown
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Complexion
                              </td>
                              <td className="py-1">
                                Fair skin, always burns, sometimes tans
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Body Type
                              </td>
                              <td className="py-1">
                                Medium
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Disability
                              </td>
                              <td className="py-1">
                                Recusandae Est nost
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <td className="py-1 fw-600">Weight
                              </td>
                              <td className="py-1">
                                50
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">
                                Hair Color</td>
                              <td className="py-1">
                                Black
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Blood Group
                              </td>
                              <td className="py-1">
                                A+
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1 fw-600">Body Art
                              </td>
                              <td className="py-1">
                                Medium
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Language */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#language">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="26.953" height="26.953" viewBox="0 0 26.953 26.953" className="fill-primary-grad">
                      <g transform="translate(0)">
                        <path d="M13.476,0A13.492,13.492,0,0,1,26.953,13.477a13.316,13.316,0,0,1-2.1,7.224l2.042,5.1A.842.842,0,0,1,25.8,26.893l-5.1-2.042a13.316,13.316,0,0,1-7.223,2.1A13.477,13.477,0,0,1,13.476,0Zm0,25.269a11.625,11.625,0,0,0,6.647-2.057.834.834,0,0,1,.478-.15.843.843,0,0,1,.313.061L24.6,24.6l-1.476-3.683a.844.844,0,0,1,.089-.792,11.626,11.626,0,0,0,2.057-6.647A11.792,11.792,0,1,0,13.476,25.269Z" fill="url(#primary-gradient)" />
                        <g transform="translate(8.25 9.002)">
                          <path d="M11.241,1.494a.748.748,0,0,1,.747.747V5.228a.747.747,0,0,1-1.494,0V2.241a.748.748,0,0,1,.747-.747Zm0-1.494A2.241,2.241,0,0,0,9,2.241V5.228a2.241,2.241,0,0,0,4.481,0V2.241A2.241,2.241,0,0,0,11.241,0Z" transform="translate(-6.012)" className="fill-dark" />
                          <path d="M13,26h1.494v1.494a.747.747,0,1,1-1.494,0Z" transform="translate(-8.519 -16.291)" className="fill-dark" />
                          <path d="M10.709,8a.747.747,0,0,0-.747.747v1.362a3.822,3.822,0,0,1-3.478,3.858,3.738,3.738,0,0,1-3.99-3.726V8.747A.747.747,0,1,0,1,8.747v1.346a5.325,5.325,0,0,0,4.975,5.37,5.228,5.228,0,0,0,5.481-5.222V8.747A.747.747,0,0,0,10.709,8Z" transform="translate(-0.999 -5.013)" className="fill-dark" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Language</span>
                  </div>
                </div>
                <div id="language" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="border p-3">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th>Mother Tangue</th>
                              <td className="py-1">
                                English
                              </td>
                            </tr>
                            <tr>
                              <th>Known Languages</th>
                              <td className="py-1">
                                English,
                                Chainese,
                                Japanese,
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hobbies & Interest  */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#hobby">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24.534" height="17.71" viewBox="0 0 24.534 17.71" className="fill-primary-grad">
                      <g transform="translate(-1078.174 -2016.025)">
                        <path d="M3.674,3.457a1.455,1.455,0,0,1,2.2-1.25L18.3,9.6a1.454,1.454,0,0,1,0,2.5L5.873,19.5a1.455,1.455,0,0,1-2.2-1.25Z" transform="translate(1074.5 2014.025)" fill="url(#primary-gradient)" />
                        <path d="M10.858,1.01A8.849,8.849,0,0,0,2,9.863v8.175a.708.708,0,0,0,.681.681H5.409a2.041,2.041,0,0,0,1.538-.644,2.157,2.157,0,0,0,.505-1.445V12.588a2.139,2.139,0,0,0-.482-1.365,1.82,1.82,0,0,0-1.391-.668H3.366V9.863a7.492,7.492,0,0,1,14.983,0v.692H16.136a1.82,1.82,0,0,0-1.391.668,2.139,2.139,0,0,0-.482,1.365v4.044a2.157,2.157,0,0,0,.505,1.445,2.041,2.041,0,0,0,1.538.644H19.03a.708.708,0,0,0,.681-.681V14.8q0-.023,0-.045v-4.9A8.849,8.849,0,0,0,10.858,1.01Z" transform="translate(1082.996 2015.015)" className="fill-dark" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Hobbies &amp; Interest</span>
                  </div>
                </div>
                <div id="hobby" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody><tr>
                              <th className="py-1">Hobbies</th>
                              <td className="py-1">
                                Drawing,Singing
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Music</th>
                              <td className="py-1">
                                Popular music
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Movies</th>
                              <td className="py-1">
                                Night at the Museum (2006) PG
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Sports</th>
                              <td className="py-1">
                                Cricket, Handall
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Cuisines</th>
                              <td className="py-1">
                                Thai
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">Interests
                              </th>
                              <td className="py-1">
                                Singing
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Books</th>
                              <td className="py-1">
                                A Time to Kill --by John Grisham The Lost Symbol (Robert Langdon) --by Dan Brown
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">TV Shows
                              </th>
                              <td className="py-1">
                                Avatar
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Fitness Activities</th>
                              <td className="py-1">
                                Stable
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Dress Styles</th>
                              <td className="py-1">
                                Midi Dress,Off the Shoulder
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Personal Attitude & Behavior */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#personal-attitude">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23.306" height="26.808" viewBox="0 0 23.306 26.808" className="fill-primary-grad">
                      <g transform="translate(-0.5)">
                        <path d="M122.448,136.226a.785.785,0,0,0-.555-.23h-4.206a.785.785,0,0,0,0,1.571H120l-4.052,4.052-2.419-2.419a.786.786,0,0,0-1.111,0l-2.974,2.974a.785.785,0,1,0,1.111,1.111l2.419-2.419,2.419,2.419a.785.785,0,0,0,1.111,0l4.608-4.608v2.31a.785.785,0,1,0,1.571,0v-4.206A.785.785,0,0,0,122.448,136.226Zm0,0" transform="translate(-103.018 -128.875)" className="fill-dark" />
                        <path d="M12.926,0A10.892,10.892,0,0,0,2.046,10.747l-1.3,3.778a2.838,2.838,0,0,0,.064,2.506,1.226,1.226,0,0,0,1.006.523h.224v1.318A2.892,2.892,0,0,0,4.934,21.76a1.319,1.319,0,0,1,1.318,1.318v.841A2.892,2.892,0,0,0,9.14,26.808h5.889a2.892,2.892,0,0,0,2.888-2.889V20.548A10.88,10.88,0,0,0,12.926,0ZM16.8,19.344a.786.786,0,0,0-.458.714v3.861a1.319,1.319,0,0,1-1.318,1.318H9.14a1.319,1.319,0,0,1-1.318-1.318v-.841A2.892,2.892,0,0,0,4.934,20.19a1.319,1.319,0,0,1-1.318-1.318v-2.1a.785.785,0,0,0-.785-.785H2.075a2.456,2.456,0,0,1,.162-.949l1.337-3.9a.788.788,0,0,0,.042-.255A9.31,9.31,0,1,1,16.8,19.344Zm0,0" fill="url(#primary-gradient)" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Personal Attitude &amp; Behavior</span>
                  </div>
                </div>
                <div id="personal-attitude" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th className="py-1">Affection
                              </th>
                              <td className="py-1">
                                Tender attachment
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Political Views</th>
                              <td className="py-1">
                                Not interested
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">Humor</th>
                              <td className="py-1">
                                Incongruity, Slapstick
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Religious Service</th>
                              <td className="py-1">
                                Not interested
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Residency Information */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#residency-info">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28.394" height="27.785" viewBox="0 0 28.394 27.785" className="fill-primary-grad">
                      <g transform="translate(-1076.803 -2260.108)">
                        <path d="M28.066,14.1a1.109,1.109,0,0,1-1.569,0l-.877-.883v4.038a1.109,1.109,0,1,1-2.218,0V10.976L14.967,2.485a1.108,1.108,0,0,0-1.439,0L4.99,11c0,.011,0,.021,0,.032V22.793a2.221,2.221,0,0,0,2.218,2.218H8.6a1.109,1.109,0,0,1,0,2.218H7.209a4.441,4.441,0,0,1-4.437-4.437V13.217l-.88.878a1.109,1.109,0,1,1-1.567-1.57L11.987.886l.046-.043a3.325,3.325,0,0,1,4.436.009L16.515.9,28.071,12.528a1.109,1.109,0,0,1,0,1.568Zm-3.555,7.587A1.109,1.109,0,0,0,23.4,22.793a2.221,2.221,0,0,1-2.218,2.218H19.8a1.109,1.109,0,1,0,0,2.218h1.386a4.441,4.441,0,0,0,4.437-4.437A1.109,1.109,0,0,0,24.512,21.684Zm-3.327-4.056c0,2.97-1.769,4.879-3.478,6.726a20.583,20.583,0,0,0-2.382,2.914,1.109,1.109,0,0,1-.938.516h-.381a1.109,1.109,0,0,1-.938-.516,20.583,20.583,0,0,0-2.382-2.914C8.979,22.507,7.212,20.6,7.209,17.63a6.988,6.988,0,0,1,13.975,0Zm-2.218,0a4.769,4.769,0,0,0-9.539,0c0,2.1,1.276,3.474,2.888,5.217.633.683,1.28,1.383,1.882,2.168.6-.785,1.249-1.485,1.882-2.168,1.612-1.743,2.886-3.119,2.888-5.219Zm-4.819-3.042a3.05,3.05,0,1,0,0,6.1,1.109,1.109,0,1,0,0-2.218.832.832,0,1,1,.832-.832,1.109,1.109,0,1,0,2.218,0A3.053,3.053,0,0,0,14.147,14.586Zm0,0" transform="translate(1076.803 2260.108)" fill="url(#primary-gradient)" />
                        <path d="M21.184,17.628c0,2.97-1.769,4.879-3.478,6.726a20.583,20.583,0,0,0-2.382,2.914,1.109,1.109,0,0,1-.938.516h-.381a1.109,1.109,0,0,1-.938-.516,20.583,20.583,0,0,0-2.382-2.914C8.979,22.507,7.212,20.6,7.209,17.63a6.988,6.988,0,0,1,13.975,0Zm-2.218,0a4.769,4.769,0,0,0-9.539,0c0,2.1,1.276,3.474,2.888,5.217.633.683,1.28,1.383,1.882,2.168.6-.785,1.249-1.485,1.882-2.168,1.612-1.743,2.886-3.119,2.888-5.219Zm-4.819-3.042a3.05,3.05,0,1,0,0,6.1,1.109,1.109,0,1,0,0-2.218.832.832,0,1,1,.832-.832,1.109,1.109,0,1,0,2.218,0A3.053,3.053,0,0,0,14.147,14.586Zm0,0" transform="translate(1076.803 2260.108)" className="fill-dark" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Residency Information</span>
                  </div>
                </div>
                <div id="residency-info" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th className="py-1">
                                Birth Country</th>
                              <td className="py-1">
                                American Samoa
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Growup Country</th>
                              <td className="py-1">
                                American Samoa
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">
                                Recidency Country</th>
                              <td className="py-1">
                                American Samoa
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Immigration Status</th>
                              <td className="py-1">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Spiritual & Social Background */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#spiritual-social">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="21.754" height="20.248" viewBox="0 0 21.754 20.248" className="fill-primary-grad">
                      <g transform="translate(0 -17.721)">
                        <path d="M126.787,17.722a1.055,1.055,0,0,0-1.039.9l-1.361,10.665a.636.636,0,0,1-.231.414l-1.343,1.088,2.357,2.395,2.378-2.378a.976.976,0,0,0,.288-.695V18.772a1.051,1.051,0,0,0-1.05-1.05Z" transform="translate(-117.595 -0.001)" fill="url(#primary-gradient)" />
                        <path d="M7.45,327.309l-4.1-4.167-3.1,2.39a.636.636,0,0,0-.077.936l3.478,3.742a.636.636,0,0,0,.918.014Z" transform="translate(0 -292.444)" className="fill-dark" />
                        <path d="M275.985,30.785,274.642,29.7a.636.636,0,0,1-.231-.414l-1.361-10.665a1.05,1.05,0,0,0-2.089.152V30.107a.976.976,0,0,0,.288.695l2.378,2.378Z" transform="translate(-259.449)" fill="url(#primary-gradient)" />
                        <path d="M340.766,323.142l-4.1,4.167,2.884,2.915a.636.636,0,0,0,.918-.014l3.478-3.742a.636.636,0,0,0-.077-.936Z" transform="translate(-322.359 -292.444)" className="fill-dark" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Spiritual &amp; Social Background</span>
                  </div>
                </div>
                <div id="spiritual-social" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th className="py-1">Religion
                              </th>
                              <td className="py-1">
                                Judaismm
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Sub Caste
                              </th>
                              <td className="py-1">
                                Bazigar
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Personal Value</th>
                              <td className="py-1">
                                Open-minded
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Community Value</th>
                              <td className="py-1">
                                Good
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">Caste</th>
                              <td className="py-1">
                                Israelites (Yisraelim)
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Ethnicity
                              </th>
                              <td className="py-1">
                                Nulla non pariatur
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Family Value</th>
                              <td className="py-1">
                                Xanthus Collins
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Life Style */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#life-style">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24.514" height="19.98" viewBox="0 0 24.514 19.98" className="fill-primary-grad">
                      <g transform="translate(1 1)">
                        <path d="M11.291,6.46A11.257,11.257,0,0,0,.034,17.717H22.548A11.257,11.257,0,0,0,11.291,6.46Z" transform="translate(-0.034 -3.802)" fill="url(#primary-gradient)" />
                        <path d="M.034,39.126H22.548" transform="translate(-0.034 -21.146)" stroke="#4d4d4d" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="url(#primary-gradient)" />
                        <path d="M24.034.793V3.451" transform="translate(-12.777 -0.793)" stroke="#4d4d4d" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="url(#primary-gradient)" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Life Style</span>
                  </div>
                </div>
                <div id="life-style" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th className="py-1">Diet</th>
                              <td className="py-1">
                                yes
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Smoke</th>
                              <td className="py-1">
                                yes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">Drink</th>
                              <td className="py-1">
                                no
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Living With
                              </th>
                              <td className="py-1">
                                Parents
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Astronomic Information  */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#astronomic">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23.856" height="23.857" viewBox="0 0 23.856 23.857" className="fill-primary-grad">
                      <path d="M11.928,0A11.928,11.928,0,1,0,23.856,11.928,11.928,11.928,0,0,0,11.928,0Zm9.8,11.333-5.375-1.24,2.923-4.677A9.739,9.739,0,0,1,21.733,11.333ZM18.44,4.574,13.763,7.5l-1.24-5.374A9.738,9.738,0,0,1,18.44,4.574ZM11.333,2.123,10.093,7.5,5.416,4.574A9.739,9.739,0,0,1,11.333,2.123ZM4.574,5.416,7.5,10.093l-5.375,1.24A9.738,9.738,0,0,1,4.574,5.416ZM2.123,12.523,7.5,13.763,4.574,18.44A9.739,9.739,0,0,1,2.123,12.523Zm3.292,6.759,4.677-2.923,1.24,5.375A9.738,9.738,0,0,1,5.416,19.282Zm4.2-7.354a2.805,2.805,0,0,1,4.617-2.143,2.173,2.173,0,0,0,0,4.285,2.8,2.8,0,0,1-4.617-2.143Zm2.9,9.8,1.24-5.375,4.677,2.923A9.739,9.739,0,0,1,12.523,21.733Zm6.759-3.292-2.923-4.677,5.375-1.24A9.738,9.738,0,0,1,19.282,18.44Z" fill="url(#primary-gradient)" />
                      <path d="M-15498.071,23.857a11.847,11.847,0,0,1-8.435-3.494,11.855,11.855,0,0,1-3.492-8.437,11.849,11.849,0,0,1,3.492-8.433A11.848,11.848,0,0,1-15498.071,0a11.849,11.849,0,0,1,8.434,3.494,11.847,11.847,0,0,1,3.493,8.433,11.852,11.852,0,0,1-3.493,8.437A11.848,11.848,0,0,1-15498.071,23.857ZM-15498,2a10.011,10.011,0,0,0-10,10,10.011,10.011,0,0,0,10,10,10.011,10.011,0,0,0,10-10A10.011,10.011,0,0,0-15498,2Z" transform="translate(15510)" className="fill-dark" />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Astronomic Information</span>
                  </div>
                </div>
                <div id="astronomic" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th className="py-1">Sun Sign
                              </th>
                              <td className="py-1">
                                Aries
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                Time Of Birth</th>
                              <td className="py-1">
                                02/03/1999
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">Moon Sign
                              </th>
                              <td className="py-1">
                                Moon Sign
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">
                                City Of Birth</th>
                              <td className="py-1">
                                02/03/1999
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Permanent Address */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#permanent-address">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24.659" height="19.623" viewBox="0 0 24.659 19.623" className="fill-primary-grad">
                      <g transform="translate(-1078.67 -2909.649)">
                        <path d="M111.028,264.3v7.342a.992.992,0,0,1-.979.979h-5.873V266.75h-3.915v5.873H94.387a.992.992,0,0,1-.979-.979V264.3a.209.209,0,0,1,.008-.046.209.209,0,0,0,.008-.046l8.795-7.25,8.795,7.25A.213.213,0,0,1,111.028,264.3Zm3.411-1.055-.948,1.132a.52.52,0,0,1-.321.168h-.046a.47.47,0,0,1-.321-.107l-10.584-8.825-10.584,8.825a.569.569,0,0,1-.367.107.52.52,0,0,1-.321-.168L90,263.248a.5.5,0,0,1-.107-.359.444.444,0,0,1,.168-.329l11-9.162a1.9,1.9,0,0,1,2.325,0l3.732,3.12v-2.983a.471.471,0,0,1,.489-.489h2.937a.471.471,0,0,1,.489.489v6.24l3.35,2.784a.444.444,0,0,1,.168.329A.5.5,0,0,1,114.439,263.248Z" transform="translate(988.781 2656.649)" fill="url(#primary-gradient)" />
                        <path d="M114.439,263.248l-.948,1.132a.52.52,0,0,1-.321.168h-.046a.47.47,0,0,1-.321-.107l-10.584-8.825-10.584,8.825a.569.569,0,0,1-.367.107.52.52,0,0,1-.321-.168L90,263.248a.5.5,0,0,1-.107-.359.444.444,0,0,1,.168-.329l11-9.162a1.9,1.9,0,0,1,2.325,0l3.732,3.12v-2.983a.471.471,0,0,1,.489-.489h2.937a.471.471,0,0,1,.489.489v6.24l3.35,2.784a.444.444,0,0,1,.168.329A.5.5,0,0,1,114.439,263.248Z" transform="translate(988.781 2656.649)" className="fill-dark" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Permanent Address</span>
                  </div>
                </div>
                <div id="permanent-address" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th className="py-1">City</th>
                              <td className="py-1">
                                Afono
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Country
                              </th>
                              <td className="py-1">
                                American Samoa
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">State</th>
                              <td className="py-1">
                                Eastern
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Postal Code
                              </th>
                              <td className="py-1">
                                2280
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Family Information */}
              <div className="pb-4 accordion-item">
                <div className="accordion-head c-pointer d-flex align-items-center mb-4" data-toggle="collapse" data-target="#family-info">
                  <span className="size-50px border rounded-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28.145" height="23.875" viewBox="0 0 28.145 23.875" className="fill-primary-grad">
                      <g transform="translate(9.187 0)">
                        <path d="M-8182.819-3893.283a2.421,2.421,0,0,0,.14-.813v-8.226a5.652,5.652,0,0,0-.344-1.946h2.176a4.067,4.067,0,0,1,4.063,4.063v4.485a2.442,2.442,0,0,1-2.438,2.438Zm-19.671,0a2.441,2.441,0,0,1-2.437-2.438v-4.485a4.067,4.067,0,0,1,4.063-4.063h2.177a5.64,5.64,0,0,0-.344,1.946v8.226a2.47,2.47,0,0,0,.14.813Zm18.774-12.31a3.657,3.657,0,0,1-1.783-1.641,3.627,3.627,0,0,1-.431-1.715,3.659,3.659,0,0,1,3.655-3.655,3.658,3.658,0,0,1,3.653,3.655,3.657,3.657,0,0,1-3.653,3.653A3.617,3.617,0,0,1-8183.716-3905.592Zm-19.373-3.356a3.656,3.656,0,0,1,3.652-3.655,3.657,3.657,0,0,1,3.653,3.655,3.62,3.62,0,0,1-.429,1.715,3.649,3.649,0,0,1-1.785,1.641,3.607,3.607,0,0,1-1.439.3A3.656,3.656,0,0,1-8203.089-3908.949Z" transform="translate(8195.741 3917.158)" fill="url(#primary-gradient)" />
                        <path d="M145.868,234.815h-4.976a4.067,4.067,0,0,0-4.063,4.063V247.1a.813.813,0,0,0,.813.813h11.477a.813.813,0,0,0,.813-.813v-8.226A4.067,4.067,0,0,0,145.868,234.815Z" transform="translate(-138.494 -224.042)" className="fill-dark" />
                        <path d="M172,38.84a4.885,4.885,0,1,0,4.886,4.886A4.892,4.892,0,0,0,172,38.84Z" transform="translate(-167.114 -38.84)" className="fill-dark" />
                      </g>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <span className="fs-18 fw-600 d-block">Family Information</span>
                  </div>
                </div>
                <div id="family-info" className="collapse accordion-body ml-3 ml-md-5 pl-25px" data-parent="#profile-accordion">
                  <div className="border p-3">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <table className="w-100">
                          <tbody>
                            <tr>
                              <th className="py-1">Father</th>
                              <td className="py-1">
                                Yes
                              </td>
                            </tr>
                            <tr>
                              <th className="py-1">Sibling
                              </th>
                              <td className="py-1">
                                No
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6 border-sm-left ">
                        <table className="w-100 ml-sm-4">
                          <tbody>
                            <tr>
                              <th className="py-1">Mother</th>
                              <td className="py-1">
                                Yes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="preference">
            {/* Partner Expectation */}
            <h2 className="text-primary fs-24 mb-5 pb-4 border-bottom">
              Partner Expectation</h2>
            <div className>
              <table className="table table-responsive">
                <tbody><tr>
                    <th>General</th>
                    <td>Kimberley Lang
                    </td>
                    <th>Residence Country</th>
                    <td>
                      American Samoa                                      </td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td>5
                    </td>
                    <th>Weight</th>
                    <td>50
                    </td>
                  </tr>
                  <tr>
                    <th>marital_status</th>
                    <td>Never Married
                    </td>
                    <th>Children Acceptable</th>
                    <td>no
                    </td>
                  </tr>
                  <tr>
                    <th>Religion</th>
                    <td>Judaismm
                    </td>
                    <th>Caste</th>
                    <td>Israelites (Yisraelim)
                    </td>
                  </tr>
                  <tr>
                    <th>Sub Caste</th>
                    <td>
                    </td>
                    <th>Language</th>
                    <td>English
                    </td>
                  </tr>
                  <tr>
                    <th>Education</th>
                    <td>Bachelor's degree
                    </td>
                    <th>Profession</th>
                    <td>Any
                    </td>
                  </tr>
                  <tr>
                    <th>Smoking Acceptable</th>
                    <td>no
                    </td>
                    <th>Drinking Acceptable</th>
                    <td>dose_not_matter
                    </td>
                  </tr>
                  <tr>
                    <th>Diet</th>
                    <td>dose_not_matter
                    </td>
                    <th>Body Type</th>
                    <td>Stable
                    </td>
                  </tr>
                  <tr>
                    <th>Personal Value</th>
                    <td>Good
                    </td>
                    <th>Manglik</th>
                    <td>dose_not_matter
                    </td>
                  </tr>
                  <tr>
                    <th>Preferred Country</th>
                    <td>
                      American Samoa                                      </td>
                    <th>preferred_state_id</th>
                    <td>
                      Eastern                                      </td>
                  </tr>
                  <tr>
                    <th>Family Value</th>
                    <td>Liberall
                    </td>
                    <th>Complexion</th>
                    <td>Fair skin, always burns, sometimes tans
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
          <div className="tab-pane fade" id="gallery">
            <h2 className="text-primary fs-24 mb-5 pb-4 border-bottom">Gallery</h2>
            <div className="card-columns position-relative">
              <div className="card hov-overlay">
                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/qly8Bzs3KT6LJYwbixkIspkk05zFYJ1PtB3k88CV.jpg" className="card-img" alt="photo" />
                <div className="overlay">
                  <a target="_blank" href="https://demo.activeitzone.com/matrimonial/public/uploads/all/qly8Bzs3KT6LJYwbixkIspkk05zFYJ1PtB3k88CV.jpg" className="text-white absolute-full d-flex justify-content-center align-items-center" title="View">
                    <i className="las la-search-plus la-2x" />
                  </a>
                </div>
              </div>
              <div className="card hov-overlay">
                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/8B5Rp5xki7JRriLrmNDenuHunFJh9mU4mI86R5s5.jpg" className="card-img" alt="photo" />
                <div className="overlay">
                  <a target="_blank" href="https://demo.activeitzone.com/matrimonial/public/uploads/all/8B5Rp5xki7JRriLrmNDenuHunFJh9mU4mI86R5s5.jpg" className="text-white absolute-full d-flex justify-content-center align-items-center" title="View">
                    <i className="las la-search-plus la-2x" />
                  </a>
                </div>
              </div>
              <div className="card hov-overlay">
                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/43hIUjXlfZVAeKhAbchIYeyRQ6rBU6pwtCIqhsPE.jpg" className="card-img" alt="photo" />
                <div className="overlay">
                  <a target="_blank" href="https://demo.activeitzone.com/matrimonial/public/uploads/all/43hIUjXlfZVAeKhAbchIYeyRQ6rBU6pwtCIqhsPE.jpg" className="text-white absolute-full d-flex justify-content-center align-items-center" title="View">
                    <i className="las la-search-plus la-2x" />
                  </a>
                </div>
              </div>
              <div className="card hov-overlay">
                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/SjnA19pXerIYsX5a30GE1cjxaWMuzVJEvp5Xixab.jpg" className="card-img" alt="photo" />
                <div className="overlay">
                  <a target="_blank" href="https://demo.activeitzone.com/matrimonial/public/uploads/all/SjnA19pXerIYsX5a30GE1cjxaWMuzVJEvp5Xixab.jpg" className="text-white absolute-full d-flex justify-content-center align-items-center" title="View">
                    <i className="las la-search-plus la-2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}
export default MemberProfile