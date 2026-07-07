
function AISuggestions({ onSelect }) {
  const list = [
    "🏠 خانه مناسب من را پیدا کن",
    "💰 قیمت این ملک را بررسی کن",
    "✍️ برایم توضیح آگهی بنویس",
    "📊 دو ملک را مقایسه کن",
  ];

  return (
    <div className="grid gap-3">

      {list.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-right transition hover:border-amber-500 hover:bg-amber-50"
        >
          {item}
        </button>
      ))}

    </div>
  );
}

export default AISuggestions;