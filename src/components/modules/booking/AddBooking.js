import { useState } from "react";

import '../booking/addBooking.css'
function AddBooking() {

    const [entries, setEntries] = useState([
        { id: 1, hotel: '', room: '', description: '', adults: '', children: '', number: '', taxRate: '', amount: '' }
    ]);

    const handleAddEntry = () => {
        const newEntry = { id: entries.length + 1, hotel: '', room: '', description: '', adults: '', children: '', number: '', taxRate: '', amount: '' };
        setEntries([...entries, newEntry]);
    };

    const handleRemoveEntry = (id) => {
        const updatedEntries = entries.filter(entry => entry.id !== id);
        setEntries(updatedEntries);
    };


    const [rows, setRows] = useState([
        {
            id: 1,
            title: "",
            adults: "",
            children: "",
            duration: "",
            date: "",
            taxRate: "",
            amount: "",
        },
    ]);

    // Function to handle adding a new row
    const handleAddRow = () => {
        const newRow = {
            id: rows.length + 1,
            title: "",
            adults: "",
            children: "",
            duration: "",
            date: "",
            taxRate: "",
            amount: "",
        };
        setRows([...rows, newRow]);
    };

    // Function to handle removing a row
    const handleRemoveRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
    };

    // Function to handle input changes
    const handleChange = (id, field, value) => {
        const updatedRows = rows.map((row) =>
            row.id === id ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };


    const [rowsExtraService, setRowsExtraService] = useState([
        {
            id: 1,
            title: "",
            adults: "",
            children: "",
            duration: "",
            date: "",
            tax_rate: "",
            amount: "",
        },
    ]);

    // Function to handle adding a new row
    const handleAddExtraServices = () => {
        const newRow = {
            id: rowsExtraService.length + 1,
            title: "",
            adults: "",
            children: "",
            duration: "",
            date: "",
            taxRate: "",
            amount: "",
        };
        setRowsExtraService([...rowsExtraService, newRow]);
    };

    // Function to handle removing a row
    const handleRemoveExtraServices = (id) => {
        const updatedRows = rowsExtraService.filter((row) => row.id !== id);
        setRowsExtraService(updatedRows);
    };

    // Function to handle input changes
    const handleChangeeExtraServices = (id, field, value) => {
        const updatedRows = rowsExtraService.map((row) =>
            row.id === id ? { ...row, [field]: value } : row
        );
        setRowsExtraService(updatedRows);
    };





    const [rowsTax, setRowsTax] = useState([
        {
            id: 1,
            title: "",
            adults: "",
            children: "",
            duration: "",
            date: "",
            tax_rate: "",
            amount: "",
        },
    ]);

    // Function to handle adding a new row
    const handleAddTax = () => {
        const newRow = {
            id: rowsTax.length + 1,
            title: "",
            adults: "",
            children: "",
            duration: "",
            date: "",
            taxRate: "",
            amount: "",
        };
        setRowsTax([...rowsTax, newRow]);
    };

    // Function to handle removing a row
    const handleRemoveTax = (id) => {
        const updatedRows = rowsTax.filter((row) => row.id !== id);
        setRowsTax(updatedRows);
    };

    // Function to handle input changes
    const handleChangeeTax = (id, field, value) => {
        const updatedRows = rowsTax.map((row) =>
            row.id === id ? { ...row, [field]: value } : row
        );
        setRowsTax(updatedRows);
    };
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header row gutters-5">
                                    <div className="col text-center text-md-left">
                                        <h5 className="mb-md-0 h6">Add Booking</h5>
                                    </div>
                                    <div className="col-md-3">
                                        {/* <form id="sort_members" >
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type first name / last name / ID & Enter" fdprocessedid="hh7lxk" />
                                    </div>
                                </form> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Hotel</label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Check-in</label>
                                                <input type="date" className="form-control" id="Search" placeholder="Search" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Check-out</label>
                                                <input type="date" className="form-control" id="Search" placeholder="Search" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Nights</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Nights" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Adults</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Adults" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Children</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Children" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Discount</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Discount" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Down payment</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Down payment" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Ex-tax total</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Ex-tax total" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Tax amount</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Tax amount" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Total</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Total" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Paid</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Paid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Balance</label>
                                                <input type="number" className="form-control" id="Search" placeholder="Balance" />
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Customer</label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Firstname</label>
                                                <input type="text" className="form-control" id="Search" placeholder="Firstname" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Lastname </label>
                                                <input type="text" className="form-control" id="Search" placeholder="Lastname" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">E-mail </label>
                                                <input type="email" className="form-control" id="Search" placeholder="Lastname" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Company </label>
                                                <input type="text" className="form-control" id="Search" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Address  </label>
                                                <input type="text" className="form-control" id="Search" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Postcode   </label>
                                                <input type="text" className="form-control" id="Search" placeholder="Postcode " />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">City    </label>
                                                <input type="text" className="form-control" id="Search" placeholder="City  " />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Phone</label>
                                                <input type="text" className="form-control" id="Search" placeholder="City  " />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Mobile</label>
                                                <input type="text" className="form-control" id="Search" placeholder="Mobile" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Country</label>
                                                <input type="text" className="form-control" id="Search" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Comments</label>
                                                <input type="text" className="form-control" id="Search" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Status</label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Payment option</label>
                                                <select className="form-control" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Room</label>
                                                <div className="table-responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Hotel</th>
                                                                <th>Room</th>
                                                                <th>Room descr.</th>
                                                                <th>Adults</th>
                                                                <th>Children</th>
                                                                <th>No.</th>
                                                                <th>Tax rate</th>
                                                                <th>Amount</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {entries.map((entry) => (
                                                                <tr key={entry.id}>
                                                                    <td>{entry.id}</td>
                                                                    <td><input type="text" className="form-control" value={entry.hotel} /></td>
                                                                    <td><input type="text" className="form-control" value={entry.room} /></td>
                                                                    <td><input type="text" className="form-control" value={entry.description} /></td>
                                                                    <td><input type="number" className="form-control" value={entry.adults} /></td>
                                                                    <td><input type="number" className="form-control" value={entry.children} /></td>
                                                                    <td><input type="number" className="form-control" value={entry.number} /></td>
                                                                    <td><input type="number" className="form-control" value={entry.taxRate} /></td>
                                                                    <td><input type="number" className="form-control" value={entry.amount} /></td>
                                                                    <td>
                                                                        {/* Remove "cross" icon */}
                                                                        <button onClick={() => handleRemoveEntry(entry.id)}>Remove</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <button onClick={handleAddEntry}>+ New entry</button>
                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Activities</label>
                                                <div className="table-responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Title</th>
                                                                <th>Adults</th>
                                                                <th>Children</th>
                                                                <th>Duration</th>
                                                                <th>Date</th>
                                                                <th>Tax Rate</th>
                                                                <th>Amount</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {rows.map((row) => (
                                                                <tr key={row.id}>
                                                                    <td>{row.id}</td>
                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            value={row.title}
                                                                            onChange={(e) => handleChange(row.id, "title", e.target.value)}
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="number"
                                                                            value={row.adults}
                                                                            onChange={(e) =>
                                                                                handleChange(row.id, "adults", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="number"
                                                                            value={row.children}
                                                                            onChange={(e) =>
                                                                                handleChange(row.id, "children", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            value={row.duration}
                                                                            onChange={(e) =>
                                                                                handleChange(row.id, "duration", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="date"
                                                                            value={row.date}
                                                                            onChange={(e) => handleChange(row.id, "date", e.target.value)}
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="number"
                                                                            value={row.taxRate}
                                                                            onChange={(e) =>
                                                                                handleChange(row.id, "taxRate", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="number"
                                                                            value={row.amount}
                                                                            onChange={(e) => handleChange(row.id, "amount", e.target.value)}
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <button onClick={() => handleRemoveRow(row.id)}>Remove</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <button onClick={handleAddRow}>Add Row</button>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Extra services</label>
                                                <div className="table-responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Title</th>
                                                                <th>Quantity </th>
                                                                <th>Tax rate %</th>
                                                                <th>Amount</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {rowsExtraService.map((row) => (
                                                                <tr key={row.id}>
                                                                    <td>{row.id}</td>
                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            value={row.title}
                                                                            onChange={(e) => handleChangeeExtraServices(row.id, "title", e.target.value)}
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            value={row.quantity}
                                                                            onChange={(e) =>
                                                                                handleChangeeExtraServices(row.id, "quantity", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="number"
                                                                            value={row.tax_rate}
                                                                            onChange={(e) =>
                                                                                handleChangeeExtraServices(row.id, "tax_rate", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            value={row.amount}
                                                                            onChange={(e) =>
                                                                                handleChangeeExtraServices(row.id, "amount", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>

                                                                    <td>
                                                                        <button onClick={() => handleRemoveExtraServices(row.id)}>Remove</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <button onClick={handleAddExtraServices}>Add Row</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label htmlFor="Search" className="form-label">Taxes</label>
                                                <div className="table-responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Name</th>
                                                                <th>Amount</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {rowsTax.map((row) => (
                                                                <tr key={row.id}>
                                                                    <td>{row.id}</td>
                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            value={row.name}
                                                                            onChange={(e) => handleChangeeExtraServices(row.id, "name", e.target.value)}
                                                                            className="form-control"
                                                                        />
                                                                    </td>

                                                                    <td>
                                                                        <input
                                                                            type="text"
                                                                            value={row.amount}
                                                                            onChange={(e) =>
                                                                                handleChangeeExtraServices(row.id, "amount", e.target.value)
                                                                            }
                                                                            className="form-control"
                                                                        />
                                                                    </td>

                                                                    <td>
                                                                        <button onClick={() => handleRemoveTax(row.id)}>Remove</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <button onClick={handleAddTax}>Add Row</button>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="col-lg-6">
                                            <div className="mb-3 mt-4">
                                                <button className="btn btn-success">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddBooking