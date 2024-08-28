import Instruction from "./instrction/Instrction"

function SmptSettings() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">SMTP Settings</h5>
                </div>
                <div className="card-body">
                  <form action="https://weddemoadmin.abaris.in/admin/env_key_update" method="POST">
                    <input type="hidden" name="_token" defaultValue="TL7gVYMMi3cj9D3J88UFc4u0yeb2JH9IB6LAucU5" />                        <div className="form-group row">
                      <input type="hidden" name="types[]" defaultValue="MAIL_DRIVER" />
                      <label className="col-md-3 col-form-label">Type</label>
                      <div className="col-md-9">
                        <div className="dropdown bootstrap-select form-control aiz- mb-2 mb-md-0">
                          <select className="form-control aiz-selectpicker mb-2 mb-md-0" name="MAIL_DRIVER" tabIndex={-98} defaultValue={'#'}>
                            <option value="sendmail">Sendmail</option>
                            <option value="smtp">SMTP</option>
                            <option value="mailgun">Mailgun</option>
                          </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="SMTP" fdprocessedid="st3k"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">SMTP</div></div> </div></button><div className="dropdown-menu" style={{ overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-1" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li><a role="option" className="dropdown-item" id="bs-select-1-0" tabIndex={0} aria-setsize={3} aria-posinset={1}><span className="text">Sendmail</span></a></li><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-1" tabIndex={0} aria-setsize={3} aria-posinset={2} aria-selected="true"><span className="text">SMTP</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0} aria-setsize={3} aria-posinset={3}><span className="text">Mailgun</span></a></li></ul></div></div></div>
                      </div>
                    </div>
                    <div id="smtp">
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_HOST" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL HOST</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAIL_HOST" defaultValue="activeitzone.com" placeholder="MAIL HOST" fdprocessedid="vxeq0h" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_PORT" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL PORT</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAIL_PORT" defaultValue={250} placeholder="MAIL PORT" fdprocessedid="ghjyty" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_USERNAME" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL USERNAME</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAIL_USERNAME" defaultValue="test@beforepurchase.com" placeholder="MAIL USERNAME" fdprocessedid="vd5woo" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_PASSWORD" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL PASSWORD</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAIL_PASSWORD" defaultValue placeholder="MAIL PASSWORD" fdprocessedid="nikm8t" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_ENCRYPTION" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL ENCRYPTION</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAIL_ENCRYPTION" defaultValue="test@beforepurchase.com" placeholder="MAIL ENCRYPTION" fdprocessedid="4rtf3" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_FROM_ADDRESS" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL FROM ADDRESS</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAIL_FROM_ADDRESS" defaultValue="test@beforepurchase.com" placeholder="MAIL FROM ADDRESS" fdprocessedid="hpx7tr" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAIL_FROM_NAME" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAIL FROM NAME</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAIL_FROM_NAME" defaultValue="beforepurchase.com" placeholder="MAIL FROM NAME" fdprocessedid="tqqew" />
                        </div>
                      </div>
                    </div>
                    <div id="mailgun" style={{ display: 'none' }}>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAILGUN_DOMAIN" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAILGUN DOMAIN</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAILGUN_DOMAIN" defaultValue="test@altoromutual.com" placeholder="MAILGUN DOMAIN" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <input type="hidden" name="types[]" defaultValue="MAILGUN_SECRET" />
                        <div className="col-md-3">
                          <label className="col-from-label">MAILGUN SECRET</label>
                        </div>
                        <div className="col-md-9">
                          <input type="text" className="form-control" name="MAILGUN_SECRET" defaultValue="test@altoromutual.com" placeholder="MAILGUN SECRET" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-primary" fdprocessedid="dlzb0h">Update</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Test SMTP configuration</h5>
                </div>
                <div className="card-body">
                  <form action="https://weddemoadmin.abaris.in/admin/newsletter/test/smtp" method="post">
                    <input type="hidden" name="_token" defaultValue="TL7gVYMMi3cj9D3J88UFc4u0yeb2JH9IB6LAucU5" />                        <div className="row">
                      <div className="col">
                        <input type="email" className="form-control" name="email" defaultValue="admin@example.com" placeholder="Enter your email address" fdprocessedid="qz4gfh" />
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary" fdprocessedid="6t71wr">Send test email</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Instruction />
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>

    </>
  )
}
export default SmptSettings 