
import { useState } from "react";
import {
  Camera,
  Save,
} from "lucide-react";

function Profile() {
  const [user, setUser] = useState({
    firstName: "علی",
    lastName: "احمدی",
    phone: "09121234567",
    email: "",
    bio: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("اطلاعات ذخیره شد.");
  };

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">

      <h1 className="mb-10 text-4xl font-black">
        پروفایل من
      </h1>

      {/* تصویر پروفایل */}

      <div className="mb-12 flex flex-col items-center">

        <div className="relative">

          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-amber-500 text-6xl font-black text-white">
            A
          </div>

          <button className="absolute bottom-2 left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-slate-100">
            <Camera size={20} />
          </button>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-bold">
            نام
          </label>

          <input
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="w-full rounded-2xl border p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-bold">
            نام خانوادگی
          </label>

          <input
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="w-full rounded-2xl border p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-bold">
            شماره موبایل
          </label>

          <input
            value={user.phone}
            disabled
            className="w-full rounded-2xl bg-slate-100 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-bold">
            ایمیل
          </label>

          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full rounded-2xl border p-4"
          />

        </div>

        <div className="md:col-span-2">

          <label className="mb-2 block font-bold">
            درباره من
          </label>

          <textarea
            rows={5}
            name="bio"
            value={user.bio}
            onChange={handleChange}
            className="w-full rounded-2xl border p-4"
          />

        </div>

      </div>

      <button
        onClick={handleSave}
        className="mt-10 flex items-center gap-3 rounded-2xl bg-amber-500 px-8 py-4 text-white transition hover:bg-amber-600"
      >
        <Save size={20} />
        ذخیره اطلاعات
      </button>

    </div>
  );
}

export default Profile;