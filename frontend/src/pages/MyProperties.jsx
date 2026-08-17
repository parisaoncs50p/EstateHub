
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DeletePropertyModal from "../components/dashboard/DeletePropertyModal";

import {
  Eye,
  Heart,
  Pencil,
  Trash2,
  MapPin,
} from "lucide-react";

function MyProperties() {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "آپارتمان ۱۲۰ متری",
      city: "تهران",
      price: "۸,۵۰۰,۰۰۰,۰۰۰ تومان",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      views: 235,
      likes: 18,
      status: "فعال",
    },
    {
      id: 2,
      title: "ویلای استخردار",
      city: "رامسر",
      price: "۱۵,۲۰۰,۰۰۰,۰۰۰ تومان",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      views: 481,
      likes: 42,
      status: "غیرفعال",
    },
  ]);

  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = () => {
    setProperties((prev) =>
      prev.filter((item) => item.id !== selectedId)
    );

    setSelectedId(null);

    alert("آگهی حذف شد.");
  };

  return (
    <div>

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-black">
          آگهی‌های من
        </h1>

        <span className="rounded-full bg-amber-100 px-5 py-2 font-bold text-amber-600">
          {properties.length} آگهی
        </span>

      </div>

      <div className="space-y-6">

        {properties.map((item) => (

          <div
            key={item.id}
            className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl"
          >

            <div className="flex">

              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-80 object-cover"
              />

              <div className="flex flex-1 flex-col justify-between p-8">

                <div>

                  <div className="mb-4 flex items-center justify-between">

                    <h2 className="text-3xl font-black">
                      {item.title}
                    </h2>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        item.status === "فعال"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <div className="mb-3 flex items-center gap-2 text-slate-500">

                    <MapPin size={18} />

                    {item.city}

                  </div>

                  <p className="text-2xl font-black text-amber-500">
                    {item.price}
                  </p>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <div className="flex gap-6">

                    <div className="flex items-center gap-2 text-slate-500">

                      <Eye size={18} />

                      {item.views}

                    </div>

                    <div className="flex items-center gap-2 text-red-500">

                      <Heart size={18} />

                      {item.likes}

                    </div>

                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={() =>
                        navigate(`/dashboard/edit-property/${item.id}`)
                      }
                      className="rounded-xl bg-blue-500 px-5 py-3 text-white transition hover:bg-blue-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => setSelectedId(item.id)}
                      className="rounded-xl bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      <DeletePropertyModal
        open={selectedId !== null}
        onClose={() => setSelectedId(null)}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default MyProperties;