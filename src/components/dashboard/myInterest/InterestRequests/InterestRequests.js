
function InterestRequest() {
    return (
        <>
            <div className="aiz-user-panel overflow-hidden">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Interest Requests</h5>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Image</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>age</th><th className="text-center" style={{ display: 'table-cell' }}>Action</th></tr>
                            </thead>
                            <tbody>
                                <tr className="footable-empty"><td colSpan={5}>Nothing Found</td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default InterestRequest