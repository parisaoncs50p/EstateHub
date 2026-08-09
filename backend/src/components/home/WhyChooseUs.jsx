
import {
  ShieldCheck,
  Search,
  BadgeCheck,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <BadgeCheck size={42} />,
      title: "فایل‌های واقعی",
      description:
        "تمام آگهی‌ها قبل از انتشار توسط کارشناسان EstateHub بررسی و تأیید می‌شوند.",
    },
    {
      id: 2,
      icon: <Search size={42} />,
      title: "جستجوی هوشمند",
      description:
        "بر اساس بودجه، متراژ، شهر و نیاز شما بهترین گزینه‌ها پیشنهاد می‌شوند.",
    },
    {
      id: 3,
      icon: <ShieldCheck size={42} />,
      title: "معامله امن",
      description:
        "احراز هویت کاربران و بررسی اطلاعات برای ایجاد تجربه‌ای مطمئن.",
    },
  ];

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-amber-100 px-5 py-2 font-bold text-amber-700">
            چرا EstateHub؟
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800">
            تجربه‌ای متفاوت از خرید و فروش ملک
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-500">
            ما تلاش می‌کنیم با استفاده از فناوری، فرآیند خرید، فروش و اجاره
            ملک را سریع‌تر، مطمئن‌تر و هوشمندتر کنیم.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.id}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-100 text-amber-600">

                {feature.icon}

              </div>

              <h3 className="mt-8 text-2xl font-black text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-500">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;