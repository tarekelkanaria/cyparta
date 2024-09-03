import Image from "next/image";
import { lexendClass } from "styles/fonts";
import EditBtn from "./EditBtn";
import TextData from "./TextData";

export default function Cover({ image }: { image: string }) {
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
          <TextData font={lexendClass} />
        </div>

        <EditBtn font={lexendClass} />
      </article>
    </section>
  );
}
