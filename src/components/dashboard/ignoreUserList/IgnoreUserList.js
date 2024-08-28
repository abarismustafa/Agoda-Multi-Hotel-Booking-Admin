
function IgnoreUsreList() {
    return (
        <>
            <div className="aiz-user-panel overflow-hidden">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Ignored Members</h5>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Image</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>age</th><th style={{ display: 'table-cell' }}>Religion</th><th style={{ display: 'table-cell' }}>location</th><th style={{ display: 'table-cell' }}>mother_tongue</th><th className="text-right" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>
                                <tr className="footable-empty"><td colSpan={8}>Nothing Found</td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default IgnoreUsreList