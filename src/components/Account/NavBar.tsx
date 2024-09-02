import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "assets/arrow-right.svg";
import { interClass } from "styles/fonts";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-1 mb-8">
      <Link href="#" className={`${interClass} text-stone-100 font-semibold`}>
        Employees{" "}
      </Link>
      <Image src={ArrowIcon} alt="arrow icon" loading="lazy" />
      <Link href="/" className={`${interClass} text-stone-100 font-semibold`}>
        Profile
      </Link>
    </nav>
  );
}
