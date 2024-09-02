"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaUsersLine } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";

export default function EmployeesList({ font }: { font: string }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <button
        type="button"
        className={`flex items-center gap-x-4 ${
          !isMenuOpened ? "pb-5" : "pb-0"
        }`}
        onClick={() => setIsMenuOpened((shown) => !shown)}
      >
        <FaUsersLine
          size={35}
          className={isMenuOpened ? "text-orange-500" : "text-stone-100"}
        />
        <p
          className={`${font} font-medium ${
            isMenuOpened ? "text-orange-500" : "text-stone-100"
          } hidden xl:block`}
        >
          Employees
        </p>
        {isMenuOpened ? (
          <IoIosArrowDown size={20} className="text-orange-500" />
        ) : (
          <IoIosArrowForward size={20} className="text-stone-100" />
        )}
      </button>
      {isMenuOpened && (
        <>
          <Link href="/" className="flex items-center gap-x-4">
            <MdPerson size={24} className="text-gray-300" />
            <p className={`${font} font-light text-gray-300 hidden xl:block`}>
              Profile
            </p>
          </Link>
          <Link href="#" className="flex items-center gap-x-4">
            <FaRegCalendarCheck size={24} className="text-stone-100" />
            <p className={`${font} font-light text-stone-100 hidden xl:block`}>
              Attendance
            </p>
          </Link>
          <Link href="#" className="flex items-center gap-x-4 mb-5">
            <RiFileList3Line size={24} className="text-stone-200" />
            <p className={`${font} font-light text-stone-200 hidden xl:block`}>
              Tasks
            </p>
          </Link>
        </>
      )}
    </>
  );
}
