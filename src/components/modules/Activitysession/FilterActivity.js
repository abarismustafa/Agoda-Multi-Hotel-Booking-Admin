import React from 'react';

function FilterActivity() {
    return (
        <>
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
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="startDate" className="form-label">Start Date</label>
                                        <input type="date" className="form-control" id="startDate" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="endDate" className="form-label">End Date</label>
                                        <input type="date" className="form-control" id="endDate" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="price" placeholder="Enter price" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-control" id="status" aria-label="Default select example">
                                            <option value="" selected disabled>Select status</option>
                                            <option value="published">Published</option>
                                            <option value="not-published">Not Published</option>
                                            <option value="awaiting">Awaiting</option>
                                            <option value="homepage">Homepage</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3 mt-4">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterActivity;
