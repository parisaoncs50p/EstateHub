
import { Sparkles } from "lucide-react";

function AIHeader() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-10 text-white shadow-xl">

      <div className="flex items-center gap-5">

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20">

          <Sparkles size={42} />

        </div>

        <div>

          <h1 className="text-5xl font-black">
            EstateHub AI
          </h1>

          <p className="mt-3 text-lg text-white/90">
            دستیار هوشمند خرید، فروش و اجاره ملک
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIHeader;