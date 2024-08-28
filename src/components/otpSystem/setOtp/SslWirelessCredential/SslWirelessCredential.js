
function SslWirelessCredential(){
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">SSL Wireless Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/otp-credentials-update" method="POST">
            <input type="hidden" name="otp_method" defaultValue="ssl_wireless" />
            <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                        <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-8">
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input defaultValue={1} name="ssl_wireless_activation" type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="SSL_SMS_API_TOKEN" />
              <div className="col-lg-3">
                <label className="col-from-label">SSL SMS API TOKEN</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="SSL_SMS_API_TOKEN" defaultValue={12344} placeholder="SSL SMS API TOKEN" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="SSL_SMS_SID" />
              <div className="col-lg-3">
                <label className="col-from-label">SSL SMS SID</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="SSL_SMS_SID" defaultValue={1234} placeholder="SSL SMS SID" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="SSL_SMS_URL" />
              <div className="col-lg-3">
                <label className="col-from-label">SSL SMS URL</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="SSL_SMS_URL" defaultValue={1234} placeholder="SSL SMS URL" />
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
export default SslWirelessCredential;