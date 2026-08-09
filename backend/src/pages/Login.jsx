
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Send,
  Building2,
  ShieldCheck,
} from "lucide-react";

import heroImage from "../assets/images/hero2.png";

function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 11) {
      alert("شماره موبایل معتبر وارد کنید.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/verify");
    }, 1200);
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Card */}

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">

        {/* Header */}

        <div className="flex flex-col items-center px-10 pt-12">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500 shadow-xl">

            <Building2
              size={42}
              className="text-white"
            />

          </div>

          <h1 className="mt-6 text-4xl font-black text-white">
            EstateHub
          </h1>

          <p className="mt-2 text-center text-slate-200">
            ورود به حساب کاربری
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-8 px-10 py-10"
        >

          <div>

            <label className="mb-3 block font-bold text-white">
              شماره موبایل
            </label>

            <div className="relative">

              <Phone
                size={20}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70"
              />

              <input
                type="tel"
                dir="ltr"
                maxLength={11}
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="09xxxxxxxxx"
                className="h-14 w-full rounded-2xl border border-white/20 bg-white/10 pr-12 pl-4 text-white placeholder:text-white/50 outline-none transition focus:border-amber-400"
              />

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-amber-500 text-lg font-black text-white transition hover:bg-amber-600 disabled:opacity-70"
          >

            {loading ? (

              <>
                <ShieldCheck size={20} />

                در حال ارسال...

              </>

            ) : (

              <>
                <Send size={20} />

                دریافت کد تایید
              </>

            )}

          </button>

        </form>

        {/* Footer */}

        <div className="border-t border-white/10 bg-black/10 px-10 py-6 text-center">

          <span className="text-white/80">
            حساب کاربری ندارید؟
          </span>

          <Link
            to="/register"
            className="mr-2 font-bold text-amber-400 transition hover:text-amber-300"
          >
            ثبت نام
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Login;