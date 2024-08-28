import { Link } from "react-router-dom"

function InsideHeader() {
  return (
    <>
      <div className="border-top d-none d-lg-block top-pad" style={{ background: '' }}>
        <div className="container">
          <ul className="list-inline d-flex align-items-center mb-0">
            <li className="list-inline-item">
              <Link to="/dashboard" className="text-reset d-inline-block px-4 py-3 fw-600 ">
                <i className="las la-tachometer-alt mr-1" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="profile-settings" className="text-reset d-inline-block px-4 py-3 fw-600 ">
                <i className="las la-user mr-1" />
                <span>My Profile</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="my-interests" className="text-reset d-inline-block px-4 py-3 fw-600 ">
                <i className="la la-heart-o mr-1" />
                <span>My Interest</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="my-shortlists" className="text-reset d-inline-block px-4 py-3 fw-600 ">
                <i className="las la-list mr-1" />
                <span>Shortlist</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="chat" className="text-reset d-inline-block px-4 py-3 fw-600 ">
                <i className="las la-envelope mr-1" />
                <span>Messaging</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="ignored-list" className="text-reset d-inline-block px-4 py-3 fw-600 ">
                <i className="las la-ban mr-1" />
                <span>Ignored User List</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}
export default InsideHeader