
function SearchProgress({ step, totalSteps }) {
  return (
    <div className="mb-10">

      <div className="flex items-center justify-center gap-3">

        {Array.from({ length: totalSteps }).map((_, index) => (

          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index < step
                ? "bg-amber-500"
                : "bg-slate-300"
            }`}
          />

        ))}

      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        مرحله {step} از {totalSteps}
      </p>

    </div>
  );
}

export default SearchProgress;