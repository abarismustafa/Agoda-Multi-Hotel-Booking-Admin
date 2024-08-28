
function PayStackCredential() {
    return (
        <>
        <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6 ">PayStack Credential</h5>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
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
                      defaultValue="paystack"
                    />
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="paystack_payment_activation"
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
                        defaultValue="PAYSTACK_PUBLIC_KEY"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">PUBLIC KEY</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYSTACK_PUBLIC_KEY"
                          defaultValue
                          placeholder="PUBLIC KEY"
                          required
                          fdprocessedid="l039fi"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYSTACK_SECRET_KEY"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">SECRET KEY</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYSTACK_SECRET_KEY"
                          defaultValue
                          placeholder="SECRET KEY"
                          required
                          fdprocessedid="tqu6ce"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="MERCHANT_EMAIL"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">MERCHANT EMAIL</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="MERCHANT_EMAIL"
                          defaultValue
                          placeholder="MERCHANT EMAIL"
                          required
                          fdprocessedid="fhzptf"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYSTACK_CURRENCY_CODE"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">
                          PAYSTACK CURRENCY CODE
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYSTACK_CURRENCY_CODE"
                          defaultValue
                          placeholder="PAYSTACK CURRENCY CODE"
                          required
                          fdprocessedid="vik3xg"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="g3w1o"
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
export default PayStackCredential