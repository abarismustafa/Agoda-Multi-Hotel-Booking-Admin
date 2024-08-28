import { Link } from "react-router-dom";

function HappyStories() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col text-center text-md-left">
                <h5 className="mb-md-0 h6">Happy Stories</h5>
              </div>
              <div className="col-md-4">
                <form id="sort_happy_story">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      name="search"
                      placeholder="Type name & Enter"
                    />
                  </div>
                </form>
              </div>
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
                    <th style={{ display: "table-cell" }}>Member Name</th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Partner Name
                    </th>
                    <th data-breakpoints="md" style={{ display: "table-cell" }}>
                      Post Time
                    </th>
                    <th style={{ display: "table-cell" }}>Approval</th>
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
                    <td style={{ display: "table-cell" }}>Alex Reynolds</td>
                    <td style={{ display: "table-cell" }}>
                      Dolorita&nbsp;&nbsp;Prieto
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-12 02:24:28
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          defaultValue={14}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
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
                    <td style={{ display: "table-cell" }}>Robert L. Gardner</td>
                    <td style={{ display: "table-cell" }}>
                      Dolorita&nbsp;&nbsp;Prieto
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-11 01:19:06
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={13}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      3
                    </td>
                    <td style={{ display: "table-cell" }}>
                      Derrick L. Lavender
                    </td>
                    <td style={{ display: "table-cell" }}>
                      Gregory&nbsp;J&nbsp;Luton
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-09 23:58:03
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={12}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      4
                    </td>
                    <td style={{ display: "table-cell" }}>Kathy T. Litton</td>
                    <td style={{ display: "table-cell" }}>Kimberley Lang</td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-08 06:10:27
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={11}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      5
                    </td>
                    <td style={{ display: "table-cell" }}>Sylvia J. Love</td>
                    <td style={{ display: "table-cell" }}>Kimberley Lang</td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-08 03:05:08
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={10}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      6
                    </td>
                    <td style={{ display: "table-cell" }}>Nicole Hruby</td>
                    <td style={{ display: "table-cell" }}>
                      Dolorita&nbsp;&nbsp;Prieto
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-08 03:00:45
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={9}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      7
                    </td>
                    <td style={{ display: "table-cell" }}>Ramona D. Mears</td>
                    <td style={{ display: "table-cell" }}>
                      Gregory&nbsp;J&nbsp;Luton
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-08 02:55:32
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={8}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      8
                    </td>
                    <td style={{ display: "table-cell" }}>Donna J. Perryman</td>
                    <td style={{ display: "table-cell" }}>
                      Gregory&nbsp;J&nbsp;Luton
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-07 07:10:20
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={7}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      9
                    </td>
                    <td style={{ display: "table-cell" }}>Tate Kennedy</td>
                    <td style={{ display: "table-cell" }}>
                      Gregory&nbsp;J&nbsp;Luton
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-06 08:21:38
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      10
                    </td>
                    <td style={{ display: "table-cell" }}>Jane R Lamy</td>
                    <td style={{ display: "table-cell" }}>
                      Dolorita&nbsp;&nbsp;Prieto
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-06 08:17:29
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={5}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      11
                    </td>
                    <td style={{ display: "table-cell" }}>Idona Mccoy</td>
                    <td style={{ display: "table-cell" }}>
                      Dolorita&nbsp;&nbsp;Prieto
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-06 05:38:35
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={4}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      12
                    </td>
                    <td style={{ display: "table-cell" }}>Olivia Emma</td>
                    <td style={{ display: "table-cell" }}>
                      Gregory&nbsp;J&nbsp;Luton
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-06 05:32:40
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={3}
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
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      13
                    </td>
                    <td style={{ display: "table-cell" }}>Matthew Ryan</td>
                    <td style={{ display: "table-cell" }}>
                      Gregory&nbsp;J&nbsp;Luton
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-06 05:29:22
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={2}
                          type="checkbox"
                        />
                        <span className="slider round" />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      14
                    </td>
                    <td style={{ display: "table-cell" }}>Kimberley Lang</td>
                    <td style={{ display: "table-cell" }}>
                      Gregory&nbsp;J&nbsp;Luton
                    </td>
                    <td style={{ display: "table-cell" }}>
                      2021-04-06 05:25:49
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          // onChange="update_status(this)"
                          defaultValue={1}
                          type="checkbox"
                        />
                        <span className="slider round" />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        to="/admin/happy-story/edit-happy-stories"
                        className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                        title="Edit"
                      >
                        <i className="las la-edit" />
                      </Link>
                      <Link
                        to="/admin/happy-story/story-details"
                        className="btn btn-soft-success btn-icon btn-circle btn-sm"
                        title="View"
                      >
                        <i className="las la-eye" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="aiz-pagination"></div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default HappyStories;
