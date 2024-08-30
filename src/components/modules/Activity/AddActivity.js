import React, { useState } from "react";
import '../booking/addBooking.css';

function AddActivity() {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        alias: "",
        maxChildren: "",
        maxAdults: "",
        maxPeople: "",
        description: "",
        hotel: "",
        pricePerPerson: "",
        duration: "",
        durationUnit: "",
        latitude: "",
        longitude: "",
        release: "Published",  // Default value
        homepage: "",
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
                                        <h5 className="mb-md-0 h6">Add Activity</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="title" className="form-label">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="title"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="subtitle" className="form-label">Subtitle</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subtitle"
                                                    name="subtitle"
                                                    value={formData.subtitle}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="alias" className="form-label">Alias</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="alias"
                                                    name="alias"
                                                    value={formData.alias}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="maxChildren" className="form-label">Max Children</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="maxChildren"
                                                    name="maxChildren"
                                                    value={formData.maxChildren}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="maxAdults" className="form-label">Max Adults</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="maxAdults"
                                                    name="maxAdults"
                                                    value={formData.maxAdults}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="maxPeople" className="form-label">Max People</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="maxPeople"
                                                    name="maxPeople"
                                                    value={formData.maxPeople}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <label htmlFor="description" className="form-label">Description</label>
                                                <textarea
                                                    className="form-control"
                                                    id="description"
                                                    name="description"
                                                    rows="3"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="hotel" className="form-label">Hotel</label>
                                                <select
                                                    className="form-control"
                                                    id="hotel"
                                                    name="hotel"
                                                    value={formData.hotel}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Hotel</option>
                                                    <option value="1">Hotel One</option>
                                                    <option value="2">Hotel Two</option>
                                                    <option value="3">Hotel Three</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="pricePerPerson" className="form-label">Price / Person</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pricePerPerson"
                                                    name="pricePerPerson"
                                                    value={formData.pricePerPerson}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="duration" className="form-label">Duration</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="duration"
                                                    name="duration"
                                                    value={formData.duration}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="durationUnit" className="form-label">Duration Unit</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="durationUnit"
                                                    name="durationUnit"
                                                    value={formData.durationUnit}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="latitude" className="form-label">Latitude</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="latitude"
                                                    name="latitude"
                                                    value={formData.latitude}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="longitude" className="form-label">Longitude</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="longitude"
                                                    name="longitude"
                                                    value={formData.longitude}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="release" className="form-label">Release</label>
                                                <select
                                                    className="form-control"
                                                    id="release"
                                                    name="release"
                                                    value={formData.release}
                                                    onChange={handleChange}
                                                >
                                                    <option value="Published">Published</option>
                                                    <option value="Not published">Not published</option>
                                                    <option value="Awaiting">Awaiting</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 mb-3">
                                                <label htmlFor="homepage" className="form-label">Homepage</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="homepage"
                                                    name="homepage"
                                                    value={formData.homepage}
                                                    onChange={handleChange}
                                                />
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

export default AddActivity;
