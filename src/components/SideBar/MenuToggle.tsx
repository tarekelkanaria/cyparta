"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Modal from "react-modal";

export default function MenuToggle({
  font,
  links,
  id,
}: {
  id?: number;
  font: string;
  links: string[];
}) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleOpenMenu = () => {
    Modal.setAppElement("#modals");
    setIsMenuOpened(true);
  };
  return (
    <>
      <MdMenu
        size={24}
        role="button"
        className={`${
          isMenuOpened ? "text-orange-500" : "text-stone-100"
        } md:hidden absolute top-6 left-1/2 translate-x-1/2`}
        onClick={handleOpenMenu}
      />
      <Modal
        isOpen={isMenuOpened}
        onRequestClose={() => setIsMenuOpened(false)}
        className="max-w-72 bg-transparent absolute top-[2.8rem] left-10 w-40 h-56 overflow-y-auto focus:outline-none z-10 shadow-sideBar shadow-slate-775 rounded"
      >
        <ul className="flex flex-col space-y-5 py-2 bg-light-400">
          {links.map((link, index) => {
            if (id === undefined && index > 0) {
              return null;
            }
            return (
              <li key={link} className="p-5 hover:bg-slate-750">
                <Link
                  href="#"
                  className={`${font} text-sm font-light text-center text-stone-100 mb-2 p-2`}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </Modal>
    </>
  );
}
