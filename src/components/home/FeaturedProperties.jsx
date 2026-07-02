
import properties from "../../data/properties";

function FeaturedProperties() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-amber-100 px-5 py-2 font-semibold text-amber-700">
            املاک منتخب
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800">
            جدیدترین املاک ویژه
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            بهترین فایل‌های خرید و اجاره که توسط کارشناسان EstateHub انتخاب شده‌اند.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {properties.map((property) => (

            <div
              key={property.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-64 overflow-hidden bg-linear-to-br from-slate-700 to-slate-900">

                <span className="absolute right-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-white">
                  {property.type}
                </span>

                <button className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-xl backdrop-blur-md transition hover:bg-red-500">
                  ❤️
                </button>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-black text-slate-800">
                  {property.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  📍 {property.city}
                </p>

                <div className="mt-6 flex items-center justify-between text-slate-500">

                  <span>
                    📐 {property.area} متر
                  </span>

                  <span>
                    🛏 {property.bedrooms} خواب
                  </span>

                </div>

                <p className="mt-8 text-2xl font-black text-amber-600">
                  {property.price} تومان
                </p>

                <button className="mt-8 w-full rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white transition hover:bg-amber-500">
                  مشاهده جزئیات
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProperties;