import Form from 'react-bootstrap/Form';
function AddNewStaffs() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="col-lg-8 mx-auto">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0 h6">Staff Information</h5>
              </div>
              <form className="form-horizontal" action="https://demo.activeitzone.com/matrimonial/admin/staffs" method="POST" encType="multipart/form-data">
                <input type="hidden" name="_token" defaultValue="EXRVx84F1wCyzLHQxGs1EQIvFBRiulegs1DcgBVm" />            <div className="card-body">
                  <div className="form-group row">
                    <label className="col-sm-3 col-from-label" htmlFor="first_name">First Name</label>
                    <div className="col-sm-9">
                      <input type="text" name="first_name" placeholder="First Name" id="first_name" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-from-label" htmlFor="last_name">Last Name</label>
                    <div className="col-sm-9">
                      <input type="text" name="last_name" placeholder="Last Name" id="last_name" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                    <div className="col-sm-9">
                      <input type="text" name="email" placeholder="Email" id="email" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                    <div className="col-sm-9">
                      <input type="text" name="mobile" placeholder="Phone" id="mobile" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-from-label" htmlFor="password">Password</label>
                    <div className="col-sm-9">
                      <input type="password" name="password" splaceholder="Password" id="password" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-from-label" htmlFor="password">Role</label>
                    <div className="col-sm-9">
                      <Form.Select aria-label="Default select example" className='form-control aiz-'>
                        <option>Manager</option>
                        <option value="1">Super Admin</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="form-group mb-0 text-right">
                    <button type="submit" className="btn btn-sm btn-primary">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddNewStaffs;