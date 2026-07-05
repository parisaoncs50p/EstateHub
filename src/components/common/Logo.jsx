
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

function Logo({ dark = false }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-4"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">
        <Building2 size={28} />
      </div>

      <div className="leading-tight">
        <h1
          className={`text-3xl font-black ${
            dark ? "text-slate-900" : "text-black"
          }`}
        >
          EstateHub
        </h1>

        <p
          className={`text-sm ${
            dark ? "text-slate-500" : "text-slate-300"
          }`}
        >
          Smart Real Estate
        </p>
      </div>
    </Link>
  );
}

export default Logo;