import { Link } from "react-router-dom";
import Slider from "react-slick";

function SelectYourPackage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <section className="py-9 bg-white pt-8 pt-lg-10">
        <div className="container">
          <div class="row">
            <div class="col-lg-10 col-xl-8 col-xxl-6 mx-auto">
              <div class="text-center section-title mb-5">
                <h2 class="mb-0 fw-600 text-dark">Select Your Package</h2>
                {/* <p class="fw-400 fs-16 opacity-60">Every user registered on Active Matrimonial is verified via photo and mobile phone so you don’t have to worry how real or fake anyone is..</p> */}
              </div>
            </div>
          </div>
          <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable">
              <div className="slick-track" style={{}}>
                <Slider {...settings}>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-4}
                    aria-hidden="true"
                    style={{ width: 343 }}
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="carousel-box"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="overflow-hidden shadow-none mb-3 border-right">
                          <div className="card-body">
                            <div className="text-center mb-4 mt-3">
                              <img
                                className="mw-100 mx-auto mb-4"
                                src="https://demo.activeitzone.com/matrimonial/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png"
                                height={130}
                              />
                              <h5 className="mb-3 h5 fw-600">Gold Package</h5>
                            </div>
                            <ul className="list-group list-group-raw fs-15 mb-5">
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                50 Express Interests
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                60 Gallery Photo Upload
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                15 Contact Info View
                              </li>
                              <li className="list-group-item py-2 text-line-through">
                                <i className="las la-check text-success mr-2" />
                                Show Auto Profile Match
                              </li>
                            </ul>
                            <div className="mb-5 text-dark text-center">
                              <span className="display-4 fw-600 lh-1 mb-0">
                                50$
                              </span>
                              <span className="text-secondary d-block">
                                90 Days
                              </span>
                            </div>
                            <div className="text-center mb-3">
                              <Link
                                to="purchage-package-methods"
                                type="submit"
                                className="btn btn-primary"
                                tabIndex={-1}
                              >
                                Purchase This Package
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-3}
                    aria-hidden="true"
                    style={{ width: 343 }}
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="carousel-box"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="overflow-hidden shadow-none mb-3 border-right">
                          <div className="card-body">
                            <div className="text-center mb-4 mt-3">
                              <img
                                className="mw-100 mx-auto mb-4"
                                src="https://demo.activeitzone.com/matrimonial/public/uploads/all/1dD4w1xIQIViixofGwsq8LdKysEx4BDug5hdpys6.png"
                                height={130}
                              />
                              <h5 className="mb-3 h5 fw-600">
                                Diamond Package
                              </h5>
                            </div>
                            <ul className="list-group list-group-raw fs-15 mb-5">
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                90 Express Interests
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                80 Gallery Photo Upload
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                20 Contact Info View
                              </li>
                              <li className="list-group-item py-2 text-line-through">
                                <i className="las la-check text-success mr-2" />
                                Show Auto Profile Match
                              </li>
                            </ul>
                            <div className="mb-5 text-dark text-center">
                              <span className="display-4 fw-600 lh-1 mb-0">
                                100$
                              </span>
                              <span className="text-secondary d-block">
                                120 Days
                              </span>
                            </div>
                            <div className="text-center mb-3">
                              <Link
                                to="purchage-package-methods"
                                type="submit"
                                className="btn btn-primary"
                                tabIndex={-1}
                              >
                                Purchase This Package
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-2}
                    aria-hidden="true"
                    style={{ width: 343 }}
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="carousel-box"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="overflow-hidden shadow-none mb-3 border-right">
                          <div className="card-body">
                            <div className="text-center mb-4 mt-3">
                              <img
                                className="mw-100 mx-auto mb-4"
                                src="https://demo.activeitzone.com/matrimonial/public/uploads/all/N3IeDw37QUFOxBUc8g96V7ya7Z4Rg1WJDLAD1BRO.png"
                                height={130}
                              />
                              <h5 className="mb-3 h5 fw-600">
                                Platinum Package
                              </h5>
                            </div>
                            <ul className="list-group list-group-raw fs-15 mb-5">
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                500 Express Interests
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                500 Gallery Photo Upload
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                500 Contact Info View
                              </li>
                              <li className="list-group-item py-2 text-line-through">
                                <i className="las la-check text-success mr-2" />
                                Show Auto Profile Match
                              </li>
                            </ul>
                            <div className="mb-5 text-dark text-center">
                              <span className="display-4 fw-600 lh-1 mb-0">
                                200$
                              </span>
                              <span className="text-secondary d-block">
                                365 Days
                              </span>
                            </div>
                            <div className="text-center mb-3">
                              <Link
                                to="purchage-package-methods"
                                type="submit"
                                className="btn btn-primary"
                                tabIndex={-1}
                              >
                                Purchase This Package
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-1}
                    aria-hidden="true"
                    style={{ width: 343 }}
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="carousel-box"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="overflow-hidden shadow-none mb-3 border-right">
                          <div className="card-body">
                            <div className="text-center mb-4 mt-3">
                              <img
                                className="mw-100 mx-auto mb-4"
                                src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ccZXfUBJdeI3nVlTaDjj5XktantwFNh70bYVXTJR.png"
                                height={130}
                              />
                              <h5 className="mb-3 h5 fw-600">
                                Professional Package
                              </h5>
                            </div>
                            <ul className="list-group list-group-raw fs-15 mb-5">
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                1000 Express Interests
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                1000 Gallery Photo Upload
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                1000 Contact Info View
                              </li>
                              <li className="list-group-item py-2 text-line-through">
                                <i className="las la-check text-success mr-2" />
                                Show Auto Profile Match
                              </li>
                            </ul>
                            <div className="mb-5 text-dark text-center">
                              <span className="display-4 fw-600 lh-1 mb-0">
                                300$
                              </span>
                              <span className="text-secondary d-block">
                                790 Days
                              </span>
                            </div>
                            <div className="text-center mb-3">
                              <Link
                                to="purchage-package-methods"
                                type="submit"
                                className="btn btn-primary"
                                tabIndex={-1}
                              >
                                Purchase This Package
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    style={{ width: 343 }}
                    role="tabpanel"
                    id="slick-slide30"
                    aria-describedby="slick-slide-control30"
                  >
                    <div>
                      <div
                        className="carousel-box"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="overflow-hidden shadow-none mb-3 border-right">
                          <div className="card-body">
                            <div className="text-center mb-4 mt-3">
                              <img
                                className="mw-100 mx-auto mb-4"
                                src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uYGlmDARpbT2sjJ4x3YTm1GsFQ5I78GOa8lWgMQq.png"
                                height={130}
                              />
                              <h5 className="mb-3 h5 fw-600">Free</h5>
                            </div>
                            <ul className="list-group list-group-raw fs-15 mb-5">
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                5 Express Interests
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                2 Gallery Photo Upload
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                0 Contact Info View
                              </li>
                              <li className="list-group-item py-2 text-line-through">
                                <i className="las la-check text-success mr-2" />
                                Show Auto Profile Match
                              </li>
                            </ul>
                            <div className="mb-5 text-dark text-center">
                              <span className="display-4 fw-600 lh-1 mb-0">
                                Free
                              </span>
                              <span className="text-secondary d-block">
                                10 Days
                              </span>
                            </div>
                            <div className="text-center mb-3">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-light"
                                tabIndex={0}
                              >
                                <del>Purchase This Package</del>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    style={{ width: 343 }}
                    role="tabpanel"
                    id="slick-slide31"
                    aria-describedby="slick-slide-control31"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="carousel-box"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="overflow-hidden shadow-none mb-3 border-right">
                          <div className="card-body">
                            <div className="text-center mb-4 mt-3">
                              <img
                                className="mw-100 mx-auto mb-4"
                                src="https://demo.activeitzone.com/matrimonial/public/uploads/all/zzOHNo1lfGayWCnT9xK1xHB8VjkAzOSnb14ibeup.png"
                                height={130}
                              />
                              <h5 className="mb-3 h5 fw-600">Bronze Package</h5>
                            </div>
                            <ul className="list-group list-group-raw fs-15 mb-5">
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                30 Express Interests
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                30 Gallery Photo Upload
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                5 Contact Info View
                              </li>
                              <li className="list-group-item py-2 text-line-through">
                                <i className="las la-check text-success mr-2" />
                                Show Auto Profile Match
                              </li>
                            </ul>
                            <div className="mb-5 text-dark text-center">
                              <span className="display-4 fw-600 lh-1 mb-0">
                                30$
                              </span>
                              <span className="text-secondary d-block">
                                30 Days
                              </span>
                            </div>
                            <div className="text-center mb-3">
                              <Link
                                to="purchage-package-methods"
                                type="submit"
                                className="btn btn-primary"
                                tabIndex={-1}
                              >
                                Purchase This Package
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="slick-slide"
                    data-slick-index={2}
                    aria-hidden="true"
                    style={{ width: 343 }}
                    role="tabpanel"
                    id="slick-slide32"
                    aria-describedby="slick-slide-control32"
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="carousel-box"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="overflow-hidden shadow-none mb-3 border-right">
                          <div className="card-body">
                            <div className="text-center mb-4 mt-3">
                              <img
                                className="mw-100 mx-auto mb-4"
                                src="https://demo.activeitzone.com/matrimonial/public/uploads/all/UIOcsIe8TMVx6Rp7Wbx9ig5kw6X2g2rSxKUNsPNQ.png"
                                height={130}
                              />
                              <h5 className="mb-3 h5 fw-600">Silver Package</h5>
                            </div>
                            <ul className="list-group list-group-raw fs-15 mb-5">
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                40 Express Interests
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                50 Gallery Photo Upload
                              </li>
                              <li className="list-group-item py-2">
                                <i className="las la-check text-success mr-2" />
                                10 Contact Info View
                              </li>
                              <li className="list-group-item py-2 text-line-through">
                                <i className="las la-check text-success mr-2" />
                                Show Auto Profile Match
                              </li>
                            </ul>
                            <div className="mb-5 text-dark text-center">
                              <span className="display-4 fw-600 lh-1 mb-0">
                                40$
                              </span>
                              <span className="text-secondary d-block">
                                60 Days
                              </span>
                            </div>
                            <div className="text-center mb-3">
                              <Link
                                to="purchage-package-methods"
                                type="submit"
                                className="btn btn-primary"
                                tabIndex={-1}
                              >
                                Purchase This Package
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
export default SelectYourPackage;
