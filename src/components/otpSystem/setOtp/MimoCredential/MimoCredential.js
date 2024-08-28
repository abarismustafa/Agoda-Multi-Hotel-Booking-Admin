
function MimoCredential(){
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">MIMO Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/otp-credentials-update" method="POST">
            <input type="hidden" name="otp_method" defaultValue="mimo" />
            <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                        <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-8">
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input defaultValue={1} name="mimo_activation" type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="MIMO_USERNAME" />
              <div className="col-lg-3">
                <label className="col-from-label">MIMO_USERNAME</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="MIMO_USERNAME" defaultValue="username check" placeholder="MIMO_USERNAME" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="MIMO_PASSWORD" />
              <div className="col-lg-3">
                <label className="col-from-label">MIMO_PASSWORD</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="MIMO_PASSWORD" defaultValue={12345678} placeholder="MIMO_PASSWORD" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="MIMO_SENDER_ID" />
              <div className="col-lg-3">
                <label className="col-from-label">MIMO_SENDER_ID</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="MIMO_SENDER_ID" defaultValue="sender id  check" placeholder="MIMO_SENDER_ID" required />
              </div>
            </div>
            <div className="form-group mb-0 text-right">
              <button type="submit" className="btn btn-sm btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default MimoCredential;