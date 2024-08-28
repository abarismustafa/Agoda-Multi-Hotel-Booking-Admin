
function RazorPayCredential() {
    return (
        <>
        <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6 ">RazorPay Credential</h5>
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
                      defaultValue="razorpay"
                    />
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="razorpay_payment_activation"
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
                        defaultValue="RAZORPAY_KEY"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">Razorpay Key</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="RAZORPAY_KEY"
                          defaultValue
                          placeholder="Razorpay Key"
                          fdprocessedid="e6gw7t"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="RAZORPAY_SECRET"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Razorpay Secret
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="RAZORPAY_SECRET"
                          defaultValue
                          placeholder="Razorpay Secret"
                          fdprocessedid="3daztk"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        fdprocessedid="eepnf9"
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
export default RazorPayCredential