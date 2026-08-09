
import DashboardCard from "../components/dashboard/DashboardCard";

function DashboardHome() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-black">
        داشبورد
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="آگهی‌های من"
          value="12"
          color="amber"
        />

        <DashboardCard
          title="علاقه‌مندی‌ها"
          value="25"
          color="red"
        />

        <DashboardCard
          title="بازدید"
          value="1320"
          color="green"
        />

        <DashboardCard
          title="پیام‌ها"
          value="18"
          color="blue"
        />

        

      </div>
    </>
  );
}

export default DashboardHome;