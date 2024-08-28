import { Link } from "react-router-dom"


function PackegePurchaseHistory() {
    return (
        <>
            <div className="aiz-user-panel overflow-hidden">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Package History</h5>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th data-breakpoints="md" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Code</th><th style={{ display: 'table-cell' }}>Package</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Method</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Amount</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Status</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Purchase Date</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>invoice</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>210407-164808</td><td style={{ display: 'table-cell' }}>Diamond Package</td><td style={{ display: 'table-cell' }}>
                                        Stripe
                                    </td><td style={{ display: 'table-cell' }}>100$</td><td className="text-center" style={{ display: 'table-cell' }}>
                                        <span className="badge badge-inline badge-success">Paid</span>
                                    </td><td style={{ display: 'table-cell' }}>2021-04-07 06:48:08</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to="/dashboard/package-payment-invoice" className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="invoice">
                                            <i className="las la-file-invoice" />
                                        </Link>
                                    </td></tr>
                            </tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PackegePurchaseHistory