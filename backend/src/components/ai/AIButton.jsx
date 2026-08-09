
import { Bot } from "lucide-react";

function AIButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-8
      left-8
      z-[9999]
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-amber-500
      text-white
      shadow-2xl
      transition
      duration-300
      hover:scale-110
      hover:bg-amber-600
      active:scale-95
      "
    >
      <Bot
        size={30}
        className={open ? "rotate-12 transition" : "transition"}
      />
    </button>
  );
}

export default AIButton;