"use client";

import Image from "next/image";
import EditIcon from "assets/edit.svg";
import { useIsEditing } from "src/providers/EditingProvider";

export default function EditBtn({ font }: { font: string }) {
  const { toggleEditing } = useIsEditing();
  return (
    <button
      type="button"
      className={`${font} flex items-center justify-center gap-0.5 p-4 rounded-xl bg-stone-100 text-light-300`}
      onClick={toggleEditing}
    >
      <Image src={EditIcon} alt="edit" />
      Edit Profile
    </button>
  );
}
