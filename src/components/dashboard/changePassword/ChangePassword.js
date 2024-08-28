function ChangePassword() {
  return (
    <>
      <div className="aiz-user-panel overflow-hidden">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Change Password</h5>
          </div>
          <div className="card-body">
            <form
              action="https://demo.activeitzone.com/matrimonial/member/password-update/27"
              method="POST"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="323wsQvuoxRLjsBfsaJTWom4excwx30R1S3QMPrv"
              />{" "}
              <div className="form-group row">
                <label className="col-md-3 col-form-label">
                  Old Password<span className="text-danger">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    type="password"
                    name="old_password"
                    id="old_password"
                    className="form-control"
                    placeholder="Old Password"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">
                  Password<span className="text-danger">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    type="password"
                    name="password"
                    id="new_password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">
                  Confirm password<span className="text-danger">*</span>
                </label>
                <div className="col-md-9">
                  <input
                    type="password"
                    className="form-control"
                    name="confirm_password"
                    onkeyup="checkPasswordValidation(123)"
                    id="confirm_password"
                    placeholder="Confirm password"
                    required
                  />
                  <small
                    id="confirm_password_help"
                    className="form-text text-muted"
                    style={{ color: "red", display: "none" }}
                  >
                    Mismatch Password.
                  </small>
                </div>
              </div>
              <div className="form-group row text-right">
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="passSaveBtn"
                    disabled
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangePassword;
