import React from 'react'
import { Link } from 'react-router-dom';

function WebsiteSetupPages() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h1 className="h3">Website Pages</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h6 className="mb-0 fw-600">All Pages</h6>
                            <Link to="/admin/website/custom-pages/create" className="btn btn-primary">Add New Page</Link>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="md" style={{ display: 'table-cell' }}>URL</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Actions</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <a href="https://weddemoadmin.abaris.in/home" className="text-reset">Home Page</a>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>
                                            https://weddemoadmin.abaris.in
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="/admin/website/custom-pages/edit" className="btn btn-icon btn-circle btn-sm btn-soft-primary" title="Edit">
                                                <i className="las la-pen" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <a href="https://weddemoadmin.abaris.in/home" className="text-reset">Home Page</a>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>
                                            https://weddemoadmin.abaris.in
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="/admin/website/custom-pages/edit" className="btn btn-icon btn-circle btn-sm btn-soft-primary" title="Edit">
                                                <i className="las la-pen" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <a href="https://weddemoadmin.abaris.in/home" className="text-reset">Home Page</a>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>
                                            https://weddemoadmin.abaris.in
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="/admin/website/custom-pages/edit" className="btn btn-icon btn-circle btn-sm btn-soft-primary" title="Edit">
                                                <i className="las la-pen" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <a href="https://weddemoadmin.abaris.in/home" className="text-reset">Home Page</a>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>
                                            https://weddemoadmin.abaris.in
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="/admin/website/custom-pages/edit" className="btn btn-icon btn-circle btn-sm btn-soft-primary" title="Edit">
                                                <i className="las la-pen" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <a href="https://weddemoadmin.abaris.in/home" className="text-reset">Home Page</a>
                                        </td>
                                        <td style={{ display: 'table-cell' }}>
                                            https://weddemoadmin.abaris.in
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to="/admin/website/custom-pages/edit" className="btn btn-icon btn-circle btn-sm btn-soft-primary" title="Edit">
                                                <i className="las la-pen" />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WebsiteSetupPages