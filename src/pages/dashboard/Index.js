import { Outlet } from "react-router-dom";
import InsideHeader from "../../components/common/insideHeader/InsideHeader";
import Aside from "../../components/dashboard/aside/Aside";
import Dashboard from "../../components/dashboard/DashBoard";

function DashboardPage() {
  return (
    <>
      {/* <Dashboard/> */}
      <InsideHeader />
      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-flex align-items-start">
            <Aside />
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}
export default DashboardPage;
