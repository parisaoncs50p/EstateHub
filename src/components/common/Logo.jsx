
import { Building2 } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">

        <Building2 size={26} />

      </div>

      <div>

        <h1 className="text-2xl font-black text-white">
          EstateHub
        </h1>

        <p className="text-xs text-slate-300">
          Smart Real Estate
        </p>

      </div>

    </div>
  );
}

export default Logo;