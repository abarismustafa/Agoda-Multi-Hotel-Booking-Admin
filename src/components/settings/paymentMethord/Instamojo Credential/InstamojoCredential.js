
function InstamojoCredential() {
    return (
        <>
        <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6 ">Instamojo Credential</h5>
                </div>
                <div className="card-body">
                  <form
                    action="https://weddemoadmin.abaris.in/admin/payment_method_update"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="TL7gVYMMi3cj9D3J88UFc4u0yeb2JH9IB6LAucU5"
                    />{" "}
                    <input
                      type="hidden"
                      name="payment_method"
                      defaultValue="instamojo"
                    />
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="instamojo_payment_activation"
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
                        defaultValue="INSTAMOJO_API_KEY"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Instamojo API Key
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="INSTAMOJO_API_KEY"
                          defaultValue
                          placeholder="Instamojo API Key"
                          fdprocessedid="wkyjzk"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="INSTAMOJO_AUTH_TOKEN"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Instamojo Auth Token
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="INSTAMOJO_AUTH_TOKEN"
                          defaultValue
                          placeholder="Instamojo Auth Token"
                          fdprocessedid="2hx3r"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Instamojo Sandbox Mode
                        </label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="instamojo_sandbox"
                            type="checkbox"
                            defaultChecked
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="8mvd8h"
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
export default InstamojoCredential