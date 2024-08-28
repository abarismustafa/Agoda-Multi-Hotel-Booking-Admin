import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AllReligionsAndCaste({ data }) {
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
                            <h5 className="mb-md-0 h6">{data.title}</h5>
                        </div>
                        <div className="col-md-4">
                            <form className id="sort_religions" action method="GET">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="tywkpk" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Name</th>
                                    <th style={{ display: 'table-cell' }}>Religion</th>
                                    <th className="text-right footable-last-visible" width="20%" style={{ display: 'table-cell' }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.tabularData.map((item) => {
                                    return <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{item.id}</td>
                                        <td style={{ display: 'table-cell' }}>{item.name}</td>
                                        <td style={{ display: 'table-cell' }}>{item.religion}</td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="#" className="btn btn-soft-primary btn-icon btn-circle btn-sm" onClick={handleShow} title="Edit">
                                                <i className="las la-edit" />
                                            </Link>
                                            <Link to="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://weddemoadmin.abaris.in/admin/religions/destroy/10" title="Delete" onClick={() => setSmShow(true)}>
                                                <i className="las la-trash" />
                                            </Link>
                                        </td>
                                    </tr>
                                })}
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header>
                                        <h5 className="modal-title h6">{data.modalData.title}</h5>
                                        <button type="button" className="close" onClick={handleClose}>
                                        </button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="card-body">
                                            <form action="https://weddemoadmin.abaris.in/admin/castes/9" method="POST">
                                                <input name="_method" type="hidden" defaultValue="PATCH" />
                                                <input type="hidden" name="_token" defaultValue="DV6opNN5kN1eIp2BeSIuwMD7o1uf8dvUUYLEEtTq" />
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Religion</label>
                                                    <div>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Open this select menu</option>
                                                            <option value={1}>Islam</option>
                                                            <option value={2} selected>Judaismm</option>
                                                            <option value={3}>Hinduism</option>
                                                            <option value={4}>Christianity</option>
                                                            <option value={5}>Buddhism</option>
                                                            <option value={6}>Jainism</option>
                                                            <option value={7}>Baha'i</option>
                                                            <option value={8}>Sikhism</option>
                                                            <option value={9}>Confucianism</option>
                                                            <option value={10}>Atheism</option>
                                                            <option value={16}>ertt</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">{data.modalData.casteName}</label>
                                                    <input type="text" id="name" name="name" defaultValue="Vaishyas" className="form-control" required fdprocessedid="usb3b6" />
                                                </div>
                                                <div className="form-group mb-3 text-right">
                                                    <button type="button" className="btn btn-primary" fdprocessedid="n5vbzk">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                                <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                >
                                    <Modal.Header>
                                        <h4 class="modal-title h6">Delete Confirmation</h4>
                                        <button type="button" class="close" onClick={() => setSmShow(false)} aria-hidden="true"></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="text-center">
                                            <p className="mt-1">Are you sure to delete this?</p>
                                            <button type="button" className="btn btn-light mt-2" onClick={() => setSmShow(false)}>Cancel</button>
                                            <a id="delete-link" className="btn btn-primary mt-2" href="https://weddemoadmin.abaris.in/admin/reported/destroy/12">Delete</a>
                                        </div>
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
                                    <li className="page-item"><a className="page-link" href="https://weddemoadmin.abaris.in/admin/religions?page=2">2</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="https://weddemoadmin.abaris.in/admin/religions?page=2" rel="next" aria-label="Next »">›</a>
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

export default AllReligionsAndCaste