
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

import AIHeader from "./AIHeader";
import AIMessage from "./AIMessage";
import AISuggestions from "./AISuggestions";
import AITyping from "./AITyping";

function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "سلام 👋\nمن دستیار هوشمند EstateHub هستم.\nهر سوالی درباره خرید، فروش یا اجاره ملک داشته باشید از من بپرسید.",
    },
  ]);

  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const fakeAnswer = (question) => {
    if (question.includes("خانه")) {
      return "برای پیدا کردن خانه مناسب، لطفاً بودجه، شهر و متراژ موردنظرتان را بگویید.";
    }

    if (question.includes("قیمت")) {
      return "برای بررسی قیمت، لینک یا مشخصات ملک را ارسال کنید.";
    }

    if (question.includes("آگهی")) {
      return "حتماً، مشخصات ملک را بدهید تا یک متن حرفه‌ای برای آگهی بنویسم.";
    }

    if (question.includes("مقایسه")) {
      return "مشخصات دو ملک را ارسال کنید تا آن‌ها را کامل مقایسه کنم.";
    }

    return "در نسخه نهایی این بخش به ChatGPT متصل خواهد شد.";
  };

  const sendMessage = (value = text) => {
    if (!value.trim()) return;

    const userMessage = {
      role: "user",
      content: value,
    };

    setMessages((prev) => [...prev, userMessage]);

    setText("");

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: fakeAnswer(value),
        },
      ]);
    }, 1200);
  };

  return (
    <div className="flex h-[600px] flex-col bg-slate-50">

      <AIHeader />

      {messages.length === 1 && (
        <div className="border-b bg-white p-5">
          <AISuggestions onSelect={sendMessage} />
        </div>
      )}

      <div className="flex-1 space-y-5 overflow-y-auto p-5">

        {messages.map((msg, index) => (
          <AIMessage
            key={index}
            message={msg}
          />
        ))}

        {typing && <AITyping />}

        <div ref={bottomRef}></div>

      </div>

      <div className="border-t bg-white p-5">

        <div className="flex gap-3">

          <input
            type="text"
            value={text}
            placeholder="پیام خود را بنویسید..."
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
            className="flex-1 rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-amber-500"
          />

          <button
            onClick={() => sendMessage()}
            className="rounded-2xl bg-amber-500 px-6 text-white transition hover:bg-amber-600"
          >
            <Send size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIChat;