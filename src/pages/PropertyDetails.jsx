
import { useParams } from "react-router-dom";
import properties from "../data/properties";
import PropertyGallery from "../components/property/PropertyGallery";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-black text-red-500">
            ملک پیدا نشد
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* گالری تصاویر */}

          <PropertyGallery images={property.gallery} />

          {/* اطلاعات */}

          <div>

            <span className="rounded-full bg-amber-100 px-4 py-2 font-bold text-amber-700">
              {property.type}
            </span>

            <h1 className="mt-6 text-5xl font-black text-slate-900">
              {property.title}
            </h1>

            <p className="mt-4 text-xl text-slate-500">
              📍 {property.city}
            </p>

            <p className="mt-10 text-5xl font-black text-amber-600">
              {property.price} تومان
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-slate-400">متراژ</p>
                <h3 className="mt-2 text-2xl font-black">
                  {property.area} متر
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-slate-400">اتاق خواب</p>
                <h3 className="mt-2 text-2xl font-black">
                  {property.bedrooms}
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-slate-400">حمام</p>
                <h3 className="mt-2 text-2xl font-black">
                  {property.bathrooms}
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-slate-400">پارکینگ</p>
                <h3 className="mt-2 text-2xl font-black">
                  {property.parking}
                </h3>
              </div>

            </div>

            <div className="mt-12 rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-black">
                توضیحات
              </h2>

              <p className="mt-5 leading-9 text-slate-600">
                {property.description}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PropertyDetails;