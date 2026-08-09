
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

import AIHeader from "./AIHeader";
import AISuggestions from "./AISuggestions";
import AIMessage from "./AIMessage";

function AIChat({ open, onClose }) {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [chatting, setChatting] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (!open) return null;

  const handleSuggestion = (text) => {
    setChatting(true);

    const userMessage = {
      role: "user",
      text,
    };

    const aiMessage = {
      role: "assistant",
      text:
        "این بخش در حال حاضر آزمایشی است. بعداً به OpenAI یا Gemini متصل خواهد شد.",
    };

    setMessages([userMessage, aiMessage]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setChatting(true);

    const userMessage = {
      role: "user",
      text: input,
    };

    const aiMessage = {
      role: "assistant",
      text:
        "پیام دریافت شد. در نسخه بعدی پاسخ واقعی هوش مصنوعی نمایش داده خواهد شد.",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  };

  return (
    <div
      className="
      fixed
      bottom-28
      left-8
      z-[99999]
      flex
      h-[520px]
      w-[420px]
      flex-col
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-2xl
      "
    >
      <AIHeader
        chatting={chatting}
        onBack={() => {
          setMessages([]);
          setChatting(false);
        }}
        onClose={onClose}
      />

      <div className="flex-1 overflow-y-auto bg-slate-50 p-5">

        {!chatting ? (
          <AISuggestions
            onSelect={handleSuggestion}
          />
        ) : (
          <>
            {messages.map((msg, index) => (
              <AIMessage
                key={index}
                role={msg.role}
                text={msg.text}
              />
            ))}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className="border-t bg-white p-4">

        <div className="flex items-center gap-3">

          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleSend()
            }
            placeholder="پیام خود را بنویس..."
            className="flex-1 rounded-2xl border p-3 outline-none focus:border-amber-500"
          />

          <button
            onClick={handleSend}
            className="rounded-2xl bg-amber-500 p-3 text-white transition hover:bg-amber-600"
          >
            <Send size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIChat;