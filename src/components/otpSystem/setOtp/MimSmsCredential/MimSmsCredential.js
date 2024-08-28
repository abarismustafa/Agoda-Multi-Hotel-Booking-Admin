
function MimSmsCredential(){
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">MIMSMS Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/otp-credentials-update" method="POST">
            <input type="hidden" name="otp_method" defaultValue="mimsms" />
            <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                        <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-8">
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input defaultValue={1} name="mimsms_activation" type="checkbox" />
                  <span className="slider round" />
                </label>
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="MIM_API_KEY" />
              <div className="col-lg-3">
                <label className="col-from-label">MIM_API_KEY</label>
              </div>
              <div className="col-lg-6">
                <input type="text" className="form-control" name="MIM_API_KEY" defaultValue="efdf" placeholder="MIM_API_KEY" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="MIM_SENDER_ID" />
              <div className="col-lg-3">
                <label className="col-from-label">MIM_SENDER_ID</label>
              </div>
              <div className="col-lg-6">
                <input type="text" className="form-control" name="MIM_SENDER_ID" defaultValue="fdfd" placeholder="MIM_SENDER_ID" required />
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
export default MimSmsCredential;