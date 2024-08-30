import React from "react";
import { Link } from "react-router-dom";
import FilterHostel from "./FilterHotels";
import AllHotels from "./AllHotels";

function Hotels() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Hostels</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/Hotels/add-hotel"
                className="btn btn-circle btn-primary"
              >
                Add New Hotel
              </Link>
            </div>
          </div>
        </div>
        <FilterHostel />
        <AllHotels />
      </div>
    </div>
  );
}

export default Hotels;
