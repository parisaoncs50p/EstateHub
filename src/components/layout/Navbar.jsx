
import { House, Building2, Phone, User } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-8 py-4 backdrop-blur-xl">

          <h1 className="text-3xl font-black text-white">
            EstateHub
          </h1>

          <nav className="hidden gap-8 text-white md:flex">

            <a
              href="#"
              className="flex items-center gap-2 transition hover:text-amber-400"
            >
              <House size={18} />
              خانه
            </a>

            <a
              href="#"
              className="flex items-center gap-2 transition hover:text-amber-400"
            >
              <Building2 size={18} />
              املاک
            </a>

            <a
              href="#"
              className="flex items-center gap-2 transition hover:text-amber-400"
            >
              <Phone size={18} />
              تماس
            </a>

          </nav>

          <button className="flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-amber-600">
            <User size={18} />
            ورود
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;