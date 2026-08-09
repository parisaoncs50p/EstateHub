
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block rounded-xl px-5 py-3 transition ${
      isActive
        ? "bg-amber-500 text-white font-bold"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <aside className="w-72 rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="mb-8 text-2xl font-black text-center">
        پنل کاربری
      </h2>

      <nav className="flex flex-col gap-3">

        <NavLink
          to="/dashboard"
          end
          className={linkClass}
        >
          🏠 داشبورد
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={linkClass}
        >
          👤 پروفایل من
        </NavLink>

        <NavLink
          to="/dashboard/properties"
          className={linkClass}
        >
          🏡 آگهی‌های من
        </NavLink>

        <NavLink
          to="/dashboard/add-property"
          className={linkClass}
        >
          ➕ ثبت آگهی
        </NavLink>

        <NavLink
          to="/favorites"
          className={linkClass}
        >
          ❤️ علاقه‌مندی‌ها
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;