import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AllCurrency() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="card">
        <div className="card-header row gutters-5">
          <div className="col text-center text-md-left">
            <h5 className="mb-md-0 h6">All Currencies</h5>
          </div>
          <div className="col-md-4">
            <form id="sort_currencies">
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
                <th style={{ display: "table-cell" }}>Currency name</th>
                <th
                  data-breakpoints="md"
                  style={{ display: "table-cell" }}
                >
                  Currency symbol
                </th>
                <th
                  data-breakpoints="md"
                  style={{ display: "table-cell" }}
                >
                  Currency code
                </th>
                <th
                  className="text-center footable-last-visible"
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
                <td style={{ display: "table-cell" }}>Indian Rupee</td>
                <td style={{ display: "table-cell" }}>Rs</td>
                <td style={{ display: "table-cell" }}>Rupee</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    onClick={handleShow}
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/28"
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
                  Israeli New Sheqel
                </td>
                <td style={{ display: "table-cell" }}>₪</td>
                <td style={{ display: "table-cell" }}>ILS</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/12"
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
                  Hungarian Forint
                </td>
                <td style={{ display: "table-cell" }}>Ft</td>
                <td style={{ display: "table-cell" }}>HUF</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/11"
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
                  Hong Kong Dollar
                </td>
                <td style={{ display: "table-cell" }}>$</td>
                <td style={{ display: "table-cell" }}>HKD</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/10"
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
                <td style={{ display: "table-cell" }}>Euro</td>
                <td style={{ display: "table-cell" }}>€</td>
                <td style={{ display: "table-cell" }}>EUR</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/9"
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
                <td style={{ display: "table-cell" }}>Danish Krone</td>
                <td style={{ display: "table-cell" }}>kr</td>
                <td style={{ display: "table-cell" }}>DKK</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/8"
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
                  7
                </td>
                <td style={{ display: "table-cell" }}>Czech Koruna</td>
                <td style={{ display: "table-cell" }}>Kč</td>
                <td style={{ display: "table-cell" }}>CZK</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/7"
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
                  8
                </td>
                <td style={{ display: "table-cell" }}>
                  Canadian Dollar
                </td>
                <td style={{ display: "table-cell" }}>$</td>
                <td style={{ display: "table-cell" }}>CAD</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/6"
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
                  9
                </td>
                <td style={{ display: "table-cell" }}>
                  Brazilian Real
                </td>
                <td style={{ display: "table-cell" }}>R$</td>
                <td style={{ display: "table-cell" }}>BRL</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/5"
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
                  10
                </td>
                <td style={{ display: "table-cell" }}>
                  Australian Dollar
                </td>
                <td style={{ display: "table-cell" }}>$</td>
                <td style={{ display: "table-cell" }}>AUD</td>
                <td
                  className="text-right footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <a
                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                    title="Edit"
                  >
                    <i className="las la-edit" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://weddemoadmin.abaris.in/admin/currency/destroy/2"
                    title="Delete"
                  >
                    <i className="las la-trash" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="aiz-pagination">
            <nav>
              <ul className="pagination">
                <li
                  className="page-item disabled"
                  aria-disabled="true"
                  aria-label="« Previous"
                >
                  <span className="page-link" aria-hidden="true">
                    ‹
                  </span>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://weddemoadmin.abaris.in/admin/currencies?page=2"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://weddemoadmin.abaris.in/admin/currencies?page=3"
                  >
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://weddemoadmin.abaris.in/admin/currencies?page=2"
                    rel="next"
                    aria-label="Next »"
                  >
                    ›
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Currency Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Name</label>
            <div className="col-md-9">
              <input type="text" name="name" defaultValue="Indian Rupee" className="form-control" placeholder="Name" required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Symbol</label>
            <div className="col-md-9">
              <input type="text" name="symbol" defaultValue="Rs" className="form-control" placeholder="Symbol" required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Code</label>
            <div className="col-md-9">
              <input type="text" name="code" defaultValue="Rupee" className="form-control" placeholder="Code" required />
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update Currency Info
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default AllCurrency