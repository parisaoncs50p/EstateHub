import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import SearchProgress from "./SearchProgress";

function SmartSearchModal({ open, onOpenChange }) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl rounded-[64px] border-0 bg-white p-10 shadow-2xl">

        <SearchProgress
          step={1}
          totalSteps={6}
        />

        <div className="mx-auto max-w-xl">

          <h2 className="text-center text-4xl font-black text-slate-800">
            جستجوی هوشمند
          </h2>

          <p className="mt-4 text-center text-slate-500">
            ابتدا شهر مورد نظر خود را انتخاب کنید
          </p>

          <div className="mt-10">

            <label className="mb-3 block text-lg font-bold">
              شهر
            </label>

            <select
              className="h-16 w-full rounded-2xl border border-slate-200 px-5 text-lg outline-none transition focus:border-amber-500"
            >
              <option>تهران</option>
              <option>مشهد</option>
              <option>اصفهان</option>
              <option>شیراز</option>
              <option>تبریز</option>
            </select>

          </div>

          <button
            className="mt-10 h-16 w-full rounded-2xl bg-amber-500 text-xl font-bold text-white transition hover:bg-amber-600"
          >
            ادامه
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}

export default SmartSearchModal;