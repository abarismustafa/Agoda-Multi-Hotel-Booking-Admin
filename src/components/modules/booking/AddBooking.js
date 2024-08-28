

function AddBooking() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header row gutters-5">
                                    <div className="col text-center text-md-left">
                                        <h5 className="mb-md-0 h6">Add Booking</h5>
                                    </div>
                                    <div className="col-md-3">
                                        {/* <form id="sort_members" >
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type first name / last name / ID & Enter" fdprocessedid="hh7lxk" />
                                    </div>
                                </form> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Search</label>
                                                <input type="test" className="form-control" id="Search" placeholder="Search" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Status</label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Hotal</label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3 mt-4">
                                                <button className="btn btn-success">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddBooking