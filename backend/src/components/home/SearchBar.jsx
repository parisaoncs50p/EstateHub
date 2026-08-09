
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <section className="-mt-14 relative z-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-xl p-6">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

            <input
              type="text"
              placeholder="شهر"
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="border rounded-xl px-4 py-3">
              <option>نوع ملک</option>
              <option>آپارتمان</option>
              <option>ویلا</option>
              <option>زمین</option>
              <option>تجاری</option>
            </select>

            <input
              type="number"
              placeholder="حداقل قیمت"
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="number"
              placeholder="حداکثر قیمت"
              className="border rounded-xl px-4 py-3"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 transition">
              <FaSearch />
              جستجو
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;