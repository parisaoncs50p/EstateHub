
import {
  BedDouble,
  Bath,
  Car,
  MapPin,
  Heart,
} from "lucide-react";

import PropertyBadge from "./PropertyBadge";

function PropertyCard({ property }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* تصویر */}
      <div className="relative h-52 overflow-hidden rounded-t-3xl">

        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
        />

        {/* برچسب نوع ملک */}
        <div className="absolute right-5 top-5">
          <PropertyBadge text={property.type} />
        </div>

        {/* علاقه‌مندی */}
        <button
          className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-700 backdrop-blur transition hover:bg-red-500 hover:text-white"
        >
          <Heart size={20} />
        </button>

      </div>

      {/* اطلاعات */}
      <div className="p-7">

        <h3 className="text-2xl font-black text-slate-800">
          {property.title}
        </h3>

        <p className="mt-3 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />
          {property.city}
        </p>

        <div className="mt-8 flex items-center justify-between text-slate-500">

          <div className="flex items-center gap-2">
            <BedDouble size={20} />
            <span>{property.bedrooms}</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={20} />
            <span>{property.bathrooms}</span>
          </div>

          <div className="flex items-center gap-2">
            <Car size={20} />
            <span>{property.parking}</span>
          </div>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <p className="text-3xl font-black text-amber-600">
            {property.price}
          </p>

          <button className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-amber-500">
            مشاهده
          </button>

        </div>

      </div>

    </article>
  );
}

export default PropertyCard;