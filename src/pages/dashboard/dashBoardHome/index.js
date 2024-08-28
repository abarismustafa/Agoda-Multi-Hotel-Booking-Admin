function DashBoardHome() {
  return (
    <>
      <div className="aiz-user-panel overflow-hidden">
        <div className="row gutters-5 row-cols-xl-3 row-cols-2">
          <div className="col mx-auto mb-3">
            <div className="bg-light rounded overflow-hidden text-center p-3">
              <i className="la la-heart-o la-2x mb-3 text-primary-grad" />
              <div className="h4 fw-700 text-primary-grad">89</div>
              <div className="opacity-50">
                Remaining <br /> Interest
              </div>
            </div>
          </div>
          <div className="col mx-auto mb-3">
            <div className="bg-light rounded overflow-hidden text-center p-3">
              <i className="las la-phone la-2x mb-3 text-primary-grad" />
              <div className="h4 fw-700 text-primary-grad">20</div>
              <div className="opacity-50 ">
                Remaining <br /> Contact View
              </div>
            </div>
          </div>
          <div className="col mx-auto mb-3">
            <div className="bg-light rounded overflow-hidden text-center p-3">
              <i className="las la-image la-2x mb-3 text-primary-grad" />
              <div className="h4 fw-700 text-center text-primary-grad">75</div>
              <div className="opacity-50 text-center">
                Remaining <br /> Gallery Image Upload
              </div>
            </div>
          </div>
        </div>
        <div className="row gutters-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2 className="fs-16 mb-0">Current package</h2>
              </div>
              <div className="card-body">
                <div className="text-center mb-4 mt-3">
                  <img
                    className="mw-100 mx-auto mb-4"
                    src="https://demo.activeitzone.com/matrimonial/public/uploads/all/1dD4w1xIQIViixofGwsq8LdKysEx4BDug5hdpys6.png"
                    height={130}
                  />
                  <h5 className="mb-3 h5 fw-600">Diamond Package</h5>
                </div>
                <ul className="list-group list-group-raw fs-15 mb-4 pb-4 border-bottom">
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
                <h4 className="fs-18 mb-3">
                  Package expiry date:
                  <span className="text-danger">Expired</span>
                </h4>
                <a
                  href="https://demo.activeitzone.com/matrimonial/packages"
                  className="btn btn-success d-inline-block"
                >
                  Upgrade Package
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2 className="fs-16 mb-0">Matched profile</h2>
              </div>
              <div className="card-body">
                <div>
                  <a
                    href="https://demo.activeitzone.com/matrimonial/member-profile/37"
                    className="text-reset border rounded row no-gutters align-items-center mb-3"
                  >
                    <div className="col-auto w-100px">
                      <img
                        src="https://demo.activeitzone.com/matrimonial/public/uploads/all/d60ho8ezrvYMxYH7SaU0mF4UmWttV321vSMrZ8yz.png"
                        onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                        className="img-fit w-100 size-100px"
                      />
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h5 className="fs-16 text-body text-truncate">
                          Robert L. Gardner
                        </h5>
                        <div className="fs-12 text-truncate-3">
                          <span className="mr-1 d-inline-block">30 yrs,</span>
                          <span className="mr-1 d-inline-block">5 Feet,</span>
                          <span className="mr-1 d-inline-block">
                            Never Married,
                          </span>
                          <span className="mr-1 d-inline-block">Judaismm,</span>
                          <span className="mr-1 d-inline-block">
                            Israelites (Yisraelim),
                          </span>
                          <span className="mr-1 d-inline-block"></span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://demo.activeitzone.com/matrimonial/member-profile/36"
                    className="text-reset border rounded row no-gutters align-items-center mb-3"
                  >
                    <div className="col-auto w-100px">
                      <img
                        src="https://demo.activeitzone.com/matrimonial/public/uploads/all/JBNnlxl0aX4iRk2e3qCpjDca3WFBArAi4tSPJjeC.jpg"
                        onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                        className="img-fit w-100 size-100px"
                      />
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h5 className="fs-16 text-body text-truncate">
                          Wilson Arnold
                        </h5>
                        <div className="fs-12 text-truncate-3">
                          <span className="mr-1 d-inline-block">30 yrs,</span>
                          <span className="mr-1 d-inline-block"></span>
                          <span className="mr-1 d-inline-block"></span>
                          <span className="mr-1 d-inline-block"></span>
                          <span className="mr-1 d-inline-block"></span>
                          <span className="mr-1 d-inline-block"></span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://demo.activeitzone.com/matrimonial/member-profile/28"
                    className="text-reset border rounded row no-gutters align-items-center mb-3"
                  >
                    <div className="col-auto w-100px">
                      <img
                        src="https://demo.activeitzone.com/matrimonial/public/uploads/all/9uC6PPkpVpfOu5FuhF2enDj3Com30pgwnLjWZlR1.png"
                        onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                        className="img-fit w-100 size-100px"
                      />
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h5 className="fs-16 text-body text-truncate">
                          Liam Noah
                        </h5>
                        <div className="fs-12 text-truncate-3">
                          <span className="mr-1 d-inline-block">32 yrs,</span>
                          <span className="mr-1 d-inline-block">5 Feet,</span>
                          <span className="mr-1 d-inline-block">Married,</span>
                          <span className="mr-1 d-inline-block">Hinduism,</span>
                          <span className="mr-1 d-inline-block">Brahmin,</span>
                          <span className="mr-1 d-inline-block"></span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://demo.activeitzone.com/matrimonial/member-profile/35"
                    className="text-reset border rounded row no-gutters align-items-center mb-3"
                  >
                    <div className="col-auto w-100px">
                      <img
                        src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png"
                        onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                        className="img-fit w-100 size-100px"
                      />
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h5 className="fs-16 text-body text-truncate">
                          Mitchell Johnson
                        </h5>
                        <div className="fs-12 text-truncate-3">
                          <span className="mr-1 d-inline-block">32 yrs,</span>
                          <span className="mr-1 d-inline-block">5 Feet,</span>
                          <span className="mr-1 d-inline-block">
                            Never Married,
                          </span>
                          <span className="mr-1 d-inline-block">Judaismm,</span>
                          <span className="mr-1 d-inline-block">
                            Israelites (Yisraelim),
                          </span>
                          <span className="mr-1 d-inline-block"></span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://demo.activeitzone.com/matrimonial/member-profile/34"
                    className="text-reset border rounded row no-gutters align-items-center mb-3"
                  >
                    <div className="col-auto w-100px">
                      <img
                        src="https://demo.activeitzone.com/matrimonial/public/uploads/all/JC54t9SJmTsyJnU7ZSj3AKE0WIHfZj9lZqIyuA4a.png"
                        onerror="this.onerror=null;this.src='https://demo.activeitzone.com/matrimonial/public/assets/img/avatar-place.png';"
                        className="img-fit w-100 size-100px"
                      />
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h5 className="fs-16 text-body text-truncate">
                          Mark Henry
                        </h5>
                        <div className="fs-12 text-truncate-3">
                          <span className="mr-1 d-inline-block">30 yrs,</span>
                          <span className="mr-1 d-inline-block">5 Feet,</span>
                          <span className="mr-1 d-inline-block">
                            Never Married,
                          </span>
                          <span className="mr-1 d-inline-block">Islam,</span>
                          <span className="mr-1 d-inline-block">Shia,</span>
                          <span className="mr-1 d-inline-block"></span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashBoardHome;
