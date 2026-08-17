
function AISuggestions({ onSelect }) {
  const suggestions = [
    {
      icon: "🏠",
      text: "خانه مناسب من را پیدا کن",
    },
    {
      icon: "💰",
      text: "قیمت این ملک مناسب است؟",
    },
    {
      icon: "📊",
      text: "دو ملک را مقایسه کن",
    },
    {
      icon: "✍️",
      text: "برایم متن آگهی بنویس",
    },
  ];

  return (
    <div className="space-y-4">

      <h2 className="text-center text-xl font-black text-slate-700">
        سلام 👋
      </h2>

      <p className="text-center text-slate-500">
        امروز چطور می‌توانم کمکت کنم؟
      </p>

      <div className="mt-8 grid gap-4">

        {suggestions.map((item) => (
          <button
            key={item.text}
            onClick={() => onSelect(item.text)}
            className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            text-right
            transition
            duration-300
            hover:border-amber-500
            hover:bg-amber-50
            "
          >
            <span className="text-2xl">
              {item.icon}
            </span>

            <span className="font-bold text-slate-700">
              {item.text}
            </span>
          </button>
        ))}

      </div>

    </div>
  );
}

export default AISuggestions;