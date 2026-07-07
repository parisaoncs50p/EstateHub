
function AIMessage({ message }) {
  const ai = message.role === "assistant";

  return (
    <div
      className={`flex ${
        ai ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-3xl px-5 py-4 leading-8 shadow ${
          ai
            ? "bg-white text-slate-800"
            : "bg-amber-500 text-white"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

export default AIMessage;