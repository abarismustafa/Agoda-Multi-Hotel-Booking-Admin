import InsideHeader from "../../../components/common/insideHeader/InsideHeader";

function PurchaseThisPackage() {
  return (
    <>
      <InsideHeader />
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4">
              <div className="card shadow-none overflow-hidden">
                <div className="card-body">
                  <div className="text-center mb-4 mt-3">
                    <img
                      className="mw-100 mx-auto mb-4"
                      src="https://demo.activeitzone.com/matrimonial/public/uploads/all/RMTKXAZIB1cN2RA8GLgbhs8DmGl0qj01ACRlEFCG.png"
                      height={130}
                    />
                    <h5 className="mb-3 h5 fw-600">Gold Package</h5>
                  </div>
                  <ul className="list-group list-group-raw fs-15 mb-5">
                    <li className="list-group-item py-2">
                      <i className="las la-check text-success mr-2" />
                      50 Express Interests
                    </li>
                    <li className="list-group-item py-2">
                      <i className="las la-check text-success mr-2" />
                      60 Gallery Photo Upload
                    </li>
                    <li className="list-group-item py-2">
                      <i className="las la-check text-success mr-2" />
                      15 Contact Info View
                    </li>
                    <li className="list-group-item py-2 text-line-through">
                      <i className="las la-check text-success mr-2" />
                      Show Auto Profile Match
                    </li>
                  </ul>
                  <div className="mb-5 text-dark text-center">
                    <span className="display-4 fw-600 lh-1 mb-0">50$</span>
                    <span className="text-secondary d-block">90 Days</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                action="https://demo.activeitzone.com/matrimonial/package-payment"
                className="form-default"
                role="form"
                method="POST"
                id="package-payment-form"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="40BHp47Bm68F3IRpVfjJy6oeZHcgG2jTR1zmV988"
                />{" "}
                <input type="hidden" name="package_id" defaultValue={4} />
                <input type="hidden" name="amount" defaultValue={50} />
                <input type="hidden" id="payment_type" defaultValue />
                <div className="card shadow-none">
                  <div className="card-header p-3">
                    <h3 className="fs-16 fw-600 mb-0">
                      Select a payment option
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xxl-8 col-xl-10 mx-auto">
                        <div className="row gutters-10">
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="paypal"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src="https://demo.activeitzone.com/matrimonial/public/assets/img/payment_method/paypal.png"
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Paypal
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="stripe"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src="https://demo.activeitzone.com/matrimonial/public/assets/img/payment_method/stripe.png"
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Stripe
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="instamojo"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src="https://demo.activeitzone.com/matrimonial/public/assets/img/payment_method/instamojo.png"
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Instamojo
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="razorpay"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src="https://demo.activeitzone.com/matrimonial/public/assets/img/payment_method/rozarpay.png"
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Razorpay
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="paystack"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src="https://demo.activeitzone.com/matrimonial/public/assets/img/payment_method/paystack.png"
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Paystack
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="wallet"
                                className="online_payment"
                                type="radio"
                                name="payment_option"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img
                                  src="https://demo.activeitzone.com/matrimonial/public/assets/img/payment_method/wallet.png"
                                  className="img-fluid mb-2"
                                />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Wallet
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="manual_payment_1"
                                type="radio"
                                name="payment_option"
                                className="manual_payment_1"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img src className="img-fluid mb-2" />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Hillary Jennings
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="col-6 col-md-4">
                            <label className="aiz-megabox d-block mb-3">
                              <input
                                defaultValue="manual_payment_2"
                                type="radio"
                                name="payment_option"
                                className="manual_payment_2"
                              />
                              <span className="d-block p-3 aiz-megabox-elem">
                                <img src className="img-fluid mb-2" />
                                <span className="d-block text-center">
                                  <span className="d-block fw-600 fs-15">
                                    Method 2
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-12 d-none"
                        id="manual_payment_1_info"
                      >
                        <div className="bg-white border mb-3 p-3 rounded text-left ">
                          <p
                            className="MsoNormal"
                            style={{
                              msoMarginBottomAlt: "auto",
                              lineHeight: "normal",
                              msoOutlineLevel: 5,
                            }}
                          >
                            <b>
                              <i>
                                <span
                                  style={{
                                    fontSize: "10.0pt",
                                    fontFamily: '"Helvetica",sans-serif',
                                    msoFareastFontFamily: '"Times New Roman"',
                                    color: "#1B1B28",
                                  }}
                                >
                                  Manual Payment Method 1 - Instruction1
                                </span>
                              </i>
                            </b>
                            <span
                              style={{
                                fontSize: "10.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                msoFareastFontFamily: '"Times New Roman"',
                                color: "#1B1B28",
                              }}
                            ></span>
                          </p>
                          <p
                            className="MsoNormal"
                            style={{
                              msoMarginBottomAlt: "auto",
                              lineHeight: "normal",
                              msoOutlineLevel: 5,
                            }}
                          >
                            <span
                              style={{
                                fontSize: "10.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                msoFareastFontFamily: '"Times New Roman"',
                                color: "#1B1B28",
                              }}
                            >
                              Manual Payment Method 1 - Instruction2
                            </span>
                          </p>
                          <ol start={1} type={1}>
                            <li
                              className="MsoNormal"
                              style={{
                                color: "#1B1B28",
                                msoMarginTopAlt: "auto",
                                msoMarginBottomAlt: "auto",
                                lineHeight: "normal",
                                msoList: "l0 level1 lfo1",
                                tabStops: "list .5in",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "10.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  msoFareastFontFamily: '"Times New Roman"',
                                }}
                              >
                                Manual Payment Method 1 - Instruction3
                              </span>
                            </li>
                            <li
                              className="MsoNormal"
                              style={{
                                color: "#1B1B28",
                                msoMarginTopAlt: "auto",
                                msoMarginBottomAlt: "auto",
                                lineHeight: "normal",
                                msoList: "l0 level1 lfo1",
                                tabStops: "list .5in",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "10.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  msoFareastFontFamily: '"Times New Roman"',
                                }}
                              >
                                Manual Payment Method 1 - Instruction4
                              </span>
                            </li>
                            <li
                              className="MsoNormal"
                              style={{
                                color: "#1B1B28",
                                msoMarginTopAlt: "auto",
                                msoMarginBottomAlt: "auto",
                                lineHeight: "normal",
                                msoList: "l0 level1 lfo1",
                                tabStops: "list .5in",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "10.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  msoFareastFontFamily: '"Times New Roman"',
                                }}
                              >
                                Manual Payment Method 1 - Instruction5
                              </span>
                            </li>
                          </ol>{" "}
                        </div>
                      </div>
                      <div
                        className="col-md-12 d-none"
                        id="manual_payment_2_info"
                      >
                        <div className="bg-white border mb-3 p-3 rounded text-left ">
                          <p
                            className="MsoNormal"
                            style={{ lineHeight: "normal" }}
                          >
                            <span style={{ fontWeight: "bolder" }}>
                              <i>
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Helvetica, sans-serif",
                                    color: "rgb(27, 27, 40)",
                                  }}
                                >
                                  Manual Payment Method 2 - Instruction1
                                </span>
                              </i>
                            </span>
                            <span
                              style={{
                                fontSize: "10pt",
                                fontFamily: "Helvetica, sans-serif",
                                color: "rgb(27, 27, 40)",
                              }}
                            ></span>
                          </p>
                          <p
                            className="MsoNormal"
                            style={{ lineHeight: "normal" }}
                          >
                            <span
                              style={{
                                fontSize: "10pt",
                                fontFamily: "Helvetica, sans-serif",
                                color: "rgb(27, 27, 40)",
                              }}
                            >
                              Manual Payment Method 2 - Instruction2
                            </span>
                          </p>
                          <ol start={1} type={1}>
                            <li
                              className="MsoNormal"
                              style={{
                                color: "rgb(27, 27, 40)",
                                lineHeight: "normal",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "10pt",
                                  fontFamily: "Helvetica, sans-serif",
                                }}
                              >
                                Manual Payment Method 2 - Instruction3
                              </span>
                            </li>
                            <li
                              className="MsoNormal"
                              style={{
                                color: "rgb(27, 27, 40)",
                                lineHeight: "normal",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "10pt",
                                  fontFamily: "Helvetica, sans-serif",
                                }}
                              >
                                Manual Payment Method 2 - Instruction4
                              </span>
                            </li>
                            <li
                              className="MsoNormal"
                              style={{
                                color: "rgb(27, 27, 40)",
                                lineHeight: "normal",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "10pt",
                                  fontFamily: "Helvetica, sans-serif",
                                }}
                              >
                                Manual Payment Method 2 - Instruction5
                              </span>
                            </li>
                          </ol>{" "}
                        </div>
                      </div>
                      <div
                        className="col-md-12 d-none"
                        id="purchase_by_manual_payment"
                      >
                        <div className="form-group row">
                          <div className="col-md-6">
                            <label>
                              Transaction Id
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              name="transaction_id"
                              id="transaction_id"
                              className="form-control"
                              placeholder="Transaction Id"
                            />
                          </div>
                          <div className="col-md-6">
                            <label>
                              Payment Proof
                              <span className="text-danger"> *</span>
                            </label>
                            <div
                              className="input-group"
                              data-toggle="aizuploader"
                              data-type="image"
                            >
                              <div className="input-group-prepend">
                                <div className="input-group-text bg-soft-secondary font-weight-medium">
                                  Browse
                                </div>
                              </div>
                              <div className="form-control file-amount">
                                Choose File
                              </div>
                              <input
                                type="hidden"
                                name="payment_proof"
                                id="payment_proof"
                                className="selected-files"
                              />
                            </div>
                            <div className="file-preview box sm" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-12">
                            <label>Payment Details</label>
                            <textarea
                              type="text"
                              name="payment_details"
                              className="form-control"
                              rows={2}
                              placeholder="Payment Details"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" text-right pt-3">
                  <button
                    type="button"
                    onclick="package_purchase(this)"
                    className="btn btn-primary fw-600 purchase_button"
                    disabled
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PurchaseThisPackage;
