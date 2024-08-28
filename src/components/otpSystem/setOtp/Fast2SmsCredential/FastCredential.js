import Form from 'react-bootstrap/Form';

function FastCredential() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 h6">Fast2SMS Credential</h5>
        </div>
        <div className="card-body">
          <form className="form-horizontal" action="https://weddemoadmin.abaris.in/admin/otp-credentials-update" method="POST">
            <input type="hidden" name="otp_method" defaultValue="fast2sms" />
            <input type="hidden" name="_token" defaultValue="hq3uL6CkxFTUAe4mX5wEqlmtHPZPx6OuCEKMwlFv" />                        <div className="form-group row">
              <div className="col-md-3">
                <label className="col-from-label">Activation</label>
              </div>
              <div className="col-md-8">
                <label className="aiz-switch aiz-switch-success mb-0">
                  <input defaultValue={1} name="fast2sms_activation" type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="AUTH_KEY" />
              <div className="col-lg-3">
                <label className="col-from-label">AUTH KEY</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="AUTH_KEY" defaultValue="gygyuggy" placeholder="AUTH KEY" required />
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="ENTITY_ID" />
              <div className="col-lg-3">
                <label className="col-from-label">ENTITY ID</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="ENTITY_ID" defaultValue placeholder="ENTITY ID" />
              </div>
            </div>
            <div className="form-group row">

              <input type="hidden" name="types[]" defaultValue="ROUTE" />
              <div className="col-lg-3">
                <label className="col-from-label">ROUTE</label>
              </div>
              <div className='col-lg-8'>
                <Form.Select className="dropdown  form-control aiz-">
                  <option>Promotional Use</option>
                  <option value="1">Transactional Use</option>
                  <option value="2">DLT Manual</option>
                </Form.Select>
              </div>
            </div>

            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="LANGUAGE" />
              <div className="col-lg-3">
                <label className="col-from-label">Language</label>
              </div>
              <div className="col-lg-8">
                <Form.Select className="dropdown  form-control aiz-">
                  <option>Language</option>
                  <option value="1">Unicode</option>
                  
                </Form.Select>
              </div>
            </div>
            <div className="form-group row">
              <input type="hidden" name="types[]" defaultValue="SENDER_ID" />
              <div className="col-lg-3">
                <label className="col-from-label">SENDER ID</label>
              </div>
              <div className="col-lg-8">
                <input type="text" className="form-control" name="SENDER_ID" defaultValue="SNROTP" placeholder="6 digit SENDER ID" />
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
export default FastCredential;