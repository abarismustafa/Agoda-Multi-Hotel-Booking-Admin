import React from 'react'
import FilterEmailContent from './FilterEmailContent';
import EmailContentList from './EmailContentList';
import { Link } from 'react-router-dom';

function EmailContent() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Emails Content</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/email_content/addemailContent"
                className="btn btn-circle btn-primary"
              >
                Add New
              </Link>
            </div>
          </div>
        </div>
        <FilterEmailContent />
        <EmailContentList />
      </div>
    </div>
  );
}

export default EmailContent
