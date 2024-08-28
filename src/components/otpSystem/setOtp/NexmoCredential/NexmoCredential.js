
function NexmoCredential(){
  return(
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Nexmo Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/otp-credentials-update" method="POST">
            <input type="hidden" name="otp_method" defaultValue="nexmo" />
            <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                        <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-8">
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input defaultValue={1} name="nexmo_activation" type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="NEXMO_KEY" />
              <div className="col-lg-3">
                <label className="col-from-label">NEXMO KEY</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="NEXMO_KEY" defaultValue="68fbdfd1" placeholder="NEXMO KEY" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="NEXMO_SECRET" />
              <div className="col-lg-3">
                <label className="col-from-label">NEXMO SECRET</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="NEXMO_SECRET" defaultValue="ffdsfs" placeholder="NEXMO SECRET" required />
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
export default NexmoCredential;