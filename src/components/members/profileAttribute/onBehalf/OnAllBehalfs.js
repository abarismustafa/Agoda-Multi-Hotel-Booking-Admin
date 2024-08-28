import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function OnAllBehalfs({ data }) {
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">{data.allData.title}</h5>
                        </div>
                        <div className="col-md-4">
                            <form className id="sort_on_behalves" action method="GET">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="muxueb" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th className="text-right footable-last-visible" width="20%" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>
                                {data.allData.tabularData.map((item) => {
                                    return <tr key={item.id}>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{item.id}</td>
                                        <td style={{ display: 'table-cell' }}>{item.name}</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Edit" onClick={handleShow}>
                                                <i className="las la-edit" />
                                            </Link>
                                            <Link to="#" data-href="https://weddemoadmin.abaris.in/admin/on-behalf/destroy/5" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => setSmShow(true)}>
                                                <i className="las la-trash" />
                                            </Link>
                                        </td>
                                    </tr>
                                })}

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header>
                                        <h5 className="modal-title h6">{data.modalData.title}</h5>
                                        <button type="button" className="close" onClick={handleClose} />
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Name</label>
                                            <div className="col-md-9">
                                                <input type="text" id="name" name="name" defaultValue="Selfs" className="form-control" required />
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button type="button" className="btn btn-sm btn-light" onClick={handleClose}>Close</button>
                                        <button type="submit" className="btn btn-sm btn-primary">Update</button>
                                    </Modal.Footer>
                                </Modal>

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
                                    <Modal.Body className="text-center">
                                        <p className="mt-1">Are you sure to delete this?</p>
                                        <button type="button" className="btn btn-light mt-2" onClick={() => setSmShow(false)}>Cancel</button>
                                        <a id="delete-link" className="btn btn-primary mt-2" href="https://weddemoadmin.abaris.in/admin/on-behalf/destroy/5">Delete</a>
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

export default OnAllBehalfs