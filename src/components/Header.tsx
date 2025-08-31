"use client";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "./Icon";
import { Sidebar } from "@/components/Sidebar";
import { navLinks } from "@/utils/navLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    const element = document.getElementById(
      "search-blog"
    ) as HTMLInputElement | null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.focus();
    }
  };
  return (
    <>
      <header className="shadow-lg flex items-center fixed top-0 left-0 z-10 w-full bg-white">
        <div className="flex items-center py-5 app-container">
          <Icon className="block md:hidden" name="logo" />
          <nav className="gap-6 hidden md:flex">
            {navLinks.map(link => (
              <Link
                key={link.label}
                className="text-md font-medium"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2">
          <button onClick={handleClick}>
            <Icon name="search" />
          </button>
          <Icon className="hidden md:block" name="profile" />
          <button onClick={() => setIsOpen(!isOpen)}>
            <Icon className="md:hidden" name="menu" />
          </button>
        </div>
      </header>
      <div className="h-[72px]" />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
