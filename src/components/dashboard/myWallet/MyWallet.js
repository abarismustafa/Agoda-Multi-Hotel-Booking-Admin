import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
function MyWallet() {
  return (
    <>
      <div className="aiz-user-panel overflow-hidden">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">My Wallet</h1>
            </div>
          </div>
        </div>
        <div className="row gutters-10">
          <div className="col-md-4 mx-auto mb-3">
            <div className="bg-grad-1 text-white rounded-lg overflow-hidden">
              <span className="size-30px rounded-circle mx-auto bg-soft-primary d-flex align-items-center justify-content-center mt-3">
                <i className="las la-dollar-sign la-2x text-white" />
              </span>
              <div className="px-3 pt-3 pb-3">
                <div className="h4 fw-700 text-center">0$</div>
                <div className="opacity-50 text-center">Wallet Balance</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mx-auto mb-3">
            <Link to="/dashboard/wallet-recharge-methods">
              <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition bg-soft-info">
                <AiFillPlusCircle className="size-70px rounded " />
                <div className="fs-18 text-primary">Recharge Wallet</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Wallet History</h5>
          </div>
          <div className="card-body">
            <table
              className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-lg"
              style={{}}
            >
              <thead>
                <tr className="footable-header">
                  <th style={{ display: "table-cell" }}>#</th>
                  <th data-breakpoints="lg" style={{ display: "none" }}>
                    Date
                  </th>
                  <th style={{ display: "table-cell" }}>Amount</th>
                  <th data-breakpoints="lg" style={{ display: "none" }}>
                    Payment Method
                  </th>
                  <th className="text-right" style={{ display: "table-cell" }}>
                    Approval
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="footable-empty">
                  <td colSpan={3}>Nothing Found</td>
                </tr>
              </tbody>
            </table>
            <div className="aiz-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
export default MyWallet;
