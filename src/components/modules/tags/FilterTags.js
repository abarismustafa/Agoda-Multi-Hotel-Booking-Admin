import React from 'react'

function FilterTags() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header row gutters-5">
            <div className="col text-center text-md-left">
              <h5 className="mb-md-0 h6">Filter</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="Search" className="form-label">
                    Search
                  </label>
                  <input
                    type="test"
                    className="form-control"
                    id="Search"
                    placeholder="Search..."
                  />
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="Search" className="form-label">
                    Menus
                  </label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>select menus</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div> */}

              <div className="col-lg-6">
                <div className="mb-3 mt-4">
                  <button className="btn btn-success">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTags
