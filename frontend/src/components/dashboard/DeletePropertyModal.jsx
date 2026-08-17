
import { TriangleAlert } from "lucide-react";

function DeletePropertyModal({
  open,
  onClose,
  onDelete,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="flex flex-col items-center">

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

            <TriangleAlert
              size={42}
              className="text-red-600"
            />

          </div>

          <h2 className="text-3xl font-black">
            حذف آگهی
          </h2>

          <p className="mt-5 text-center leading-8 text-slate-500">
            آیا از حذف این آگهی مطمئن هستید؟
            <br />
            این عملیات قابل بازگشت نیست.
          </p>

        </div>

        <div className="mt-10 flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 rounded-2xl border py-4 font-bold transition hover:bg-slate-100"
          >
            انصراف
          </button>

          <button
            onClick={onDelete}
            className="flex-1 rounded-2xl bg-red-600 py-4 font-bold text-white transition hover:bg-red-700"
          >
            حذف آگهی
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeletePropertyModal;