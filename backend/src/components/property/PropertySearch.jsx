
import { Search } from "lucide-react";

function PropertySearch({
  search,
  setSearch,
}) {
  return (
    <div className="mb-10">

      <div className="relative">

        <Search
          className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
          size={22}
        />

        <input
          type="text"
          placeholder="جستجو بر اساس نام ملک یا شهر..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-200 bg-white py-5 pr-14 pl-6 text-lg shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
        />

      </div>

    </div>
  );
}

export default PropertySearch;