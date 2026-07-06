
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import PropertyLocationPicker from "../components/property/PropertyLocationPicker";

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

  const handleSubmit = (e) => {
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

    console.log(formData);
    console.log(images);
    console.log(formData.features);
    console.log(formData.location);

    if (editing) {
  toast.success("تغییرات با موفقیت ذخیره شد.");
} else {
  toast.success("آگهی با موفقیت ثبت شد.");
}
  };
  

  return (<section className="min-h-screen bg-slate-100 pt-36 pb-20">

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

      <div className="md:col-span-2">

        <label className="mb-4 block text-lg font-bold">
          امکانات ملک
        </label>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {featureList.map((feature) => (

            <label
              key={feature}
              className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition hover:border-amber-500"
            >

              <input
                type="checkbox"
                checked={formData.features.includes(feature)}
                onChange={() => toggleFeature(feature)}
              />

              <span>{feature}</span>

            </label>

          ))}

        </div>

      </div>

      <div className="md:col-span-2">

        <label className="mb-3 block text-lg font-bold">
          تصاویر ملک
        </label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImages}
          className="w-full rounded-2xl border p-4"
        />

        {images.length > 0 && (

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

            {images.map((image, index) => (

              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt=""
                className="h-40 w-full rounded-2xl object-cover shadow-lg"
              />

            ))}

          </div>

        )}

      </div>
            {/* نقشه */}

      <div className="md:col-span-2">

        <label className="mb-3 block text-lg font-bold">
          انتخاب موقعیت ملک روی نقشه
        </label>

        <PropertyLocationPicker
          onLocationChange={handleLocation}
          initialLocation={formData.location}
        />

        {formData.location.lat && (

          <div className="mt-5 rounded-2xl bg-green-50 p-5">

            <p className="font-bold text-green-700">
              موقعیت انتخاب شد ✅
            </p>

            <p className="mt-2 text-slate-600">
              Latitude :
              {" "}
              {formData.location.lat.toFixed(6)}
            </p>

            <p className="text-slate-600">
              Longitude :
              {" "}
              {formData.location.lng.toFixed(6)}
            </p>

          </div>

        )}

      </div>

      {/* توضیحات */}

      <textarea
        name="description"
        rows="6"
        placeholder="توضیحات کامل ملک..."
        value={formData.description}
        onChange={handleChange}
        className="rounded-2xl border p-4 md:col-span-2"
      />

      {/* دکمه ثبت */}

      <button
        type="submit"
        className="rounded-2xl bg-amber-500 py-4 text-xl font-black text-white transition duration-300 hover:bg-amber-600 hover:scale-[1.02] md:col-span-2"
      >
       {editing ? "ذخیره تغییرات" : "ثبت آگهی"}
      </button>

    </form>

  </div>

</section>

  );
}

export default AddProperty;