import { Link } from "react-router-dom";
import FilterCurrencies from "./FilterCurrencies";
import AllCurrencies from "./AllCurrencies";

function Currencies() {
  return (
    <div className="aiz-main-content">
      <div className="px-15px px-lg-25px">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Currencies</h1>
            </div>
            <div className="col-md-6 text-right">
              <Link
                to="/admin/currencies/addnewCurrencies"
                className="btn btn-circle btn-primary"
              >
                Add New Currencies
              </Link>
            </div>
          </div>
        </div>
        <FilterCurrencies />
        <AllCurrencies />
      </div>
    </div>
  );
}

export default Currencies;
