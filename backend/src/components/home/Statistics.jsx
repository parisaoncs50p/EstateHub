
function Statistics() {
  const stats = [
    {
      id: 1,
      value: "12,500+",
      title: "ملک فعال",
    },
    {
      id: 2,
      value: "3,400+",
      title: "مشاور املاک",
    },
    {
      id: 3,
      value: "8,900+",
      title: "مشتری راضی",
    },
    {
      id: 4,
      value: "98%",
      title: "رضایت کاربران",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:bg-white/10"
            >

              <h3 className="text-5xl font-black text-amber-400">
                {item.value}
              </h3>

              <p className="mt-4 text-xl font-bold text-white">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;