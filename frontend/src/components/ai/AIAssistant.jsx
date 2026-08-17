
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bot } from "lucide-react";

import AIWelcome from "./AIWelcome";
import AIChat from "./AIChat";

function AIAssistant() {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  // صفحاتی که AI نمایش داده نشود
  const hiddenPages = ["/login", "/register", "/verify"];

  if (hiddenPages.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      {/* پیام خوش‌آمدگویی فقط صفحه اصلی */}
      {!open && location.pathname === "/" && (
        <AIWelcome onOpen={() => setOpen(true)} />
      )}

      {/* پنجره چت */}
      <AIChat
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* دکمه شناور */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          fixed
          bottom-8
          left-8
          z-[99999]
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
    </>
  );
}

export default AIAssistant;