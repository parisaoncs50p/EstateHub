
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import properties from "../../data/properties";

function SimilarProperties({ currentId }) {
  const similar = properties.filter(
    (item) => item.id !== currentId
  );

  return (
    <section className="mt-20">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-4xl font-black text-slate-800">
          املاک مشابه
        </h2>

        <Link
          to="/properties"
          className="font-bold text-amber-600 hover:text-amber-700"
        >
          مشاهده همه
        </Link>

      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {similar.map((property) => (

          <SwiperSlide key={property.id}>

            <Link
              to={`/properties/${property.id}`}
              className="group block overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="h-64 overflow-hidden">

                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
                  {property.type}
                </span>

                <h3 className="mt-4 text-2xl font-black text-slate-800">
                  {property.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  📍 {property.city}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-2xl font-black text-amber-600">
                    {property.price}
                  </span>

                  <span className="rounded-xl bg-slate-900 px-5 py-2 text-white transition group-hover:bg-amber-500">
                    مشاهده
                  </span>

                </div>

              </div>

            </Link>

          </SwiperSlide>

        ))}
      </Swiper>

    </section>
  );
}

export default SimilarProperties;