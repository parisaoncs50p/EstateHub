
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import PropertyLocationPicker from "../components/property/PropertyLocationPicker";
import { createProperty } from "../services/api";

// نگاشت مقادیر فارسی فرم به مقادیر انگلیسی مورد انتظار بک‌اند
const categoryMap = {
  "آپارتمان": "apartment",
  "ویلا": "villa",
  "زمین": "land",
  "تجاری": "commercial",
};

const typeMap = {
  "فروش": "sale",
  "رهن": "mortgage",
  "اجاره": "rent",
};

function AddProperty() {
  const { id } = useParams();

  const editing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    city: "",
    category: "",
    type: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    price: "",
    description: "",

    features: [],

    location: {
      lat: null,
      lng: null,
    },
  });

  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const featureList = [
    "آسانسور",
    "پارکینگ",
    "استخر",
    "انباری",
    "بالکن",
    "نگهبانی",
    "لابی",
    "جکوزی",
    "اینترنت",
    "هوشمندسازی",
    "فضای سبز",
    "باربیکیو",
  ];

  useEffect(() => {
    if (!editing) return;

    const property = {
      title: "آپارتمان ۱۲۰ متری",
      city: "تهران",
      category: "آپارتمان",
      type: "فروش",
      area: 120,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      price: "8500000000",
      description: "ملک بسیار شیک و نوساز",
      features: ["پارکینگ", "آسانسور", "انباری"],
      location: {
        lat: 35.7219,
        lng: 51.3347,
      },
    };

    setFormData(property);
  }, [editing]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleLocation = (location) => {
    setFormData((prev) => ({
      ...prev,
      location: {
        lat: location.lat,
        lng: location.lng,
      },
    }));
  };

  const toggleFeature = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(
            (item) => item !== feature
          )
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title) {
      toast.error("عنوان آگهی را وارد کنید.");
      return;
    }

    if (!formData.city) {
      toast.error("شهر را انتخاب کنید.");
      return;
    }

    if (!formData.category) {
      toast.error("نوع ملک را انتخاب کنید.");
      return;
    }

    if (!formData.type) {
      toast.error("نوع معامله را انتخاب کنید.");
      return;
    }

    if (!formData.price) {
      toast.error("قیمت را وارد کنید.");
      return;
    }

    if (!formData.location.lat) {
      toast.error("موقعیت ملک را روی نقشه انتخاب کنید.");
      return;
    }

    if (images.length === 0) {
      toast.error("حداقل یک تصویر انتخاب کنید.");
      return;
    }

    // ساخت payload مطابق مدل بک‌اند
    const payload = {
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      city: formData.city,
      propertyType: categoryMap[formData.category] || "apartment",
      transactionType: typeMap[formData.type],
      area: Number(formData.area),
      bedrooms: Number(formData.bedrooms) || 0,
      bathrooms: Number(formData.bathrooms) || 0,
      parking: Number(formData.parking) || 0,
      features: formData.features,
      coordinates: formData.location,
      // توجه: بک‌اند فعلاً مکانیزم آپلود فایل ندارد، پس فعلاً آرایه خالی می‌فرستیم.
      // این قسمت باید بعداً به آپلود واقعی (مثلاً multer + Cloudinary) وصل شود.
      images: [],
    };

    try {
      setSubmitting(true);

      await createProperty(payload);

      if (editing) {
        toast.success("تغییرات با موفقیت ذخیره شد.");
      } else {
        toast.success("آگهی با موفقیت ثبت شد.");
      }
    } catch (error) {
      toast.error(error.message || "خطا در ثبت آگهی. دوباره تلاش کنید.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 pt-36 pb-20">

      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="mb-10 text-center text-4xl font-black">
          {editing ? "ویرایش آگهی" : "ثبت آگهی جدید"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 md:grid-cols-2"
        >

          <input
            name="title"
            placeholder="عنوان آگهی"
            value={formData.title}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          />

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          >
            <option value="">انتخاب شهر</option>
            <option>تهران</option>
            <option>اصفهان</option>
            <option>شیراز</option>
            <option>رامسر</option>
            <option>کیش</option>
          </select>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          >
            <option value="">نوع ملک</option>
            <option>آپارتمان</option>
            <option>ویلا</option>
            <option>زمین</option>
            <option>تجاری</option>
          </select>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          >
            <option value="">نوع معامله</option>
            <option>فروش</option>
            <option>رهن</option>
            <option>اجاره</option>
          </select>

          <input
            type="number"
            name="area"
            placeholder="متراژ"
            value={formData.area}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          />

          <input
            name="price"
            placeholder="قیمت"
            value={formData.price}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          />

          <input
            type="number"
            name="bedrooms"
            placeholder="تعداد اتاق"
            value={formData.bedrooms}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          />

          <input
            type="number"
            name="bathrooms"
            placeholder="تعداد حمام"
            value={formData.bathrooms}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          />

          <input
            type="number"
            name="parking"
            placeholder="تعداد پارکینگ"
            value={formData.parking}
            onChange={handleChange}
            className="rounded-2xl border p-4"
          />

          <textarea
            name="description"
            placeholder="توضیحات ملک"
            value={formData.description}
            onChange={handleChange}
            className="rounded-2xl border p-4 md:col-span-2"
            rows={4}
          />

          <div className="md:col-span-2">
            <p className="mb-3 font-bold">امکانات ملک</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {featureList.map((feature) => (
                <label
                  key={feature}
                  className="flex items-center gap-2 rounded-xl border p-3"
                >
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="mb-3 font-bold">تصاویر ملک</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImages}
            />
          </div>

          <div className="md:col-span-2">
            <p className="mb-3 font-bold">موقعیت ملک روی نقشه</p>
            <PropertyLocationPicker
              onLocationChange={handleLocation}
              initialLocation={formData.location}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="md:col-span-2 rounded-2xl bg-slate-900 p-4 font-bold text-white disabled:opacity-50"
          >
            {submitting
              ? "در حال ارسال..."
              : editing
              ? "ذخیره تغییرات"
              : "ثبت آگهی"}
          </button>

        </form>
      </div>
    </section>
  );
}

export default AddProperty;
