
import {
  BedDouble,
  Bath,
  Car,
  Ruler,
  MapPin,
  Building2,
} from "lucide-react";

import FavoriteButton from "./FavoriteButton";
import ShareButtons from "./ShareButtons";

function PropertyInfo({ property }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      {/* هدر */}
      <div className="flex items-start justify-between gap-4">

        <div>

          <span className="rounded-full bg-amber-100 px-4 py-2 font-bold text-amber-700">
            {property.type}
          </span>

          <h1 className="mt-6 text-4xl font-black text-slate-900">
            {property.title}
          </h1>

          <div className="mt-5 flex items-center gap-2 text-slate-500">
            <MapPin size={18} />
            {property.city}
          </div>

        </div>

        <div className="flex flex-col items-center gap-4">

          <FavoriteButton
            propertyId={property.id}
            insideLink={false}
          />

          <ShareButtons property={property} />

        </div>

      </div>

      {/* قیمت */}
      <p className="mt-8 text-5xl font-black text-amber-600">
        {property.price}
      </p>

      {/* مشخصات */}
      <div className="mt-10 grid grid-cols-2 gap-5">

        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
          <Ruler size={24} />
          <div>
            <p className="text-sm text-slate-500">
              متراژ
            </p>
            <h3 className="font-bold">
              {property.area} متر
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
          <BedDouble size={24} />
          <div>
            <p className="text-sm text-slate-500">
              اتاق خواب
            </p>
            <h3 className="font-bold">
              {property.bedrooms}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
          <Bath size={24} />
          <div>
            <p className="text-sm text-slate-500">
              حمام
            </p>
            <h3 className="font-bold">
              {property.bathrooms}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
          <Car size={24} />
          <div>
            <p className="text-sm text-slate-500">
              پارکینگ
            </p>
            <h3 className="font-bold">
              {property.parking}
            </h3>
          </div>
        </div>

      </div>

      {/* توضیحات */}
      <div className="mt-10 rounded-2xl bg-slate-100 p-6">

        <div className="flex items-center gap-3">

          <Building2 size={24} />

          <h2 className="text-2xl font-black">
            توضیحات
          </h2>

        </div>

        <p className="mt-5 leading-9 text-slate-600">
          {property.description}
        </p>

      </div>

    </div>
  );
}

export default PropertyInfo;