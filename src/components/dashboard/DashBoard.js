import { Outlet } from "react-router-dom"
import InsideHeader from "../common/insideHeader/InsideHeader"
import Aside from "./aside/Aside"

function Dashboard() {
    return (
        <>
        <InsideHeader/>
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="d-flex align-items-start">
                        <Aside/>
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Dashboard