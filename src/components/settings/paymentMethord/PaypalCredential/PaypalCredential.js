
function PayPalCredential() {
    return (
        <>
        <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6 ">Paypal Credential</h5>
                </div>
                <div className="card-body">
                  <form
                    action="https://weddemoadmin.abaris.in/admin/payment_method_update"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="payment_method"
                      defaultValue="paypal"
                    />
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="TL7gVYMMi3cj9D3J88UFc4u0yeb2JH9IB6LAucU5"
                    />{" "}
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">Activation</label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="paypal_payment_activation"
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
                        defaultValue="PAYPAL_CLIENT_ID"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Paypal Client Id
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYPAL_CLIENT_ID"
                          defaultValue="Aa1bxXJnQV4yF9PqmgmBuZ-TXnJMl_SJlqHGa5oBAdbPz8WiY3MJA340XZ8QFwuiH6jTv7wphVULAPNr"
                          placeholder="Paypal Client Id"
                          fdprocessedid="nuj5t"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="PAYPAL_CLIENT_SECRET"
                      />
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Paypal Client Secret
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          name="PAYPAL_CLIENT_SECRET"
                          defaultValue="EHYBU5Z-gWO_6rzS6kiC9d2xZzBRTXcvNy46r7DTk1oN8OCBKTamJRhd3TVK561QNwQ6V2_B_uazCNVQ"
                          placeholder="Paypal Client Secret"
                          fdprocessedid="cq6qah"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-4">
                        <label className="col-from-label">
                          Paypal Sandbox Mode
                        </label>
                      </div>
                      <div className="col-md-8">
                        <label className="aiz-switch aiz-switch-success mb-0">
                          <input
                            defaultValue={1}
                            name="paypal_sandbox"
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
                        fdprocessedid="wa3ek"
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
export default PayPalCredential