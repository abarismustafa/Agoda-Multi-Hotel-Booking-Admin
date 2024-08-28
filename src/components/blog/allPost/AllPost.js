import { Link } from "react-router-dom";

function AllPost() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <h1 className="h3">All Posts</h1>
              </div>
              <div className="col text-right">
                <Link
                  to="/admin/blog-all-Post/create"
                  className="btn btn-circle btn-primary"
                >
                  <span>Add New Post</span>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <form id="sort_blogs">
              <div className="card-header row gutters-5">
                <div className="col text-center text-md-left">
                  <h5 className="mb-md-0 h6">All blog posts</h5>
                </div>
                <div className="col-md-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="search"
                      name="search"
                      placeholder="Type & Enter"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="card-body">
              <table
                className="table mb-0 aiz-table footable footable-1 breakpoint-xl"
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
                    <th style={{ display: "table-cell" }}>Title</th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Category
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Short Description
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Status
                    </th>
                    <th
                      className="text-right footable-last-visible"
                      width="10%"
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
                    <td style={{ display: "table-cell" }}>
                      What do successful relationships and successful businesses
                      have in common?
                    </td>
                    <td style={{ display: "table-cell" }}>Weeding Tips</td>
                    <td style={{ display: "table-cell" }}>
                      The leaders have a vision for the future and meet
                      regularly to plan how to achieve their goals. Most couples
                      stop thinking critically about their relationship after
                      the initial honeymoon stage.
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          type="checkbox"
                          // onChange="change_status(this)"
                          defaultValue={6}
                          defaultChecked
                        />
                        <span />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        to="/admin/blog-all-Post/edit"
                        title="Edit"
                      >
                        <i className="las la-pen" />
                      </Link>
                      <a
                        href="#"
                        className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://weddemoadmin.abaris.in/admin/blog/destroy/6"
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
                    >
                      2
                    </td>
                    <td style={{ display: "table-cell" }}>
                      What Does a Good Relationship Look Like?
                    </td>
                    <td style={{ display: "table-cell" }}>Weeding Tips</td>
                    <td style={{ display: "table-cell" }}>
                      What does a good relationship look like? In this post,
                      we’ll take a look at what makes a good relationship.
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          type="checkbox"
                          // onChange="change_status(this)"
                          defaultValue={5}
                          defaultChecked
                        />
                        <span />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        to="/admin/blog-all-Post/edit"
                        title="Edit"
                      >
                        <i className="las la-pen" />
                      </Link>
                      <a
                        href="#"
                        className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://weddemoadmin.abaris.in/admin/blog/destroy/5"
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
                    >
                      3
                    </td>
                    <td style={{ display: "table-cell" }}>
                      5 Things You Can do to Improve your Relationship Now
                    </td>
                    <td style={{ display: "table-cell" }}>Weeding Tips</td>
                    <td style={{ display: "table-cell" }}>
                      Change is possible in any relationship. But, it does
                      require dedication and persistence.
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          type="checkbox"
                          // onChange="change_status(this)"
                          defaultValue={4}
                          defaultChecked
                        />
                        <span />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        to="/admin/blog-all-Post/edit"
                        title="Edit"
                      >
                        <i className="las la-pen" />
                      </Link>
                      <a
                        href="#"
                        className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://weddemoadmin.abaris.in/admin/blog/destroy/4"
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
                    >
                      4
                    </td>
                    <td style={{ display: "table-cell" }}>
                      Marriage Advice for Newlyweds
                    </td>
                    <td style={{ display: "table-cell" }}>Life Partner</td>
                    <td style={{ display: "table-cell" }}>
                      Getting married is an exciting time! What marriage advice
                      for newlyweds will help keep your relationship strong over
                      time?
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          type="checkbox"
                          // onChange="change_status(this)"
                          defaultValue={3}
                          defaultChecked
                        />
                        <span />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        to="/admin/blog-all-Post/edit"
                        title="Edit"
                      >
                        <i className="las la-pen" />
                      </Link>
                      <a
                        href="#"
                        className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://weddemoadmin.abaris.in/admin/blog/destroy/3"
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
                    >
                      5
                    </td>
                    <td style={{ display: "table-cell" }}>Give and Take</td>
                    <td style={{ display: "table-cell" }}>Life Partner</td>
                    <td style={{ display: "table-cell" }}>
                      Relationships often require give and take. We’ve been
                      learning that during our engagement and now in marriage.
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          type="checkbox"
                          // onChange="change_status(this)"
                          defaultValue={2}
                          defaultChecked
                        />
                        <span />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        to="/admin/blog-all-Post/edit"
                        title="Edit"
                      >
                        <i className="las la-pen" />
                      </Link>
                      <a
                        href="#"
                        className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://weddemoadmin.abaris.in/admin/blog/destroy/2"
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
                    >
                      6
                    </td>
                    <td style={{ display: "table-cell" }}>
                      What Does a Good Relationship Look Like?
                    </td>
                    <td style={{ display: "table-cell" }}>Weeding Tips</td>
                    <td style={{ display: "table-cell" }}>
                      What does a good relationship look like? In this post,
                      we’ll take a look at what makes a good relationship.
                    </td>
                    <td style={{ display: "table-cell" }}>
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          type="checkbox"
                          // onChange="change_status(this)"
                          defaultValue={1}
                          defaultChecked
                        />
                        <span />
                      </label>
                    </td>
                    <td
                      className="text-right footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        to="/admin/blog-all-Post/edit"
                        title="Edit"
                      >
                        <i className="las la-pen" />
                      </Link>
                      <a
                        href="#"
                        className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                        data-href="https://weddemoadmin.abaris.in/admin/blog/destroy/1"
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
        {/* Footer */}
      </div>
    </>
  );
}
export default AllPost;
