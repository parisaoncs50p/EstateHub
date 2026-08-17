
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero2.png";
import SmartSearchModal from "../search/SmartSearchModal";

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-2xl bg-amber-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-amber-600"
                >
                  شروع جستجوی هوشمند
                </button>

                <Link
                  to="/properties"
                  className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white hover:text-black"
                >
                  مشاهده املاک
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmartSearchModal
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}

export default Hero;