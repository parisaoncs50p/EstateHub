
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Logo from "../common/Logo";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* ستون اول */}

          <div>

            <Logo />

            <p className="mt-6 leading-8 text-slate-400">
              EstateHub یک پلتفرم هوشمند برای خرید،
              فروش و اجاره املاک در سراسر ایران است.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-amber-500">
                <FaInstagram />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-amber-500">
                <FaFacebookF />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-amber-500">
                <FaLinkedinIn />
              </button>

            </div>

          </div>

          {/* ستون دوم */}

          <div>

            <h3 className="text-xl font-black">
              دسترسی سریع
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li className="cursor-pointer transition hover:text-amber-400">
                خانه
              </li>

              <li className="cursor-pointer transition hover:text-amber-400">
                املاک
              </li>

              <li className="cursor-pointer transition hover:text-amber-400">
                ثبت آگهی
              </li>

              <li className="cursor-pointer transition hover:text-amber-400">
                تماس با ما
              </li>

            </ul>

          </div>

          {/* ستون سوم */}

          <div>

            <h3 className="text-xl font-black">
              خدمات
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>خرید ملک</li>

              <li>فروش ملک</li>

              <li>اجاره ملک</li>

              <li>مشاوره تخصصی</li>

            </ul>

          </div>

          {/* ستون چهارم */}

          <div>

            <h3 className="text-xl font-black">
              ارتباط با ما
            </h3>

            <div className="mt-6 space-y-5 text-slate-400">

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>021-88888888</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>info@estatehub.ir</span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin size={18} />

                <span>
                 ملایر, بلوار مطهری
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-slate-800 pt-8 text-center text-slate-500">

          © 2026 EstateHub — تمامی حقوق محفوظ است.

        </div>

      </div>

    </footer>
  );
}

export default Footer;