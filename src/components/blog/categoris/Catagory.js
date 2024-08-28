import { Link } from "react-router-dom"


function Category() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All Blog Categories</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-7 ">
              <div className="card">
                <div className="card-header row gutters-5">
                  <div className="col text-center text-md-left">
                    <h5 className="mb-md-0 h6">All Categories</h5>
                  </div>
                  <div className="col-md-4">
                    <form id="sort_on_behalves">
                      <div className="input-group input-group-sm">
                        <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="8nol0t" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                    <thead>
                      <tr className="footable-header">
                        <th width="5%" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Life Partner</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="/admin/blog-category/edit-blog-category" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/blog-category/destroy/2" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr><tr>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Weeding Tips</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link className="btn btn-soft-info btn-icon btn-circle btn-sm" to="/admin/blog-category/edit-blog-category" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/blog-category/destroy/1" title="Delete">
                            <i className="las la-trash" />
                          </a>
                        </td></tr></tbody>
                  </table>
                  <div className="aiz-pagination">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Add New Blog Category</h5>
                </div>
                <div className="card-body">
                  <form action="https://weddemoadmin.abaris.in/admin/blog-category" method="POST">
                    <input type="hidden" name="_token" defaultValue="z2rw777CuOQ8RfxKQzVsyiDwtekGPIfLdc7HTapg" />                        <div className="form-group mb-3">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="category_name" name="category_name" placeholder="Name" className="form-control" required fdprocessedid="ripj5k" />
                    </div>
                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-primary" fdprocessedid="gh1w6f">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>

    </>
  )
}
export default Category