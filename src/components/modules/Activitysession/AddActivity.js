import React, { useState } from "react";
import '../booking/addBooking.css';

function AddActivitysess() {
    const [formData, setFormData] = useState({
        activity: "",
        startDate: "",
        endDate: "",
        days: "",
        pricePerAdult: "",
        pricePerChild: "",
        discount: "",
        discountType: "",
        includedTax: "",
        addedTaxes: "",
        sessions: "",
        user: ""
    });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
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
                                        <h5 className="mb-md-0 h6">Add Activity Sessions</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="activity" className="form-label">Activity</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="activity"
                                                    name="activity"
                                                    value={formData.activity}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="startDate"
                                                    name="startDate"
                                                    value={formData.startDate}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="endDate" className="form-label">End Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="endDate"
                                                    name="endDate"
                                                    value={formData.endDate}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="days" className="form-label">Days</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="days"
                                                    name="days"
                                                    value={formData.days}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="pricePerAdult" className="form-label">Price / Adult</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pricePerAdult"
                                                    name="pricePerAdult"
                                                    value={formData.pricePerAdult}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="pricePerChild" className="form-label">Price / Child</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pricePerChild"
                                                    name="pricePerChild"
                                                    value={formData.pricePerChild}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="discount" className="form-label">Discount</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="discount"
                                                    name="discount"
                                                    value={formData.discount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="discountType" className="form-label">Discount Type</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="discountType"
                                                    name="discountType"
                                                    value={formData.discountType}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="includedTax" className="form-label">Included Tax</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="includedTax"
                                                    name="includedTax"
                                                    value={formData.includedTax}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="addedTaxes" className="form-label">Added Taxes</label>
                                                <select
                                                    className="form-control"
                                                    id="addedTaxes"
                                                    name="addedTaxes"
                                                    value={formData.addedTaxes}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Tax</option>
                                                    <option value="GST">GST</option>
                                                    <option value="Service Tax">Service Tax</option>
                                                    <option value="VAT">VAT</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="sessions" className="form-label">Sessions</label>
                                                <select
                                                    className="form-control"
                                                    id="sessions"
                                                    name="sessions"
                                                    value={formData.sessions}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select sessions</option>
                                                    <option value="GST">sessions</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="user" className="form-label">User</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="user"
                                                    name="user"
                                                    value={formData.user}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-6 mt-4">
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddActivitysess;
