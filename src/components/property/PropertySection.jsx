
function PropertySection({
  badge,
  title,
  description,
  children,
}) {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-amber-100 px-5 py-2 font-bold text-amber-700">
            {badge}
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-500">
            {description}
          </p>

        </div>

        <div className="mt-16">

          {children}

        </div>

      </div>

    </section>
  );
}

export default PropertySection;