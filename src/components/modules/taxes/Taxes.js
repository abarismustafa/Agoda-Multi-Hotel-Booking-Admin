import { Link } from "react-router-dom";
import FilterTax from "./FilterTax";
import AllTaxList from "./AllTaxList";

function Taxes() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Taxes</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/taxes/addnewTax"
                className="btn btn-circle btn-primary"
              >
                Add New Tax
              </Link>
            </div>
          </div>
        </div>
        <FilterTax />
        <AllTaxList />
      </div>
    </div>
  );
}

export default Taxes;
