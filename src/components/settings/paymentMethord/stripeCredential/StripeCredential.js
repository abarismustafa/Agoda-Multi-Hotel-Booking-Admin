

function StripeCredential () {
    return (
        <>
        <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6 ">Stripe Credential</h5>
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
                      defaultValue="stripe"
                    />
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="stripe_payment_activation"
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
                        defaultValue="STRIPE_KEY"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">Stripe Key</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="STRIPE_KEY"
                          defaultValue="pk_test_51HUWfSGRvmmDdlLV4SicdCgwHvugSZJIWnq3JAVRdJFwzkNS94SafaOSsg9qgUdQkO0yyWARKyWSXOjjBXFrvwDD00kYOLnaBQ"
                          placeholder="Stripe Key"
                          fdprocessedid="r8hare"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="STRIPE_SECRET"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">Stripe Secret</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="STRIPE_SECRET"
                          defaultValue="sk_test_51HUWfSGRvmmDdlLV87aRqJ8CVka2HtjB1SQvBzfbWzr7F9KaK5txg23eASkhitYJVz0IgovdnOOi7t6ab3xqGB4D00oAGvGCxq"
                          placeholder="Stripe Secret"
                          fdprocessedid="s9c8oe"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="7ll7b"
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
export default StripeCredential