
import AIHeader from "../components/ai/AIHeader";
import AIChat from "../components/ai/AIChat";

function AI() {
  return (
    <section className="min-h-screen bg-slate-100 pt-36 pb-20">

      <div className="mx-auto max-w-6xl px-6">

        <AIHeader />

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-2xl">

          <AIChat />

        </div>

      </div>

    </section>
  );
}

export default AI;