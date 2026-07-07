
function Typing() {
  return (
    <div className="flex justify-start">

      <div className="rounded-3xl bg-slate-100 px-6 py-4">

        <div className="flex gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500"></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-slate-500"
            style={{ animationDelay: ".2s" }}
          ></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-slate-500"
            style={{ animationDelay: ".4s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}

export default Typing;