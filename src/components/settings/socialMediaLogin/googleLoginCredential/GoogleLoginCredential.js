

function GoogleLogInCredential() {
    return (
        <>
       <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Google Login Credential</h5>
                </div>
                <div className="card-body">
                  <form
                    action="https://weddemoadmin.abaris.in/admin/third-party-settings/update"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="TL7gVYMMi3cj9D3J88UFc4u0yeb2JH9IB6LAucU5"
                    />{" "}
                    <input
                      type="hidden"
                      name="setting_type"
                      defaultValue="google_login"
                    />
                    <div className="form-group row">
                      <div className="col-md-3">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="google_login_activation"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="GOOGLE_CLIENT_ID"
                      />
                      <div className="col-lg-3">
                        <label className="col-from-label">Client ID</label>
                      </div>
                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control"
                          name="GOOGLE_CLIENT_ID"
                          defaultValue
                          placeholder="Google Client ID"
                          required
                          fdprocessedid="8wj238"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="GOOGLE_CLIENT_SECRET"
                      />
                      <div className="col-lg-3">
                        <label className="col-from-label">Client Secret</label>
                      </div>
                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control"
                          name="GOOGLE_CLIENT_SECRET"
                          defaultValue
                          placeholder="Google Client Secret"
                          required
                          fdprocessedid="6itf3o"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="e0iovo"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
        </>
    )
}
export default GoogleLogInCredential