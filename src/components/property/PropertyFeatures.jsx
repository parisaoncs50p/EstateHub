
import {
  Wifi,
  ShieldCheck,
  Warehouse,
  Trees,
  Building2,
  ParkingCircle,
  Dumbbell,
  Waves,
} from "lucide-react";

const icons = {
  اینترنت: Wifi,
  نگهبانی: ShieldCheck,
  انباری: Warehouse,
  بالکن: Trees,
  آسانسور: Building2,
  پارکینگ: ParkingCircle,
  باشگاه: Dumbbell,
  استخر: Waves,
};

function PropertyFeatures({ features = [] }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-black text-slate-800">
        امکانات ملک
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-5">

        {features.map((feature) => {
          const Icon = icons[feature] || Building2;

          return (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4"
            >
              <Icon
                size={24}
                className="text-amber-500"
              />

              <span className="font-bold text-slate-700">
                {feature}
              </span>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default PropertyFeatures;