import { Link } from "react-router-dom";

function PackagePayments() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">Package Payment List</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">All Payments</h5>
                </div>
                <div className="card-body">
                  <table className="table aiz-table mb-0 footable footable-1 breakpoint-lg" style={{}}>
                    <thead>
                      <tr className="footable-header">
                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Member Name</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Package</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Method</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Amount</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Status</th><th style={{ display: 'table-cell' }}>Payment Code</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Purchase Date</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                          Olivia Emma
                        </td><td style={{ display: 'table-cell' }}>
                          Platinum Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>200$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210629-105148</td><td style={{ display: 'table-cell' }}>2021-06-29 00:51:48</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>
                          Alex Reynolds
                        </td><td style={{ display: 'table-cell' }}>
                          Professional Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>300$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210412-120948</td><td style={{ display: 'table-cell' }}>2021-04-12 02:09:48</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>
                          Kimberley Lang
                        </td><td style={{ display: 'table-cell' }}>
                          Platinum Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>100$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210412-105526</td><td style={{ display: 'table-cell' }}>2021-04-12 00:55:26</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>
                          Robert L. Gardner
                        </td><td style={{ display: 'table-cell' }}>
                          Diamond Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>100$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210411-111023</td><td style={{ display: 'table-cell' }}>2021-04-11 01:10:23</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>
                          Matthew Ryan
                        </td><td style={{ display: 'table-cell' }}>
                          Professional Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>300$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210410-113908</td><td style={{ display: 'table-cell' }}>2021-04-10 01:39:08</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>
                          Derrick L. Lavender
                        </td><td style={{ display: 'table-cell' }}>
                          Professional Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>300$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210410-093023</td><td style={{ display: 'table-cell' }}>2021-04-09 23:30:23</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>
                          Jane R Lamy
                        </td><td style={{ display: 'table-cell' }}>
                          Professional Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>300$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210408-190946</td><td style={{ display: 'table-cell' }}>2021-04-08 09:09:46</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>8</td><td style={{ display: 'table-cell' }}>
                          Kathy T. Litton
                        </td><td style={{ display: 'table-cell' }}>
                          Professional Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>300$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210408-160414</td><td style={{ display: 'table-cell' }}>2021-04-08 06:04:14</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>9</td><td style={{ display: 'table-cell' }}>
                          Sylvia J. Love
                        </td><td style={{ display: 'table-cell' }}>
                          Diamond Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>100$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210408-130333</td><td style={{ display: 'table-cell' }}>2021-04-08 03:03:33</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>10</td><td style={{ display: 'table-cell' }}>
                          Nicole Hruby
                        </td><td style={{ display: 'table-cell' }}>
                          Diamond Package
                        </td><td style={{ display: 'table-cell' }}>
                          Stripe
                        </td><td style={{ display: 'table-cell' }}>100$</td><td style={{ display: 'table-cell' }}>
                          <span className="badge badge-inline badge-success text-center">Paid</span>
                        </td><td style={{ display: 'table-cell' }}>210408-125839</td><td style={{ display: 'table-cell' }}>2021-04-08 02:58:39</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to="invoice" target="_blank" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="invoice">
                            <i className="las la-file-invoice" />
                          </Link>
                        </td></tr></tbody>
                  </table>
                  <div className="aiz-pagination">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                          <span className="page-link" aria-hidden="true">‹</span>
                        </li>
                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                        <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/package-payments?page=2">2</a></li>
                        <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/package-payments?page=3">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="https://weddemoadmin.abaris.in/admin/package-payments?page=2" rel="next" aria-label="Next »">›</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}

        {/* <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          <p className="mb-0">© testing v3.6</p>
        </div> */}
      </div>

    </>
  )
}
export default PackagePayments;