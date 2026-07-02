
import Logo from "../common/Logo";
import {
  House,
  Building2,
  Phone,
  Info,
  Plus,
  User,
  Menu,
} from "lucide-react";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 py-5">

        <div className="flex items-center justify-between rounded-3xl border border-white/20 bg-black/30 px-8 py-4 backdrop-blur-xl shadow-xl">

          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">

            <a
              href="#"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <House size={18} />
              خانه
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <Building2 size={18} />
              املاک
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <Info size={18} />
              درباره ما
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-white transition hover:text-amber-400"
            >
              <Phone size={18} />
              تماس
            </a>

          </nav>

          {/* Right Buttons */}

          <div className="hidden items-center gap-3 lg:flex">

            <button className="flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-amber-600">

              <Plus size={18} />

              ثبت آگهی

            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900">

              <User size={18} />

              ورود

            </button>

          </div>

          {/* Mobile */}

          <button className="rounded-xl p-2 text-white transition hover:bg-white/10 lg:hidden">
            <Menu size={28} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;