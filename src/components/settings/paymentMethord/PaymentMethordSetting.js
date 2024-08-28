import InstamojoCredential from "./Instamojo Credential/InstamojoCredential";
import ManualPaymentMethordOne from "./manualPaymentMethod 1/ManualPaymentMethodOne";
// import ManualPaymentMethord from "./manualPaymentMethod 1/ManualPaymentMethodOne";
import ManualPaymentMethordTwo from "./manualPaymentMethod 2/ManualPaymentMethodTwo";
import PayPalCredential from "./PaypalCredential/PaypalCredential";
import PayStackCredential from "./payStackCredential/PayStackCredential";
import RazorPayCredential from "./razorPayCredential/RazorPayCredential";
import StripeCredential from "./stripeCredential/StripeCredential";

function PaymentMethordSetting() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            {/* Paypal */}
            <div className="col-md-6">
              <PayPalCredential />
            </div>
            {/* Instamojo */}
            <div className="col-md-6">
              <InstamojoCredential />
            </div>
            {/* Stripe */}
            <div className="col-md-6">
              <StripeCredential />
            </div>
            {/* Razorpay */}
            <div className="col-md-6">
              <RazorPayCredential />
            </div>
            <div className="col-lg-6 mx-auto">
              <PayPalCredential />
            </div>
            {/* Paystack */}
            <div className="col-md-6">
              <PayStackCredential />
            </div>
            {/* Manual Payment Method 1 */}
            <div className="col-md-6">
              <ManualPaymentMethordOne />
            </div>
            {/* Manual Payment Method 2 */}
            <div className="col-md-6">
              <ManualPaymentMethordTwo />
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default PaymentMethordSetting;
