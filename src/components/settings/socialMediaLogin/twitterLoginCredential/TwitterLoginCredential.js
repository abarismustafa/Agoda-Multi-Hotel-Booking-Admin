
function TwitterLoginCredential() {
    return (
        <>
        <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Twitter Login Credential</h5>
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
                      defaultValue="twitter_login"
                    />
                    <div className="form-group row">
                      <div className="col-md-3">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="twitter_login_activation"
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
                        defaultValue="TWITTER_CLIENT_ID"
                      />
                      <div className="col-lg-3">
                        <label className="col-from-label">Client ID</label>
                      </div>
                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control"
                          name="TWITTER_CLIENT_ID"
                          defaultValue={3}
                          placeholder="Twitter Client ID"
                          required
                          fdprocessedid="on1tc7"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="TWITTER_CLIENT_SECRET"
                      />
                      <div className="col-lg-3">
                        <label className="col-from-label">Client Secret</label>
                      </div>
                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control"
                          name="TWITTER_CLIENT_SECRET"
                          defaultValue={4}
                          placeholder="Twitter Client Secret"
                          required
                          fdprocessedid="4z5be"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="qs0scr"
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
export default TwitterLoginCredential