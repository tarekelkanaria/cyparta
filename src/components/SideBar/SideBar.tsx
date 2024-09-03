import Image from "next/image";
import Link from "next/link";
import { lexendClass } from "styles/fonts";
import SideLogo from "assets/logo-small.png";
import DashboardIcon from "assets/dashboard.svg";
import { MdLogin } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import EmployeesList from "./EmployeesList";
import MenuToggle from "./MenuToggle";

export default function SideBar({ user }: { user?: string }) {
  const links = [
    "Login",
    "Dashboard",
    "Payroll",
    "Holidays",
    "Advanced Payment",
  ];
  return (
    <aside className="w-[22.9%] h-screen md:ml-2 xlg:ml-7 fixed top-0 left-0 flex items-center">
      <section className="pt-0.5 mt-8 bg-light-400 border border-slate-750 shadow-sideBar shadow-slate-775 rounded md:rounded-[2.5rem]">
        <Image
          src={SideLogo}
          alt="Cyparta logo"
          priority
          className="mx-auto mb-7 hidden xl:block"
        />
        <MenuToggle links={links} font={lexendClass} id={user} />
        <nav className="max-md:hidden flex flex-col items-center space-y-10 my-4 md:px-0.5">
          {!user ? (
            <Link href="/" className="flex items-center gap-x-4">
              <MdLogin size={26} className="text-stone-100" />
              <p
                className={`${lexendClass} font-medium text-stone-100 hidden xl:block`}
              >
                Login
              </p>
            </Link>
          ) : (
            <>
              <Link href="#" className="flex items-center gap-x-4">
                <Image src={DashboardIcon} alt="dashboard" />
                <p
                  className={`${lexendClass} font-medium text-stone-100 hidden xl:block`}
                >
                  Dashboard
                </p>
              </Link>
              <EmployeesList font={lexendClass} />
              <Link href="#" className="flex items-center gap-x-4">
                <AiOutlineDollarCircle size={26} className="text-stone-200" />
                <p
                  className={`${lexendClass} font-medium text-stone-200 hidden xl:block`}
                >
                  Payroll
                </p>
              </Link>
              <Link href="#" className="flex items-center gap-x-4">
                <GoChecklist size={26} className="text-stone-200" />
                <p
                  className={`${lexendClass} font-medium text-stone-100 hidden xl:block`}
                >
                  Holidays
                </p>
                <IoIosArrowForward size={20} className="text-stone-100" />
              </Link>
              <Link href="#" className="flex items-center gap-x-4 pb-10">
                <MdOutlinePayment size={24} className="text-stone-200" />
                <p
                  className={`${lexendClass} font-medium text-stone-100 hidden xl:block`}
                >
                  Advanced Payment
                </p>
              </Link>
            </>
          )}
        </nav>
      </section>
    </aside>
  );
}
