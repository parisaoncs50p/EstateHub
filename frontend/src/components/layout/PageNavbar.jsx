
import { Link } from "react-router-dom";
import {
  House,
  Building2,
  Heart,
  CirclePlus,
  Phone,
  User,
} from "lucide-react";

import Logo from "../common/Logo";

function PageNavbar() {
  return (
    <header className="bg-white shadow-md">

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        <Logo dark/>

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-slate-700 transition hover:text-amber-500"
          >
            <House size={18} />
            خانه
          </Link>

          <Link
            to="/properties"
            className="flex items-center gap-2 font-bold text-slate-700 transition hover:text-amber-500"
          >
            <Building2 size={18} />
            املاک
          </Link>

          <Link
            to="/favorites"
            className="flex items-center gap-2 font-bold text-slate-700 transition hover:text-red-500"
          >
            <Heart size={18} />
            علاقه‌مندی‌ها
          </Link>

          <Link
            to="/add-property"
            className="flex items-center gap-2 font-bold text-slate-700 transition hover:text-amber-500"
          >
            <CirclePlus size={18} />
            ثبت آگهی
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 font-bold text-slate-700 transition hover:text-amber-500"
          >
            <Phone size={18} />
            تماس با ما
          </Link>

        </nav>

        <Link
          to="/login"
          className="rounded-xl bg-amber-500 px-6 py-3 font-bold text-white transition hover:bg-amber-600"
        >
          <span className="flex items-center gap-2">
            <User size={18} />
            ورود
          </span>
        </Link>

      </div>

    </header>
  );
}

export default PageNavbar;