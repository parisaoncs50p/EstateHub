
import { Link } from "react-router-dom";
import {
  House,
  Building2,
  Phone,
  User,
  CirclePlus,
  Heart,
} from "lucide-react";

import Logo from "../common/Logo";

function Navbar() {
  return (
    <header className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-8 py-4 backdrop-blur-xl">

          {/* لوگو */}
          <Logo />

          {/* منو */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <House size={18} />
              خانه
            </Link>

            <Link
              to="/properties"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <Building2 size={18} />
              املاک
            </Link>

            <Link
              to="/favorites"
              className="flex items-center gap-2 text-white transition hover:text-red-400"
            >
              <Heart size={18} />
              علاقه‌مندی‌ها
            </Link>

            <Link
              to="/add-property"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <CirclePlus size={18} />
              ثبت آگهی
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <Phone size={18} />
              تماس با ما
            </Link>

          </nav>

          {/* دکمه ورود */}
          <Link
            to="/login"
            className="rounded-xl bg-amber-500 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-amber-600"
          >
            <span className="flex items-center gap-2">
              <User size={18} />
              ورود
            </span>
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;