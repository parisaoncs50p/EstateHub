
import { House, Building, Phone, User } from "react-icons/lu";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl px-8 py-4">

          <h1 className="text-3xl font-black text-white">
            EstateHub
          </h1>

          <nav className="hidden md:flex gap-8 text-white">

            <a href="#" className="flex items-center gap-2 hover:text-amber-400 transition">
              <House size={18} />
              خانه
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Building size={18} />
              املاک
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Phone size={18} />
              تماس
            </a>

          </nav>

          <button className="rounded-xl bg-amber-500 px-6 py-3 font-bold text-white transition duration-300 hover:bg-amber-600 hover:scale-105">
            <span className="flex items-center gap-2">
              <User size={18} />
              ورود
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;



