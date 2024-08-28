import { Link } from "react-router-dom";
import free from '../../assets/img/AllPackagesImg/free.png'
import bronze from '../../assets/img/AllPackagesImg/bronze.png'
import silver from '../../assets/img/AllPackagesImg/silver.png'
import gold from '../../assets/img/AllPackagesImg/gold.png'
import diamond from '../../assets/img/AllPackagesImg/diamond.png'
import platinum from '../../assets/img/AllPackagesImg/platinum.png'
import prof from '../../assets/img/AllPackagesImg/prof.png'
function PremiumPackages() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="alert" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
            <strong className="fs-15">Cron Job Add Instruction:</strong>
            <br />
            <i className="text-danger">You Must Add A Cron Job To Check The Validity Of The Members Package.</i>
            <ol className="mt-2">
              <li>
                To set a cron job, login to your cpanel and find the Cron Jobs option.
              </li>
              <li>
                Go to Cron Jobs.
              </li>
              <li>
                Add a new Cron Job.
              </li>
              <li>
                Select time period of Every Day
              </li>
              <li>
                Set command as,  wget -O – http://your-domain-name.com/check_for_package_invalid
              </li>
            </ol>
          </div>
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">Premium Packages</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="create" className="btn btn-circle btn-primary">
                  <span>Add New Package</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">All Packages</h5>
                </div>
                <div className="card-body">
                  <table className="table aiz-table mb-0 footable footable-1 breakpoint-lg" style={{}}>
                    <thead>
                      <tr className="footable-header">
                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                        <th style={{ display: 'table-cell' }}>Image</th>
                        <th style={{ display: 'table-cell' }}>Name</th>
                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Price</th>
                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Status</th>
                        <th className="text-right footable-last-visible" width="10%" style={{ display: 'table-cell' }}>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                        <td style={{ display: 'table-cell' }}>
                          <img className="img-md" src={free} height="45px" alt="photo" />
                        </td>
                        <td style={{ display: 'table-cell' }}>Free</td>
                        <td style={{ display: 'table-cell' }}>0</td>
                        <td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" id="status.0" defaultValue={1} defaultChecked data-switch="success" />
                            <span />
                          </label>
                        </td>
                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="editPackage" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                        <td style={{ display: 'table-cell' }}>
                          <img className="img-md" src={bronze} height="45px" alt="photo" />
                        </td>
                        <td style={{ display: 'table-cell' }}>Bronze Package</td>
                        <td style={{ display: 'table-cell' }}>30</td>
                        <td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" id="status.1" defaultValue={2} defaultChecked data-switch="success" />
                            <span />
                          </label>
                        </td>
                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="editPackage" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="javascript:void(0);" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/packages/destroy/2" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>
                          <img className="img-md" src={silver} height="45px" alt="photo" />
                        </td><td style={{ display: 'table-cell' }}>Silver Package</td><td style={{ display: 'table-cell' }}>40</td><td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" id="status.2" defaultValue={3} defaultChecked data-switch="success" />
                            <span />
                          </label>
                        </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="editPackage" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="javascript:void(0);" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/packages/destroy/3" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>
                          <img className="img-md" src={gold} height="45px" alt="photo" />
                        </td><td style={{ display: 'table-cell' }}>Gold Package</td><td style={{ display: 'table-cell' }}>50</td><td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" id="status.3" defaultValue={4} defaultChecked data-switch="success" />
                            <span />
                          </label>
                        </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="editPackage" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="javascript:void(0);" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/packages/destroy/4" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>
                          <img className="img-md" src={diamond} height="45px" alt="photo" />
                        </td><td style={{ display: 'table-cell' }}>Diamond Package</td><td style={{ display: 'table-cell' }}>100</td><td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" id="status.4" defaultValue={5} defaultChecked data-switch="success" />
                            <span />
                          </label>
                        </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="editPackage" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="javascript:void(0);" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/packages/destroy/5" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>
                          <img className="img-md" src={platinum} height="45px" alt="photo" />
                        </td><td style={{ display: 'table-cell' }}>Platinum Package</td><td style={{ display: 'table-cell' }}>200</td><td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" id="status.5" defaultValue={8} defaultChecked data-switch="success" />
                            <span />
                          </label>
                        </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="editPackage" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="javascript:void(0);" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/packages/destroy/8" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>
                          <img className="img-md" src={prof} height="45px" alt="photo" />
                        </td><td style={{ display: 'table-cell' }}>Professional Package</td><td style={{ display: 'table-cell' }}>300</td><td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" id="status.6" defaultValue={9} defaultChecked data-switch="success" />
                            <span />
                          </label>
                        </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="editPackage" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="javascript:void(0);" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/packages/destroy/9" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr></tbody>
                  </table>
                  <div className="aiz-pagination">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PremiumPackages;