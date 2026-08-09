
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import SearchProgress from "./SearchProgress";

function SmartSearchModal({ open, onOpenChange }) {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [filters, setFilters] = useState({
    city: "تهران",
    type: "",
    category: "",
  });

  const next = () => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    navigate(
      `/properties?city=${filters.city}&type=${filters.type}&category=${filters.category}`
    );

    onOpenChange(false);
  };

  const back = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl rounded-[32px] border-0 bg-white p-10">

        <SearchProgress
          step={step}
          totalSteps={3}
        />

        <h2 className="mt-8 text-center text-4xl font-black">
          جستجوی هوشمند
        </h2>

        {/* مرحله اول */}

        {step === 1 && (
          <div className="mt-12">

            <label className="mb-3 block font-bold">
              شهر
            </label>

            <select
              value={filters.city}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  city: e.target.value,
                })
              }
              className="h-16 w-full rounded-2xl border px-5"
            >
              <option>تهران</option>
              <option>اصفهان</option>
              <option>شیراز</option>
              <option>رامسر</option>
              <option>کیش</option>
            </select>

          </div>
        )}

        {/* مرحله دوم */}

        {step === 2 && (
          <div className="mt-12">

            <label className="mb-5 block font-bold">
              نوع معامله
            </label>

            <div className="grid grid-cols-3 gap-4">

              {["فروش", "اجاره", "رهن"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setFilters({
                      ...filters,
                      type: item,
                    })
                  }
                  className={`rounded-2xl border py-5 font-bold transition ${
                    filters.type === item
                      ? "bg-amber-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* مرحله سوم */}

        {step === 3 && (
          <div className="mt-12">

            <label className="mb-5 block font-bold">
              نوع ملک
            </label>

            <div className="grid grid-cols-2 gap-4">

              {[
                "آپارتمان",
                "ویلا",
                "زمین",
                "تجاری",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setFilters({
                      ...filters,
                      category: item,
                    })
                  }
                  className={`rounded-2xl border py-5 font-bold transition ${
                    filters.category === item
                      ? "bg-amber-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>
        )}

        <div className="mt-12 flex justify-between">

          <button
            onClick={back}
            disabled={step === 1}
            className="rounded-xl border px-8 py-4 disabled:opacity-40"
          >
            قبلی
          </button>

          <button
            onClick={next}
            className="rounded-xl bg-amber-500 px-10 py-4 font-bold text-white"
          >
            {step === 3 ? "نمایش املاک" : "ادامه"}
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}

export default SmartSearchModal;