
function ReferalEarning() {
    return (
        <>
            <div className="aiz-user-panel overflow-hidden">
                <div className="aiz-titlebar mt-2 mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="h3">Referral Earnings</h1>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Referral Earnings</h5>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Referred User</th><th style={{ display: 'table-cell' }}>Amount</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th></tr>
                            </thead>
                            <tbody>
                                <tr className="footable-empty"><td colSpan={4}>Nothing Found</td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ReferalEarning