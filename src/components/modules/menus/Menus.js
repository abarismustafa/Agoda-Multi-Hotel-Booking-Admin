import React from 'react'
import FilterMenus from './FilterMenus';
import { Link } from 'react-router-dom';
import MenusList from './MenusList';

function Menus() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Menus</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/menus/addmenus"
                className="btn btn-circle btn-primary"
              >
                Add New Menus
              </Link>
            </div>
          </div>
        </div>
        <FilterMenus />
        <MenusList />
      </div>
    </div>
  );
}

export default Menus
