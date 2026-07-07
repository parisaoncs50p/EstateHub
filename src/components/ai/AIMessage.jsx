
function AIMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      className={`mb-5 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-5
          py-4
          shadow
          ${
            isUser
              ? "bg-amber-500 text-white rounded-br-md"
              : "bg-white text-slate-700 rounded-bl-md"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}

export default AIMessage;