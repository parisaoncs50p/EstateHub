
import { useParams } from "react-router-dom";

import properties from "../data/properties";

import PropertyGallery from "../components/property/PropertyGallery";
import PropertyInfo from "../components/property/PropertyInfo";
import PropertyMap from "../components/property/PropertyMap";
import PropertyFeatures from "../components/property/PropertyFeatures";
import AgentCard from "../components/property/AgentCard";
import SimilarProperties from "../components/property/SimilarProperties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="text-4xl font-black text-red-500">
          ملک پیدا نشد
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-slate-100 py-14">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* ستون چپ */}
          <div className="space-y-8">

            <PropertyGallery
              images={property.gallery}
            />

            <PropertyMap
              property={property}
            />

          </div>

          {/* ستون راست */}
          <div className="space-y-8">

            <PropertyInfo
              property={property}
            />

            <AgentCard />

          </div>

        </div>

        {/* ویژگی‌ها */}
        <div className="mt-10">

          <PropertyFeatures
            features={property.features}
          />

        </div>

        {/* املاک مشابه */}
        <SimilarProperties currentId={property.id} />

      </div>
    </section>
  );
}

export default PropertyDetails;