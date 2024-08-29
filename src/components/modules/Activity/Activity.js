import { Link } from "react-router-dom"
import AllActivity from "./AllActivity"
import FilterActivity from "./FilterActivity"


function Activity() {
    return (
        <>

            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Activity</h1>
                            </div>
                            <div className="col-md-6 text-right">
                                <Link to="/admin/activate_add" className="btn btn-circle btn-primary">Add New Activity</Link>
                            </div>
                        </div>
                    </div>
                    <FilterActivity />
                    <AllActivity />
                </div>
            </div>
        </>
    )
}
export default Activity