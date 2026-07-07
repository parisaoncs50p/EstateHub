
import { useState } from "react";
import { Bot, X } from "lucide-react";
import AIChat from "./AIChat";

function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>

      {open && (
        <div className="fixed bottom-24 left-8 z-[9999] h-[600px] w-[400px] overflow-hidden rounded-3xl bg-white shadow-2xl">

          <div className="flex items-center justify-between bg-amber-500 px-6 py-5 text-white">

            <div>

              <h2 className="text-xl font-black">
                EstateHub AI
              </h2>

              <p className="text-sm opacity-80">
                دستیار هوشمند املاک
              </p>

            </div>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>

          </div>

          <AIChat />

        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 left-8 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-white shadow-2xl transition hover:scale-110"
      >
        <Bot size={30} />
      </button>

    </>
  );
}

export default AIAssistant;