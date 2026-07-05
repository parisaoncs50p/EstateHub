
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("در نسخه بعد به بک‌اند متصل می‌شود.");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-20">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-black text-slate-800">
            ورود
          </h1>

          <p className="mt-3 text-slate-500">
            وارد حساب کاربری خود شوید
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Email */}

          <div>

            <label className="mb-2 block font-bold">
              ایمیل
            </label>

            <div className="relative">

              <Mail
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="h-14 w-full rounded-2xl border border-slate-300 pr-12 pl-4 outline-none transition focus:border-amber-500"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block font-bold">
              رمز عبور
            </label>

            <div className="relative">

              <Lock
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className="h-14 w-full rounded-2xl border border-slate-300 pr-12 pl-12 outline-none transition focus:border-amber-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2">

              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />

              مرا به خاطر بسپار

            </label>

            <button
              type="button"
              className="text-sm text-amber-600 hover:underline"
            >
              فراموشی رمز؟
            </button>

          </div>

          {/* Login */}

          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 text-lg font-black text-white transition hover:bg-amber-600"
          >

            <LogIn size={20} />

            ورود

          </button>

        </form>

        <div className="mt-8 text-center">

          <span className="text-slate-500">
            حساب کاربری ندارید؟
          </span>

          <Link
            to="/register"
            className="mr-2 font-bold text-amber-600 hover:underline"
          >
            ثبت نام
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Login;