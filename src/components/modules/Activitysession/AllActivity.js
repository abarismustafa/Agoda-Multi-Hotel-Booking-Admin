import { useState } from "react";
import { Link } from "react-router-dom";

function AllActivity() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col text-center text-md-left">
                                <h5 className="mb-md-0 h6">All Activity Sessions</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                                <thead>
                                    <tr className="footable-header">
                                        <th className="footable-first-visible" style={{ display: 'table-cell' }}>ID</th>
                                        <th style={{ display: 'table-cell' }}>Activity</th>
                                        <th style={{ display: 'table-cell' }}>Start Date</th>
                                        <th style={{ display: 'table-cell' }}>Price</th>
                                        <th style={{ display: 'table-cell' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td>
                                        <td style={{ display: 'table-cell' }}>Mountain Hiking</td>
                                        <td style={{ display: 'table-cell' }}>2024-09-01</td>
                                        <td style={{ display: 'table-cell' }}>$100</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <button className="btn btn-secondary btn-sm me-2">Edit</button>
                                            <button className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                    {/* Additional rows can be added here */}
                                </tbody>
                            </table>
                            <div className="aiz-pagination">
                                {/* Pagination controls can be added here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllActivity;
