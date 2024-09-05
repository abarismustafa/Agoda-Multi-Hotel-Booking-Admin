import React from 'react'
import { Link } from 'react-router-dom';
import FilterLanguage from './FilterLanguage';
import AllLanguageList from './AllLanguageList';

function LanguagesComp() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Languages</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/lang/addLang"
                className="btn btn-circle btn-primary"
              >
                Add New
              </Link>
            </div>
          </div>
        </div>
        <FilterLanguage />
        <AllLanguageList />
      </div>
    </div>
  );
}

export default LanguagesComp;
