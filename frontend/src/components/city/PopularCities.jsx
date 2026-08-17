
import cities from "../../data/cities";
import CityCard from "./CityCard";

function PopularCities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-bold text-blue-700">
            شهرهای محبوب
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800">
            جستجو بر اساس شهر
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-500">
            محبوب‌ترین شهرهای ایران برای خرید، فروش و اجاره ملک را
            مشاهده کنید.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {cities.map((city) => (

            <CityCard
              key={city.id}
              city={city}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularCities;