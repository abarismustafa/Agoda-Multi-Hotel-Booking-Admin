import React from 'react'

function AllCountries() {
    return (
        <>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">All Countries</h5>
                        </div>
                        <div className="col-md-4">
                            <form className id="sort_countries" action method="GET">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Code</th><th className="footable-last-visible" style={{ display: 'table-cell' }}>Show/Hide</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Afghanistan</td><td style={{ display: 'table-cell' }}>AF</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={1} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Albania</td><td style={{ display: 'table-cell' }}>AL</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={2} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>Algeria</td><td style={{ display: 'table-cell' }}>DZ</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={3} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>American Samoa</td><td style={{ display: 'table-cell' }}>AS</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={4} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>Andorra</td><td style={{ display: 'table-cell' }}>AD</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={5} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>Angola</td><td style={{ display: 'table-cell' }}>AO</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={6} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>Anguilla</td><td style={{ display: 'table-cell' }}>AI</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={7} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>8</td><td style={{ display: 'table-cell' }}>Antarctica</td><td style={{ display: 'table-cell' }}>AQ</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={8} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>9</td><td style={{ display: 'table-cell' }}>Antigua And Barbuda</td><td style={{ display: 'table-cell' }}>AG</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={9} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>10</td><td style={{ display: 'table-cell' }}>Argentina</td><td style={{ display: 'table-cell' }}>AR</td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <label className="aiz-switch aiz-switch-success mb-0">
                                            <input onchange="update_status(this)" defaultValue={10} type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                    </td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                        <span className="page-link" aria-hidden="true">‹</span>
                                    </li>
                                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=3">3</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=4">4</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=5">5</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=6">6</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=7">7</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=8">8</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=9">9</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=10">10</a></li>
                                    <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=24">24</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=25">25</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="https://weddemoadmin.abaris.in/admin/countries?page=2" rel="next" aria-label="Next »">›</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllCountries