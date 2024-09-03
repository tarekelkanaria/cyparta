"use client";

import { useIsEditing } from "src/providers/EditingProvider";
import { SlBriefcase } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";

export default function TextData({ font }: { font: string }) {
  const {
    userData: { firstName, lastName, email },
  } = useIsEditing();
  return (
    <div className="flex flex-col items-start gap-2">
      <h2 className={`${font} text-2xl font-semibold text-stone-100`}>
        {firstName} {lastName}
      </h2>
      <p className={`${font} flex gap-2 font-light text-stone-200`}>
        <SlBriefcase size={24} className="text-stone-200" />
        Front End Developer
      </p>
      <p className={`${font} flex gap-2 font-light text-stone-200`}>
        <MdOutlineMail size={24} className="text-stone-200" />
        {email}
      </p>
    </div>
  );
}
