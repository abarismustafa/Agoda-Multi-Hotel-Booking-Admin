import React from 'react'
import FilterUsers from './FilterUsers';
import { Link } from 'react-router-dom';
import AllUsers from './AllUsers';

function Users() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Users</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/users/addnewUsers"
                className="btn btn-circle btn-primary"
              >
                Add New Users
              </Link>
            </div>
          </div>
        </div>
        <FilterUsers />
        <AllUsers />
      </div>
    </div>
  );
}

export default Users
