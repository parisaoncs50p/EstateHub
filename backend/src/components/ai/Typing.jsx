
function Typing() {
  return (
    <div className="flex justify-start mb-5">

      <div className="rounded-2xl rounded-bl-md bg-white px-5 py-4 shadow">

        <div className="flex gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-amber-500"></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-amber-500"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-amber-500"
            style={{ animationDelay: "0.4s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}

export default Typing;