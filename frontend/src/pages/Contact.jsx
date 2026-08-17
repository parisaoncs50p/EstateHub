
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-slate-100 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h1 className="text-5xl font-black">
            تماس با ما
          </h1>

          <p className="mt-5 text-slate-500">
            پاسخگوی سوالات و درخواست‌های شما هستیم.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h2 className="mb-8 text-3xl font-black">
              اطلاعات تماس
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <Phone className="text-amber-500" />
                <span>09121234567</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-amber-500" />
                <span>info@realestate.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-amber-500" />
                <span>ملایر, بلوار مطهری</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-amber-500" />
                <span>شنبه تا پنجشنبه - ۹ تا ۱۸</span>
              </div>

            </div>

          </div>

          <form className="rounded-3xl bg-white p-10 shadow-lg">

            <h2 className="mb-8 text-3xl font-black">
              ارسال پیام
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="نام"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="ایمیل"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows="6"
                placeholder="پیام شما..."
                className="w-full rounded-xl border p-4"
              />

              <button
                className="w-full rounded-xl bg-amber-500 py-4 font-bold text-white transition hover:bg-amber-600"
              >
                ارسال پیام
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;