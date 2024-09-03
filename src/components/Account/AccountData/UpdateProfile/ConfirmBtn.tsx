"use client";

import { useFormStatus } from "react-dom";

export default function ConfirmBtn({
  isEditing,
  font,
}: {
  isEditing: boolean;
  font: string;
}) {
  const { pending } = useFormStatus();
  return (
    <div className="text-center max-md:col-span-2">
      <button
        type="submit"
        className={`${font} text-base py-4 px-5 rounded bg-stone-100 text-light-300 disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={!isEditing}
      >
        {pending ? "Loading..." : "Confirm"}
      </button>
    </div>
  );
}
