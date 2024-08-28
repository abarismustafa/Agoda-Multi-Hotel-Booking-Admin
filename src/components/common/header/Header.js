import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" position-fixed  w-100 top-0 z-1020">
        <div className="top-navbar bg-white border-bottom z-1035 py-2 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col">
                <ul className="list-inline d-flex justify-content-between justify-content-lg-start mb-0">
                  <li className="list-inline-item">
                    <a href="#" className="text-reset opacity-60">
                      <span>Welcome to Active Matrimonial CMS</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col">
                <ul className="list-inline mb-0 d-flex align-items-center justify-content-end ">
                  <li className="list-inline-item mr-3 pr-3 border-right text-reset opacity-60">
                    <span> Help Line</span>
                    <span>+01 112 352 666</span>
                  </li>
                  <li className="list-inline-item ml-4">
                    <a
                      className="text-reset opacity-60"
                      href="https://demo.activeitzone.com/matrimonial/login"
                    >
                      Log In
                    </a>
                  </li>
                  <li className="list-inline-item ml-3">
                    <Link
                      className="btn btn-sm bg-primary-grad text-white fw-600 py-1 border"
                      to="/register"
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <header className="aiz-header shadow-md bg-white border-gray-300">
          <div className="aiz-navbar position-relative">
            <div className="container">
              <div className="d-lg-flex justify-content-between text-center text-lg-left">
                <div className="logo">
                  <a
                    href="https://demo.activeitzone.com/matrimonial"
                    className="d-inline-block py-15px"
                  >
                    <img
                      src="https://demo.activeitzone.com/matrimonial/public/uploads/all/2BiZbRGY4x4KjEojR4KkiYLxHY2yyfM2bOsERGro.png"
                      alt="testing"
                      className="mw-100 h-30px h-md-40px"
                      height={40}
                    />
                  </a>
                </div>
                <ul className="mb-0 pl-0 ml-lg-auto d-lg-flex align-items-stretch justify-content-center justify-content-lg-start mobile-hor-swipe">
                  <li className="d-inline-block d-lg-flex pb-1 bg-primary-grad">
                    <NavLink
                      className="nav-link text-uppercase fw-700 fs-15 d-flex align-items-center bg-white py-2"
                      to="/"
                    >
                      <span className="text-primary-grad mb-n1">Home</span>
                    </NavLink>
                  </li>
                  <li className="d-inline-block d-lg-flex pb-1 ">
                    <NavLink
                      className="nav-link text-uppercase fw-700 fs-15 d-flex align-items-center bg-white py-2"
                      to="users/login"
                    >
                      <span className="text-primary-grad mb-n1">
                        Active Members
                      </span>
                    </NavLink>
                  </li>
                  <li className="d-inline-block d-lg-flex pb-1 ">
                    <NavLink
                      className="nav-link text-uppercase fw-700 fs-15 d-flex align-items-center bg-white py-2"
                      to="packages"
                    >
                      <span className="text-primary-grad mb-n1">
                        Premium Plans
                      </span>
                    </NavLink>
                  </li>
                  <li className="d-inline-block d-lg-flex pb-1 ">
                    <NavLink
                      className="nav-link text-uppercase fw-700 fs-15 d-flex align-items-center bg-white py-2"
                      to="happy-stories"
                    >
                      <span className="text-primary-grad mb-n1">
                        Happy Stories
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
export default Header;
