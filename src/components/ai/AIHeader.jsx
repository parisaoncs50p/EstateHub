
import { Sparkles } from "lucide-react";

function AIHeader() {
  return (
    <div className="flex items-center gap-4 border-b p-5">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">

        <Sparkles
          size={28}
          className="text-white"
        />

      </div>

      <div>

        <h2 className="text-xl font-black">
          EstateHub AI
        </h2>

        <p className="text-sm text-slate-500">
          دستیار هوشمند خرید و فروش ملک
        </p>

      </div>

    </div>
  );
}

export default AIHeader;