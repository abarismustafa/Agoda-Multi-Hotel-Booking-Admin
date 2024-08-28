import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Aside() {
  const [pakage, setPakage] = useState(false);
  const [referal, setReferal] = useState(false);
  // console.log(pakage);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="aiz-user-sidenav-wrap pt-4 sticky-top c-scrollbar-light position-relative z-1 shadow-none">
        <div className="absolute-top-left d-xl-none">
          <button
            className="btn btn-sm p-2"
            data-toggle="class-toggle"
            data-target=".aiz-mobile-side-nav"
            data-same=".mobile-side-nav-thumb"
          >
            <i className="las la-times la-2x" />
          </button>
        </div>
        <div className="aiz-user-sidenav rounded overflow-hidden">
          <div className="px-4 text-center mb-4">
            <span className="avatar avatar-md mb-3">
              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
            </span>
            <h4 className="h5 fw-600">Donna J. Perryman</h4>
          </div>
          <div className="text-center mb-3 px-3">
            <a
              href="https://demo.activeitzone.com/matrimonial/member-profile/42"
              className="btn btn-block btn-soft-primary"
            >
              Public Profile
            </a>
          </div>
          <div className="sidemnenu mb-3">
            <ul
              className="aiz-side-nav-list metismenu"
              data-toggle="aiz-side-menu"
            >
              <li className="aiz-side-nav-item">
                <Link
                  to="/dashboard"
                  className="aiz-side-nav-link active"
                  aria-expanded="false"
                >
                  <i className="las la-home aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item mm-active">
                <Link
                  to="gallery-image"
                  className="aiz-side-nav-link"
                  aria-expanded="true"
                >
                  <i className="las la-image aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Gallery</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="happy-story/create"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-handshake aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Happy Story</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  onClick={() => setPakage(!pakage)}
                >
                  <i className="las la-shopping-basket aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Packages</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list mm-collapse ${
                    pakage ? "mm-show" : ""
                  }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link to="/packages" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Packages</span>
                    </Link>
                  </li>
                  
                  <li className="aiz-side-nav-item">
                    <Link
                      to="package-purchase-history"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Package Purchase History
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="wallet"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-dollar-sign aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">My Wallet</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="#"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                  onClick={() => setReferal(!referal)}
                >
                  <i className="las la-shopping-basket aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Referral System</span>
                  <span className="badge badge-inline badge-danger">Addon</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list mm-collapse ${
                    referal ? "mm-show" : ""
                  }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link to="referred-users" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Referred Users</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="my-referral-earnings"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Referral Earnings
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="wallet-withdraw-request-history"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Wallet Withdraw Requests
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="chat"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-envelope aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Message</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="support-ticket/history"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-life-ring aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Support Ticket</span>
                  <span className="badge badge-inline badge-danger">Addon</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="my-interests"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="la la-heart-o aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">My Interest</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="my-shortlists"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-list aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Shortlist</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="ignored-list"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-ban aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Ignored User List</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="change-password"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-key aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Change Password</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="profile-settings"
                  className="aiz-side-nav-link"
                  aria-expanded="false"
                >
                  <i className="las la-user aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Manage Profile</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <a
                  href="#"
                  className="aiz-side-nav-link"
                  onClick={handleShow}
                  aria-expanded="false"
                >
                  <i className="las la-lock aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Deactive Account</span>
                </a>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Body style={{ fontSize: "17px", fontWeight: "500" }}>
                    Do You Realy Want To Deactive Your Account
                  </Modal.Body>
                  <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button variant="secondary" onClick={handleClose}>
                      Yes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="javascript:void(0);"
              className="btn btn-block btn-primary"
              onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
            >
              <i className="las la-sign-out-alt" />
              <span>Logout</span>
              <form
                id="logout-form"
                action="https://demo.activeitzone.com/matrimonial/logout"
                method="POST"
                style={{ display: "none" }}
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="oNUg0umMa5aCCTvOGFS2ftbBfSvE0hobVqNYsBaU"
                />{" "}
              </form>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aside;
