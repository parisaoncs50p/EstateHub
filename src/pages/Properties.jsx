
import PropertyFilter from "../components/property/PropertyFilter";
import PropertyGrid from "../components/property/PropertyGrid";
import usePropertyFilter from "../hooks/usePropertyFilter";

function Properties() {
  const {
    search,
    setSearch,

    city,
    setCity,

    type,
    setType,

    filteredProperties,
  } = usePropertyFilter();

  return (
    <section className="min-h-screen bg-slate-100 pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">

          <h1 className="text-5xl font-black text-slate-900">
            همه املاک
          </h1>

          <p className="mt-4 text-lg text-slate-500">
            جدیدترین فایل‌های خرید، فروش و اجاره
          </p>

        </div>

        <PropertyFilter
          search={search}
          setSearch={setSearch}

          city={city}
          setCity={setCity}

          type={type}
          setType={setType}
        />

        <div className="mt-14">

          <PropertyGrid
            properties={filteredProperties}
          />

        </div>

      </div>
    </section>
  );
}

export default Properties;