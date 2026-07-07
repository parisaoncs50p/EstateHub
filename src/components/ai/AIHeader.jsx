
import {
  ArrowRight,
  X,
  Bot,
} from "lucide-react";

function AIHeader({
  chatting,
  onBack,
  onClose,
}) {
  return (
    <div className="flex items-center justify-between bg-amber-500 px-5 py-4 text-white">

      <div className="flex items-center gap-3">

        {chatting && (

          <button
            onClick={onBack}
            className="transition hover:scale-110"
          >
            <ArrowRight size={22} />
          </button>

        )}

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">

          <Bot size={22} />

        </div>

        <div>

          <h2 className="font-black">
            EstateHub AI
          </h2>

          <p className="text-xs opacity-80">
            دستیار هوشمند املاک
          </p>

        </div>

      </div>

      <button
        onClick={onClose}
        className="transition hover:rotate-90"
      >
        <X size={22} />
      </button>

    </div>
  );
}

export default AIHeader;