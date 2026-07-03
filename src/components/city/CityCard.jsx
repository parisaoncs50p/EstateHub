
function CityCard({ city }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer">

      <img
        src={city.image}
        alt={city.name}
        className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* گرادیان */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-900/40 to-transparent"></div>

      {/* اطلاعات */}
      <div className="absolute bottom-0 w-full p-7">

        <h3 className="text-3xl font-black text-white">
          {city.name}
        </h3>

        <p className="mt-2 text-white/90">
          {city.properties.toLocaleString()} ملک
        </p>

      </div>

    </div>
  );
}

export default CityCard;