"use client";

import type { ILoginFormValues } from "forms";
import { useFormStatus } from "react-dom";
import type { FieldErrors } from "react-hook-form";

export default function SubmitLoginBtn({
  errors,
  isDirty,
}: {
  errors: FieldErrors<ILoginFormValues>;
  isDirty: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <div className="w-full flex justify-center mb-[4.75rem]">
      <button
        type="submit"
        disabled={
          !isDirty ||
          errors.email !== undefined ||
          errors.password !== undefined
        }
        className="w-[82%] bg-slate-900 p-5 text-center text-light-300 text-lg font-bold rounded-xl mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Loading..." : "Login"}
      </button>
    </div>
  );
}
