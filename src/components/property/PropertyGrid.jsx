
import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {properties.length > 0 ? (

        properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))

      ) : (

        <div className="col-span-full rounded-3xl bg-white p-12 text-center shadow">

          <h3 className="text-3xl font-black text-slate-700">
            ملکی پیدا نشد.
          </h3>

        </div>

      )}

    </div>
  );
}

export default PropertyGrid;