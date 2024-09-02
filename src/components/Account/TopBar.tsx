import Image from "next/image";
import NotificationsIcon from "assets/notification.svg";

export default function TopBar({ image }: { image: string }) {
  return (
    <header className="ml-auto w-fit mb-8">
      <div className="flex items-center gap-2 md:gap-8">
        <Image src={NotificationsIcon} alt="notification icon" loading="lazy" />
        <div className="w-[3.75rem] h-[3.75rem] rounded-5xl bg-light-500 relative">
          <Image
            src={image}
            alt="user"
            fill
            className="rounded-5xl"
            sizes="(max-width: 1536px) 3.75rem"
            priority
          />
        </div>
      </div>
    </header>
  );
}
