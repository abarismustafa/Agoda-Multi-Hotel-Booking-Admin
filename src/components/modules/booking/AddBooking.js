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
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="Search" className="form-label">
                          Search
                        </label>
                        <input
                          type="test"
                          className="form-control"
                          id="Search"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="Search" className="form-label">
                          Status
                        </label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="Search" className="form-label">
                          Hotal
                        </label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
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
  );
}
export default AddBooking;
