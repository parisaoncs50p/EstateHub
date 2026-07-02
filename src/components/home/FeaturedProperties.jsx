
import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";
import PropertySection from "../property/PropertySection";

function FeaturedProperties() {
  return (
    <PropertySection
      badge="املاک منتخب"
      title="جدیدترین املاک ویژه"
      description="بهترین فایل‌های خرید و اجاره که توسط کارشناسان EstateHub انتخاب شده‌اند."
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>

      <div className="mt-14 text-center">
        <button className="rounded-2xl bg-slate-900 px-10 py-4 text-lg font-bold text-white transition hover:bg-amber-500">
          مشاهده همه املاک
        </button>
      </div>
    </PropertySection>
  );
}

export default FeaturedProperties;