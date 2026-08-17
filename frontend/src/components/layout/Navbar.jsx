

import { useAuth } from "../../context/useAuth";

import { Link, useLocation } from "react-router-dom";
import {
  House,
  Building2,
  Phone,
  User,
  CirclePlus,
  Heart,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import Logo from "../common/Logo";

function Navbar() {
  const location = useLocation();
  const { isLogin, logout } = useAuth();

  
  const isHome = location.pathname === "/";

  // بعدا از بک‌اند میاد
  

  return (
    <header
      className={
        isHome
          ? "fixed top-0 left-0 z-50 w-full"
          : "relative z-50 w-full bg-white shadow-lg"
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-5">

        <div
          className={
            isHome
              ? "flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-8 py-4 backdrop-blur-xl"
              : "flex items-center justify-between rounded-2xl px-8 py-4"
          }
        >

          <Logo />

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className={
                isHome
                  ? "flex items-center gap-2 text-white hover:text-amber-400"
                  : "flex items-center gap-2 text-slate-700 hover:text-amber-500"
              }
            >
              <House size={18} />
              خانه
            </Link>

            <Link
              to="/properties"
              className={
                isHome
                  ? "flex items-center gap-2 text-white hover:text-amber-400"
                  : "flex items-center gap-2 text-slate-700 hover:text-amber-500"
              }
            >
              <Building2 size={18} />
              املاک
            </Link>

            <Link
              to="/favorites"
              className={
                isHome
                  ? "flex items-center gap-2 text-white hover:text-red-400"
                  : "flex items-center gap-2 text-slate-700 hover:text-red-500"
              }
            >
              <Heart size={18} />
              علاقه‌مندی‌ها
            </Link>

            <Link
              to="/dashboard/add-property"
              className={
                isHome
                  ? "flex items-center gap-2 text-white hover:text-amber-400"
                  : "flex items-center gap-2 text-slate-700 hover:text-amber-500"
              }
            >
              <CirclePlus size={18} />
              ثبت آگهی
            </Link>
             
            <Link
              to="/contact"
              className={
                isHome
                  ? "flex items-center gap-2 text-white hover:text-amber-400"
                  : "flex items-center gap-2 text-slate-700 hover:text-amber-500"
              }
            >
              <Phone size={18} />
              تماس با ما
            </Link>

          </nav>

          <div className="flex items-center gap-3">


        {isLogin ? (
          <>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-bold text-white transition hover:bg-amber-600"
            >
              <LayoutDashboard size={18} />
              پنل کاربری
            </Link>

      <button
        onClick={logout}
        className="flex items-center gap-2 rounded-xl border border-red-400 px-5 py-3 font-bold text-red-500 transition hover:bg-red-50"
      >
        <LogOut size={18} />
        خروج
      </button>
          </>
        ) : (
          <Link
            to="/login"
            className="rounded-xl bg-amber-500 px-6 py-3 font-bold text-white transition hover:bg-amber-600 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <User size={18} />
              ورود
            </span>
          </Link>
        )}

      </div>
               

            
          

           </div>

      </div>
    </header>
  );
}

export default Navbar;