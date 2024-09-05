import React from "react";
import { Link } from "react-router-dom";
import FilterPopup from "./FilterPopup";
import PopupList from "./PopupList";

function Popup() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Popup</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/popup/addpopup"
                className="btn btn-circle btn-primary"
              >
                Add New Popup
              </Link>
            </div>
          </div>
        </div>
        <FilterPopup />
        <PopupList />
      </div>
    </div>
  );
}

export default Popup;
