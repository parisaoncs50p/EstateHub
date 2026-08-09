
function PropertyFilter({
  search,
  setSearch,

  city,
  setCity,

  type,
  setType,
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-3xl font-black text-slate-800">
        جستجوی ملک
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="جستجوی ملک..."
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-amber-500"
        />

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-amber-500"
        >
          <option value="">همه شهرها</option>

          <option>تهران</option>

          <option>رامسر</option>

          <option>اصفهان</option>

          <option>شیراز</option>

          <option>کیش</option>

        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-amber-500"
        >
          <option value="">همه نوع‌ها</option>

          <option>فروش</option>

          <option>اجاره</option>

          <option>رهن</option>

        </select>

        <button
          className="rounded-2xl bg-amber-500 font-bold text-white"
        >
          جستجو
        </button>

      </div>

    </div>
  );
}

export default PropertyFilter;