
import {
  BedDouble,
  Bath,
  Car,
  MapPin,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import PropertyBadge from "./PropertyBadge";

function PropertyCard({ property }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="block"
    >
      <article className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative h-72 overflow-hidden">

          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
          />

          <div className="absolute right-5 top-5">
            <PropertyBadge text={property.type} />
          </div>

          <button
            onClick={(e) => e.preventDefault()}
            className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur transition hover:bg-red-500 hover:text-white"
          >
            <Heart size={20} />
          </button>

        </div>

        <div className="p-7">

          <h3 className="text-2xl font-black text-slate-800">
            {property.title}
          </h3>

          <p className="mt-3 flex items-center gap-2 text-slate-500">
            <MapPin size={18} />
            {property.city}
          </p>

          <div className="mt-8 flex justify-between text-slate-500">

            <div className="flex items-center gap-2">
              <BedDouble size={20} />
              {property.bedrooms}
            </div>

            <div className="flex items-center gap-2">
              <Bath size={20} />
              {property.bathrooms}
            </div>

            <div className="flex items-center gap-2">
              <Car size={20} />
              {property.parking}
            </div>

          </div>

          <div className="mt-8 flex items-center justify-between">

            <p className="text-3xl font-black text-amber-600">
              {property.price}
            </p>

            <span className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-amber-500">
              مشاهده
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}

export default PropertyCard;