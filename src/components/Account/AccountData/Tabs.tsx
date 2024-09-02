"use client";
import { useState } from "react";
import { MdPerson, MdOutlineLock } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import { CgFileDocument } from "react-icons/cg";
import { lexendClass } from "styles/fonts";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("0");
  return (
    <nav className="w-fit flex flex-col md:flex-row space-y-2 md:space-y-0 items-start -ml-2 border-b border-b-slate-750 mb-2">
      <button
        type="button"
        className={`${lexendClass} text-xs xl:text-base flex items-center gap-x-0.5 ml-2 pb-2 border-b-3 transition-colors duration-300 ${
          activeTab === "0"
            ? "text-orange-400 border-b-orange-400"
            : "text-stone-200 border-b-transparent"
        }`}
        onClick={() => setActiveTab("0")}
      >
        <MdPerson size={20} />
        Personal Information
      </button>
      <button
        type="button"
        className={`${lexendClass} text-xs xl:text-base flex items-center gap-x-0.5 ml-2 pb-2 border-b-3 transition-colors duration-300 ${
          activeTab === "1"
            ? "text-orange-400 border-b-orange-400"
            : "text-stone-200 border-b-transparent"
        }`}
        onClick={() => setActiveTab("1")}
      >
        <SlBriefcase size={20} />
        Professional Information
      </button>
      <button
        type="button"
        className={`${lexendClass} text-sm xl:text-base flex items-center gap-x-0.5 ml-2 pb-2 border-b-3 transition-colors duration-300 ${
          activeTab === "2"
            ? "text-orange-400 border-b-orange-400"
            : "text-stone-200 border-b-transparent"
        }`}
        onClick={() => setActiveTab("2")}
      >
        <CgFileDocument size={20} />
        Documents
      </button>
      <button
        type="button"
        className={`${lexendClass} text-xs xl:text-base flex items-center gap-x-0.5 ml-2 pb-2 border-b-3 transition-colors duration-300  ${
          activeTab === "3"
            ? "text-orange-400 border-b-orange-400"
            : "text-stone-200 border-b-transparent"
        }`}
        onClick={() => setActiveTab("3")}
      >
        <MdOutlineLock size={20} />
        Account Access
      </button>
    </nav>
  );
}
