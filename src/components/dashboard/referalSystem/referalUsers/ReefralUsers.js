
function ReferalUsers() {
    return (
        <>
            <div className="aiz-user-panel overflow-hidden">
                <div className="aiz-titlebar mt-2 mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="h3">Refer Code and Referred Users</h1>
                        </div>
                    </div>
                </div>
                <div className="row gutters-10">
                    <div className="col-md-4 mx-auto mb-3">
                        <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition">
                            <div className="fs-18 text-primary">
                                Referral Code : E0EE4E4D
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Referred Users</h5>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Date</th></tr>
                            </thead>
                            <tbody>
                                <tr className="footable-empty"><td colSpan={3}>Nothing Found</td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ReferalUsers