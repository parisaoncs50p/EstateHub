
import { Bot } from "lucide-react";

function AIButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-8
      left-8
      z-[999]
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
      "
    >
      <Bot size={30} />
    </button>
  );
}

export default AIButton;