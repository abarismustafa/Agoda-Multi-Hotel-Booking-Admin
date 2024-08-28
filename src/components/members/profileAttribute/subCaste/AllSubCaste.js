import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AllSubCaste() {
    const [smShow, setSmShow] = useState(false);
    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">All Sub Castes</h5>
                        </div>
                        <div className="col-md-4">
                            <form className id="sort_sub_casts" action method="GET">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="0zubjff" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Sub Caste</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Caste</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>Religion</th><th className="text-right footable-last-visible" width="20%" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Chamar</td>
                                    <td style={{ display: 'table-cell' }}>Brahmin</td>
                                    <td style={{ display: 'table-cell' }}>Hinduism</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                                        <Link to="/admin/sub-castes/edit-sub-castes" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>

                                        <Link to="#" onClick={() => setSmShow(true)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/sub-castes/destroy/4" title="Delete">
                                            <i className="las la-trash" />
                                        </Link>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Chamar</td>
                                    <td style={{ display: 'table-cell' }}>Brahmin</td>
                                    <td style={{ display: 'table-cell' }}>Hinduism</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                                        <Link to="/admin/sub-castes/edit-sub-castes" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>

                                        <Link to="#" onClick={() => setSmShow(true)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/sub-castes/destroy/4" title="Delete">
                                            <i className="las la-trash" />
                                        </Link>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Chamar</td>
                                    <td style={{ display: 'table-cell' }}>Brahmin</td>
                                    <td style={{ display: 'table-cell' }}>Hinduism</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                                        <Link to="/admin/sub-castes/edit-sub-castes" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>

                                        <Link to="#" onClick={() => setSmShow(true)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/sub-castes/destroy/4" title="Delete">
                                            <i className="las la-trash" />
                                        </Link>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                    <td style={{ display: 'table-cell' }}>Chamar</td>
                                    <td style={{ display: 'table-cell' }}>Brahmin</td>
                                    <td style={{ display: 'table-cell' }}>Hinduism</td>
                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                                        <Link to="/admin/sub-castes/edit-sub-castes" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit">
                                            <i className="las la-edit" />
                                        </Link>

                                        <Link to="#" onClick={() => setSmShow(true)} className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/sub-castes/destroy/4" title="Delete">
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
                                        <button type="button" className="close" onClick={() => setSmShow(false)} aria-hidden="true" />
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className="mt-1">Are you sure to delete this?</p>
                                        <button type="button" className="btn btn-light mt-2" onClick={() => setSmShow(false)}>Cancel</button>
                                        <a id="delete-link" className="btn btn-primary mt-2" href="https://weddemoadmin.abaris.in/admin/sub-castes/destroy/4">Delete</a>
                                    </Modal.Body>
                                </Modal>

                            </tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllSubCaste