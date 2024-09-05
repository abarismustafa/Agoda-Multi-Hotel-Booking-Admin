import React from "react";
import { Link } from "react-router-dom";
import FilterSocilaLinks from "./FilterSocilaLinks";
import AllSocialLinks from "./AllSocialLinks";

function SocialLinks() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Social Links</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/social-links/addsocialLinks"
                className="btn btn-circle btn-primary"
              >
                Add New
              </Link>
            </div>
          </div>
        </div>
        <FilterSocilaLinks />
        <AllSocialLinks />
      </div>
    </div>
  );
}

export default SocialLinks;
