
function AITyping() {
  return (
    <div className="flex items-center gap-1 px-5 py-3">

      <span className="h-2 w-2 animate-bounce rounded-full bg-amber-500"></span>

      <span
        className="h-2 w-2 animate-bounce rounded-full bg-amber-500"
        style={{ animationDelay: ".15s" }}
      ></span>

      <span
        className="h-2 w-2 animate-bounce rounded-full bg-amber-500"
        style={{ animationDelay: ".3s" }}
      ></span>

    </div>
  );
}

export default AITyping;