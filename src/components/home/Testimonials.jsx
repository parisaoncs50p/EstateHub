
import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-amber-100 px-5 py-2 font-bold text-amber-700">
            نظرات مشتریان
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-800">
            کاربران درباره EstateHub چه می‌گویند؟
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-500">
            رضایت کاربران برای ما مهم‌ترین سرمایه است.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial) => (

            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;