import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AllCities() {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">All Cities</h5>
                        </div>
                        <div className="col-md-4">
                            <form className id="sort_cities" action method="GET">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="q24jh" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>City</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>State</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Country</th><th className="text-right footable-last-visible" width="20%" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Bombuflat</td>
                                    <td style={{ display: 'table-cell' }}>Andaman and Nicobar Islands</td>
                                    <td style={{ display: 'table-cell' }}>India</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to="/admin/cities/edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>
                                        <Link to="#" data-href="https://weddemoadmin.abaris.in/admin/cities/destroy/1" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => setSmShow(true)}>
                                            <i className="las la-trash" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Garacharma</td>
                                    <td style={{ display: 'table-cell' }}>Andaman and Nicobar Islands</td>
                                    <td style={{ display: 'table-cell' }}>India</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to="/admin/cities/edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>
                                        <Link to="#" data-href="https://weddemoadmin.abaris.in/admin/cities/destroy/1" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => setSmShow(true)}>
                                            <i className="las la-trash" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Port Blair</td>
                                    <td style={{ display: 'table-cell' }}>Andaman and Nicobar Islands</td>
                                    <td style={{ display: 'table-cell' }}>India</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to="/admin/cities/edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>
                                        <Link to="#" data-href="https://weddemoadmin.abaris.in/admin/cities/destroy/1" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => setSmShow(true)}>
                                            <i className="las la-trash" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Bombuflat</td>
                                    <td style={{ display: 'table-cell' }}>Andaman and Nicobar Islands</td>
                                    <td style={{ display: 'table-cell' }}>India</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to="/admin/cities/edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>
                                        <Link to="#" data-href="https://weddemoadmin.abaris.in/admin/cities/destroy/1" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => setSmShow(true)}>
                                            <i className="las la-trash" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Bombuflat</td>
                                    <td style={{ display: 'table-cell' }}>Andaman and Nicobar Islands</td>
                                    <td style={{ display: 'table-cell' }}>India</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to="/admin/cities/edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>
                                        <Link to="#" data-href="https://weddemoadmin.abaris.in/admin/cities/destroy/1" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => setSmShow(true)}>
                                            <i className="las la-trash" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Bombuflat</td>
                                    <td style={{ display: 'table-cell' }}>Andaman and Nicobar Islands</td>
                                    <td style={{ display: 'table-cell' }}>India</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to="/admin/cities/edit" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>
                                        <Link to="#" data-href="https://weddemoadmin.abaris.in/admin/cities/destroy/1" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => setSmShow(true)}>
                                            <i className="las la-trash" />
                                        </Link>
                                    </td>
                                </tr>
                                <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                >
                                    <Modal.Header>
                                        <h4 className="modal-title h6">Delete Confirmation</h4>
                                        <button type="button" className="close" aria-hidden="true" onClick={() => setSmShow(false)} />
                                    </Modal.Header>
                                    <Modal.Body className='text-center'>
                                        <p className="mt-1">Are you sure to delete this?</p>
                                        <button type="button" className="btn btn-light mt-2" onClick={() => setSmShow(false)}>Cancel</button>
                                        <a id="delete-link" className="btn btn-primary mt-2" href="https://weddemoadmin.abaris.in/admin/cities/destroy/1">Delete</a>
                                    </Modal.Body>
                                </Modal>

                            </tbody>
                        </table>
                        <div className="aiz-pagination">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                        <span className="page-link" aria-hidden="true">‹</span>
                                    </li>
                                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=3">3</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=4">4</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=5">5</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=6">6</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=7">7</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=8">8</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=9">9</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=10">10</a></li>
                                    <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=4793">4793</a></li>
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=4794">4794</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="https://weddemoadmin.abaris.in/admin/cities?page=2" rel="next" aria-label="Next »">›</a>
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

export default AllCities