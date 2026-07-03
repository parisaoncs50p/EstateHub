
import { Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-6 flex">

        {[...Array(testimonial.rate)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className="fill-amber-400 text-amber-400"
          />
        ))}

      </div>

      <p className="leading-8 text-slate-600">
        "{testimonial.text}"
      </p>

      <div className="mt-8 border-t pt-6">

        <h3 className="text-xl font-black text-slate-800">
          {testimonial.name}
        </h3>

        <p className="mt-2 text-slate-500">
          {testimonial.city}
        </p>

      </div>

    </article>
  );
}

export default TestimonialCard;