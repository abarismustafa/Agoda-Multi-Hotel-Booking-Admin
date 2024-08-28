import { Link } from "react-router-dom"


function SupportTicketHistory() {
    return (
        <>
            <div className="aiz-user-panel">
                <div className="aiz-titlebar mt-2 mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="h3">Support Tickets</h1>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <Link to="/dashboard/support-ticket/create" className="btn btn-primary">
                                <i className="las la-plus" />
                                <span>Create New Ticket</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">All Tickets</h5>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <div className="dropdown bootstrap-select form-control aiz- dropup"><select className="form-control aiz-selectpicker" name="delivery_status" id="delivery_status" onchange="sort_orders()" tabIndex={-98}>
                                <option value="showCategoryByFilterSelect1" selected>All</option>
                                <option value="showCategoryByFilterSelect2">Pending</option>
                                <option value="showCategoryByFilterSelect2">Opened</option>
                                <option value="showCategoryByFilterSelect3">Solved</option>
                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="delivery_status" title="All"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">All</div></div> </div></button><div className="dropdown-menu " style={{ overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={4} aria-posinset={1} aria-selected="true"><span className="text">All</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">Pending</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0}><span className="text">Opened</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-3" tabIndex={0}><span className="text">Solved</span></a></li></ul></div></div></div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th data-breakpoints="md" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>ID</th><th style={{ display: 'table-cell' }}>Status</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Subject</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Category</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Created at</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>New Reply</th><th data-breakpoints="md" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Action</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><th style={{ display: 'table-cell' }}>20210629-113131</th><td style={{ display: 'table-cell' }}>
                                        <span className="badge badge-inline badge-danger">Pending</span>
                                    </td><td style={{ display: 'table-cell' }}>Nihil quia consectet</td><td style={{ display: 'table-cell' }}>Marketing</td><td style={{ display: 'table-cell' }}>2021-06-29 01:31:31</td><td style={{ display: 'table-cell' }}>
                                        0
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link className="btn btn-xs btn-soft-primary" to="/dashboard/support-ticket-view-details">View details</Link>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><th style={{ display: 'table-cell' }}>20210410-013924</th><td style={{ display: 'table-cell' }}>
                                        <span className="badge badge-inline badge-success">Solved</span>
                                    </td><td style={{ display: 'table-cell' }}>Cupiditate qui aut p</td><td style={{ display: 'table-cell' }}>Marketing</td><td style={{ display: 'table-cell' }}>2021-04-10 03:39:24</td><td style={{ display: 'table-cell' }}>
                                        <span className="badge badge-inline badge-success">1</span>
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-xs btn-soft-primary" href="https://demo.activeitzone.com/matrimonial/support-ticket/view-details/eyJpdiI6ImpQRjdVVml5WEFWMzdsYWtYRDJoMnc9PSIsInZhbHVlIjoidnRjVnd0b3BvMHBVMGdwY1FNbFZlUT09IiwibWFjIjoiYmVhOWZmOTkxOGVjZDFhYWI1NDA4ZTZiN2U0NzIxM2E0OGM1OTRmMmZkMGFlNDA2ZGIyM2Q0NDA1NTM5MmRjYyIsInRhZyI6IiJ9">View details</a>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><th style={{ display: 'table-cell' }}>20210410-013905</th><td style={{ display: 'table-cell' }}>
                                        <span className="badge badge-inline badge-danger">Pending</span>
                                    </td><td style={{ display: 'table-cell' }}>Cupiditate qui aut p</td><td style={{ display: 'table-cell' }}>Report</td><td style={{ display: 'table-cell' }}>2021-04-10 03:39:05</td><td style={{ display: 'table-cell' }}>
                                        <span className="badge badge-inline badge-success">1</span>
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-xs btn-soft-primary" href="https://demo.activeitzone.com/matrimonial/support-ticket/view-details/eyJpdiI6IlFYMzl0amN0dnBsN1JRYlFWaG9mUVE9PSIsInZhbHVlIjoiMUhKQTkyVi95R094bkorQVVocm5Ndz09IiwibWFjIjoiMGFjZTBiN2ViY2E3NGEyNjZmNTM4MjRmM2M4NjMzMzU4NTY4ZWY4OWIxNmZlZjQwYTY0ZGU2ZjQ0MGFkNDZkNSIsInRhZyI6IiJ9">View details</a>
                                    </td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SupportTicketHistory