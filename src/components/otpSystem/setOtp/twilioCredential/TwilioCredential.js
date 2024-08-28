
function TwilioCredential() {
  return(
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Twilio Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/otp-credentials-update" method="POST">
            <input type="hidden" name="otp_method" defaultValue="twillo" />
            <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                        <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-8">
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input defaultValue={1} name="twillo_activation" type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="TWILIO_SID" />
              <div className="col-lg-3">
                <label className="col-from-label">TWILIO SID</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="TWILIO_SID" defaultValue="1AC9db01c08ac85a53c4dfe5efd1db50c80" placeholder="TWILIO SID" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="TWILIO_AUTH_TOKEN" />
              <div className="col-lg-3">
                <label className="col-from-label">TWILIO AUTH TOKEN</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="TWILIO_AUTH_TOKEN" defaultValue="0beeae3e78114780ce8f8b891b9286c9" placeholder="TWILIO AUTH TOKEN" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="TWILIO_VERIFY_SID" />
              <div className="col-lg-3">
                <label className="col-from-label">TWILIO VERIFY SID</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="TWILIO_VERIFY_SID" defaultValue="sid Check" placeholder="TWILIO VERIFY SID" />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="VALID_TWILLO_NUMBER" />
              <div className="col-lg-3">
                <label className="col-from-label">VALID TWILIO NUMBER</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="VALID_TWILLO_NUMBER" defaultValue={9876543210} placeholder="VALID TWILLO NUMBER" />
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
export default TwilioCredential;