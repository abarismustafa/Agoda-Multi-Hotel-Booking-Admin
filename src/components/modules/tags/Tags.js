import React from 'react'
import FilterTags from './FilterTags';
import { Link } from 'react-router-dom';
import AllTags from './AllTags';

function Tags() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Tags</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/tags/addTags"
                className="btn btn-circle btn-primary"
              >
                Add New Tags
              </Link>
            </div>
          </div>
        </div>
        <FilterTags />
        <AllTags />
      </div>
    </div>
  );
}

export default Tags
