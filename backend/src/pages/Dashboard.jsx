
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

function Dashboard() {
  return (
    <section className="min-h-screen bg-slate-100 pt-32 pb-10">
      <div className="mx-auto flex max-w-7xl gap-8 px-6">

        <Sidebar />

        <main className="flex-1">
          <Outlet />
        </main>

      </div>
    </section>
  );
}

export default Dashboard;