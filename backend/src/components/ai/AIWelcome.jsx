
import { Sparkles } from "lucide-react";

function AIWelcome({ onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="
      fixed
      bottom-10
      left-28
      z-[9998]
      cursor-pointer
      rounded-2xl
      bg-white
      px-5
      py-4
      shadow-2xl
      transition
      duration-300
      hover:-translate-y-1
      hover:shadow-amber-300
      animate-[fadeIn_.5s]
      "
    >
      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100">

          <Sparkles
            size={20}
            className="text-amber-500"
          />

        </div>

        <div>

          <h3 className="font-black text-slate-800">
            EstateHub AI
          </h3>

          <p className="text-sm text-slate-500">
            🤖 دنبال خانه مناسب هستی؟
          </p>

          <p className="text-sm text-amber-500 font-bold">
            از من بپرس...
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIWelcome;