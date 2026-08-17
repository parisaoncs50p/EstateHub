
import { Phone, MessageCircle, Star } from "lucide-react";

function AgentCard() {
  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex items-center gap-5">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Agent"
          className="h-20 w-20 rounded-full object-cover"
        />

        <div>

          <h3 className="text-2xl font-black text-slate-800">
            علی محمدی
          </h3>

          <p className="text-slate-500">
            مشاور املاک EstateHub
          </p>

          <div className="mt-2 flex gap-1 text-amber-500">
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
          </div>

        </div>

      </div>

      <div className="mt-8 grid gap-4">

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 font-bold text-white transition hover:bg-slate-800">
          <Phone size={20} />
          تماس با فروشنده
        </button>

        <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-900 py-4 font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white">
          <MessageCircle size={20} />
          ارسال پیام
        </button>

        <a
          href="https://wa.me/989121234567"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-2xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
        >
          واتساپ
        </a>

      </div>

    </div>
  );
}

export default AgentCard;