import { Link } from "react-router-dom"
import AllBooking from "./AllBoking"
import FilterBooking from "./FilterBooking"


function Booking() {
    return (
        <>

            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Bookings</h1>
                            </div>
                            <div className="col-md-6 text-right">
                                <Link to="/admin/add_booking" className="btn btn-circle btn-primary">Add New Bookings</Link>
                            </div>
                        </div>
                    </div>
                    <FilterBooking />
                    <AllBooking />
                </div>
            </div>
        </>
    )
}
export default Booking