
import { useMemo } from "react";

import PropertyCard from "../components/property/PropertyCard";
import properties from "../data/properties";

function Favorites() {
  const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const favoriteProperties = useMemo(() => {
    return properties.filter((property) =>
      favorites.includes(property.id)
    );
  }, [favorites]);
    console.log("favorites:", favorites);
    console.log("properties:", properties);
  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-10 text-4xl font-black">
          ❤️ املاک مورد علاقه
        </h1>

        {favoriteProperties.length === 0 ? (
          <div className="rounded-3xl bg-white p-16 text-center shadow-lg">

            <h2 className="text-3xl font-black text-slate-700">
              هنوز هیچ ملکی ذخیره نکرده‌ای.
            </h2>

            <p className="mt-5 text-slate-500">
              روی آیکون قلب هر آگهی کلیک کن تا اینجا نمایش داده شود.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {favoriteProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Favorites;