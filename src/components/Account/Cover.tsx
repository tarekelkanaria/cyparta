import Image from "next/image";
import { SlBriefcase } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import EditIcon from "assets/edit.svg";
import { lexendClass } from "styles/fonts";

export default function Cover({
  name,
  image,
  email,
}: {
  name: string;
  image: string;
  email: string;
}) {
  return (
    <section className="pb-7 mb-5 border-b border-slate-750">
      <article className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-end pr-5">
        <div className="flex gap-4 items-start">
          <div className="w-[6.25rem] h-[6.25rem] rounded-xl relative">
            <Image
              src={image}
              alt="user"
              fill
              loading="lazy"
              sizes="(max-width: 1536px) 6.25rem"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h2
              className={`${lexendClass} text-2xl font-semibold text-stone-100`}
            >
              {name}
            </h2>
            <p
              className={`${lexendClass} flex gap-2 font-light text-stone-200`}
            >
              <SlBriefcase size={24} className="text-stone-200" />
              UX/UI DESIGNER
            </p>
            <p
              className={`${lexendClass} flex gap-2 font-light text-stone-200`}
            >
              <MdOutlineMail size={24} className="text-stone-200" />
              {email}
            </p>
          </div>
        </div>
        <button
          type="button"
          className={`${lexendClass} flex items-center justify-center gap-0.5 p-4 rounded-xl bg-stone-100 text-light-300`}
        >
          <Image src={EditIcon} alt="edit" />
          Edit Profile
        </button>
      </article>
    </section>
  );
}
