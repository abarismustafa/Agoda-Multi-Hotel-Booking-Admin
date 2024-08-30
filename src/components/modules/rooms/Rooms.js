import React from "react";
import { Link } from "react-router-dom";
import FilterRoom from "./FilterRoom";
import AllRooms from "./AllRooms";

function Rooms() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Rooms</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/rooms/addroom"
                className="btn btn-circle btn-primary"
              >
                Add New Room
              </Link>
            </div>
          </div>
        </div>
        <FilterRoom />
        <AllRooms />
      </div>
    </div>
  );
}

export default Rooms;
