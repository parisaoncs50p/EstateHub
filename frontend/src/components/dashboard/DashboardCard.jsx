
import {
  ArrowUpRight,
} from "lucide-react";

function DashboardCard({
  title,
  value,
  color = "amber",
}) {
  const colors = {
    amber: "bg-amber-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
  };

  return (
    <div className="group overflow-hidden rounded-3xl bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-black">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${colors[color]}`}
        >
          <ArrowUpRight size={30} />
        </div>

      </div>

      <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">

        <div
          className={`h-full transition-all duration-700 group-hover:w-full ${colors[color]}`}
          style={{
            width: "70%",
          }}
        />

      </div>

    </div>
  );
}

export default DashboardCard;