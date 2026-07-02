
import heroImage from "../../assets/images/hero2.png";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* لایه تیره */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* محتوا */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl">

            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              ✨ بیش از ۱۲٬۰۰۰ ملک فعال
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
              خانه‌ای که
              <br />
              همیشه آرزویش را داشتید
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-200 md:text-xl">
              خرید، فروش و اجاره آپارتمان، ویلا و زمین در سراسر ایران
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-2xl bg-amber-500 px-8 py-4 text-lg font-bold text-white hover:bg-amber-600 transition">
                شروع جستجوی هوشمند
              </button>

              <button className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-white backdrop-blur-md hover:bg-white hover:text-black transition">
                مشاهده املاک
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;