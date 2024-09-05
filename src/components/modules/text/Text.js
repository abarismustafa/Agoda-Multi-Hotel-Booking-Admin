import React from 'react'
import FilterText from './FilterText';
import TextList from './TextList';
import { Link } from 'react-router-dom';

function Text() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Texts</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/text/addnewtext  "
                className="btn btn-circle btn-primary"
              >
                Add New Text
              </Link>
            </div>
          </div>
        </div>
        <FilterText />
        <TextList />
      </div>
    </div>
  );
}

export default Text
