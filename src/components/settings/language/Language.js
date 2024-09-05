import { Link } from "react-router-dom";

function Language() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Default Language</h5>
                </div>
                <div className="card-body">
                  <form
                    action="https://weddemoadmin.abaris.in/admin/env_key_update"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="V3eUAFlZ4RZMMqWQoLNyu8KJ5Be77CCNc7fweveP"
                    />{" "}
                    <div className="form-group row">
                      <div className="col-lg-3">
                        <label className="col-from-label">
                          Default Language
                        </label>
                      </div>
                      <input
                        type="hidden"
                        name="types[]"
                        defaultValue="DEFAULT_LANGUAGE"
                      />

                      <div className="col-lg-6">
                        <select
                          className="form-select form-control aiz-selectpicker"
                          aria-label="Default select example"
                        >
                          <option>English</option>
                          <option value={1}>Bangla</option>
                          <option value={2}>polski</option>
                        </select>
                      </div>
                      <div className="col-lg-3">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-7 ">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">All Languages</h5>
                </div>
                <div className="card-body">
                  <table
                    className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                    style={{}}
                  >
                    <thead>
                      <tr className="footable-header">
                        <th
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          #
                        </th>
                        <th style={{ display: "table-cell" }}>Name</th>
                        <th style={{ display: "table-cell" }}>Code</th>
                        <th style={{ display: "table-cell" }}>RTL</th>
                        <th
                          className="text-right footable-last-visible"
                          width="20%"
                          style={{ display: "table-cell" }}
                        >
                          Options
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          1
                        </td>
                        <td style={{ display: "table-cell" }}>English</td>
                        <td style={{ display: "table-cell" }}>en</td>
                        <td style={{ display: "table-cell" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input defaultValue={1} type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <Link
                            className="btn btn-soft-info btn-icon btn-circle btn-sm"
                            to="/admin/inner/languages"
                            title="Translation"
                          >
                            <i className="las la-language" />
                          </Link>
                          <Link
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            to="/admin/languages/edit"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          2
                        </td>
                        <td style={{ display: "table-cell" }}>Bangla</td>
                        <td style={{ display: "table-cell" }}>bd</td>
                        <td style={{ display: "table-cell" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input defaultValue={2} type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <Link
                            className="btn btn-soft-info btn-icon btn-circle btn-sm"
                            to="/admin/inner/languages"
                            title="Translation"
                          >
                            <i className="las la-language" />
                          </Link>
                          <Link
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            to="/admin/languages/edit"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </Link>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://weddemoadmin.abaris.in/admin/languages/destroy/2"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        ></td>
                        <td style={{ display: "table-cell" }}>polski</td>
                        <td style={{ display: "table-cell" }}>pl</td>
                        <td style={{ display: "table-cell" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              defaultValue={6}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <Link
                            className="btn btn-soft-info btn-icon btn-circle btn-sm"
                            to="/admin/inner/languages"
                            title="Translation"
                          >
                            <i className="las la-language" />
                          </Link>
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://weddemoadmin.abaris.in/admin/languages/6/edit"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://weddemoadmin.abaris.in/admin/languages/destroy/6"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="aiz-pagination"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Add New Language</h5>
                </div>
                <div className="card-body">
                  <form>
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="V3eUAFlZ4RZMMqWQoLNyu8KJ5Be77CCNc7fweveP"
                    />{" "}
                    <div className="form-group row">
                      <div className="col-lg-2">
                        <label className="control-label">Name</label>
                      </div>
                      <div className="col-lg-10">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Eg. English"
                          className="form-control "
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-2">
                        <label className="control-label">Code</label>
                      </div>
                      <div className="col-lg-10">
                        <select
                          className="form-select form-control aiz-selectpicker mb-2 mb-md-0"
                          aria-label="Default select example"
                        >
                          <option>AD</option>
                          <option value="2">AE</option>
                          <option value="3">AF</option>
                          <option value="2">AG</option>
                          <option value="3">AL</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group mb-3 text-right">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Language;
